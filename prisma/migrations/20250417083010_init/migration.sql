-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "verifyCode" TEXT,
    "verifyCodeExpiry" TIMESTAMP(3),
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isAcceptingMessages" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactMessage" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientInformationForm" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "businessName" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "preferredContactMethod" TEXT NOT NULL,
    "businessType" TEXT,
    "industryCategory" TEXT,
    "taxIdentificationNumber" TEXT,
    "businessRegistrationNumber" TEXT,
    "annualRevenueRange" TEXT,
    "numberOfEmployees" INTEGER,
    "servicesRequired" TEXT[],
    "frequencyOfService" TEXT NOT NULL,
    "specificGoalsOrNeeds" TEXT NOT NULL,
    "currentAccountingSoftware" TEXT,
    "preferredCommunicationSchedule" TEXT,
    "bankAccountDetails" TEXT,
    "creditLimit" TEXT,
    "billingAddress" TEXT,
    "businessRegistrationCertificate" TEXT,
    "taxIdentificationCertificate" TEXT,
    "financialStatements" TEXT,
    "governmentIssuedID" TEXT,
    "declaration" BOOLEAN NOT NULL,
    "consent" BOOLEAN NOT NULL,
    "signature" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClientInformationForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartnerApplicationForm" (
    "id" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "contactPerson" TEXT NOT NULL,
    "businessAddress" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "website" TEXT,
    "typeOfBusiness" TEXT NOT NULL,
    "industryCategory" TEXT NOT NULL,
    "yearsInOperation" INTEGER NOT NULL,
    "businessRegistrationNumber" TEXT NOT NULL,
    "taxIdentificationNumber" TEXT NOT NULL,
    "reasonForPartnership" TEXT NOT NULL,
    "servicesOrProductsOffered" TEXT NOT NULL,
    "geographicalCoverage" TEXT NOT NULL,
    "preferredCollaborationType" TEXT NOT NULL,
    "previousPartnerships" TEXT,
    "annualRevenue" TEXT,
    "businessLicensesOrPermits" TEXT NOT NULL,
    "insuranceCoverage" TEXT NOT NULL,
    "businessRegistrationCertificate" TEXT NOT NULL,
    "taxIdentificationCertificate" TEXT,
    "portfolioOrReferences" TEXT,
    "declaration" BOOLEAN NOT NULL,
    "consent" BOOLEAN NOT NULL,
    "signature" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PartnerApplicationForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaxFilingForm" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "facebookName" TEXT,
    "instagramName" TEXT,
    "taxYear" TEXT NOT NULL,
    "cashAdvance" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "ssn" TEXT NOT NULL,
    "streetAddress" TEXT NOT NULL,
    "addressLine2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "occupation" TEXT,
    "refundOption" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TaxFilingForm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
