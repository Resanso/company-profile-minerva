import { prisma } from '../lib/prisma';

async function testConnection() {
  try {
    console.log('🔄 Testing database connection...');

    // Test connection
    await prisma.$connect();
    console.log('✅ Successfully connected to NeonDB!');

    // Count existing submissions
    const count = await prisma.contactSubmission.count();
    console.log(`📊 Total contact submissions: ${count}`);

    // Get recent submissions
    const recent = await prisma.contactSubmission.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: {
        name: true,
        email: true,
        createdAt: true,
      },
    });

    console.log('\n📧 Recent submissions:');
    recent.forEach((submission) => {
      console.log(`  - ${submission.name} (${submission.email}) at ${submission.createdAt.toISOString()}`);
    });

  } catch (error) {
    console.error('❌ Database connection failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
