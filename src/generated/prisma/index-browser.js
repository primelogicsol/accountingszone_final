
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  role: 'role',
  username: 'username',
  email: 'email',
  password: 'password',
  verifyCode: 'verifyCode',
  verifyCodeExpiry: 'verifyCodeExpiry',
  isVerified: 'isVerified',
  isAcceptingMessages: 'isAcceptingMessages',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ContactMessageScalarFieldEnum = {
  id: 'id',
  status: 'status',
  name: 'name',
  email: 'email',
  phone: 'phone',
  company: 'company',
  reason: 'reason',
  subject: 'subject',
  message: 'message',
  createdAt: 'createdAt'
};

exports.Prisma.ConsultationMessageScalarFieldEnum = {
  id: 'id',
  status: 'status',
  name: 'name',
  email: 'email',
  phone: 'phone',
  city: 'city',
  country: 'country',
  state: 'state',
  message: 'message',
  createdAt: 'createdAt'
};

exports.Prisma.TaxScenarioScalarFieldEnum = {
  id: 'id',
  description: 'description',
  income: 'income',
  deductions: 'deductions',
  taxRate: 'taxRate'
};

exports.Prisma.ClientInformationFormScalarFieldEnum = {
  id: 'id',
  status: 'status',
  fullName: 'fullName',
  businessName: 'businessName',
  phoneNumber: 'phoneNumber',
  email: 'email',
  address: 'address',
  preferredContactMethod: 'preferredContactMethod',
  businessType: 'businessType',
  industryCategory: 'industryCategory',
  taxIdentificationNumber: 'taxIdentificationNumber',
  businessRegistrationNumber: 'businessRegistrationNumber',
  annualRevenueRange: 'annualRevenueRange',
  numberOfEmployees: 'numberOfEmployees',
  servicesRequired: 'servicesRequired',
  frequencyOfService: 'frequencyOfService',
  specificGoalsOrNeeds: 'specificGoalsOrNeeds',
  currentAccountingSoftware: 'currentAccountingSoftware',
  preferredCommunicationSchedule: 'preferredCommunicationSchedule',
  bankAccountDetails: 'bankAccountDetails',
  creditLimit: 'creditLimit',
  billingAddress: 'billingAddress',
  businessRegistrationCertificate: 'businessRegistrationCertificate',
  taxIdentificationCertificate: 'taxIdentificationCertificate',
  financialStatements: 'financialStatements',
  governmentIssuedID: 'governmentIssuedID',
  declaration: 'declaration',
  consent: 'consent',
  signature: 'signature',
  date: 'date',
  createdAt: 'createdAt'
};

exports.Prisma.PartnerApplicationFormScalarFieldEnum = {
  id: 'id',
  status: 'status',
  businessName: 'businessName',
  contactPerson: 'contactPerson',
  businessAddress: 'businessAddress',
  phoneNumber: 'phoneNumber',
  email: 'email',
  website: 'website',
  typeOfBusiness: 'typeOfBusiness',
  industryCategory: 'industryCategory',
  yearsInOperation: 'yearsInOperation',
  businessRegistrationNumber: 'businessRegistrationNumber',
  taxIdentificationNumber: 'taxIdentificationNumber',
  reasonForPartnership: 'reasonForPartnership',
  servicesOrProductsOffered: 'servicesOrProductsOffered',
  geographicalCoverage: 'geographicalCoverage',
  preferredCollaborationType: 'preferredCollaborationType',
  previousPartnerships: 'previousPartnerships',
  annualRevenue: 'annualRevenue',
  businessLicensesOrPermits: 'businessLicensesOrPermits',
  insuranceCoverage: 'insuranceCoverage',
  businessRegistrationCertificate: 'businessRegistrationCertificate',
  taxIdentificationCertificate: 'taxIdentificationCertificate',
  portfolioOrReferences: 'portfolioOrReferences',
  declaration: 'declaration',
  consent: 'consent',
  signature: 'signature',
  date: 'date',
  createdAt: 'createdAt'
};

exports.Prisma.TaxFilingFormScalarFieldEnum = {
  id: 'id',
  status: 'status',
  name: 'name',
  birthday: 'birthday',
  phoneNumber: 'phoneNumber',
  email: 'email',
  facebookName: 'facebookName',
  instagramName: 'instagramName',
  taxYear: 'taxYear',
  cashAdvance: 'cashAdvance',
  firstName: 'firstName',
  middleName: 'middleName',
  lastName: 'lastName',
  ssn: 'ssn',
  streetAddress: 'streetAddress',
  addressLine2: 'addressLine2',
  city: 'city',
  state: 'state',
  zipCode: 'zipCode',
  occupation: 'occupation',
  refundOption: 'refundOption',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  ContactMessage: 'ContactMessage',
  ConsultationMessage: 'ConsultationMessage',
  TaxScenario: 'TaxScenario',
  ClientInformationForm: 'ClientInformationForm',
  PartnerApplicationForm: 'PartnerApplicationForm',
  TaxFilingForm: 'TaxFilingForm'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
