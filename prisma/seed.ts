import { prisma } from '@/lib/prisma';

async function main() {
  await prisma.taxScenario.createMany({
    data: [
      {
        description: 'Single filer, no dependents',
        income: 75000,
        deductions: 12000,
        taxRate: 0.22,
      },
      {
        description: 'Married filing jointly, 2 dependents',
        income: 150000,
        deductions: 24000,
        taxRate: 0.24,
      },
      {
        description: 'Small business owner',
        income: 100000,
        deductions: 30000,
        taxRate: 0.25,
      },
    ],
  });
  console.log('Seeded database with sample tax scenarios');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });