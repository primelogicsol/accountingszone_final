-- CreateTable
CREATE TABLE "TaxScenario" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "income" DOUBLE PRECISION NOT NULL,
    "deductions" DOUBLE PRECISION NOT NULL,
    "taxRate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TaxScenario_pkey" PRIMARY KEY ("id")
);
