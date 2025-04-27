import mongoose, { Schema, Document } from "mongoose";

export interface IPartnerApplicationForm extends Document {
  businessName: string;
  contactPerson: string;
  businessAddress: string;
  phoneNumber: string;
  email: string;
  website?: string;

  typeOfBusiness: string;
  industryCategory: string;
  yearsInOperation: number;
  businessRegistrationNumber: string;
  taxIdentificationNumber: string;

  reasonForPartnership: string;
  servicesOrProductsOffered: string;
  geographicalCoverage: string;
  preferredCollaborationType: string;
  previousPartnerships?: string;

  annualRevenue?: string;
  businessLicensesOrPermits: string;
  insuranceCoverage: string;

  businessRegistrationCertificate: string;
  taxIdentificationCertificate?: string;
  portfolioOrReferences?: string;

  declaration: string;
  consent: boolean;
  signature: string;
  date: Date;
}

const PartnerApplicationFormSchema: Schema<IPartnerApplicationForm> =
  new Schema(
    {
      businessName: { type: String, required: true },
      contactPerson: { type: String, required: true },
      businessAddress: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      email: { type: String, required: true },
      website: { type: String },

      typeOfBusiness: { type: String, required: true },
      industryCategory: { type: String, required: true },
      yearsInOperation: { type: Number, required: true },
      businessRegistrationNumber: { type: String, required: true },
      taxIdentificationNumber: { type: String, required: true },

      reasonForPartnership: { type: String, required: true },
      servicesOrProductsOffered: { type: String, required: true },
      geographicalCoverage: { type: String, required: true },
      preferredCollaborationType: { type: String, required: true },
      previousPartnerships: { type: String },

      annualRevenue: { type: String },
      businessLicensesOrPermits: { type: String, required: true },
      insuranceCoverage: { type: String, required: true },

      businessRegistrationCertificate: { type: String, required: true },
      taxIdentificationCertificate: { type: String },
      portfolioOrReferences: { type: String },

      declaration: { type: String, required: true },
      consent: { type: Boolean, required: true },
      signature: { type: String, required: true },
      date: { type: Date, required: true },
    },
    {
      timestamps: true,
    }
  );

const PartnerApplicationForm =
  (mongoose.models
    .PartnerApplicationForm as mongoose.Model<IPartnerApplicationForm>) ||
  mongoose.model<IPartnerApplicationForm>(
    "PartnerApplicationForm",
    PartnerApplicationFormSchema
  );
export default PartnerApplicationForm;
