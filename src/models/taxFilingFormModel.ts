import mongoose, { Schema, Document } from "mongoose";

export interface ITaxFilingForm extends Document {
  name: string;
  birthday: string;
  phoneNumber: string;
  email: string;
  facebookName?: string;
  instagramName?: string;
  taxYear: string;
  cashAdvance: "max" | "partial" | "none";
  firstName: string;
  middleName?: string;
  lastName: string;
  ssn: string;
  streetAddress: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  occupation?: string;
  refundOption: "directDeposit" | "prepaidCard";
}

const TaxFilingFormSchema: Schema<ITaxFilingForm> = new Schema(
  {
    name: { type: String, required: [true, "Name is required!"], trim: true },
    birthday: {
      type: String,
      required: [true, "Birthday is required!"],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone Number is required!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      trim: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address",
      ],
    },
    facebookName: { type: String, trim: true },
    instagramName: { type: String, trim: true },
    taxYear: {
      type: String,
      required: [true, "Tax Year is required!"],
      enum: [
        "2024",
        "2023",
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
      ],
    },
    cashAdvance: {
      type: String,
      required: [true, "Cash Advance is required!"],
      enum: ["max", "partial", "none"],
    },
    firstName: {
      type: String,
      required: [true, "First Name is required!"],
      trim: true,
    },
    middleName: { type: String, trim: true },
    lastName: {
      type: String,
      required: [true, "Last Name is required!"],
      trim: true,
    },
    ssn: {
      type: String,
      required: [true, "SSN is required!"],
      trim: true,
      minlength: 9,
      maxlength: 9,
    },
    streetAddress: {
      type: String,
      required: [true, "Street Address is required!"],
      trim: true,
    },
    addressLine2: { type: String, trim: true },
    city: { type: String, required: [true, "City is required!"], trim: true },
    state: { type: String, required: [true, "State is required!"], trim: true },
    zipCode: {
      type: String,
      required: [true, "Zip Code is required!"],
      trim: true,
      minlength: 5,
      maxlength: 5,
    },
    occupation: { type: String, trim: true },
    refundOption: {
      type: String,
      required: [true, "Refund is required!"],
      enum: ["directDeposit", "prepaidCard"],
    },
  },
  {
    timestamps: true,
  }
);

const TaxFilingForm =
  (mongoose.models.TaxFilingForm as mongoose.Model<ITaxFilingForm>) ||
  mongoose.model<ITaxFilingForm>("TaxFilingForm", TaxFilingFormSchema);
export default TaxFilingForm;
