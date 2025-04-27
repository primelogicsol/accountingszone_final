import mongoose, { Schema, Document } from "mongoose";

export interface IClientInformationForm extends Document {
  fullName: string;
  businessName?: string;
  phoneNumber: string;
  email: string;
  address: string;
  preferredContactMethod: "Phone" | "Email" | "Other";

  businessType:
    | "Sole Proprietor"
    | "Partnership"
    | "Corporation"
    | "LLC"
    | "Other";
  industryCategory: string;
  taxIdentificationNumber: string;
  businessRegistrationNumber: string;
  annualRevenueRange: string;
  numberOfEmployees: number;

  servicesRequired: string[];
  frequencyOfService: "Weekly" | "Monthly" | "Quarterly" | "Annually";
  specificGoalsOrNeeds: string;
  currentAccountingSoftware?: string;
  preferredCommunicationSchedule?: string;

  bankAccountDetails?: string;
  creditLimit?: string;
  billingAddress?: string;

  businessRegistrationCertificate?: string;
  taxIdentificationCertificate: string;
  financialStatements?: string;
  governmentIssuedID: string;
}

const ClientInformationFormSchema: Schema<IClientInformationForm> = new Schema(
  {
    fullName: { type: String, required: true },
    businessName: { type: String },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    preferredContactMethod: {
      type: String,
      enum: ["Phone", "Email", "Other"],
      required: true,
    },

    businessType: {
      type: String,
      enum: ["Sole Proprietor", "Partnership", "Corporation", "LLC", "Other"],
    },
    industryCategory: { type: String },
    taxIdentificationNumber: { type: String },
    businessRegistrationNumber: { type: String },
    annualRevenueRange: { type: String },
    numberOfEmployees: { type: Number },

    servicesRequired: { type: [String], required: true },
    frequencyOfService: {
      type: String,
      enum: ["Weekly", "Monthly", "Quarterly", "Annually"],
      required: true,
    },
    specificGoalsOrNeeds: { type: String, required: true },
    currentAccountingSoftware: { type: String },
    preferredCommunicationSchedule: { type: String },

    bankAccountDetails: { type: String },
    creditLimit: { type: String },
    billingAddress: { type: String },

    businessRegistrationCertificate: { type: String },
    taxIdentificationCertificate: { type: String, required: true },
    financialStatements: { type: String },
    governmentIssuedID: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ClientInformationForm =
  (mongoose.models
    .ClientInformationForm as mongoose.Model<IClientInformationForm>) ||
  mongoose.model<IClientInformationForm>(
    "ClientInformationForm",
    ClientInformationFormSchema
  );
export default ClientInformationForm;
