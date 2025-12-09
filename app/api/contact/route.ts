import { NextResponse } from 'next/server';
import { validateContactForm, sanitizeContactForm, type ContactFormData } from '@/lib/validation';
import { prisma } from '@/lib/prisma';

// Simple in-memory rate limiting (for production, use Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return true;
  }

  if (limit.count >= 5) {
    return false; // Max 5 requests per hour
  }

  limit.count++;
  return true;
}

/**
 * POST /api/contact
 * Handle contact form submissions
 */
export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate required fields
    const validation = validateContactForm(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      );
    }

    // Sanitize input
    const sanitizedData = sanitizeContactForm(body as ContactFormData);

    // Save to NeonDB
    try {
      await prisma.contactSubmission.create({
        data: {
          name: sanitizedData.name,
          email: sanitizedData.email,
          company: sanitizedData.company || null,
          phone: sanitizedData.phone || null,
          message: sanitizedData.message,
        },
      });

      console.log('✅ Contact submission saved to NeonDB:', {
        name: sanitizedData.name,
        email: sanitizedData.email,
        timestamp: new Date().toISOString(),
      });
    } catch (dbError) {
      console.error('❌ Failed to save to database:', dbError);
      // Continue with the response even if DB save fails
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us. We will get back to you soon.',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);

    return NextResponse.json(
      {
        error: 'Internal server error. Please try again later.',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 * Return API information
 */
export async function GET() {
  return NextResponse.json({
    message: 'MINERVA Contact API',
    version: '1.0.0',
    endpoints: {
      POST: 'Submit contact form',
    },
  });
}
