
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ContactMessage
 * 
 */
export type ContactMessage = $Result.DefaultSelection<Prisma.$ContactMessagePayload>
/**
 * Model ConsultationMessage
 * 
 */
export type ConsultationMessage = $Result.DefaultSelection<Prisma.$ConsultationMessagePayload>
/**
 * Model TaxScenario
 * 
 */
export type TaxScenario = $Result.DefaultSelection<Prisma.$TaxScenarioPayload>
/**
 * Model ClientInformationForm
 * 
 */
export type ClientInformationForm = $Result.DefaultSelection<Prisma.$ClientInformationFormPayload>
/**
 * Model PartnerApplicationForm
 * 
 */
export type PartnerApplicationForm = $Result.DefaultSelection<Prisma.$PartnerApplicationFormPayload>
/**
 * Model TaxFilingForm
 * 
 */
export type TaxFilingForm = $Result.DefaultSelection<Prisma.$TaxFilingFormPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactMessage`: Exposes CRUD operations for the **ContactMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactMessages
    * const contactMessages = await prisma.contactMessage.findMany()
    * ```
    */
  get contactMessage(): Prisma.ContactMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultationMessage`: Exposes CRUD operations for the **ConsultationMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsultationMessages
    * const consultationMessages = await prisma.consultationMessage.findMany()
    * ```
    */
  get consultationMessage(): Prisma.ConsultationMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taxScenario`: Exposes CRUD operations for the **TaxScenario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaxScenarios
    * const taxScenarios = await prisma.taxScenario.findMany()
    * ```
    */
  get taxScenario(): Prisma.TaxScenarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientInformationForm`: Exposes CRUD operations for the **ClientInformationForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientInformationForms
    * const clientInformationForms = await prisma.clientInformationForm.findMany()
    * ```
    */
  get clientInformationForm(): Prisma.ClientInformationFormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partnerApplicationForm`: Exposes CRUD operations for the **PartnerApplicationForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartnerApplicationForms
    * const partnerApplicationForms = await prisma.partnerApplicationForm.findMany()
    * ```
    */
  get partnerApplicationForm(): Prisma.PartnerApplicationFormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taxFilingForm`: Exposes CRUD operations for the **TaxFilingForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaxFilingForms
    * const taxFilingForms = await prisma.taxFilingForm.findMany()
    * ```
    */
  get taxFilingForm(): Prisma.TaxFilingFormDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ContactMessage: 'ContactMessage',
    ConsultationMessage: 'ConsultationMessage',
    TaxScenario: 'TaxScenario',
    ClientInformationForm: 'ClientInformationForm',
    PartnerApplicationForm: 'PartnerApplicationForm',
    TaxFilingForm: 'TaxFilingForm'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "contactMessage" | "consultationMessage" | "taxScenario" | "clientInformationForm" | "partnerApplicationForm" | "taxFilingForm"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ContactMessage: {
        payload: Prisma.$ContactMessagePayload<ExtArgs>
        fields: Prisma.ContactMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findFirst: {
            args: Prisma.ContactMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findMany: {
            args: Prisma.ContactMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          create: {
            args: Prisma.ContactMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          createMany: {
            args: Prisma.ContactMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          delete: {
            args: Prisma.ContactMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          update: {
            args: Prisma.ContactMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          deleteMany: {
            args: Prisma.ContactMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          upsert: {
            args: Prisma.ContactMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          aggregate: {
            args: Prisma.ContactMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactMessage>
          }
          groupBy: {
            args: Prisma.ContactMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageCountAggregateOutputType> | number
          }
        }
      }
      ConsultationMessage: {
        payload: Prisma.$ConsultationMessagePayload<ExtArgs>
        fields: Prisma.ConsultationMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationMessagePayload>
          }
          findFirst: {
            args: Prisma.ConsultationMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationMessagePayload>
          }
          findMany: {
            args: Prisma.ConsultationMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationMessagePayload>[]
          }
          create: {
            args: Prisma.ConsultationMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationMessagePayload>
          }
          createMany: {
            args: Prisma.ConsultationMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultationMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationMessagePayload>[]
          }
          delete: {
            args: Prisma.ConsultationMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationMessagePayload>
          }
          update: {
            args: Prisma.ConsultationMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationMessagePayload>
          }
          deleteMany: {
            args: Prisma.ConsultationMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultationMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationMessagePayload>[]
          }
          upsert: {
            args: Prisma.ConsultationMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationMessagePayload>
          }
          aggregate: {
            args: Prisma.ConsultationMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultationMessage>
          }
          groupBy: {
            args: Prisma.ConsultationMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultationMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultationMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultationMessageCountAggregateOutputType> | number
          }
        }
      }
      TaxScenario: {
        payload: Prisma.$TaxScenarioPayload<ExtArgs>
        fields: Prisma.TaxScenarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaxScenarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxScenarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaxScenarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxScenarioPayload>
          }
          findFirst: {
            args: Prisma.TaxScenarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxScenarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaxScenarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxScenarioPayload>
          }
          findMany: {
            args: Prisma.TaxScenarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxScenarioPayload>[]
          }
          create: {
            args: Prisma.TaxScenarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxScenarioPayload>
          }
          createMany: {
            args: Prisma.TaxScenarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaxScenarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxScenarioPayload>[]
          }
          delete: {
            args: Prisma.TaxScenarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxScenarioPayload>
          }
          update: {
            args: Prisma.TaxScenarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxScenarioPayload>
          }
          deleteMany: {
            args: Prisma.TaxScenarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaxScenarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaxScenarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxScenarioPayload>[]
          }
          upsert: {
            args: Prisma.TaxScenarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxScenarioPayload>
          }
          aggregate: {
            args: Prisma.TaxScenarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaxScenario>
          }
          groupBy: {
            args: Prisma.TaxScenarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaxScenarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaxScenarioCountArgs<ExtArgs>
            result: $Utils.Optional<TaxScenarioCountAggregateOutputType> | number
          }
        }
      }
      ClientInformationForm: {
        payload: Prisma.$ClientInformationFormPayload<ExtArgs>
        fields: Prisma.ClientInformationFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientInformationFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInformationFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientInformationFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInformationFormPayload>
          }
          findFirst: {
            args: Prisma.ClientInformationFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInformationFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientInformationFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInformationFormPayload>
          }
          findMany: {
            args: Prisma.ClientInformationFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInformationFormPayload>[]
          }
          create: {
            args: Prisma.ClientInformationFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInformationFormPayload>
          }
          createMany: {
            args: Prisma.ClientInformationFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientInformationFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInformationFormPayload>[]
          }
          delete: {
            args: Prisma.ClientInformationFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInformationFormPayload>
          }
          update: {
            args: Prisma.ClientInformationFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInformationFormPayload>
          }
          deleteMany: {
            args: Prisma.ClientInformationFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientInformationFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientInformationFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInformationFormPayload>[]
          }
          upsert: {
            args: Prisma.ClientInformationFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientInformationFormPayload>
          }
          aggregate: {
            args: Prisma.ClientInformationFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientInformationForm>
          }
          groupBy: {
            args: Prisma.ClientInformationFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientInformationFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientInformationFormCountArgs<ExtArgs>
            result: $Utils.Optional<ClientInformationFormCountAggregateOutputType> | number
          }
        }
      }
      PartnerApplicationForm: {
        payload: Prisma.$PartnerApplicationFormPayload<ExtArgs>
        fields: Prisma.PartnerApplicationFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerApplicationFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerApplicationFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerApplicationFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerApplicationFormPayload>
          }
          findFirst: {
            args: Prisma.PartnerApplicationFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerApplicationFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerApplicationFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerApplicationFormPayload>
          }
          findMany: {
            args: Prisma.PartnerApplicationFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerApplicationFormPayload>[]
          }
          create: {
            args: Prisma.PartnerApplicationFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerApplicationFormPayload>
          }
          createMany: {
            args: Prisma.PartnerApplicationFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartnerApplicationFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerApplicationFormPayload>[]
          }
          delete: {
            args: Prisma.PartnerApplicationFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerApplicationFormPayload>
          }
          update: {
            args: Prisma.PartnerApplicationFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerApplicationFormPayload>
          }
          deleteMany: {
            args: Prisma.PartnerApplicationFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerApplicationFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartnerApplicationFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerApplicationFormPayload>[]
          }
          upsert: {
            args: Prisma.PartnerApplicationFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerApplicationFormPayload>
          }
          aggregate: {
            args: Prisma.PartnerApplicationFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartnerApplicationForm>
          }
          groupBy: {
            args: Prisma.PartnerApplicationFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerApplicationFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerApplicationFormCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerApplicationFormCountAggregateOutputType> | number
          }
        }
      }
      TaxFilingForm: {
        payload: Prisma.$TaxFilingFormPayload<ExtArgs>
        fields: Prisma.TaxFilingFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaxFilingFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxFilingFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaxFilingFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxFilingFormPayload>
          }
          findFirst: {
            args: Prisma.TaxFilingFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxFilingFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaxFilingFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxFilingFormPayload>
          }
          findMany: {
            args: Prisma.TaxFilingFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxFilingFormPayload>[]
          }
          create: {
            args: Prisma.TaxFilingFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxFilingFormPayload>
          }
          createMany: {
            args: Prisma.TaxFilingFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaxFilingFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxFilingFormPayload>[]
          }
          delete: {
            args: Prisma.TaxFilingFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxFilingFormPayload>
          }
          update: {
            args: Prisma.TaxFilingFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxFilingFormPayload>
          }
          deleteMany: {
            args: Prisma.TaxFilingFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaxFilingFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaxFilingFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxFilingFormPayload>[]
          }
          upsert: {
            args: Prisma.TaxFilingFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxFilingFormPayload>
          }
          aggregate: {
            args: Prisma.TaxFilingFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaxFilingForm>
          }
          groupBy: {
            args: Prisma.TaxFilingFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaxFilingFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaxFilingFormCountArgs<ExtArgs>
            result: $Utils.Optional<TaxFilingFormCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    contactMessage?: ContactMessageOmit
    consultationMessage?: ConsultationMessageOmit
    taxScenario?: TaxScenarioOmit
    clientInformationForm?: ClientInformationFormOmit
    partnerApplicationForm?: PartnerApplicationFormOmit
    taxFilingForm?: TaxFilingFormOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    verifyCode: string | null
    verifyCodeExpiry: Date | null
    isVerified: boolean | null
    isAcceptingMessages: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    verifyCode: string | null
    verifyCodeExpiry: Date | null
    isVerified: boolean | null
    isAcceptingMessages: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    verifyCode: number
    verifyCodeExpiry: number
    isVerified: number
    isAcceptingMessages: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    verifyCode?: true
    verifyCodeExpiry?: true
    isVerified?: true
    isAcceptingMessages?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    verifyCode?: true
    verifyCodeExpiry?: true
    isVerified?: true
    isAcceptingMessages?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    verifyCode?: true
    verifyCodeExpiry?: true
    isVerified?: true
    isAcceptingMessages?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    verifyCode: string | null
    verifyCodeExpiry: Date | null
    isVerified: boolean
    isAcceptingMessages: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    verifyCode?: boolean
    verifyCodeExpiry?: boolean
    isVerified?: boolean
    isAcceptingMessages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    verifyCode?: boolean
    verifyCodeExpiry?: boolean
    isVerified?: boolean
    isAcceptingMessages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    verifyCode?: boolean
    verifyCodeExpiry?: boolean
    isVerified?: boolean
    isAcceptingMessages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    verifyCode?: boolean
    verifyCodeExpiry?: boolean
    isVerified?: boolean
    isAcceptingMessages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "verifyCode" | "verifyCodeExpiry" | "isVerified" | "isAcceptingMessages" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      verifyCode: string | null
      verifyCodeExpiry: Date | null
      isVerified: boolean
      isAcceptingMessages: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly verifyCode: FieldRef<"User", 'String'>
    readonly verifyCodeExpiry: FieldRef<"User", 'DateTime'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isAcceptingMessages: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model ContactMessage
   */

  export type AggregateContactMessage = {
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  export type ContactMessageMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    company: string | null
    reason: string | null
    subject: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ContactMessageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    company: string | null
    reason: string | null
    subject: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ContactMessageCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    company: number
    reason: number
    subject: number
    message: number
    createdAt: number
    _all: number
  }


  export type ContactMessageMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    company?: true
    reason?: true
    subject?: true
    message?: true
    createdAt?: true
  }

  export type ContactMessageMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    company?: true
    reason?: true
    subject?: true
    message?: true
    createdAt?: true
  }

  export type ContactMessageCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    company?: true
    reason?: true
    subject?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type ContactMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessage to aggregate.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactMessages
    **/
    _count?: true | ContactMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMessageMaxAggregateInputType
  }

  export type GetContactMessageAggregateType<T extends ContactMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateContactMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactMessage[P]>
      : GetScalarType<T[P], AggregateContactMessage[P]>
  }




  export type ContactMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactMessageWhereInput
    orderBy?: ContactMessageOrderByWithAggregationInput | ContactMessageOrderByWithAggregationInput[]
    by: ContactMessageScalarFieldEnum[] | ContactMessageScalarFieldEnum
    having?: ContactMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactMessageCountAggregateInputType | true
    _min?: ContactMessageMinAggregateInputType
    _max?: ContactMessageMaxAggregateInputType
  }

  export type ContactMessageGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    company: string
    reason: string
    subject: string
    message: string
    createdAt: Date
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  type GetContactMessageGroupByPayload<T extends ContactMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
        }
      >
    >


  export type ContactMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    reason?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    reason?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    reason?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    reason?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type ContactMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "company" | "reason" | "subject" | "message" | "createdAt", ExtArgs["result"]["contactMessage"]>

  export type $ContactMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      company: string
      reason: string
      subject: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["contactMessage"]>
    composites: {}
  }

  type ContactMessageGetPayload<S extends boolean | null | undefined | ContactMessageDefaultArgs> = $Result.GetResult<Prisma.$ContactMessagePayload, S>

  type ContactMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactMessageCountAggregateInputType | true
    }

  export interface ContactMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactMessage'], meta: { name: 'ContactMessage' } }
    /**
     * Find zero or one ContactMessage that matches the filter.
     * @param {ContactMessageFindUniqueArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactMessageFindUniqueArgs>(args: SelectSubset<T, ContactMessageFindUniqueArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactMessageFindUniqueOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactMessageFindFirstArgs>(args?: SelectSubset<T, ContactMessageFindFirstArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany()
     * 
     * // Get first 10 ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactMessageFindManyArgs>(args?: SelectSubset<T, ContactMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactMessage.
     * @param {ContactMessageCreateArgs} args - Arguments to create a ContactMessage.
     * @example
     * // Create one ContactMessage
     * const ContactMessage = await prisma.contactMessage.create({
     *   data: {
     *     // ... data to create a ContactMessage
     *   }
     * })
     * 
     */
    create<T extends ContactMessageCreateArgs>(args: SelectSubset<T, ContactMessageCreateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactMessages.
     * @param {ContactMessageCreateManyArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactMessageCreateManyArgs>(args?: SelectSubset<T, ContactMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactMessages and returns the data saved in the database.
     * @param {ContactMessageCreateManyAndReturnArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactMessage.
     * @param {ContactMessageDeleteArgs} args - Arguments to delete one ContactMessage.
     * @example
     * // Delete one ContactMessage
     * const ContactMessage = await prisma.contactMessage.delete({
     *   where: {
     *     // ... filter to delete one ContactMessage
     *   }
     * })
     * 
     */
    delete<T extends ContactMessageDeleteArgs>(args: SelectSubset<T, ContactMessageDeleteArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactMessage.
     * @param {ContactMessageUpdateArgs} args - Arguments to update one ContactMessage.
     * @example
     * // Update one ContactMessage
     * const contactMessage = await prisma.contactMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactMessageUpdateArgs>(args: SelectSubset<T, ContactMessageUpdateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactMessages.
     * @param {ContactMessageDeleteManyArgs} args - Arguments to filter ContactMessages to delete.
     * @example
     * // Delete a few ContactMessages
     * const { count } = await prisma.contactMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactMessageDeleteManyArgs>(args?: SelectSubset<T, ContactMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactMessageUpdateManyArgs>(args: SelectSubset<T, ContactMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages and returns the data updated in the database.
     * @param {ContactMessageUpdateManyAndReturnArgs} args - Arguments to update many ContactMessages.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactMessage.
     * @param {ContactMessageUpsertArgs} args - Arguments to update or create a ContactMessage.
     * @example
     * // Update or create a ContactMessage
     * const contactMessage = await prisma.contactMessage.upsert({
     *   create: {
     *     // ... data to create a ContactMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactMessage we want to update
     *   }
     * })
     */
    upsert<T extends ContactMessageUpsertArgs>(args: SelectSubset<T, ContactMessageUpsertArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageCountArgs} args - Arguments to filter ContactMessages to count.
     * @example
     * // Count the number of ContactMessages
     * const count = await prisma.contactMessage.count({
     *   where: {
     *     // ... the filter for the ContactMessages we want to count
     *   }
     * })
    **/
    count<T extends ContactMessageCountArgs>(
      args?: Subset<T, ContactMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactMessageAggregateArgs>(args: Subset<T, ContactMessageAggregateArgs>): Prisma.PrismaPromise<GetContactMessageAggregateType<T>>

    /**
     * Group by ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactMessageGroupByArgs['orderBy'] }
        : { orderBy?: ContactMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactMessage model
   */
  readonly fields: ContactMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactMessage model
   */
  interface ContactMessageFieldRefs {
    readonly id: FieldRef<"ContactMessage", 'String'>
    readonly name: FieldRef<"ContactMessage", 'String'>
    readonly email: FieldRef<"ContactMessage", 'String'>
    readonly phone: FieldRef<"ContactMessage", 'String'>
    readonly company: FieldRef<"ContactMessage", 'String'>
    readonly reason: FieldRef<"ContactMessage", 'String'>
    readonly subject: FieldRef<"ContactMessage", 'String'>
    readonly message: FieldRef<"ContactMessage", 'String'>
    readonly createdAt: FieldRef<"ContactMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactMessage findUnique
   */
  export type ContactMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findUniqueOrThrow
   */
  export type ContactMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findFirst
   */
  export type ContactMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findFirstOrThrow
   */
  export type ContactMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findMany
   */
  export type ContactMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessages to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage create
   */
  export type ContactMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactMessage.
     */
    data: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
  }

  /**
   * ContactMessage createMany
   */
  export type ContactMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMessage createManyAndReturn
   */
  export type ContactMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMessage update
   */
  export type ContactMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactMessage.
     */
    data: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
    /**
     * Choose, which ContactMessage to update.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage updateMany
   */
  export type ContactMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage updateManyAndReturn
   */
  export type ContactMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage upsert
   */
  export type ContactMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactMessage to update in case it exists.
     */
    where: ContactMessageWhereUniqueInput
    /**
     * In case the ContactMessage found by the `where` argument doesn't exist, create a new ContactMessage with this data.
     */
    create: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
    /**
     * In case the ContactMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
  }

  /**
   * ContactMessage delete
   */
  export type ContactMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter which ContactMessage to delete.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage deleteMany
   */
  export type ContactMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessages to delete
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to delete.
     */
    limit?: number
  }

  /**
   * ContactMessage without action
   */
  export type ContactMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
  }


  /**
   * Model ConsultationMessage
   */

  export type AggregateConsultationMessage = {
    _count: ConsultationMessageCountAggregateOutputType | null
    _min: ConsultationMessageMinAggregateOutputType | null
    _max: ConsultationMessageMaxAggregateOutputType | null
  }

  export type ConsultationMessageMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    city: string | null
    country: string | null
    state: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ConsultationMessageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    city: string | null
    country: string | null
    state: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ConsultationMessageCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    city: number
    country: number
    state: number
    message: number
    createdAt: number
    _all: number
  }


  export type ConsultationMessageMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    city?: true
    country?: true
    state?: true
    message?: true
    createdAt?: true
  }

  export type ConsultationMessageMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    city?: true
    country?: true
    state?: true
    message?: true
    createdAt?: true
  }

  export type ConsultationMessageCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    city?: true
    country?: true
    state?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type ConsultationMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationMessage to aggregate.
     */
    where?: ConsultationMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationMessages to fetch.
     */
    orderBy?: ConsultationMessageOrderByWithRelationInput | ConsultationMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsultationMessages
    **/
    _count?: true | ConsultationMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationMessageMaxAggregateInputType
  }

  export type GetConsultationMessageAggregateType<T extends ConsultationMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultationMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultationMessage[P]>
      : GetScalarType<T[P], AggregateConsultationMessage[P]>
  }




  export type ConsultationMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationMessageWhereInput
    orderBy?: ConsultationMessageOrderByWithAggregationInput | ConsultationMessageOrderByWithAggregationInput[]
    by: ConsultationMessageScalarFieldEnum[] | ConsultationMessageScalarFieldEnum
    having?: ConsultationMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationMessageCountAggregateInputType | true
    _min?: ConsultationMessageMinAggregateInputType
    _max?: ConsultationMessageMaxAggregateInputType
  }

  export type ConsultationMessageGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    city: string
    country: string
    state: string
    message: string
    createdAt: Date
    _count: ConsultationMessageCountAggregateOutputType | null
    _min: ConsultationMessageMinAggregateOutputType | null
    _max: ConsultationMessageMaxAggregateOutputType | null
  }

  type GetConsultationMessageGroupByPayload<T extends ConsultationMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationMessageGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
    country?: boolean
    state?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["consultationMessage"]>

  export type ConsultationMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
    country?: boolean
    state?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["consultationMessage"]>

  export type ConsultationMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
    country?: boolean
    state?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["consultationMessage"]>

  export type ConsultationMessageSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
    country?: boolean
    state?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type ConsultationMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "city" | "country" | "state" | "message" | "createdAt", ExtArgs["result"]["consultationMessage"]>

  export type $ConsultationMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsultationMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      city: string
      country: string
      state: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["consultationMessage"]>
    composites: {}
  }

  type ConsultationMessageGetPayload<S extends boolean | null | undefined | ConsultationMessageDefaultArgs> = $Result.GetResult<Prisma.$ConsultationMessagePayload, S>

  type ConsultationMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultationMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultationMessageCountAggregateInputType | true
    }

  export interface ConsultationMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsultationMessage'], meta: { name: 'ConsultationMessage' } }
    /**
     * Find zero or one ConsultationMessage that matches the filter.
     * @param {ConsultationMessageFindUniqueArgs} args - Arguments to find a ConsultationMessage
     * @example
     * // Get one ConsultationMessage
     * const consultationMessage = await prisma.consultationMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationMessageFindUniqueArgs>(args: SelectSubset<T, ConsultationMessageFindUniqueArgs<ExtArgs>>): Prisma__ConsultationMessageClient<$Result.GetResult<Prisma.$ConsultationMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConsultationMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultationMessageFindUniqueOrThrowArgs} args - Arguments to find a ConsultationMessage
     * @example
     * // Get one ConsultationMessage
     * const consultationMessage = await prisma.consultationMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultationMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultationMessageClient<$Result.GetResult<Prisma.$ConsultationMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationMessageFindFirstArgs} args - Arguments to find a ConsultationMessage
     * @example
     * // Get one ConsultationMessage
     * const consultationMessage = await prisma.consultationMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationMessageFindFirstArgs>(args?: SelectSubset<T, ConsultationMessageFindFirstArgs<ExtArgs>>): Prisma__ConsultationMessageClient<$Result.GetResult<Prisma.$ConsultationMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationMessageFindFirstOrThrowArgs} args - Arguments to find a ConsultationMessage
     * @example
     * // Get one ConsultationMessage
     * const consultationMessage = await prisma.consultationMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultationMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultationMessageClient<$Result.GetResult<Prisma.$ConsultationMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsultationMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsultationMessages
     * const consultationMessages = await prisma.consultationMessage.findMany()
     * 
     * // Get first 10 ConsultationMessages
     * const consultationMessages = await prisma.consultationMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultationMessageWithIdOnly = await prisma.consultationMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultationMessageFindManyArgs>(args?: SelectSubset<T, ConsultationMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConsultationMessage.
     * @param {ConsultationMessageCreateArgs} args - Arguments to create a ConsultationMessage.
     * @example
     * // Create one ConsultationMessage
     * const ConsultationMessage = await prisma.consultationMessage.create({
     *   data: {
     *     // ... data to create a ConsultationMessage
     *   }
     * })
     * 
     */
    create<T extends ConsultationMessageCreateArgs>(args: SelectSubset<T, ConsultationMessageCreateArgs<ExtArgs>>): Prisma__ConsultationMessageClient<$Result.GetResult<Prisma.$ConsultationMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConsultationMessages.
     * @param {ConsultationMessageCreateManyArgs} args - Arguments to create many ConsultationMessages.
     * @example
     * // Create many ConsultationMessages
     * const consultationMessage = await prisma.consultationMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultationMessageCreateManyArgs>(args?: SelectSubset<T, ConsultationMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConsultationMessages and returns the data saved in the database.
     * @param {ConsultationMessageCreateManyAndReturnArgs} args - Arguments to create many ConsultationMessages.
     * @example
     * // Create many ConsultationMessages
     * const consultationMessage = await prisma.consultationMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConsultationMessages and only return the `id`
     * const consultationMessageWithIdOnly = await prisma.consultationMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultationMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultationMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConsultationMessage.
     * @param {ConsultationMessageDeleteArgs} args - Arguments to delete one ConsultationMessage.
     * @example
     * // Delete one ConsultationMessage
     * const ConsultationMessage = await prisma.consultationMessage.delete({
     *   where: {
     *     // ... filter to delete one ConsultationMessage
     *   }
     * })
     * 
     */
    delete<T extends ConsultationMessageDeleteArgs>(args: SelectSubset<T, ConsultationMessageDeleteArgs<ExtArgs>>): Prisma__ConsultationMessageClient<$Result.GetResult<Prisma.$ConsultationMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConsultationMessage.
     * @param {ConsultationMessageUpdateArgs} args - Arguments to update one ConsultationMessage.
     * @example
     * // Update one ConsultationMessage
     * const consultationMessage = await prisma.consultationMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultationMessageUpdateArgs>(args: SelectSubset<T, ConsultationMessageUpdateArgs<ExtArgs>>): Prisma__ConsultationMessageClient<$Result.GetResult<Prisma.$ConsultationMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConsultationMessages.
     * @param {ConsultationMessageDeleteManyArgs} args - Arguments to filter ConsultationMessages to delete.
     * @example
     * // Delete a few ConsultationMessages
     * const { count } = await prisma.consultationMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultationMessageDeleteManyArgs>(args?: SelectSubset<T, ConsultationMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsultationMessages
     * const consultationMessage = await prisma.consultationMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultationMessageUpdateManyArgs>(args: SelectSubset<T, ConsultationMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationMessages and returns the data updated in the database.
     * @param {ConsultationMessageUpdateManyAndReturnArgs} args - Arguments to update many ConsultationMessages.
     * @example
     * // Update many ConsultationMessages
     * const consultationMessage = await prisma.consultationMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConsultationMessages and only return the `id`
     * const consultationMessageWithIdOnly = await prisma.consultationMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultationMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultationMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConsultationMessage.
     * @param {ConsultationMessageUpsertArgs} args - Arguments to update or create a ConsultationMessage.
     * @example
     * // Update or create a ConsultationMessage
     * const consultationMessage = await prisma.consultationMessage.upsert({
     *   create: {
     *     // ... data to create a ConsultationMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsultationMessage we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationMessageUpsertArgs>(args: SelectSubset<T, ConsultationMessageUpsertArgs<ExtArgs>>): Prisma__ConsultationMessageClient<$Result.GetResult<Prisma.$ConsultationMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConsultationMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationMessageCountArgs} args - Arguments to filter ConsultationMessages to count.
     * @example
     * // Count the number of ConsultationMessages
     * const count = await prisma.consultationMessage.count({
     *   where: {
     *     // ... the filter for the ConsultationMessages we want to count
     *   }
     * })
    **/
    count<T extends ConsultationMessageCountArgs>(
      args?: Subset<T, ConsultationMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsultationMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultationMessageAggregateArgs>(args: Subset<T, ConsultationMessageAggregateArgs>): Prisma.PrismaPromise<GetConsultationMessageAggregateType<T>>

    /**
     * Group by ConsultationMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultationMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationMessageGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultationMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsultationMessage model
   */
  readonly fields: ConsultationMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsultationMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConsultationMessage model
   */
  interface ConsultationMessageFieldRefs {
    readonly id: FieldRef<"ConsultationMessage", 'String'>
    readonly name: FieldRef<"ConsultationMessage", 'String'>
    readonly email: FieldRef<"ConsultationMessage", 'String'>
    readonly phone: FieldRef<"ConsultationMessage", 'String'>
    readonly city: FieldRef<"ConsultationMessage", 'String'>
    readonly country: FieldRef<"ConsultationMessage", 'String'>
    readonly state: FieldRef<"ConsultationMessage", 'String'>
    readonly message: FieldRef<"ConsultationMessage", 'String'>
    readonly createdAt: FieldRef<"ConsultationMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConsultationMessage findUnique
   */
  export type ConsultationMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationMessage
     */
    select?: ConsultationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationMessage
     */
    omit?: ConsultationMessageOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationMessage to fetch.
     */
    where: ConsultationMessageWhereUniqueInput
  }

  /**
   * ConsultationMessage findUniqueOrThrow
   */
  export type ConsultationMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationMessage
     */
    select?: ConsultationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationMessage
     */
    omit?: ConsultationMessageOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationMessage to fetch.
     */
    where: ConsultationMessageWhereUniqueInput
  }

  /**
   * ConsultationMessage findFirst
   */
  export type ConsultationMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationMessage
     */
    select?: ConsultationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationMessage
     */
    omit?: ConsultationMessageOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationMessage to fetch.
     */
    where?: ConsultationMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationMessages to fetch.
     */
    orderBy?: ConsultationMessageOrderByWithRelationInput | ConsultationMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationMessages.
     */
    cursor?: ConsultationMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationMessages.
     */
    distinct?: ConsultationMessageScalarFieldEnum | ConsultationMessageScalarFieldEnum[]
  }

  /**
   * ConsultationMessage findFirstOrThrow
   */
  export type ConsultationMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationMessage
     */
    select?: ConsultationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationMessage
     */
    omit?: ConsultationMessageOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationMessage to fetch.
     */
    where?: ConsultationMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationMessages to fetch.
     */
    orderBy?: ConsultationMessageOrderByWithRelationInput | ConsultationMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationMessages.
     */
    cursor?: ConsultationMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationMessages.
     */
    distinct?: ConsultationMessageScalarFieldEnum | ConsultationMessageScalarFieldEnum[]
  }

  /**
   * ConsultationMessage findMany
   */
  export type ConsultationMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationMessage
     */
    select?: ConsultationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationMessage
     */
    omit?: ConsultationMessageOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationMessages to fetch.
     */
    where?: ConsultationMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationMessages to fetch.
     */
    orderBy?: ConsultationMessageOrderByWithRelationInput | ConsultationMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsultationMessages.
     */
    cursor?: ConsultationMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationMessages.
     */
    skip?: number
    distinct?: ConsultationMessageScalarFieldEnum | ConsultationMessageScalarFieldEnum[]
  }

  /**
   * ConsultationMessage create
   */
  export type ConsultationMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationMessage
     */
    select?: ConsultationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationMessage
     */
    omit?: ConsultationMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a ConsultationMessage.
     */
    data: XOR<ConsultationMessageCreateInput, ConsultationMessageUncheckedCreateInput>
  }

  /**
   * ConsultationMessage createMany
   */
  export type ConsultationMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsultationMessages.
     */
    data: ConsultationMessageCreateManyInput | ConsultationMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultationMessage createManyAndReturn
   */
  export type ConsultationMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationMessage
     */
    select?: ConsultationMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationMessage
     */
    omit?: ConsultationMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ConsultationMessages.
     */
    data: ConsultationMessageCreateManyInput | ConsultationMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultationMessage update
   */
  export type ConsultationMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationMessage
     */
    select?: ConsultationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationMessage
     */
    omit?: ConsultationMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a ConsultationMessage.
     */
    data: XOR<ConsultationMessageUpdateInput, ConsultationMessageUncheckedUpdateInput>
    /**
     * Choose, which ConsultationMessage to update.
     */
    where: ConsultationMessageWhereUniqueInput
  }

  /**
   * ConsultationMessage updateMany
   */
  export type ConsultationMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsultationMessages.
     */
    data: XOR<ConsultationMessageUpdateManyMutationInput, ConsultationMessageUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationMessages to update
     */
    where?: ConsultationMessageWhereInput
    /**
     * Limit how many ConsultationMessages to update.
     */
    limit?: number
  }

  /**
   * ConsultationMessage updateManyAndReturn
   */
  export type ConsultationMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationMessage
     */
    select?: ConsultationMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationMessage
     */
    omit?: ConsultationMessageOmit<ExtArgs> | null
    /**
     * The data used to update ConsultationMessages.
     */
    data: XOR<ConsultationMessageUpdateManyMutationInput, ConsultationMessageUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationMessages to update
     */
    where?: ConsultationMessageWhereInput
    /**
     * Limit how many ConsultationMessages to update.
     */
    limit?: number
  }

  /**
   * ConsultationMessage upsert
   */
  export type ConsultationMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationMessage
     */
    select?: ConsultationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationMessage
     */
    omit?: ConsultationMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the ConsultationMessage to update in case it exists.
     */
    where: ConsultationMessageWhereUniqueInput
    /**
     * In case the ConsultationMessage found by the `where` argument doesn't exist, create a new ConsultationMessage with this data.
     */
    create: XOR<ConsultationMessageCreateInput, ConsultationMessageUncheckedCreateInput>
    /**
     * In case the ConsultationMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationMessageUpdateInput, ConsultationMessageUncheckedUpdateInput>
  }

  /**
   * ConsultationMessage delete
   */
  export type ConsultationMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationMessage
     */
    select?: ConsultationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationMessage
     */
    omit?: ConsultationMessageOmit<ExtArgs> | null
    /**
     * Filter which ConsultationMessage to delete.
     */
    where: ConsultationMessageWhereUniqueInput
  }

  /**
   * ConsultationMessage deleteMany
   */
  export type ConsultationMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationMessages to delete
     */
    where?: ConsultationMessageWhereInput
    /**
     * Limit how many ConsultationMessages to delete.
     */
    limit?: number
  }

  /**
   * ConsultationMessage without action
   */
  export type ConsultationMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationMessage
     */
    select?: ConsultationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationMessage
     */
    omit?: ConsultationMessageOmit<ExtArgs> | null
  }


  /**
   * Model TaxScenario
   */

  export type AggregateTaxScenario = {
    _count: TaxScenarioCountAggregateOutputType | null
    _avg: TaxScenarioAvgAggregateOutputType | null
    _sum: TaxScenarioSumAggregateOutputType | null
    _min: TaxScenarioMinAggregateOutputType | null
    _max: TaxScenarioMaxAggregateOutputType | null
  }

  export type TaxScenarioAvgAggregateOutputType = {
    id: number | null
    income: number | null
    deductions: number | null
    taxRate: number | null
  }

  export type TaxScenarioSumAggregateOutputType = {
    id: number | null
    income: number | null
    deductions: number | null
    taxRate: number | null
  }

  export type TaxScenarioMinAggregateOutputType = {
    id: number | null
    description: string | null
    income: number | null
    deductions: number | null
    taxRate: number | null
  }

  export type TaxScenarioMaxAggregateOutputType = {
    id: number | null
    description: string | null
    income: number | null
    deductions: number | null
    taxRate: number | null
  }

  export type TaxScenarioCountAggregateOutputType = {
    id: number
    description: number
    income: number
    deductions: number
    taxRate: number
    _all: number
  }


  export type TaxScenarioAvgAggregateInputType = {
    id?: true
    income?: true
    deductions?: true
    taxRate?: true
  }

  export type TaxScenarioSumAggregateInputType = {
    id?: true
    income?: true
    deductions?: true
    taxRate?: true
  }

  export type TaxScenarioMinAggregateInputType = {
    id?: true
    description?: true
    income?: true
    deductions?: true
    taxRate?: true
  }

  export type TaxScenarioMaxAggregateInputType = {
    id?: true
    description?: true
    income?: true
    deductions?: true
    taxRate?: true
  }

  export type TaxScenarioCountAggregateInputType = {
    id?: true
    description?: true
    income?: true
    deductions?: true
    taxRate?: true
    _all?: true
  }

  export type TaxScenarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxScenario to aggregate.
     */
    where?: TaxScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxScenarios to fetch.
     */
    orderBy?: TaxScenarioOrderByWithRelationInput | TaxScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaxScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxScenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxScenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaxScenarios
    **/
    _count?: true | TaxScenarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxScenarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxScenarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxScenarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxScenarioMaxAggregateInputType
  }

  export type GetTaxScenarioAggregateType<T extends TaxScenarioAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxScenario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxScenario[P]>
      : GetScalarType<T[P], AggregateTaxScenario[P]>
  }




  export type TaxScenarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxScenarioWhereInput
    orderBy?: TaxScenarioOrderByWithAggregationInput | TaxScenarioOrderByWithAggregationInput[]
    by: TaxScenarioScalarFieldEnum[] | TaxScenarioScalarFieldEnum
    having?: TaxScenarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxScenarioCountAggregateInputType | true
    _avg?: TaxScenarioAvgAggregateInputType
    _sum?: TaxScenarioSumAggregateInputType
    _min?: TaxScenarioMinAggregateInputType
    _max?: TaxScenarioMaxAggregateInputType
  }

  export type TaxScenarioGroupByOutputType = {
    id: number
    description: string
    income: number
    deductions: number
    taxRate: number
    _count: TaxScenarioCountAggregateOutputType | null
    _avg: TaxScenarioAvgAggregateOutputType | null
    _sum: TaxScenarioSumAggregateOutputType | null
    _min: TaxScenarioMinAggregateOutputType | null
    _max: TaxScenarioMaxAggregateOutputType | null
  }

  type GetTaxScenarioGroupByPayload<T extends TaxScenarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaxScenarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxScenarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxScenarioGroupByOutputType[P]>
            : GetScalarType<T[P], TaxScenarioGroupByOutputType[P]>
        }
      >
    >


  export type TaxScenarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    income?: boolean
    deductions?: boolean
    taxRate?: boolean
  }, ExtArgs["result"]["taxScenario"]>

  export type TaxScenarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    income?: boolean
    deductions?: boolean
    taxRate?: boolean
  }, ExtArgs["result"]["taxScenario"]>

  export type TaxScenarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    income?: boolean
    deductions?: boolean
    taxRate?: boolean
  }, ExtArgs["result"]["taxScenario"]>

  export type TaxScenarioSelectScalar = {
    id?: boolean
    description?: boolean
    income?: boolean
    deductions?: boolean
    taxRate?: boolean
  }

  export type TaxScenarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "income" | "deductions" | "taxRate", ExtArgs["result"]["taxScenario"]>

  export type $TaxScenarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaxScenario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      income: number
      deductions: number
      taxRate: number
    }, ExtArgs["result"]["taxScenario"]>
    composites: {}
  }

  type TaxScenarioGetPayload<S extends boolean | null | undefined | TaxScenarioDefaultArgs> = $Result.GetResult<Prisma.$TaxScenarioPayload, S>

  type TaxScenarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaxScenarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaxScenarioCountAggregateInputType | true
    }

  export interface TaxScenarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaxScenario'], meta: { name: 'TaxScenario' } }
    /**
     * Find zero or one TaxScenario that matches the filter.
     * @param {TaxScenarioFindUniqueArgs} args - Arguments to find a TaxScenario
     * @example
     * // Get one TaxScenario
     * const taxScenario = await prisma.taxScenario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxScenarioFindUniqueArgs>(args: SelectSubset<T, TaxScenarioFindUniqueArgs<ExtArgs>>): Prisma__TaxScenarioClient<$Result.GetResult<Prisma.$TaxScenarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaxScenario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxScenarioFindUniqueOrThrowArgs} args - Arguments to find a TaxScenario
     * @example
     * // Get one TaxScenario
     * const taxScenario = await prisma.taxScenario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxScenarioFindUniqueOrThrowArgs>(args: SelectSubset<T, TaxScenarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaxScenarioClient<$Result.GetResult<Prisma.$TaxScenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxScenario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxScenarioFindFirstArgs} args - Arguments to find a TaxScenario
     * @example
     * // Get one TaxScenario
     * const taxScenario = await prisma.taxScenario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxScenarioFindFirstArgs>(args?: SelectSubset<T, TaxScenarioFindFirstArgs<ExtArgs>>): Prisma__TaxScenarioClient<$Result.GetResult<Prisma.$TaxScenarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxScenario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxScenarioFindFirstOrThrowArgs} args - Arguments to find a TaxScenario
     * @example
     * // Get one TaxScenario
     * const taxScenario = await prisma.taxScenario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxScenarioFindFirstOrThrowArgs>(args?: SelectSubset<T, TaxScenarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaxScenarioClient<$Result.GetResult<Prisma.$TaxScenarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaxScenarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxScenarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaxScenarios
     * const taxScenarios = await prisma.taxScenario.findMany()
     * 
     * // Get first 10 TaxScenarios
     * const taxScenarios = await prisma.taxScenario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxScenarioWithIdOnly = await prisma.taxScenario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaxScenarioFindManyArgs>(args?: SelectSubset<T, TaxScenarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxScenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaxScenario.
     * @param {TaxScenarioCreateArgs} args - Arguments to create a TaxScenario.
     * @example
     * // Create one TaxScenario
     * const TaxScenario = await prisma.taxScenario.create({
     *   data: {
     *     // ... data to create a TaxScenario
     *   }
     * })
     * 
     */
    create<T extends TaxScenarioCreateArgs>(args: SelectSubset<T, TaxScenarioCreateArgs<ExtArgs>>): Prisma__TaxScenarioClient<$Result.GetResult<Prisma.$TaxScenarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaxScenarios.
     * @param {TaxScenarioCreateManyArgs} args - Arguments to create many TaxScenarios.
     * @example
     * // Create many TaxScenarios
     * const taxScenario = await prisma.taxScenario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaxScenarioCreateManyArgs>(args?: SelectSubset<T, TaxScenarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaxScenarios and returns the data saved in the database.
     * @param {TaxScenarioCreateManyAndReturnArgs} args - Arguments to create many TaxScenarios.
     * @example
     * // Create many TaxScenarios
     * const taxScenario = await prisma.taxScenario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaxScenarios and only return the `id`
     * const taxScenarioWithIdOnly = await prisma.taxScenario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaxScenarioCreateManyAndReturnArgs>(args?: SelectSubset<T, TaxScenarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxScenarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaxScenario.
     * @param {TaxScenarioDeleteArgs} args - Arguments to delete one TaxScenario.
     * @example
     * // Delete one TaxScenario
     * const TaxScenario = await prisma.taxScenario.delete({
     *   where: {
     *     // ... filter to delete one TaxScenario
     *   }
     * })
     * 
     */
    delete<T extends TaxScenarioDeleteArgs>(args: SelectSubset<T, TaxScenarioDeleteArgs<ExtArgs>>): Prisma__TaxScenarioClient<$Result.GetResult<Prisma.$TaxScenarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaxScenario.
     * @param {TaxScenarioUpdateArgs} args - Arguments to update one TaxScenario.
     * @example
     * // Update one TaxScenario
     * const taxScenario = await prisma.taxScenario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaxScenarioUpdateArgs>(args: SelectSubset<T, TaxScenarioUpdateArgs<ExtArgs>>): Prisma__TaxScenarioClient<$Result.GetResult<Prisma.$TaxScenarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaxScenarios.
     * @param {TaxScenarioDeleteManyArgs} args - Arguments to filter TaxScenarios to delete.
     * @example
     * // Delete a few TaxScenarios
     * const { count } = await prisma.taxScenario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaxScenarioDeleteManyArgs>(args?: SelectSubset<T, TaxScenarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxScenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxScenarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaxScenarios
     * const taxScenario = await prisma.taxScenario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaxScenarioUpdateManyArgs>(args: SelectSubset<T, TaxScenarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxScenarios and returns the data updated in the database.
     * @param {TaxScenarioUpdateManyAndReturnArgs} args - Arguments to update many TaxScenarios.
     * @example
     * // Update many TaxScenarios
     * const taxScenario = await prisma.taxScenario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaxScenarios and only return the `id`
     * const taxScenarioWithIdOnly = await prisma.taxScenario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaxScenarioUpdateManyAndReturnArgs>(args: SelectSubset<T, TaxScenarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxScenarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaxScenario.
     * @param {TaxScenarioUpsertArgs} args - Arguments to update or create a TaxScenario.
     * @example
     * // Update or create a TaxScenario
     * const taxScenario = await prisma.taxScenario.upsert({
     *   create: {
     *     // ... data to create a TaxScenario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaxScenario we want to update
     *   }
     * })
     */
    upsert<T extends TaxScenarioUpsertArgs>(args: SelectSubset<T, TaxScenarioUpsertArgs<ExtArgs>>): Prisma__TaxScenarioClient<$Result.GetResult<Prisma.$TaxScenarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaxScenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxScenarioCountArgs} args - Arguments to filter TaxScenarios to count.
     * @example
     * // Count the number of TaxScenarios
     * const count = await prisma.taxScenario.count({
     *   where: {
     *     // ... the filter for the TaxScenarios we want to count
     *   }
     * })
    **/
    count<T extends TaxScenarioCountArgs>(
      args?: Subset<T, TaxScenarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxScenarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaxScenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxScenarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaxScenarioAggregateArgs>(args: Subset<T, TaxScenarioAggregateArgs>): Prisma.PrismaPromise<GetTaxScenarioAggregateType<T>>

    /**
     * Group by TaxScenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxScenarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaxScenarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxScenarioGroupByArgs['orderBy'] }
        : { orderBy?: TaxScenarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaxScenarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxScenarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaxScenario model
   */
  readonly fields: TaxScenarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaxScenario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaxScenarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaxScenario model
   */
  interface TaxScenarioFieldRefs {
    readonly id: FieldRef<"TaxScenario", 'Int'>
    readonly description: FieldRef<"TaxScenario", 'String'>
    readonly income: FieldRef<"TaxScenario", 'Float'>
    readonly deductions: FieldRef<"TaxScenario", 'Float'>
    readonly taxRate: FieldRef<"TaxScenario", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * TaxScenario findUnique
   */
  export type TaxScenarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxScenario
     */
    select?: TaxScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxScenario
     */
    omit?: TaxScenarioOmit<ExtArgs> | null
    /**
     * Filter, which TaxScenario to fetch.
     */
    where: TaxScenarioWhereUniqueInput
  }

  /**
   * TaxScenario findUniqueOrThrow
   */
  export type TaxScenarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxScenario
     */
    select?: TaxScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxScenario
     */
    omit?: TaxScenarioOmit<ExtArgs> | null
    /**
     * Filter, which TaxScenario to fetch.
     */
    where: TaxScenarioWhereUniqueInput
  }

  /**
   * TaxScenario findFirst
   */
  export type TaxScenarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxScenario
     */
    select?: TaxScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxScenario
     */
    omit?: TaxScenarioOmit<ExtArgs> | null
    /**
     * Filter, which TaxScenario to fetch.
     */
    where?: TaxScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxScenarios to fetch.
     */
    orderBy?: TaxScenarioOrderByWithRelationInput | TaxScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxScenarios.
     */
    cursor?: TaxScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxScenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxScenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxScenarios.
     */
    distinct?: TaxScenarioScalarFieldEnum | TaxScenarioScalarFieldEnum[]
  }

  /**
   * TaxScenario findFirstOrThrow
   */
  export type TaxScenarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxScenario
     */
    select?: TaxScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxScenario
     */
    omit?: TaxScenarioOmit<ExtArgs> | null
    /**
     * Filter, which TaxScenario to fetch.
     */
    where?: TaxScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxScenarios to fetch.
     */
    orderBy?: TaxScenarioOrderByWithRelationInput | TaxScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxScenarios.
     */
    cursor?: TaxScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxScenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxScenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxScenarios.
     */
    distinct?: TaxScenarioScalarFieldEnum | TaxScenarioScalarFieldEnum[]
  }

  /**
   * TaxScenario findMany
   */
  export type TaxScenarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxScenario
     */
    select?: TaxScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxScenario
     */
    omit?: TaxScenarioOmit<ExtArgs> | null
    /**
     * Filter, which TaxScenarios to fetch.
     */
    where?: TaxScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxScenarios to fetch.
     */
    orderBy?: TaxScenarioOrderByWithRelationInput | TaxScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaxScenarios.
     */
    cursor?: TaxScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxScenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxScenarios.
     */
    skip?: number
    distinct?: TaxScenarioScalarFieldEnum | TaxScenarioScalarFieldEnum[]
  }

  /**
   * TaxScenario create
   */
  export type TaxScenarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxScenario
     */
    select?: TaxScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxScenario
     */
    omit?: TaxScenarioOmit<ExtArgs> | null
    /**
     * The data needed to create a TaxScenario.
     */
    data: XOR<TaxScenarioCreateInput, TaxScenarioUncheckedCreateInput>
  }

  /**
   * TaxScenario createMany
   */
  export type TaxScenarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaxScenarios.
     */
    data: TaxScenarioCreateManyInput | TaxScenarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaxScenario createManyAndReturn
   */
  export type TaxScenarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxScenario
     */
    select?: TaxScenarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxScenario
     */
    omit?: TaxScenarioOmit<ExtArgs> | null
    /**
     * The data used to create many TaxScenarios.
     */
    data: TaxScenarioCreateManyInput | TaxScenarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaxScenario update
   */
  export type TaxScenarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxScenario
     */
    select?: TaxScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxScenario
     */
    omit?: TaxScenarioOmit<ExtArgs> | null
    /**
     * The data needed to update a TaxScenario.
     */
    data: XOR<TaxScenarioUpdateInput, TaxScenarioUncheckedUpdateInput>
    /**
     * Choose, which TaxScenario to update.
     */
    where: TaxScenarioWhereUniqueInput
  }

  /**
   * TaxScenario updateMany
   */
  export type TaxScenarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaxScenarios.
     */
    data: XOR<TaxScenarioUpdateManyMutationInput, TaxScenarioUncheckedUpdateManyInput>
    /**
     * Filter which TaxScenarios to update
     */
    where?: TaxScenarioWhereInput
    /**
     * Limit how many TaxScenarios to update.
     */
    limit?: number
  }

  /**
   * TaxScenario updateManyAndReturn
   */
  export type TaxScenarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxScenario
     */
    select?: TaxScenarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxScenario
     */
    omit?: TaxScenarioOmit<ExtArgs> | null
    /**
     * The data used to update TaxScenarios.
     */
    data: XOR<TaxScenarioUpdateManyMutationInput, TaxScenarioUncheckedUpdateManyInput>
    /**
     * Filter which TaxScenarios to update
     */
    where?: TaxScenarioWhereInput
    /**
     * Limit how many TaxScenarios to update.
     */
    limit?: number
  }

  /**
   * TaxScenario upsert
   */
  export type TaxScenarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxScenario
     */
    select?: TaxScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxScenario
     */
    omit?: TaxScenarioOmit<ExtArgs> | null
    /**
     * The filter to search for the TaxScenario to update in case it exists.
     */
    where: TaxScenarioWhereUniqueInput
    /**
     * In case the TaxScenario found by the `where` argument doesn't exist, create a new TaxScenario with this data.
     */
    create: XOR<TaxScenarioCreateInput, TaxScenarioUncheckedCreateInput>
    /**
     * In case the TaxScenario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaxScenarioUpdateInput, TaxScenarioUncheckedUpdateInput>
  }

  /**
   * TaxScenario delete
   */
  export type TaxScenarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxScenario
     */
    select?: TaxScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxScenario
     */
    omit?: TaxScenarioOmit<ExtArgs> | null
    /**
     * Filter which TaxScenario to delete.
     */
    where: TaxScenarioWhereUniqueInput
  }

  /**
   * TaxScenario deleteMany
   */
  export type TaxScenarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxScenarios to delete
     */
    where?: TaxScenarioWhereInput
    /**
     * Limit how many TaxScenarios to delete.
     */
    limit?: number
  }

  /**
   * TaxScenario without action
   */
  export type TaxScenarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxScenario
     */
    select?: TaxScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxScenario
     */
    omit?: TaxScenarioOmit<ExtArgs> | null
  }


  /**
   * Model ClientInformationForm
   */

  export type AggregateClientInformationForm = {
    _count: ClientInformationFormCountAggregateOutputType | null
    _avg: ClientInformationFormAvgAggregateOutputType | null
    _sum: ClientInformationFormSumAggregateOutputType | null
    _min: ClientInformationFormMinAggregateOutputType | null
    _max: ClientInformationFormMaxAggregateOutputType | null
  }

  export type ClientInformationFormAvgAggregateOutputType = {
    numberOfEmployees: number | null
  }

  export type ClientInformationFormSumAggregateOutputType = {
    numberOfEmployees: number | null
  }

  export type ClientInformationFormMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    businessName: string | null
    phoneNumber: string | null
    email: string | null
    address: string | null
    preferredContactMethod: string | null
    businessType: string | null
    industryCategory: string | null
    taxIdentificationNumber: string | null
    businessRegistrationNumber: string | null
    annualRevenueRange: string | null
    numberOfEmployees: number | null
    frequencyOfService: string | null
    specificGoalsOrNeeds: string | null
    currentAccountingSoftware: string | null
    preferredCommunicationSchedule: string | null
    bankAccountDetails: string | null
    creditLimit: string | null
    billingAddress: string | null
    businessRegistrationCertificate: string | null
    taxIdentificationCertificate: string | null
    financialStatements: string | null
    governmentIssuedID: string | null
    declaration: boolean | null
    consent: boolean | null
    signature: string | null
    date: string | null
    createdAt: Date | null
  }

  export type ClientInformationFormMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    businessName: string | null
    phoneNumber: string | null
    email: string | null
    address: string | null
    preferredContactMethod: string | null
    businessType: string | null
    industryCategory: string | null
    taxIdentificationNumber: string | null
    businessRegistrationNumber: string | null
    annualRevenueRange: string | null
    numberOfEmployees: number | null
    frequencyOfService: string | null
    specificGoalsOrNeeds: string | null
    currentAccountingSoftware: string | null
    preferredCommunicationSchedule: string | null
    bankAccountDetails: string | null
    creditLimit: string | null
    billingAddress: string | null
    businessRegistrationCertificate: string | null
    taxIdentificationCertificate: string | null
    financialStatements: string | null
    governmentIssuedID: string | null
    declaration: boolean | null
    consent: boolean | null
    signature: string | null
    date: string | null
    createdAt: Date | null
  }

  export type ClientInformationFormCountAggregateOutputType = {
    id: number
    fullName: number
    businessName: number
    phoneNumber: number
    email: number
    address: number
    preferredContactMethod: number
    businessType: number
    industryCategory: number
    taxIdentificationNumber: number
    businessRegistrationNumber: number
    annualRevenueRange: number
    numberOfEmployees: number
    servicesRequired: number
    frequencyOfService: number
    specificGoalsOrNeeds: number
    currentAccountingSoftware: number
    preferredCommunicationSchedule: number
    bankAccountDetails: number
    creditLimit: number
    billingAddress: number
    businessRegistrationCertificate: number
    taxIdentificationCertificate: number
    financialStatements: number
    governmentIssuedID: number
    declaration: number
    consent: number
    signature: number
    date: number
    createdAt: number
    _all: number
  }


  export type ClientInformationFormAvgAggregateInputType = {
    numberOfEmployees?: true
  }

  export type ClientInformationFormSumAggregateInputType = {
    numberOfEmployees?: true
  }

  export type ClientInformationFormMinAggregateInputType = {
    id?: true
    fullName?: true
    businessName?: true
    phoneNumber?: true
    email?: true
    address?: true
    preferredContactMethod?: true
    businessType?: true
    industryCategory?: true
    taxIdentificationNumber?: true
    businessRegistrationNumber?: true
    annualRevenueRange?: true
    numberOfEmployees?: true
    frequencyOfService?: true
    specificGoalsOrNeeds?: true
    currentAccountingSoftware?: true
    preferredCommunicationSchedule?: true
    bankAccountDetails?: true
    creditLimit?: true
    billingAddress?: true
    businessRegistrationCertificate?: true
    taxIdentificationCertificate?: true
    financialStatements?: true
    governmentIssuedID?: true
    declaration?: true
    consent?: true
    signature?: true
    date?: true
    createdAt?: true
  }

  export type ClientInformationFormMaxAggregateInputType = {
    id?: true
    fullName?: true
    businessName?: true
    phoneNumber?: true
    email?: true
    address?: true
    preferredContactMethod?: true
    businessType?: true
    industryCategory?: true
    taxIdentificationNumber?: true
    businessRegistrationNumber?: true
    annualRevenueRange?: true
    numberOfEmployees?: true
    frequencyOfService?: true
    specificGoalsOrNeeds?: true
    currentAccountingSoftware?: true
    preferredCommunicationSchedule?: true
    bankAccountDetails?: true
    creditLimit?: true
    billingAddress?: true
    businessRegistrationCertificate?: true
    taxIdentificationCertificate?: true
    financialStatements?: true
    governmentIssuedID?: true
    declaration?: true
    consent?: true
    signature?: true
    date?: true
    createdAt?: true
  }

  export type ClientInformationFormCountAggregateInputType = {
    id?: true
    fullName?: true
    businessName?: true
    phoneNumber?: true
    email?: true
    address?: true
    preferredContactMethod?: true
    businessType?: true
    industryCategory?: true
    taxIdentificationNumber?: true
    businessRegistrationNumber?: true
    annualRevenueRange?: true
    numberOfEmployees?: true
    servicesRequired?: true
    frequencyOfService?: true
    specificGoalsOrNeeds?: true
    currentAccountingSoftware?: true
    preferredCommunicationSchedule?: true
    bankAccountDetails?: true
    creditLimit?: true
    billingAddress?: true
    businessRegistrationCertificate?: true
    taxIdentificationCertificate?: true
    financialStatements?: true
    governmentIssuedID?: true
    declaration?: true
    consent?: true
    signature?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type ClientInformationFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientInformationForm to aggregate.
     */
    where?: ClientInformationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientInformationForms to fetch.
     */
    orderBy?: ClientInformationFormOrderByWithRelationInput | ClientInformationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientInformationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientInformationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientInformationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientInformationForms
    **/
    _count?: true | ClientInformationFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientInformationFormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientInformationFormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientInformationFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientInformationFormMaxAggregateInputType
  }

  export type GetClientInformationFormAggregateType<T extends ClientInformationFormAggregateArgs> = {
        [P in keyof T & keyof AggregateClientInformationForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientInformationForm[P]>
      : GetScalarType<T[P], AggregateClientInformationForm[P]>
  }




  export type ClientInformationFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientInformationFormWhereInput
    orderBy?: ClientInformationFormOrderByWithAggregationInput | ClientInformationFormOrderByWithAggregationInput[]
    by: ClientInformationFormScalarFieldEnum[] | ClientInformationFormScalarFieldEnum
    having?: ClientInformationFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientInformationFormCountAggregateInputType | true
    _avg?: ClientInformationFormAvgAggregateInputType
    _sum?: ClientInformationFormSumAggregateInputType
    _min?: ClientInformationFormMinAggregateInputType
    _max?: ClientInformationFormMaxAggregateInputType
  }

  export type ClientInformationFormGroupByOutputType = {
    id: string
    fullName: string
    businessName: string | null
    phoneNumber: string
    email: string
    address: string
    preferredContactMethod: string
    businessType: string | null
    industryCategory: string | null
    taxIdentificationNumber: string | null
    businessRegistrationNumber: string | null
    annualRevenueRange: string | null
    numberOfEmployees: number | null
    servicesRequired: string[]
    frequencyOfService: string
    specificGoalsOrNeeds: string
    currentAccountingSoftware: string | null
    preferredCommunicationSchedule: string | null
    bankAccountDetails: string | null
    creditLimit: string | null
    billingAddress: string | null
    businessRegistrationCertificate: string | null
    taxIdentificationCertificate: string | null
    financialStatements: string | null
    governmentIssuedID: string | null
    declaration: boolean
    consent: boolean
    signature: string
    date: string
    createdAt: Date
    _count: ClientInformationFormCountAggregateOutputType | null
    _avg: ClientInformationFormAvgAggregateOutputType | null
    _sum: ClientInformationFormSumAggregateOutputType | null
    _min: ClientInformationFormMinAggregateOutputType | null
    _max: ClientInformationFormMaxAggregateOutputType | null
  }

  type GetClientInformationFormGroupByPayload<T extends ClientInformationFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientInformationFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientInformationFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientInformationFormGroupByOutputType[P]>
            : GetScalarType<T[P], ClientInformationFormGroupByOutputType[P]>
        }
      >
    >


  export type ClientInformationFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    businessName?: boolean
    phoneNumber?: boolean
    email?: boolean
    address?: boolean
    preferredContactMethod?: boolean
    businessType?: boolean
    industryCategory?: boolean
    taxIdentificationNumber?: boolean
    businessRegistrationNumber?: boolean
    annualRevenueRange?: boolean
    numberOfEmployees?: boolean
    servicesRequired?: boolean
    frequencyOfService?: boolean
    specificGoalsOrNeeds?: boolean
    currentAccountingSoftware?: boolean
    preferredCommunicationSchedule?: boolean
    bankAccountDetails?: boolean
    creditLimit?: boolean
    billingAddress?: boolean
    businessRegistrationCertificate?: boolean
    taxIdentificationCertificate?: boolean
    financialStatements?: boolean
    governmentIssuedID?: boolean
    declaration?: boolean
    consent?: boolean
    signature?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["clientInformationForm"]>

  export type ClientInformationFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    businessName?: boolean
    phoneNumber?: boolean
    email?: boolean
    address?: boolean
    preferredContactMethod?: boolean
    businessType?: boolean
    industryCategory?: boolean
    taxIdentificationNumber?: boolean
    businessRegistrationNumber?: boolean
    annualRevenueRange?: boolean
    numberOfEmployees?: boolean
    servicesRequired?: boolean
    frequencyOfService?: boolean
    specificGoalsOrNeeds?: boolean
    currentAccountingSoftware?: boolean
    preferredCommunicationSchedule?: boolean
    bankAccountDetails?: boolean
    creditLimit?: boolean
    billingAddress?: boolean
    businessRegistrationCertificate?: boolean
    taxIdentificationCertificate?: boolean
    financialStatements?: boolean
    governmentIssuedID?: boolean
    declaration?: boolean
    consent?: boolean
    signature?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["clientInformationForm"]>

  export type ClientInformationFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    businessName?: boolean
    phoneNumber?: boolean
    email?: boolean
    address?: boolean
    preferredContactMethod?: boolean
    businessType?: boolean
    industryCategory?: boolean
    taxIdentificationNumber?: boolean
    businessRegistrationNumber?: boolean
    annualRevenueRange?: boolean
    numberOfEmployees?: boolean
    servicesRequired?: boolean
    frequencyOfService?: boolean
    specificGoalsOrNeeds?: boolean
    currentAccountingSoftware?: boolean
    preferredCommunicationSchedule?: boolean
    bankAccountDetails?: boolean
    creditLimit?: boolean
    billingAddress?: boolean
    businessRegistrationCertificate?: boolean
    taxIdentificationCertificate?: boolean
    financialStatements?: boolean
    governmentIssuedID?: boolean
    declaration?: boolean
    consent?: boolean
    signature?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["clientInformationForm"]>

  export type ClientInformationFormSelectScalar = {
    id?: boolean
    fullName?: boolean
    businessName?: boolean
    phoneNumber?: boolean
    email?: boolean
    address?: boolean
    preferredContactMethod?: boolean
    businessType?: boolean
    industryCategory?: boolean
    taxIdentificationNumber?: boolean
    businessRegistrationNumber?: boolean
    annualRevenueRange?: boolean
    numberOfEmployees?: boolean
    servicesRequired?: boolean
    frequencyOfService?: boolean
    specificGoalsOrNeeds?: boolean
    currentAccountingSoftware?: boolean
    preferredCommunicationSchedule?: boolean
    bankAccountDetails?: boolean
    creditLimit?: boolean
    billingAddress?: boolean
    businessRegistrationCertificate?: boolean
    taxIdentificationCertificate?: boolean
    financialStatements?: boolean
    governmentIssuedID?: boolean
    declaration?: boolean
    consent?: boolean
    signature?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type ClientInformationFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "businessName" | "phoneNumber" | "email" | "address" | "preferredContactMethod" | "businessType" | "industryCategory" | "taxIdentificationNumber" | "businessRegistrationNumber" | "annualRevenueRange" | "numberOfEmployees" | "servicesRequired" | "frequencyOfService" | "specificGoalsOrNeeds" | "currentAccountingSoftware" | "preferredCommunicationSchedule" | "bankAccountDetails" | "creditLimit" | "billingAddress" | "businessRegistrationCertificate" | "taxIdentificationCertificate" | "financialStatements" | "governmentIssuedID" | "declaration" | "consent" | "signature" | "date" | "createdAt", ExtArgs["result"]["clientInformationForm"]>

  export type $ClientInformationFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientInformationForm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      businessName: string | null
      phoneNumber: string
      email: string
      address: string
      preferredContactMethod: string
      businessType: string | null
      industryCategory: string | null
      taxIdentificationNumber: string | null
      businessRegistrationNumber: string | null
      annualRevenueRange: string | null
      numberOfEmployees: number | null
      servicesRequired: string[]
      frequencyOfService: string
      specificGoalsOrNeeds: string
      currentAccountingSoftware: string | null
      preferredCommunicationSchedule: string | null
      bankAccountDetails: string | null
      creditLimit: string | null
      billingAddress: string | null
      businessRegistrationCertificate: string | null
      taxIdentificationCertificate: string | null
      financialStatements: string | null
      governmentIssuedID: string | null
      declaration: boolean
      consent: boolean
      signature: string
      date: string
      createdAt: Date
    }, ExtArgs["result"]["clientInformationForm"]>
    composites: {}
  }

  type ClientInformationFormGetPayload<S extends boolean | null | undefined | ClientInformationFormDefaultArgs> = $Result.GetResult<Prisma.$ClientInformationFormPayload, S>

  type ClientInformationFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientInformationFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientInformationFormCountAggregateInputType | true
    }

  export interface ClientInformationFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientInformationForm'], meta: { name: 'ClientInformationForm' } }
    /**
     * Find zero or one ClientInformationForm that matches the filter.
     * @param {ClientInformationFormFindUniqueArgs} args - Arguments to find a ClientInformationForm
     * @example
     * // Get one ClientInformationForm
     * const clientInformationForm = await prisma.clientInformationForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientInformationFormFindUniqueArgs>(args: SelectSubset<T, ClientInformationFormFindUniqueArgs<ExtArgs>>): Prisma__ClientInformationFormClient<$Result.GetResult<Prisma.$ClientInformationFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientInformationForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientInformationFormFindUniqueOrThrowArgs} args - Arguments to find a ClientInformationForm
     * @example
     * // Get one ClientInformationForm
     * const clientInformationForm = await prisma.clientInformationForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientInformationFormFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientInformationFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientInformationFormClient<$Result.GetResult<Prisma.$ClientInformationFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientInformationForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInformationFormFindFirstArgs} args - Arguments to find a ClientInformationForm
     * @example
     * // Get one ClientInformationForm
     * const clientInformationForm = await prisma.clientInformationForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientInformationFormFindFirstArgs>(args?: SelectSubset<T, ClientInformationFormFindFirstArgs<ExtArgs>>): Prisma__ClientInformationFormClient<$Result.GetResult<Prisma.$ClientInformationFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientInformationForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInformationFormFindFirstOrThrowArgs} args - Arguments to find a ClientInformationForm
     * @example
     * // Get one ClientInformationForm
     * const clientInformationForm = await prisma.clientInformationForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientInformationFormFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientInformationFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientInformationFormClient<$Result.GetResult<Prisma.$ClientInformationFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientInformationForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInformationFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientInformationForms
     * const clientInformationForms = await prisma.clientInformationForm.findMany()
     * 
     * // Get first 10 ClientInformationForms
     * const clientInformationForms = await prisma.clientInformationForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientInformationFormWithIdOnly = await prisma.clientInformationForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientInformationFormFindManyArgs>(args?: SelectSubset<T, ClientInformationFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientInformationFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientInformationForm.
     * @param {ClientInformationFormCreateArgs} args - Arguments to create a ClientInformationForm.
     * @example
     * // Create one ClientInformationForm
     * const ClientInformationForm = await prisma.clientInformationForm.create({
     *   data: {
     *     // ... data to create a ClientInformationForm
     *   }
     * })
     * 
     */
    create<T extends ClientInformationFormCreateArgs>(args: SelectSubset<T, ClientInformationFormCreateArgs<ExtArgs>>): Prisma__ClientInformationFormClient<$Result.GetResult<Prisma.$ClientInformationFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientInformationForms.
     * @param {ClientInformationFormCreateManyArgs} args - Arguments to create many ClientInformationForms.
     * @example
     * // Create many ClientInformationForms
     * const clientInformationForm = await prisma.clientInformationForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientInformationFormCreateManyArgs>(args?: SelectSubset<T, ClientInformationFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientInformationForms and returns the data saved in the database.
     * @param {ClientInformationFormCreateManyAndReturnArgs} args - Arguments to create many ClientInformationForms.
     * @example
     * // Create many ClientInformationForms
     * const clientInformationForm = await prisma.clientInformationForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientInformationForms and only return the `id`
     * const clientInformationFormWithIdOnly = await prisma.clientInformationForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientInformationFormCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientInformationFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientInformationFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientInformationForm.
     * @param {ClientInformationFormDeleteArgs} args - Arguments to delete one ClientInformationForm.
     * @example
     * // Delete one ClientInformationForm
     * const ClientInformationForm = await prisma.clientInformationForm.delete({
     *   where: {
     *     // ... filter to delete one ClientInformationForm
     *   }
     * })
     * 
     */
    delete<T extends ClientInformationFormDeleteArgs>(args: SelectSubset<T, ClientInformationFormDeleteArgs<ExtArgs>>): Prisma__ClientInformationFormClient<$Result.GetResult<Prisma.$ClientInformationFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientInformationForm.
     * @param {ClientInformationFormUpdateArgs} args - Arguments to update one ClientInformationForm.
     * @example
     * // Update one ClientInformationForm
     * const clientInformationForm = await prisma.clientInformationForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientInformationFormUpdateArgs>(args: SelectSubset<T, ClientInformationFormUpdateArgs<ExtArgs>>): Prisma__ClientInformationFormClient<$Result.GetResult<Prisma.$ClientInformationFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientInformationForms.
     * @param {ClientInformationFormDeleteManyArgs} args - Arguments to filter ClientInformationForms to delete.
     * @example
     * // Delete a few ClientInformationForms
     * const { count } = await prisma.clientInformationForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientInformationFormDeleteManyArgs>(args?: SelectSubset<T, ClientInformationFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientInformationForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInformationFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientInformationForms
     * const clientInformationForm = await prisma.clientInformationForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientInformationFormUpdateManyArgs>(args: SelectSubset<T, ClientInformationFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientInformationForms and returns the data updated in the database.
     * @param {ClientInformationFormUpdateManyAndReturnArgs} args - Arguments to update many ClientInformationForms.
     * @example
     * // Update many ClientInformationForms
     * const clientInformationForm = await prisma.clientInformationForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientInformationForms and only return the `id`
     * const clientInformationFormWithIdOnly = await prisma.clientInformationForm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientInformationFormUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientInformationFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientInformationFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientInformationForm.
     * @param {ClientInformationFormUpsertArgs} args - Arguments to update or create a ClientInformationForm.
     * @example
     * // Update or create a ClientInformationForm
     * const clientInformationForm = await prisma.clientInformationForm.upsert({
     *   create: {
     *     // ... data to create a ClientInformationForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientInformationForm we want to update
     *   }
     * })
     */
    upsert<T extends ClientInformationFormUpsertArgs>(args: SelectSubset<T, ClientInformationFormUpsertArgs<ExtArgs>>): Prisma__ClientInformationFormClient<$Result.GetResult<Prisma.$ClientInformationFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientInformationForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInformationFormCountArgs} args - Arguments to filter ClientInformationForms to count.
     * @example
     * // Count the number of ClientInformationForms
     * const count = await prisma.clientInformationForm.count({
     *   where: {
     *     // ... the filter for the ClientInformationForms we want to count
     *   }
     * })
    **/
    count<T extends ClientInformationFormCountArgs>(
      args?: Subset<T, ClientInformationFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientInformationFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientInformationForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInformationFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientInformationFormAggregateArgs>(args: Subset<T, ClientInformationFormAggregateArgs>): Prisma.PrismaPromise<GetClientInformationFormAggregateType<T>>

    /**
     * Group by ClientInformationForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientInformationFormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientInformationFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientInformationFormGroupByArgs['orderBy'] }
        : { orderBy?: ClientInformationFormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientInformationFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientInformationFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientInformationForm model
   */
  readonly fields: ClientInformationFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientInformationForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientInformationFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientInformationForm model
   */
  interface ClientInformationFormFieldRefs {
    readonly id: FieldRef<"ClientInformationForm", 'String'>
    readonly fullName: FieldRef<"ClientInformationForm", 'String'>
    readonly businessName: FieldRef<"ClientInformationForm", 'String'>
    readonly phoneNumber: FieldRef<"ClientInformationForm", 'String'>
    readonly email: FieldRef<"ClientInformationForm", 'String'>
    readonly address: FieldRef<"ClientInformationForm", 'String'>
    readonly preferredContactMethod: FieldRef<"ClientInformationForm", 'String'>
    readonly businessType: FieldRef<"ClientInformationForm", 'String'>
    readonly industryCategory: FieldRef<"ClientInformationForm", 'String'>
    readonly taxIdentificationNumber: FieldRef<"ClientInformationForm", 'String'>
    readonly businessRegistrationNumber: FieldRef<"ClientInformationForm", 'String'>
    readonly annualRevenueRange: FieldRef<"ClientInformationForm", 'String'>
    readonly numberOfEmployees: FieldRef<"ClientInformationForm", 'Int'>
    readonly servicesRequired: FieldRef<"ClientInformationForm", 'String[]'>
    readonly frequencyOfService: FieldRef<"ClientInformationForm", 'String'>
    readonly specificGoalsOrNeeds: FieldRef<"ClientInformationForm", 'String'>
    readonly currentAccountingSoftware: FieldRef<"ClientInformationForm", 'String'>
    readonly preferredCommunicationSchedule: FieldRef<"ClientInformationForm", 'String'>
    readonly bankAccountDetails: FieldRef<"ClientInformationForm", 'String'>
    readonly creditLimit: FieldRef<"ClientInformationForm", 'String'>
    readonly billingAddress: FieldRef<"ClientInformationForm", 'String'>
    readonly businessRegistrationCertificate: FieldRef<"ClientInformationForm", 'String'>
    readonly taxIdentificationCertificate: FieldRef<"ClientInformationForm", 'String'>
    readonly financialStatements: FieldRef<"ClientInformationForm", 'String'>
    readonly governmentIssuedID: FieldRef<"ClientInformationForm", 'String'>
    readonly declaration: FieldRef<"ClientInformationForm", 'Boolean'>
    readonly consent: FieldRef<"ClientInformationForm", 'Boolean'>
    readonly signature: FieldRef<"ClientInformationForm", 'String'>
    readonly date: FieldRef<"ClientInformationForm", 'String'>
    readonly createdAt: FieldRef<"ClientInformationForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientInformationForm findUnique
   */
  export type ClientInformationFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInformationForm
     */
    select?: ClientInformationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInformationForm
     */
    omit?: ClientInformationFormOmit<ExtArgs> | null
    /**
     * Filter, which ClientInformationForm to fetch.
     */
    where: ClientInformationFormWhereUniqueInput
  }

  /**
   * ClientInformationForm findUniqueOrThrow
   */
  export type ClientInformationFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInformationForm
     */
    select?: ClientInformationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInformationForm
     */
    omit?: ClientInformationFormOmit<ExtArgs> | null
    /**
     * Filter, which ClientInformationForm to fetch.
     */
    where: ClientInformationFormWhereUniqueInput
  }

  /**
   * ClientInformationForm findFirst
   */
  export type ClientInformationFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInformationForm
     */
    select?: ClientInformationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInformationForm
     */
    omit?: ClientInformationFormOmit<ExtArgs> | null
    /**
     * Filter, which ClientInformationForm to fetch.
     */
    where?: ClientInformationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientInformationForms to fetch.
     */
    orderBy?: ClientInformationFormOrderByWithRelationInput | ClientInformationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientInformationForms.
     */
    cursor?: ClientInformationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientInformationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientInformationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientInformationForms.
     */
    distinct?: ClientInformationFormScalarFieldEnum | ClientInformationFormScalarFieldEnum[]
  }

  /**
   * ClientInformationForm findFirstOrThrow
   */
  export type ClientInformationFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInformationForm
     */
    select?: ClientInformationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInformationForm
     */
    omit?: ClientInformationFormOmit<ExtArgs> | null
    /**
     * Filter, which ClientInformationForm to fetch.
     */
    where?: ClientInformationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientInformationForms to fetch.
     */
    orderBy?: ClientInformationFormOrderByWithRelationInput | ClientInformationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientInformationForms.
     */
    cursor?: ClientInformationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientInformationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientInformationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientInformationForms.
     */
    distinct?: ClientInformationFormScalarFieldEnum | ClientInformationFormScalarFieldEnum[]
  }

  /**
   * ClientInformationForm findMany
   */
  export type ClientInformationFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInformationForm
     */
    select?: ClientInformationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInformationForm
     */
    omit?: ClientInformationFormOmit<ExtArgs> | null
    /**
     * Filter, which ClientInformationForms to fetch.
     */
    where?: ClientInformationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientInformationForms to fetch.
     */
    orderBy?: ClientInformationFormOrderByWithRelationInput | ClientInformationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientInformationForms.
     */
    cursor?: ClientInformationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientInformationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientInformationForms.
     */
    skip?: number
    distinct?: ClientInformationFormScalarFieldEnum | ClientInformationFormScalarFieldEnum[]
  }

  /**
   * ClientInformationForm create
   */
  export type ClientInformationFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInformationForm
     */
    select?: ClientInformationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInformationForm
     */
    omit?: ClientInformationFormOmit<ExtArgs> | null
    /**
     * The data needed to create a ClientInformationForm.
     */
    data: XOR<ClientInformationFormCreateInput, ClientInformationFormUncheckedCreateInput>
  }

  /**
   * ClientInformationForm createMany
   */
  export type ClientInformationFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientInformationForms.
     */
    data: ClientInformationFormCreateManyInput | ClientInformationFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientInformationForm createManyAndReturn
   */
  export type ClientInformationFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInformationForm
     */
    select?: ClientInformationFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInformationForm
     */
    omit?: ClientInformationFormOmit<ExtArgs> | null
    /**
     * The data used to create many ClientInformationForms.
     */
    data: ClientInformationFormCreateManyInput | ClientInformationFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientInformationForm update
   */
  export type ClientInformationFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInformationForm
     */
    select?: ClientInformationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInformationForm
     */
    omit?: ClientInformationFormOmit<ExtArgs> | null
    /**
     * The data needed to update a ClientInformationForm.
     */
    data: XOR<ClientInformationFormUpdateInput, ClientInformationFormUncheckedUpdateInput>
    /**
     * Choose, which ClientInformationForm to update.
     */
    where: ClientInformationFormWhereUniqueInput
  }

  /**
   * ClientInformationForm updateMany
   */
  export type ClientInformationFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientInformationForms.
     */
    data: XOR<ClientInformationFormUpdateManyMutationInput, ClientInformationFormUncheckedUpdateManyInput>
    /**
     * Filter which ClientInformationForms to update
     */
    where?: ClientInformationFormWhereInput
    /**
     * Limit how many ClientInformationForms to update.
     */
    limit?: number
  }

  /**
   * ClientInformationForm updateManyAndReturn
   */
  export type ClientInformationFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInformationForm
     */
    select?: ClientInformationFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInformationForm
     */
    omit?: ClientInformationFormOmit<ExtArgs> | null
    /**
     * The data used to update ClientInformationForms.
     */
    data: XOR<ClientInformationFormUpdateManyMutationInput, ClientInformationFormUncheckedUpdateManyInput>
    /**
     * Filter which ClientInformationForms to update
     */
    where?: ClientInformationFormWhereInput
    /**
     * Limit how many ClientInformationForms to update.
     */
    limit?: number
  }

  /**
   * ClientInformationForm upsert
   */
  export type ClientInformationFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInformationForm
     */
    select?: ClientInformationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInformationForm
     */
    omit?: ClientInformationFormOmit<ExtArgs> | null
    /**
     * The filter to search for the ClientInformationForm to update in case it exists.
     */
    where: ClientInformationFormWhereUniqueInput
    /**
     * In case the ClientInformationForm found by the `where` argument doesn't exist, create a new ClientInformationForm with this data.
     */
    create: XOR<ClientInformationFormCreateInput, ClientInformationFormUncheckedCreateInput>
    /**
     * In case the ClientInformationForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientInformationFormUpdateInput, ClientInformationFormUncheckedUpdateInput>
  }

  /**
   * ClientInformationForm delete
   */
  export type ClientInformationFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInformationForm
     */
    select?: ClientInformationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInformationForm
     */
    omit?: ClientInformationFormOmit<ExtArgs> | null
    /**
     * Filter which ClientInformationForm to delete.
     */
    where: ClientInformationFormWhereUniqueInput
  }

  /**
   * ClientInformationForm deleteMany
   */
  export type ClientInformationFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientInformationForms to delete
     */
    where?: ClientInformationFormWhereInput
    /**
     * Limit how many ClientInformationForms to delete.
     */
    limit?: number
  }

  /**
   * ClientInformationForm without action
   */
  export type ClientInformationFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientInformationForm
     */
    select?: ClientInformationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientInformationForm
     */
    omit?: ClientInformationFormOmit<ExtArgs> | null
  }


  /**
   * Model PartnerApplicationForm
   */

  export type AggregatePartnerApplicationForm = {
    _count: PartnerApplicationFormCountAggregateOutputType | null
    _avg: PartnerApplicationFormAvgAggregateOutputType | null
    _sum: PartnerApplicationFormSumAggregateOutputType | null
    _min: PartnerApplicationFormMinAggregateOutputType | null
    _max: PartnerApplicationFormMaxAggregateOutputType | null
  }

  export type PartnerApplicationFormAvgAggregateOutputType = {
    yearsInOperation: number | null
  }

  export type PartnerApplicationFormSumAggregateOutputType = {
    yearsInOperation: number | null
  }

  export type PartnerApplicationFormMinAggregateOutputType = {
    id: string | null
    businessName: string | null
    contactPerson: string | null
    businessAddress: string | null
    phoneNumber: string | null
    email: string | null
    website: string | null
    typeOfBusiness: string | null
    industryCategory: string | null
    yearsInOperation: number | null
    businessRegistrationNumber: string | null
    taxIdentificationNumber: string | null
    reasonForPartnership: string | null
    servicesOrProductsOffered: string | null
    geographicalCoverage: string | null
    preferredCollaborationType: string | null
    previousPartnerships: string | null
    annualRevenue: string | null
    businessLicensesOrPermits: string | null
    insuranceCoverage: string | null
    businessRegistrationCertificate: string | null
    taxIdentificationCertificate: string | null
    portfolioOrReferences: string | null
    declaration: boolean | null
    consent: boolean | null
    signature: string | null
    date: string | null
    createdAt: Date | null
  }

  export type PartnerApplicationFormMaxAggregateOutputType = {
    id: string | null
    businessName: string | null
    contactPerson: string | null
    businessAddress: string | null
    phoneNumber: string | null
    email: string | null
    website: string | null
    typeOfBusiness: string | null
    industryCategory: string | null
    yearsInOperation: number | null
    businessRegistrationNumber: string | null
    taxIdentificationNumber: string | null
    reasonForPartnership: string | null
    servicesOrProductsOffered: string | null
    geographicalCoverage: string | null
    preferredCollaborationType: string | null
    previousPartnerships: string | null
    annualRevenue: string | null
    businessLicensesOrPermits: string | null
    insuranceCoverage: string | null
    businessRegistrationCertificate: string | null
    taxIdentificationCertificate: string | null
    portfolioOrReferences: string | null
    declaration: boolean | null
    consent: boolean | null
    signature: string | null
    date: string | null
    createdAt: Date | null
  }

  export type PartnerApplicationFormCountAggregateOutputType = {
    id: number
    businessName: number
    contactPerson: number
    businessAddress: number
    phoneNumber: number
    email: number
    website: number
    typeOfBusiness: number
    industryCategory: number
    yearsInOperation: number
    businessRegistrationNumber: number
    taxIdentificationNumber: number
    reasonForPartnership: number
    servicesOrProductsOffered: number
    geographicalCoverage: number
    preferredCollaborationType: number
    previousPartnerships: number
    annualRevenue: number
    businessLicensesOrPermits: number
    insuranceCoverage: number
    businessRegistrationCertificate: number
    taxIdentificationCertificate: number
    portfolioOrReferences: number
    declaration: number
    consent: number
    signature: number
    date: number
    createdAt: number
    _all: number
  }


  export type PartnerApplicationFormAvgAggregateInputType = {
    yearsInOperation?: true
  }

  export type PartnerApplicationFormSumAggregateInputType = {
    yearsInOperation?: true
  }

  export type PartnerApplicationFormMinAggregateInputType = {
    id?: true
    businessName?: true
    contactPerson?: true
    businessAddress?: true
    phoneNumber?: true
    email?: true
    website?: true
    typeOfBusiness?: true
    industryCategory?: true
    yearsInOperation?: true
    businessRegistrationNumber?: true
    taxIdentificationNumber?: true
    reasonForPartnership?: true
    servicesOrProductsOffered?: true
    geographicalCoverage?: true
    preferredCollaborationType?: true
    previousPartnerships?: true
    annualRevenue?: true
    businessLicensesOrPermits?: true
    insuranceCoverage?: true
    businessRegistrationCertificate?: true
    taxIdentificationCertificate?: true
    portfolioOrReferences?: true
    declaration?: true
    consent?: true
    signature?: true
    date?: true
    createdAt?: true
  }

  export type PartnerApplicationFormMaxAggregateInputType = {
    id?: true
    businessName?: true
    contactPerson?: true
    businessAddress?: true
    phoneNumber?: true
    email?: true
    website?: true
    typeOfBusiness?: true
    industryCategory?: true
    yearsInOperation?: true
    businessRegistrationNumber?: true
    taxIdentificationNumber?: true
    reasonForPartnership?: true
    servicesOrProductsOffered?: true
    geographicalCoverage?: true
    preferredCollaborationType?: true
    previousPartnerships?: true
    annualRevenue?: true
    businessLicensesOrPermits?: true
    insuranceCoverage?: true
    businessRegistrationCertificate?: true
    taxIdentificationCertificate?: true
    portfolioOrReferences?: true
    declaration?: true
    consent?: true
    signature?: true
    date?: true
    createdAt?: true
  }

  export type PartnerApplicationFormCountAggregateInputType = {
    id?: true
    businessName?: true
    contactPerson?: true
    businessAddress?: true
    phoneNumber?: true
    email?: true
    website?: true
    typeOfBusiness?: true
    industryCategory?: true
    yearsInOperation?: true
    businessRegistrationNumber?: true
    taxIdentificationNumber?: true
    reasonForPartnership?: true
    servicesOrProductsOffered?: true
    geographicalCoverage?: true
    preferredCollaborationType?: true
    previousPartnerships?: true
    annualRevenue?: true
    businessLicensesOrPermits?: true
    insuranceCoverage?: true
    businessRegistrationCertificate?: true
    taxIdentificationCertificate?: true
    portfolioOrReferences?: true
    declaration?: true
    consent?: true
    signature?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type PartnerApplicationFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerApplicationForm to aggregate.
     */
    where?: PartnerApplicationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerApplicationForms to fetch.
     */
    orderBy?: PartnerApplicationFormOrderByWithRelationInput | PartnerApplicationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerApplicationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerApplicationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerApplicationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartnerApplicationForms
    **/
    _count?: true | PartnerApplicationFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartnerApplicationFormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartnerApplicationFormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerApplicationFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerApplicationFormMaxAggregateInputType
  }

  export type GetPartnerApplicationFormAggregateType<T extends PartnerApplicationFormAggregateArgs> = {
        [P in keyof T & keyof AggregatePartnerApplicationForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartnerApplicationForm[P]>
      : GetScalarType<T[P], AggregatePartnerApplicationForm[P]>
  }




  export type PartnerApplicationFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerApplicationFormWhereInput
    orderBy?: PartnerApplicationFormOrderByWithAggregationInput | PartnerApplicationFormOrderByWithAggregationInput[]
    by: PartnerApplicationFormScalarFieldEnum[] | PartnerApplicationFormScalarFieldEnum
    having?: PartnerApplicationFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerApplicationFormCountAggregateInputType | true
    _avg?: PartnerApplicationFormAvgAggregateInputType
    _sum?: PartnerApplicationFormSumAggregateInputType
    _min?: PartnerApplicationFormMinAggregateInputType
    _max?: PartnerApplicationFormMaxAggregateInputType
  }

  export type PartnerApplicationFormGroupByOutputType = {
    id: string
    businessName: string
    contactPerson: string
    businessAddress: string
    phoneNumber: string
    email: string
    website: string | null
    typeOfBusiness: string
    industryCategory: string
    yearsInOperation: number
    businessRegistrationNumber: string
    taxIdentificationNumber: string
    reasonForPartnership: string
    servicesOrProductsOffered: string
    geographicalCoverage: string
    preferredCollaborationType: string
    previousPartnerships: string | null
    annualRevenue: string | null
    businessLicensesOrPermits: string
    insuranceCoverage: string
    businessRegistrationCertificate: string
    taxIdentificationCertificate: string | null
    portfolioOrReferences: string | null
    declaration: boolean
    consent: boolean
    signature: string
    date: string
    createdAt: Date
    _count: PartnerApplicationFormCountAggregateOutputType | null
    _avg: PartnerApplicationFormAvgAggregateOutputType | null
    _sum: PartnerApplicationFormSumAggregateOutputType | null
    _min: PartnerApplicationFormMinAggregateOutputType | null
    _max: PartnerApplicationFormMaxAggregateOutputType | null
  }

  type GetPartnerApplicationFormGroupByPayload<T extends PartnerApplicationFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerApplicationFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerApplicationFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerApplicationFormGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerApplicationFormGroupByOutputType[P]>
        }
      >
    >


  export type PartnerApplicationFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessName?: boolean
    contactPerson?: boolean
    businessAddress?: boolean
    phoneNumber?: boolean
    email?: boolean
    website?: boolean
    typeOfBusiness?: boolean
    industryCategory?: boolean
    yearsInOperation?: boolean
    businessRegistrationNumber?: boolean
    taxIdentificationNumber?: boolean
    reasonForPartnership?: boolean
    servicesOrProductsOffered?: boolean
    geographicalCoverage?: boolean
    preferredCollaborationType?: boolean
    previousPartnerships?: boolean
    annualRevenue?: boolean
    businessLicensesOrPermits?: boolean
    insuranceCoverage?: boolean
    businessRegistrationCertificate?: boolean
    taxIdentificationCertificate?: boolean
    portfolioOrReferences?: boolean
    declaration?: boolean
    consent?: boolean
    signature?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["partnerApplicationForm"]>

  export type PartnerApplicationFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessName?: boolean
    contactPerson?: boolean
    businessAddress?: boolean
    phoneNumber?: boolean
    email?: boolean
    website?: boolean
    typeOfBusiness?: boolean
    industryCategory?: boolean
    yearsInOperation?: boolean
    businessRegistrationNumber?: boolean
    taxIdentificationNumber?: boolean
    reasonForPartnership?: boolean
    servicesOrProductsOffered?: boolean
    geographicalCoverage?: boolean
    preferredCollaborationType?: boolean
    previousPartnerships?: boolean
    annualRevenue?: boolean
    businessLicensesOrPermits?: boolean
    insuranceCoverage?: boolean
    businessRegistrationCertificate?: boolean
    taxIdentificationCertificate?: boolean
    portfolioOrReferences?: boolean
    declaration?: boolean
    consent?: boolean
    signature?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["partnerApplicationForm"]>

  export type PartnerApplicationFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessName?: boolean
    contactPerson?: boolean
    businessAddress?: boolean
    phoneNumber?: boolean
    email?: boolean
    website?: boolean
    typeOfBusiness?: boolean
    industryCategory?: boolean
    yearsInOperation?: boolean
    businessRegistrationNumber?: boolean
    taxIdentificationNumber?: boolean
    reasonForPartnership?: boolean
    servicesOrProductsOffered?: boolean
    geographicalCoverage?: boolean
    preferredCollaborationType?: boolean
    previousPartnerships?: boolean
    annualRevenue?: boolean
    businessLicensesOrPermits?: boolean
    insuranceCoverage?: boolean
    businessRegistrationCertificate?: boolean
    taxIdentificationCertificate?: boolean
    portfolioOrReferences?: boolean
    declaration?: boolean
    consent?: boolean
    signature?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["partnerApplicationForm"]>

  export type PartnerApplicationFormSelectScalar = {
    id?: boolean
    businessName?: boolean
    contactPerson?: boolean
    businessAddress?: boolean
    phoneNumber?: boolean
    email?: boolean
    website?: boolean
    typeOfBusiness?: boolean
    industryCategory?: boolean
    yearsInOperation?: boolean
    businessRegistrationNumber?: boolean
    taxIdentificationNumber?: boolean
    reasonForPartnership?: boolean
    servicesOrProductsOffered?: boolean
    geographicalCoverage?: boolean
    preferredCollaborationType?: boolean
    previousPartnerships?: boolean
    annualRevenue?: boolean
    businessLicensesOrPermits?: boolean
    insuranceCoverage?: boolean
    businessRegistrationCertificate?: boolean
    taxIdentificationCertificate?: boolean
    portfolioOrReferences?: boolean
    declaration?: boolean
    consent?: boolean
    signature?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type PartnerApplicationFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessName" | "contactPerson" | "businessAddress" | "phoneNumber" | "email" | "website" | "typeOfBusiness" | "industryCategory" | "yearsInOperation" | "businessRegistrationNumber" | "taxIdentificationNumber" | "reasonForPartnership" | "servicesOrProductsOffered" | "geographicalCoverage" | "preferredCollaborationType" | "previousPartnerships" | "annualRevenue" | "businessLicensesOrPermits" | "insuranceCoverage" | "businessRegistrationCertificate" | "taxIdentificationCertificate" | "portfolioOrReferences" | "declaration" | "consent" | "signature" | "date" | "createdAt", ExtArgs["result"]["partnerApplicationForm"]>

  export type $PartnerApplicationFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartnerApplicationForm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessName: string
      contactPerson: string
      businessAddress: string
      phoneNumber: string
      email: string
      website: string | null
      typeOfBusiness: string
      industryCategory: string
      yearsInOperation: number
      businessRegistrationNumber: string
      taxIdentificationNumber: string
      reasonForPartnership: string
      servicesOrProductsOffered: string
      geographicalCoverage: string
      preferredCollaborationType: string
      previousPartnerships: string | null
      annualRevenue: string | null
      businessLicensesOrPermits: string
      insuranceCoverage: string
      businessRegistrationCertificate: string
      taxIdentificationCertificate: string | null
      portfolioOrReferences: string | null
      declaration: boolean
      consent: boolean
      signature: string
      date: string
      createdAt: Date
    }, ExtArgs["result"]["partnerApplicationForm"]>
    composites: {}
  }

  type PartnerApplicationFormGetPayload<S extends boolean | null | undefined | PartnerApplicationFormDefaultArgs> = $Result.GetResult<Prisma.$PartnerApplicationFormPayload, S>

  type PartnerApplicationFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartnerApplicationFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnerApplicationFormCountAggregateInputType | true
    }

  export interface PartnerApplicationFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartnerApplicationForm'], meta: { name: 'PartnerApplicationForm' } }
    /**
     * Find zero or one PartnerApplicationForm that matches the filter.
     * @param {PartnerApplicationFormFindUniqueArgs} args - Arguments to find a PartnerApplicationForm
     * @example
     * // Get one PartnerApplicationForm
     * const partnerApplicationForm = await prisma.partnerApplicationForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerApplicationFormFindUniqueArgs>(args: SelectSubset<T, PartnerApplicationFormFindUniqueArgs<ExtArgs>>): Prisma__PartnerApplicationFormClient<$Result.GetResult<Prisma.$PartnerApplicationFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PartnerApplicationForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnerApplicationFormFindUniqueOrThrowArgs} args - Arguments to find a PartnerApplicationForm
     * @example
     * // Get one PartnerApplicationForm
     * const partnerApplicationForm = await prisma.partnerApplicationForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerApplicationFormFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerApplicationFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerApplicationFormClient<$Result.GetResult<Prisma.$PartnerApplicationFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartnerApplicationForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerApplicationFormFindFirstArgs} args - Arguments to find a PartnerApplicationForm
     * @example
     * // Get one PartnerApplicationForm
     * const partnerApplicationForm = await prisma.partnerApplicationForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerApplicationFormFindFirstArgs>(args?: SelectSubset<T, PartnerApplicationFormFindFirstArgs<ExtArgs>>): Prisma__PartnerApplicationFormClient<$Result.GetResult<Prisma.$PartnerApplicationFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartnerApplicationForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerApplicationFormFindFirstOrThrowArgs} args - Arguments to find a PartnerApplicationForm
     * @example
     * // Get one PartnerApplicationForm
     * const partnerApplicationForm = await prisma.partnerApplicationForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerApplicationFormFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerApplicationFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerApplicationFormClient<$Result.GetResult<Prisma.$PartnerApplicationFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PartnerApplicationForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerApplicationFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartnerApplicationForms
     * const partnerApplicationForms = await prisma.partnerApplicationForm.findMany()
     * 
     * // Get first 10 PartnerApplicationForms
     * const partnerApplicationForms = await prisma.partnerApplicationForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerApplicationFormWithIdOnly = await prisma.partnerApplicationForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnerApplicationFormFindManyArgs>(args?: SelectSubset<T, PartnerApplicationFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerApplicationFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PartnerApplicationForm.
     * @param {PartnerApplicationFormCreateArgs} args - Arguments to create a PartnerApplicationForm.
     * @example
     * // Create one PartnerApplicationForm
     * const PartnerApplicationForm = await prisma.partnerApplicationForm.create({
     *   data: {
     *     // ... data to create a PartnerApplicationForm
     *   }
     * })
     * 
     */
    create<T extends PartnerApplicationFormCreateArgs>(args: SelectSubset<T, PartnerApplicationFormCreateArgs<ExtArgs>>): Prisma__PartnerApplicationFormClient<$Result.GetResult<Prisma.$PartnerApplicationFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PartnerApplicationForms.
     * @param {PartnerApplicationFormCreateManyArgs} args - Arguments to create many PartnerApplicationForms.
     * @example
     * // Create many PartnerApplicationForms
     * const partnerApplicationForm = await prisma.partnerApplicationForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerApplicationFormCreateManyArgs>(args?: SelectSubset<T, PartnerApplicationFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PartnerApplicationForms and returns the data saved in the database.
     * @param {PartnerApplicationFormCreateManyAndReturnArgs} args - Arguments to create many PartnerApplicationForms.
     * @example
     * // Create many PartnerApplicationForms
     * const partnerApplicationForm = await prisma.partnerApplicationForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PartnerApplicationForms and only return the `id`
     * const partnerApplicationFormWithIdOnly = await prisma.partnerApplicationForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartnerApplicationFormCreateManyAndReturnArgs>(args?: SelectSubset<T, PartnerApplicationFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerApplicationFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PartnerApplicationForm.
     * @param {PartnerApplicationFormDeleteArgs} args - Arguments to delete one PartnerApplicationForm.
     * @example
     * // Delete one PartnerApplicationForm
     * const PartnerApplicationForm = await prisma.partnerApplicationForm.delete({
     *   where: {
     *     // ... filter to delete one PartnerApplicationForm
     *   }
     * })
     * 
     */
    delete<T extends PartnerApplicationFormDeleteArgs>(args: SelectSubset<T, PartnerApplicationFormDeleteArgs<ExtArgs>>): Prisma__PartnerApplicationFormClient<$Result.GetResult<Prisma.$PartnerApplicationFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PartnerApplicationForm.
     * @param {PartnerApplicationFormUpdateArgs} args - Arguments to update one PartnerApplicationForm.
     * @example
     * // Update one PartnerApplicationForm
     * const partnerApplicationForm = await prisma.partnerApplicationForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerApplicationFormUpdateArgs>(args: SelectSubset<T, PartnerApplicationFormUpdateArgs<ExtArgs>>): Prisma__PartnerApplicationFormClient<$Result.GetResult<Prisma.$PartnerApplicationFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PartnerApplicationForms.
     * @param {PartnerApplicationFormDeleteManyArgs} args - Arguments to filter PartnerApplicationForms to delete.
     * @example
     * // Delete a few PartnerApplicationForms
     * const { count } = await prisma.partnerApplicationForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerApplicationFormDeleteManyArgs>(args?: SelectSubset<T, PartnerApplicationFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerApplicationForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerApplicationFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartnerApplicationForms
     * const partnerApplicationForm = await prisma.partnerApplicationForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerApplicationFormUpdateManyArgs>(args: SelectSubset<T, PartnerApplicationFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerApplicationForms and returns the data updated in the database.
     * @param {PartnerApplicationFormUpdateManyAndReturnArgs} args - Arguments to update many PartnerApplicationForms.
     * @example
     * // Update many PartnerApplicationForms
     * const partnerApplicationForm = await prisma.partnerApplicationForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PartnerApplicationForms and only return the `id`
     * const partnerApplicationFormWithIdOnly = await prisma.partnerApplicationForm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartnerApplicationFormUpdateManyAndReturnArgs>(args: SelectSubset<T, PartnerApplicationFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerApplicationFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PartnerApplicationForm.
     * @param {PartnerApplicationFormUpsertArgs} args - Arguments to update or create a PartnerApplicationForm.
     * @example
     * // Update or create a PartnerApplicationForm
     * const partnerApplicationForm = await prisma.partnerApplicationForm.upsert({
     *   create: {
     *     // ... data to create a PartnerApplicationForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartnerApplicationForm we want to update
     *   }
     * })
     */
    upsert<T extends PartnerApplicationFormUpsertArgs>(args: SelectSubset<T, PartnerApplicationFormUpsertArgs<ExtArgs>>): Prisma__PartnerApplicationFormClient<$Result.GetResult<Prisma.$PartnerApplicationFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PartnerApplicationForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerApplicationFormCountArgs} args - Arguments to filter PartnerApplicationForms to count.
     * @example
     * // Count the number of PartnerApplicationForms
     * const count = await prisma.partnerApplicationForm.count({
     *   where: {
     *     // ... the filter for the PartnerApplicationForms we want to count
     *   }
     * })
    **/
    count<T extends PartnerApplicationFormCountArgs>(
      args?: Subset<T, PartnerApplicationFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerApplicationFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartnerApplicationForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerApplicationFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnerApplicationFormAggregateArgs>(args: Subset<T, PartnerApplicationFormAggregateArgs>): Prisma.PrismaPromise<GetPartnerApplicationFormAggregateType<T>>

    /**
     * Group by PartnerApplicationForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerApplicationFormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnerApplicationFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerApplicationFormGroupByArgs['orderBy'] }
        : { orderBy?: PartnerApplicationFormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnerApplicationFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerApplicationFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartnerApplicationForm model
   */
  readonly fields: PartnerApplicationFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartnerApplicationForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerApplicationFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartnerApplicationForm model
   */
  interface PartnerApplicationFormFieldRefs {
    readonly id: FieldRef<"PartnerApplicationForm", 'String'>
    readonly businessName: FieldRef<"PartnerApplicationForm", 'String'>
    readonly contactPerson: FieldRef<"PartnerApplicationForm", 'String'>
    readonly businessAddress: FieldRef<"PartnerApplicationForm", 'String'>
    readonly phoneNumber: FieldRef<"PartnerApplicationForm", 'String'>
    readonly email: FieldRef<"PartnerApplicationForm", 'String'>
    readonly website: FieldRef<"PartnerApplicationForm", 'String'>
    readonly typeOfBusiness: FieldRef<"PartnerApplicationForm", 'String'>
    readonly industryCategory: FieldRef<"PartnerApplicationForm", 'String'>
    readonly yearsInOperation: FieldRef<"PartnerApplicationForm", 'Int'>
    readonly businessRegistrationNumber: FieldRef<"PartnerApplicationForm", 'String'>
    readonly taxIdentificationNumber: FieldRef<"PartnerApplicationForm", 'String'>
    readonly reasonForPartnership: FieldRef<"PartnerApplicationForm", 'String'>
    readonly servicesOrProductsOffered: FieldRef<"PartnerApplicationForm", 'String'>
    readonly geographicalCoverage: FieldRef<"PartnerApplicationForm", 'String'>
    readonly preferredCollaborationType: FieldRef<"PartnerApplicationForm", 'String'>
    readonly previousPartnerships: FieldRef<"PartnerApplicationForm", 'String'>
    readonly annualRevenue: FieldRef<"PartnerApplicationForm", 'String'>
    readonly businessLicensesOrPermits: FieldRef<"PartnerApplicationForm", 'String'>
    readonly insuranceCoverage: FieldRef<"PartnerApplicationForm", 'String'>
    readonly businessRegistrationCertificate: FieldRef<"PartnerApplicationForm", 'String'>
    readonly taxIdentificationCertificate: FieldRef<"PartnerApplicationForm", 'String'>
    readonly portfolioOrReferences: FieldRef<"PartnerApplicationForm", 'String'>
    readonly declaration: FieldRef<"PartnerApplicationForm", 'Boolean'>
    readonly consent: FieldRef<"PartnerApplicationForm", 'Boolean'>
    readonly signature: FieldRef<"PartnerApplicationForm", 'String'>
    readonly date: FieldRef<"PartnerApplicationForm", 'String'>
    readonly createdAt: FieldRef<"PartnerApplicationForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PartnerApplicationForm findUnique
   */
  export type PartnerApplicationFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerApplicationForm
     */
    select?: PartnerApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerApplicationForm
     */
    omit?: PartnerApplicationFormOmit<ExtArgs> | null
    /**
     * Filter, which PartnerApplicationForm to fetch.
     */
    where: PartnerApplicationFormWhereUniqueInput
  }

  /**
   * PartnerApplicationForm findUniqueOrThrow
   */
  export type PartnerApplicationFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerApplicationForm
     */
    select?: PartnerApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerApplicationForm
     */
    omit?: PartnerApplicationFormOmit<ExtArgs> | null
    /**
     * Filter, which PartnerApplicationForm to fetch.
     */
    where: PartnerApplicationFormWhereUniqueInput
  }

  /**
   * PartnerApplicationForm findFirst
   */
  export type PartnerApplicationFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerApplicationForm
     */
    select?: PartnerApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerApplicationForm
     */
    omit?: PartnerApplicationFormOmit<ExtArgs> | null
    /**
     * Filter, which PartnerApplicationForm to fetch.
     */
    where?: PartnerApplicationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerApplicationForms to fetch.
     */
    orderBy?: PartnerApplicationFormOrderByWithRelationInput | PartnerApplicationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerApplicationForms.
     */
    cursor?: PartnerApplicationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerApplicationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerApplicationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerApplicationForms.
     */
    distinct?: PartnerApplicationFormScalarFieldEnum | PartnerApplicationFormScalarFieldEnum[]
  }

  /**
   * PartnerApplicationForm findFirstOrThrow
   */
  export type PartnerApplicationFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerApplicationForm
     */
    select?: PartnerApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerApplicationForm
     */
    omit?: PartnerApplicationFormOmit<ExtArgs> | null
    /**
     * Filter, which PartnerApplicationForm to fetch.
     */
    where?: PartnerApplicationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerApplicationForms to fetch.
     */
    orderBy?: PartnerApplicationFormOrderByWithRelationInput | PartnerApplicationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerApplicationForms.
     */
    cursor?: PartnerApplicationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerApplicationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerApplicationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerApplicationForms.
     */
    distinct?: PartnerApplicationFormScalarFieldEnum | PartnerApplicationFormScalarFieldEnum[]
  }

  /**
   * PartnerApplicationForm findMany
   */
  export type PartnerApplicationFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerApplicationForm
     */
    select?: PartnerApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerApplicationForm
     */
    omit?: PartnerApplicationFormOmit<ExtArgs> | null
    /**
     * Filter, which PartnerApplicationForms to fetch.
     */
    where?: PartnerApplicationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerApplicationForms to fetch.
     */
    orderBy?: PartnerApplicationFormOrderByWithRelationInput | PartnerApplicationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartnerApplicationForms.
     */
    cursor?: PartnerApplicationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerApplicationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerApplicationForms.
     */
    skip?: number
    distinct?: PartnerApplicationFormScalarFieldEnum | PartnerApplicationFormScalarFieldEnum[]
  }

  /**
   * PartnerApplicationForm create
   */
  export type PartnerApplicationFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerApplicationForm
     */
    select?: PartnerApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerApplicationForm
     */
    omit?: PartnerApplicationFormOmit<ExtArgs> | null
    /**
     * The data needed to create a PartnerApplicationForm.
     */
    data: XOR<PartnerApplicationFormCreateInput, PartnerApplicationFormUncheckedCreateInput>
  }

  /**
   * PartnerApplicationForm createMany
   */
  export type PartnerApplicationFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartnerApplicationForms.
     */
    data: PartnerApplicationFormCreateManyInput | PartnerApplicationFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartnerApplicationForm createManyAndReturn
   */
  export type PartnerApplicationFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerApplicationForm
     */
    select?: PartnerApplicationFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerApplicationForm
     */
    omit?: PartnerApplicationFormOmit<ExtArgs> | null
    /**
     * The data used to create many PartnerApplicationForms.
     */
    data: PartnerApplicationFormCreateManyInput | PartnerApplicationFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartnerApplicationForm update
   */
  export type PartnerApplicationFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerApplicationForm
     */
    select?: PartnerApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerApplicationForm
     */
    omit?: PartnerApplicationFormOmit<ExtArgs> | null
    /**
     * The data needed to update a PartnerApplicationForm.
     */
    data: XOR<PartnerApplicationFormUpdateInput, PartnerApplicationFormUncheckedUpdateInput>
    /**
     * Choose, which PartnerApplicationForm to update.
     */
    where: PartnerApplicationFormWhereUniqueInput
  }

  /**
   * PartnerApplicationForm updateMany
   */
  export type PartnerApplicationFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartnerApplicationForms.
     */
    data: XOR<PartnerApplicationFormUpdateManyMutationInput, PartnerApplicationFormUncheckedUpdateManyInput>
    /**
     * Filter which PartnerApplicationForms to update
     */
    where?: PartnerApplicationFormWhereInput
    /**
     * Limit how many PartnerApplicationForms to update.
     */
    limit?: number
  }

  /**
   * PartnerApplicationForm updateManyAndReturn
   */
  export type PartnerApplicationFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerApplicationForm
     */
    select?: PartnerApplicationFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerApplicationForm
     */
    omit?: PartnerApplicationFormOmit<ExtArgs> | null
    /**
     * The data used to update PartnerApplicationForms.
     */
    data: XOR<PartnerApplicationFormUpdateManyMutationInput, PartnerApplicationFormUncheckedUpdateManyInput>
    /**
     * Filter which PartnerApplicationForms to update
     */
    where?: PartnerApplicationFormWhereInput
    /**
     * Limit how many PartnerApplicationForms to update.
     */
    limit?: number
  }

  /**
   * PartnerApplicationForm upsert
   */
  export type PartnerApplicationFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerApplicationForm
     */
    select?: PartnerApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerApplicationForm
     */
    omit?: PartnerApplicationFormOmit<ExtArgs> | null
    /**
     * The filter to search for the PartnerApplicationForm to update in case it exists.
     */
    where: PartnerApplicationFormWhereUniqueInput
    /**
     * In case the PartnerApplicationForm found by the `where` argument doesn't exist, create a new PartnerApplicationForm with this data.
     */
    create: XOR<PartnerApplicationFormCreateInput, PartnerApplicationFormUncheckedCreateInput>
    /**
     * In case the PartnerApplicationForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerApplicationFormUpdateInput, PartnerApplicationFormUncheckedUpdateInput>
  }

  /**
   * PartnerApplicationForm delete
   */
  export type PartnerApplicationFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerApplicationForm
     */
    select?: PartnerApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerApplicationForm
     */
    omit?: PartnerApplicationFormOmit<ExtArgs> | null
    /**
     * Filter which PartnerApplicationForm to delete.
     */
    where: PartnerApplicationFormWhereUniqueInput
  }

  /**
   * PartnerApplicationForm deleteMany
   */
  export type PartnerApplicationFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerApplicationForms to delete
     */
    where?: PartnerApplicationFormWhereInput
    /**
     * Limit how many PartnerApplicationForms to delete.
     */
    limit?: number
  }

  /**
   * PartnerApplicationForm without action
   */
  export type PartnerApplicationFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerApplicationForm
     */
    select?: PartnerApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerApplicationForm
     */
    omit?: PartnerApplicationFormOmit<ExtArgs> | null
  }


  /**
   * Model TaxFilingForm
   */

  export type AggregateTaxFilingForm = {
    _count: TaxFilingFormCountAggregateOutputType | null
    _min: TaxFilingFormMinAggregateOutputType | null
    _max: TaxFilingFormMaxAggregateOutputType | null
  }

  export type TaxFilingFormMinAggregateOutputType = {
    id: string | null
    name: string | null
    birthday: string | null
    phoneNumber: string | null
    email: string | null
    facebookName: string | null
    instagramName: string | null
    taxYear: string | null
    cashAdvance: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    ssn: string | null
    streetAddress: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    occupation: string | null
    refundOption: string | null
    createdAt: Date | null
  }

  export type TaxFilingFormMaxAggregateOutputType = {
    id: string | null
    name: string | null
    birthday: string | null
    phoneNumber: string | null
    email: string | null
    facebookName: string | null
    instagramName: string | null
    taxYear: string | null
    cashAdvance: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    ssn: string | null
    streetAddress: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    occupation: string | null
    refundOption: string | null
    createdAt: Date | null
  }

  export type TaxFilingFormCountAggregateOutputType = {
    id: number
    name: number
    birthday: number
    phoneNumber: number
    email: number
    facebookName: number
    instagramName: number
    taxYear: number
    cashAdvance: number
    firstName: number
    middleName: number
    lastName: number
    ssn: number
    streetAddress: number
    addressLine2: number
    city: number
    state: number
    zipCode: number
    occupation: number
    refundOption: number
    createdAt: number
    _all: number
  }


  export type TaxFilingFormMinAggregateInputType = {
    id?: true
    name?: true
    birthday?: true
    phoneNumber?: true
    email?: true
    facebookName?: true
    instagramName?: true
    taxYear?: true
    cashAdvance?: true
    firstName?: true
    middleName?: true
    lastName?: true
    ssn?: true
    streetAddress?: true
    addressLine2?: true
    city?: true
    state?: true
    zipCode?: true
    occupation?: true
    refundOption?: true
    createdAt?: true
  }

  export type TaxFilingFormMaxAggregateInputType = {
    id?: true
    name?: true
    birthday?: true
    phoneNumber?: true
    email?: true
    facebookName?: true
    instagramName?: true
    taxYear?: true
    cashAdvance?: true
    firstName?: true
    middleName?: true
    lastName?: true
    ssn?: true
    streetAddress?: true
    addressLine2?: true
    city?: true
    state?: true
    zipCode?: true
    occupation?: true
    refundOption?: true
    createdAt?: true
  }

  export type TaxFilingFormCountAggregateInputType = {
    id?: true
    name?: true
    birthday?: true
    phoneNumber?: true
    email?: true
    facebookName?: true
    instagramName?: true
    taxYear?: true
    cashAdvance?: true
    firstName?: true
    middleName?: true
    lastName?: true
    ssn?: true
    streetAddress?: true
    addressLine2?: true
    city?: true
    state?: true
    zipCode?: true
    occupation?: true
    refundOption?: true
    createdAt?: true
    _all?: true
  }

  export type TaxFilingFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxFilingForm to aggregate.
     */
    where?: TaxFilingFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxFilingForms to fetch.
     */
    orderBy?: TaxFilingFormOrderByWithRelationInput | TaxFilingFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaxFilingFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxFilingForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxFilingForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaxFilingForms
    **/
    _count?: true | TaxFilingFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxFilingFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxFilingFormMaxAggregateInputType
  }

  export type GetTaxFilingFormAggregateType<T extends TaxFilingFormAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxFilingForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxFilingForm[P]>
      : GetScalarType<T[P], AggregateTaxFilingForm[P]>
  }




  export type TaxFilingFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxFilingFormWhereInput
    orderBy?: TaxFilingFormOrderByWithAggregationInput | TaxFilingFormOrderByWithAggregationInput[]
    by: TaxFilingFormScalarFieldEnum[] | TaxFilingFormScalarFieldEnum
    having?: TaxFilingFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxFilingFormCountAggregateInputType | true
    _min?: TaxFilingFormMinAggregateInputType
    _max?: TaxFilingFormMaxAggregateInputType
  }

  export type TaxFilingFormGroupByOutputType = {
    id: string
    name: string
    birthday: string
    phoneNumber: string
    email: string
    facebookName: string | null
    instagramName: string | null
    taxYear: string
    cashAdvance: string
    firstName: string
    middleName: string | null
    lastName: string
    ssn: string
    streetAddress: string
    addressLine2: string | null
    city: string
    state: string
    zipCode: string
    occupation: string | null
    refundOption: string
    createdAt: Date
    _count: TaxFilingFormCountAggregateOutputType | null
    _min: TaxFilingFormMinAggregateOutputType | null
    _max: TaxFilingFormMaxAggregateOutputType | null
  }

  type GetTaxFilingFormGroupByPayload<T extends TaxFilingFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaxFilingFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxFilingFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxFilingFormGroupByOutputType[P]>
            : GetScalarType<T[P], TaxFilingFormGroupByOutputType[P]>
        }
      >
    >


  export type TaxFilingFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birthday?: boolean
    phoneNumber?: boolean
    email?: boolean
    facebookName?: boolean
    instagramName?: boolean
    taxYear?: boolean
    cashAdvance?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    ssn?: boolean
    streetAddress?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    occupation?: boolean
    refundOption?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["taxFilingForm"]>

  export type TaxFilingFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birthday?: boolean
    phoneNumber?: boolean
    email?: boolean
    facebookName?: boolean
    instagramName?: boolean
    taxYear?: boolean
    cashAdvance?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    ssn?: boolean
    streetAddress?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    occupation?: boolean
    refundOption?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["taxFilingForm"]>

  export type TaxFilingFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birthday?: boolean
    phoneNumber?: boolean
    email?: boolean
    facebookName?: boolean
    instagramName?: boolean
    taxYear?: boolean
    cashAdvance?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    ssn?: boolean
    streetAddress?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    occupation?: boolean
    refundOption?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["taxFilingForm"]>

  export type TaxFilingFormSelectScalar = {
    id?: boolean
    name?: boolean
    birthday?: boolean
    phoneNumber?: boolean
    email?: boolean
    facebookName?: boolean
    instagramName?: boolean
    taxYear?: boolean
    cashAdvance?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    ssn?: boolean
    streetAddress?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    occupation?: boolean
    refundOption?: boolean
    createdAt?: boolean
  }

  export type TaxFilingFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "birthday" | "phoneNumber" | "email" | "facebookName" | "instagramName" | "taxYear" | "cashAdvance" | "firstName" | "middleName" | "lastName" | "ssn" | "streetAddress" | "addressLine2" | "city" | "state" | "zipCode" | "occupation" | "refundOption" | "createdAt", ExtArgs["result"]["taxFilingForm"]>

  export type $TaxFilingFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaxFilingForm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      birthday: string
      phoneNumber: string
      email: string
      facebookName: string | null
      instagramName: string | null
      taxYear: string
      cashAdvance: string
      firstName: string
      middleName: string | null
      lastName: string
      ssn: string
      streetAddress: string
      addressLine2: string | null
      city: string
      state: string
      zipCode: string
      occupation: string | null
      refundOption: string
      createdAt: Date
    }, ExtArgs["result"]["taxFilingForm"]>
    composites: {}
  }

  type TaxFilingFormGetPayload<S extends boolean | null | undefined | TaxFilingFormDefaultArgs> = $Result.GetResult<Prisma.$TaxFilingFormPayload, S>

  type TaxFilingFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaxFilingFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaxFilingFormCountAggregateInputType | true
    }

  export interface TaxFilingFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaxFilingForm'], meta: { name: 'TaxFilingForm' } }
    /**
     * Find zero or one TaxFilingForm that matches the filter.
     * @param {TaxFilingFormFindUniqueArgs} args - Arguments to find a TaxFilingForm
     * @example
     * // Get one TaxFilingForm
     * const taxFilingForm = await prisma.taxFilingForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxFilingFormFindUniqueArgs>(args: SelectSubset<T, TaxFilingFormFindUniqueArgs<ExtArgs>>): Prisma__TaxFilingFormClient<$Result.GetResult<Prisma.$TaxFilingFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaxFilingForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxFilingFormFindUniqueOrThrowArgs} args - Arguments to find a TaxFilingForm
     * @example
     * // Get one TaxFilingForm
     * const taxFilingForm = await prisma.taxFilingForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxFilingFormFindUniqueOrThrowArgs>(args: SelectSubset<T, TaxFilingFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaxFilingFormClient<$Result.GetResult<Prisma.$TaxFilingFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxFilingForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFilingFormFindFirstArgs} args - Arguments to find a TaxFilingForm
     * @example
     * // Get one TaxFilingForm
     * const taxFilingForm = await prisma.taxFilingForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxFilingFormFindFirstArgs>(args?: SelectSubset<T, TaxFilingFormFindFirstArgs<ExtArgs>>): Prisma__TaxFilingFormClient<$Result.GetResult<Prisma.$TaxFilingFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxFilingForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFilingFormFindFirstOrThrowArgs} args - Arguments to find a TaxFilingForm
     * @example
     * // Get one TaxFilingForm
     * const taxFilingForm = await prisma.taxFilingForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxFilingFormFindFirstOrThrowArgs>(args?: SelectSubset<T, TaxFilingFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaxFilingFormClient<$Result.GetResult<Prisma.$TaxFilingFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaxFilingForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFilingFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaxFilingForms
     * const taxFilingForms = await prisma.taxFilingForm.findMany()
     * 
     * // Get first 10 TaxFilingForms
     * const taxFilingForms = await prisma.taxFilingForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxFilingFormWithIdOnly = await prisma.taxFilingForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaxFilingFormFindManyArgs>(args?: SelectSubset<T, TaxFilingFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxFilingFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaxFilingForm.
     * @param {TaxFilingFormCreateArgs} args - Arguments to create a TaxFilingForm.
     * @example
     * // Create one TaxFilingForm
     * const TaxFilingForm = await prisma.taxFilingForm.create({
     *   data: {
     *     // ... data to create a TaxFilingForm
     *   }
     * })
     * 
     */
    create<T extends TaxFilingFormCreateArgs>(args: SelectSubset<T, TaxFilingFormCreateArgs<ExtArgs>>): Prisma__TaxFilingFormClient<$Result.GetResult<Prisma.$TaxFilingFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaxFilingForms.
     * @param {TaxFilingFormCreateManyArgs} args - Arguments to create many TaxFilingForms.
     * @example
     * // Create many TaxFilingForms
     * const taxFilingForm = await prisma.taxFilingForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaxFilingFormCreateManyArgs>(args?: SelectSubset<T, TaxFilingFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaxFilingForms and returns the data saved in the database.
     * @param {TaxFilingFormCreateManyAndReturnArgs} args - Arguments to create many TaxFilingForms.
     * @example
     * // Create many TaxFilingForms
     * const taxFilingForm = await prisma.taxFilingForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaxFilingForms and only return the `id`
     * const taxFilingFormWithIdOnly = await prisma.taxFilingForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaxFilingFormCreateManyAndReturnArgs>(args?: SelectSubset<T, TaxFilingFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxFilingFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaxFilingForm.
     * @param {TaxFilingFormDeleteArgs} args - Arguments to delete one TaxFilingForm.
     * @example
     * // Delete one TaxFilingForm
     * const TaxFilingForm = await prisma.taxFilingForm.delete({
     *   where: {
     *     // ... filter to delete one TaxFilingForm
     *   }
     * })
     * 
     */
    delete<T extends TaxFilingFormDeleteArgs>(args: SelectSubset<T, TaxFilingFormDeleteArgs<ExtArgs>>): Prisma__TaxFilingFormClient<$Result.GetResult<Prisma.$TaxFilingFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaxFilingForm.
     * @param {TaxFilingFormUpdateArgs} args - Arguments to update one TaxFilingForm.
     * @example
     * // Update one TaxFilingForm
     * const taxFilingForm = await prisma.taxFilingForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaxFilingFormUpdateArgs>(args: SelectSubset<T, TaxFilingFormUpdateArgs<ExtArgs>>): Prisma__TaxFilingFormClient<$Result.GetResult<Prisma.$TaxFilingFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaxFilingForms.
     * @param {TaxFilingFormDeleteManyArgs} args - Arguments to filter TaxFilingForms to delete.
     * @example
     * // Delete a few TaxFilingForms
     * const { count } = await prisma.taxFilingForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaxFilingFormDeleteManyArgs>(args?: SelectSubset<T, TaxFilingFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxFilingForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFilingFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaxFilingForms
     * const taxFilingForm = await prisma.taxFilingForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaxFilingFormUpdateManyArgs>(args: SelectSubset<T, TaxFilingFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxFilingForms and returns the data updated in the database.
     * @param {TaxFilingFormUpdateManyAndReturnArgs} args - Arguments to update many TaxFilingForms.
     * @example
     * // Update many TaxFilingForms
     * const taxFilingForm = await prisma.taxFilingForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaxFilingForms and only return the `id`
     * const taxFilingFormWithIdOnly = await prisma.taxFilingForm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaxFilingFormUpdateManyAndReturnArgs>(args: SelectSubset<T, TaxFilingFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxFilingFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaxFilingForm.
     * @param {TaxFilingFormUpsertArgs} args - Arguments to update or create a TaxFilingForm.
     * @example
     * // Update or create a TaxFilingForm
     * const taxFilingForm = await prisma.taxFilingForm.upsert({
     *   create: {
     *     // ... data to create a TaxFilingForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaxFilingForm we want to update
     *   }
     * })
     */
    upsert<T extends TaxFilingFormUpsertArgs>(args: SelectSubset<T, TaxFilingFormUpsertArgs<ExtArgs>>): Prisma__TaxFilingFormClient<$Result.GetResult<Prisma.$TaxFilingFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaxFilingForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFilingFormCountArgs} args - Arguments to filter TaxFilingForms to count.
     * @example
     * // Count the number of TaxFilingForms
     * const count = await prisma.taxFilingForm.count({
     *   where: {
     *     // ... the filter for the TaxFilingForms we want to count
     *   }
     * })
    **/
    count<T extends TaxFilingFormCountArgs>(
      args?: Subset<T, TaxFilingFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxFilingFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaxFilingForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFilingFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaxFilingFormAggregateArgs>(args: Subset<T, TaxFilingFormAggregateArgs>): Prisma.PrismaPromise<GetTaxFilingFormAggregateType<T>>

    /**
     * Group by TaxFilingForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFilingFormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaxFilingFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxFilingFormGroupByArgs['orderBy'] }
        : { orderBy?: TaxFilingFormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaxFilingFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxFilingFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaxFilingForm model
   */
  readonly fields: TaxFilingFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaxFilingForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaxFilingFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaxFilingForm model
   */
  interface TaxFilingFormFieldRefs {
    readonly id: FieldRef<"TaxFilingForm", 'String'>
    readonly name: FieldRef<"TaxFilingForm", 'String'>
    readonly birthday: FieldRef<"TaxFilingForm", 'String'>
    readonly phoneNumber: FieldRef<"TaxFilingForm", 'String'>
    readonly email: FieldRef<"TaxFilingForm", 'String'>
    readonly facebookName: FieldRef<"TaxFilingForm", 'String'>
    readonly instagramName: FieldRef<"TaxFilingForm", 'String'>
    readonly taxYear: FieldRef<"TaxFilingForm", 'String'>
    readonly cashAdvance: FieldRef<"TaxFilingForm", 'String'>
    readonly firstName: FieldRef<"TaxFilingForm", 'String'>
    readonly middleName: FieldRef<"TaxFilingForm", 'String'>
    readonly lastName: FieldRef<"TaxFilingForm", 'String'>
    readonly ssn: FieldRef<"TaxFilingForm", 'String'>
    readonly streetAddress: FieldRef<"TaxFilingForm", 'String'>
    readonly addressLine2: FieldRef<"TaxFilingForm", 'String'>
    readonly city: FieldRef<"TaxFilingForm", 'String'>
    readonly state: FieldRef<"TaxFilingForm", 'String'>
    readonly zipCode: FieldRef<"TaxFilingForm", 'String'>
    readonly occupation: FieldRef<"TaxFilingForm", 'String'>
    readonly refundOption: FieldRef<"TaxFilingForm", 'String'>
    readonly createdAt: FieldRef<"TaxFilingForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaxFilingForm findUnique
   */
  export type TaxFilingFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxFilingForm
     */
    select?: TaxFilingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxFilingForm
     */
    omit?: TaxFilingFormOmit<ExtArgs> | null
    /**
     * Filter, which TaxFilingForm to fetch.
     */
    where: TaxFilingFormWhereUniqueInput
  }

  /**
   * TaxFilingForm findUniqueOrThrow
   */
  export type TaxFilingFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxFilingForm
     */
    select?: TaxFilingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxFilingForm
     */
    omit?: TaxFilingFormOmit<ExtArgs> | null
    /**
     * Filter, which TaxFilingForm to fetch.
     */
    where: TaxFilingFormWhereUniqueInput
  }

  /**
   * TaxFilingForm findFirst
   */
  export type TaxFilingFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxFilingForm
     */
    select?: TaxFilingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxFilingForm
     */
    omit?: TaxFilingFormOmit<ExtArgs> | null
    /**
     * Filter, which TaxFilingForm to fetch.
     */
    where?: TaxFilingFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxFilingForms to fetch.
     */
    orderBy?: TaxFilingFormOrderByWithRelationInput | TaxFilingFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxFilingForms.
     */
    cursor?: TaxFilingFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxFilingForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxFilingForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxFilingForms.
     */
    distinct?: TaxFilingFormScalarFieldEnum | TaxFilingFormScalarFieldEnum[]
  }

  /**
   * TaxFilingForm findFirstOrThrow
   */
  export type TaxFilingFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxFilingForm
     */
    select?: TaxFilingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxFilingForm
     */
    omit?: TaxFilingFormOmit<ExtArgs> | null
    /**
     * Filter, which TaxFilingForm to fetch.
     */
    where?: TaxFilingFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxFilingForms to fetch.
     */
    orderBy?: TaxFilingFormOrderByWithRelationInput | TaxFilingFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxFilingForms.
     */
    cursor?: TaxFilingFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxFilingForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxFilingForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxFilingForms.
     */
    distinct?: TaxFilingFormScalarFieldEnum | TaxFilingFormScalarFieldEnum[]
  }

  /**
   * TaxFilingForm findMany
   */
  export type TaxFilingFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxFilingForm
     */
    select?: TaxFilingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxFilingForm
     */
    omit?: TaxFilingFormOmit<ExtArgs> | null
    /**
     * Filter, which TaxFilingForms to fetch.
     */
    where?: TaxFilingFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxFilingForms to fetch.
     */
    orderBy?: TaxFilingFormOrderByWithRelationInput | TaxFilingFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaxFilingForms.
     */
    cursor?: TaxFilingFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxFilingForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxFilingForms.
     */
    skip?: number
    distinct?: TaxFilingFormScalarFieldEnum | TaxFilingFormScalarFieldEnum[]
  }

  /**
   * TaxFilingForm create
   */
  export type TaxFilingFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxFilingForm
     */
    select?: TaxFilingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxFilingForm
     */
    omit?: TaxFilingFormOmit<ExtArgs> | null
    /**
     * The data needed to create a TaxFilingForm.
     */
    data: XOR<TaxFilingFormCreateInput, TaxFilingFormUncheckedCreateInput>
  }

  /**
   * TaxFilingForm createMany
   */
  export type TaxFilingFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaxFilingForms.
     */
    data: TaxFilingFormCreateManyInput | TaxFilingFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaxFilingForm createManyAndReturn
   */
  export type TaxFilingFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxFilingForm
     */
    select?: TaxFilingFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxFilingForm
     */
    omit?: TaxFilingFormOmit<ExtArgs> | null
    /**
     * The data used to create many TaxFilingForms.
     */
    data: TaxFilingFormCreateManyInput | TaxFilingFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaxFilingForm update
   */
  export type TaxFilingFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxFilingForm
     */
    select?: TaxFilingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxFilingForm
     */
    omit?: TaxFilingFormOmit<ExtArgs> | null
    /**
     * The data needed to update a TaxFilingForm.
     */
    data: XOR<TaxFilingFormUpdateInput, TaxFilingFormUncheckedUpdateInput>
    /**
     * Choose, which TaxFilingForm to update.
     */
    where: TaxFilingFormWhereUniqueInput
  }

  /**
   * TaxFilingForm updateMany
   */
  export type TaxFilingFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaxFilingForms.
     */
    data: XOR<TaxFilingFormUpdateManyMutationInput, TaxFilingFormUncheckedUpdateManyInput>
    /**
     * Filter which TaxFilingForms to update
     */
    where?: TaxFilingFormWhereInput
    /**
     * Limit how many TaxFilingForms to update.
     */
    limit?: number
  }

  /**
   * TaxFilingForm updateManyAndReturn
   */
  export type TaxFilingFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxFilingForm
     */
    select?: TaxFilingFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxFilingForm
     */
    omit?: TaxFilingFormOmit<ExtArgs> | null
    /**
     * The data used to update TaxFilingForms.
     */
    data: XOR<TaxFilingFormUpdateManyMutationInput, TaxFilingFormUncheckedUpdateManyInput>
    /**
     * Filter which TaxFilingForms to update
     */
    where?: TaxFilingFormWhereInput
    /**
     * Limit how many TaxFilingForms to update.
     */
    limit?: number
  }

  /**
   * TaxFilingForm upsert
   */
  export type TaxFilingFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxFilingForm
     */
    select?: TaxFilingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxFilingForm
     */
    omit?: TaxFilingFormOmit<ExtArgs> | null
    /**
     * The filter to search for the TaxFilingForm to update in case it exists.
     */
    where: TaxFilingFormWhereUniqueInput
    /**
     * In case the TaxFilingForm found by the `where` argument doesn't exist, create a new TaxFilingForm with this data.
     */
    create: XOR<TaxFilingFormCreateInput, TaxFilingFormUncheckedCreateInput>
    /**
     * In case the TaxFilingForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaxFilingFormUpdateInput, TaxFilingFormUncheckedUpdateInput>
  }

  /**
   * TaxFilingForm delete
   */
  export type TaxFilingFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxFilingForm
     */
    select?: TaxFilingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxFilingForm
     */
    omit?: TaxFilingFormOmit<ExtArgs> | null
    /**
     * Filter which TaxFilingForm to delete.
     */
    where: TaxFilingFormWhereUniqueInput
  }

  /**
   * TaxFilingForm deleteMany
   */
  export type TaxFilingFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxFilingForms to delete
     */
    where?: TaxFilingFormWhereInput
    /**
     * Limit how many TaxFilingForms to delete.
     */
    limit?: number
  }

  /**
   * TaxFilingForm without action
   */
  export type TaxFilingFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxFilingForm
     */
    select?: TaxFilingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxFilingForm
     */
    omit?: TaxFilingFormOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ContactMessageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    company: 'company',
    reason: 'reason',
    subject: 'subject',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type ContactMessageScalarFieldEnum = (typeof ContactMessageScalarFieldEnum)[keyof typeof ContactMessageScalarFieldEnum]


  export const ConsultationMessageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    city: 'city',
    country: 'country',
    state: 'state',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type ConsultationMessageScalarFieldEnum = (typeof ConsultationMessageScalarFieldEnum)[keyof typeof ConsultationMessageScalarFieldEnum]


  export const TaxScenarioScalarFieldEnum: {
    id: 'id',
    description: 'description',
    income: 'income',
    deductions: 'deductions',
    taxRate: 'taxRate'
  };

  export type TaxScenarioScalarFieldEnum = (typeof TaxScenarioScalarFieldEnum)[keyof typeof TaxScenarioScalarFieldEnum]


  export const ClientInformationFormScalarFieldEnum: {
    id: 'id',
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

  export type ClientInformationFormScalarFieldEnum = (typeof ClientInformationFormScalarFieldEnum)[keyof typeof ClientInformationFormScalarFieldEnum]


  export const PartnerApplicationFormScalarFieldEnum: {
    id: 'id',
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

  export type PartnerApplicationFormScalarFieldEnum = (typeof PartnerApplicationFormScalarFieldEnum)[keyof typeof PartnerApplicationFormScalarFieldEnum]


  export const TaxFilingFormScalarFieldEnum: {
    id: 'id',
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

  export type TaxFilingFormScalarFieldEnum = (typeof TaxFilingFormScalarFieldEnum)[keyof typeof TaxFilingFormScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    verifyCode?: StringNullableFilter<"User"> | string | null
    verifyCodeExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    isAcceptingMessages?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verifyCode?: SortOrderInput | SortOrder
    verifyCodeExpiry?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    isAcceptingMessages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    verifyCode?: StringNullableFilter<"User"> | string | null
    verifyCodeExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    isAcceptingMessages?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verifyCode?: SortOrderInput | SortOrder
    verifyCodeExpiry?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    isAcceptingMessages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    verifyCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    verifyCodeExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isAcceptingMessages?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ContactMessageWhereInput = {
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    id?: StringFilter<"ContactMessage"> | string
    name?: StringFilter<"ContactMessage"> | string
    email?: StringFilter<"ContactMessage"> | string
    phone?: StringFilter<"ContactMessage"> | string
    company?: StringFilter<"ContactMessage"> | string
    reason?: StringFilter<"ContactMessage"> | string
    subject?: StringFilter<"ContactMessage"> | string
    message?: StringFilter<"ContactMessage"> | string
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string
  }

  export type ContactMessageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    reason?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    name?: StringFilter<"ContactMessage"> | string
    email?: StringFilter<"ContactMessage"> | string
    phone?: StringFilter<"ContactMessage"> | string
    company?: StringFilter<"ContactMessage"> | string
    reason?: StringFilter<"ContactMessage"> | string
    subject?: StringFilter<"ContactMessage"> | string
    message?: StringFilter<"ContactMessage"> | string
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string
  }, "id">

  export type ContactMessageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    reason?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: ContactMessageCountOrderByAggregateInput
    _max?: ContactMessageMaxOrderByAggregateInput
    _min?: ContactMessageMinOrderByAggregateInput
  }

  export type ContactMessageScalarWhereWithAggregatesInput = {
    AND?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    OR?: ContactMessageScalarWhereWithAggregatesInput[]
    NOT?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactMessage"> | string
    name?: StringWithAggregatesFilter<"ContactMessage"> | string
    email?: StringWithAggregatesFilter<"ContactMessage"> | string
    phone?: StringWithAggregatesFilter<"ContactMessage"> | string
    company?: StringWithAggregatesFilter<"ContactMessage"> | string
    reason?: StringWithAggregatesFilter<"ContactMessage"> | string
    subject?: StringWithAggregatesFilter<"ContactMessage"> | string
    message?: StringWithAggregatesFilter<"ContactMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactMessage"> | Date | string
  }

  export type ConsultationMessageWhereInput = {
    AND?: ConsultationMessageWhereInput | ConsultationMessageWhereInput[]
    OR?: ConsultationMessageWhereInput[]
    NOT?: ConsultationMessageWhereInput | ConsultationMessageWhereInput[]
    id?: StringFilter<"ConsultationMessage"> | string
    name?: StringFilter<"ConsultationMessage"> | string
    email?: StringFilter<"ConsultationMessage"> | string
    phone?: StringFilter<"ConsultationMessage"> | string
    city?: StringFilter<"ConsultationMessage"> | string
    country?: StringFilter<"ConsultationMessage"> | string
    state?: StringFilter<"ConsultationMessage"> | string
    message?: StringFilter<"ConsultationMessage"> | string
    createdAt?: DateTimeFilter<"ConsultationMessage"> | Date | string
  }

  export type ConsultationMessageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    country?: SortOrder
    state?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultationMessageWhereInput | ConsultationMessageWhereInput[]
    OR?: ConsultationMessageWhereInput[]
    NOT?: ConsultationMessageWhereInput | ConsultationMessageWhereInput[]
    name?: StringFilter<"ConsultationMessage"> | string
    email?: StringFilter<"ConsultationMessage"> | string
    phone?: StringFilter<"ConsultationMessage"> | string
    city?: StringFilter<"ConsultationMessage"> | string
    country?: StringFilter<"ConsultationMessage"> | string
    state?: StringFilter<"ConsultationMessage"> | string
    message?: StringFilter<"ConsultationMessage"> | string
    createdAt?: DateTimeFilter<"ConsultationMessage"> | Date | string
  }, "id">

  export type ConsultationMessageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    country?: SortOrder
    state?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: ConsultationMessageCountOrderByAggregateInput
    _max?: ConsultationMessageMaxOrderByAggregateInput
    _min?: ConsultationMessageMinOrderByAggregateInput
  }

  export type ConsultationMessageScalarWhereWithAggregatesInput = {
    AND?: ConsultationMessageScalarWhereWithAggregatesInput | ConsultationMessageScalarWhereWithAggregatesInput[]
    OR?: ConsultationMessageScalarWhereWithAggregatesInput[]
    NOT?: ConsultationMessageScalarWhereWithAggregatesInput | ConsultationMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConsultationMessage"> | string
    name?: StringWithAggregatesFilter<"ConsultationMessage"> | string
    email?: StringWithAggregatesFilter<"ConsultationMessage"> | string
    phone?: StringWithAggregatesFilter<"ConsultationMessage"> | string
    city?: StringWithAggregatesFilter<"ConsultationMessage"> | string
    country?: StringWithAggregatesFilter<"ConsultationMessage"> | string
    state?: StringWithAggregatesFilter<"ConsultationMessage"> | string
    message?: StringWithAggregatesFilter<"ConsultationMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConsultationMessage"> | Date | string
  }

  export type TaxScenarioWhereInput = {
    AND?: TaxScenarioWhereInput | TaxScenarioWhereInput[]
    OR?: TaxScenarioWhereInput[]
    NOT?: TaxScenarioWhereInput | TaxScenarioWhereInput[]
    id?: IntFilter<"TaxScenario"> | number
    description?: StringFilter<"TaxScenario"> | string
    income?: FloatFilter<"TaxScenario"> | number
    deductions?: FloatFilter<"TaxScenario"> | number
    taxRate?: FloatFilter<"TaxScenario"> | number
  }

  export type TaxScenarioOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    income?: SortOrder
    deductions?: SortOrder
    taxRate?: SortOrder
  }

  export type TaxScenarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaxScenarioWhereInput | TaxScenarioWhereInput[]
    OR?: TaxScenarioWhereInput[]
    NOT?: TaxScenarioWhereInput | TaxScenarioWhereInput[]
    description?: StringFilter<"TaxScenario"> | string
    income?: FloatFilter<"TaxScenario"> | number
    deductions?: FloatFilter<"TaxScenario"> | number
    taxRate?: FloatFilter<"TaxScenario"> | number
  }, "id">

  export type TaxScenarioOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    income?: SortOrder
    deductions?: SortOrder
    taxRate?: SortOrder
    _count?: TaxScenarioCountOrderByAggregateInput
    _avg?: TaxScenarioAvgOrderByAggregateInput
    _max?: TaxScenarioMaxOrderByAggregateInput
    _min?: TaxScenarioMinOrderByAggregateInput
    _sum?: TaxScenarioSumOrderByAggregateInput
  }

  export type TaxScenarioScalarWhereWithAggregatesInput = {
    AND?: TaxScenarioScalarWhereWithAggregatesInput | TaxScenarioScalarWhereWithAggregatesInput[]
    OR?: TaxScenarioScalarWhereWithAggregatesInput[]
    NOT?: TaxScenarioScalarWhereWithAggregatesInput | TaxScenarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaxScenario"> | number
    description?: StringWithAggregatesFilter<"TaxScenario"> | string
    income?: FloatWithAggregatesFilter<"TaxScenario"> | number
    deductions?: FloatWithAggregatesFilter<"TaxScenario"> | number
    taxRate?: FloatWithAggregatesFilter<"TaxScenario"> | number
  }

  export type ClientInformationFormWhereInput = {
    AND?: ClientInformationFormWhereInput | ClientInformationFormWhereInput[]
    OR?: ClientInformationFormWhereInput[]
    NOT?: ClientInformationFormWhereInput | ClientInformationFormWhereInput[]
    id?: StringFilter<"ClientInformationForm"> | string
    fullName?: StringFilter<"ClientInformationForm"> | string
    businessName?: StringNullableFilter<"ClientInformationForm"> | string | null
    phoneNumber?: StringFilter<"ClientInformationForm"> | string
    email?: StringFilter<"ClientInformationForm"> | string
    address?: StringFilter<"ClientInformationForm"> | string
    preferredContactMethod?: StringFilter<"ClientInformationForm"> | string
    businessType?: StringNullableFilter<"ClientInformationForm"> | string | null
    industryCategory?: StringNullableFilter<"ClientInformationForm"> | string | null
    taxIdentificationNumber?: StringNullableFilter<"ClientInformationForm"> | string | null
    businessRegistrationNumber?: StringNullableFilter<"ClientInformationForm"> | string | null
    annualRevenueRange?: StringNullableFilter<"ClientInformationForm"> | string | null
    numberOfEmployees?: IntNullableFilter<"ClientInformationForm"> | number | null
    servicesRequired?: StringNullableListFilter<"ClientInformationForm">
    frequencyOfService?: StringFilter<"ClientInformationForm"> | string
    specificGoalsOrNeeds?: StringFilter<"ClientInformationForm"> | string
    currentAccountingSoftware?: StringNullableFilter<"ClientInformationForm"> | string | null
    preferredCommunicationSchedule?: StringNullableFilter<"ClientInformationForm"> | string | null
    bankAccountDetails?: StringNullableFilter<"ClientInformationForm"> | string | null
    creditLimit?: StringNullableFilter<"ClientInformationForm"> | string | null
    billingAddress?: StringNullableFilter<"ClientInformationForm"> | string | null
    businessRegistrationCertificate?: StringNullableFilter<"ClientInformationForm"> | string | null
    taxIdentificationCertificate?: StringNullableFilter<"ClientInformationForm"> | string | null
    financialStatements?: StringNullableFilter<"ClientInformationForm"> | string | null
    governmentIssuedID?: StringNullableFilter<"ClientInformationForm"> | string | null
    declaration?: BoolFilter<"ClientInformationForm"> | boolean
    consent?: BoolFilter<"ClientInformationForm"> | boolean
    signature?: StringFilter<"ClientInformationForm"> | string
    date?: StringFilter<"ClientInformationForm"> | string
    createdAt?: DateTimeFilter<"ClientInformationForm"> | Date | string
  }

  export type ClientInformationFormOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    businessName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    preferredContactMethod?: SortOrder
    businessType?: SortOrderInput | SortOrder
    industryCategory?: SortOrderInput | SortOrder
    taxIdentificationNumber?: SortOrderInput | SortOrder
    businessRegistrationNumber?: SortOrderInput | SortOrder
    annualRevenueRange?: SortOrderInput | SortOrder
    numberOfEmployees?: SortOrderInput | SortOrder
    servicesRequired?: SortOrder
    frequencyOfService?: SortOrder
    specificGoalsOrNeeds?: SortOrder
    currentAccountingSoftware?: SortOrderInput | SortOrder
    preferredCommunicationSchedule?: SortOrderInput | SortOrder
    bankAccountDetails?: SortOrderInput | SortOrder
    creditLimit?: SortOrderInput | SortOrder
    billingAddress?: SortOrderInput | SortOrder
    businessRegistrationCertificate?: SortOrderInput | SortOrder
    taxIdentificationCertificate?: SortOrderInput | SortOrder
    financialStatements?: SortOrderInput | SortOrder
    governmentIssuedID?: SortOrderInput | SortOrder
    declaration?: SortOrder
    consent?: SortOrder
    signature?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientInformationFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientInformationFormWhereInput | ClientInformationFormWhereInput[]
    OR?: ClientInformationFormWhereInput[]
    NOT?: ClientInformationFormWhereInput | ClientInformationFormWhereInput[]
    fullName?: StringFilter<"ClientInformationForm"> | string
    businessName?: StringNullableFilter<"ClientInformationForm"> | string | null
    phoneNumber?: StringFilter<"ClientInformationForm"> | string
    email?: StringFilter<"ClientInformationForm"> | string
    address?: StringFilter<"ClientInformationForm"> | string
    preferredContactMethod?: StringFilter<"ClientInformationForm"> | string
    businessType?: StringNullableFilter<"ClientInformationForm"> | string | null
    industryCategory?: StringNullableFilter<"ClientInformationForm"> | string | null
    taxIdentificationNumber?: StringNullableFilter<"ClientInformationForm"> | string | null
    businessRegistrationNumber?: StringNullableFilter<"ClientInformationForm"> | string | null
    annualRevenueRange?: StringNullableFilter<"ClientInformationForm"> | string | null
    numberOfEmployees?: IntNullableFilter<"ClientInformationForm"> | number | null
    servicesRequired?: StringNullableListFilter<"ClientInformationForm">
    frequencyOfService?: StringFilter<"ClientInformationForm"> | string
    specificGoalsOrNeeds?: StringFilter<"ClientInformationForm"> | string
    currentAccountingSoftware?: StringNullableFilter<"ClientInformationForm"> | string | null
    preferredCommunicationSchedule?: StringNullableFilter<"ClientInformationForm"> | string | null
    bankAccountDetails?: StringNullableFilter<"ClientInformationForm"> | string | null
    creditLimit?: StringNullableFilter<"ClientInformationForm"> | string | null
    billingAddress?: StringNullableFilter<"ClientInformationForm"> | string | null
    businessRegistrationCertificate?: StringNullableFilter<"ClientInformationForm"> | string | null
    taxIdentificationCertificate?: StringNullableFilter<"ClientInformationForm"> | string | null
    financialStatements?: StringNullableFilter<"ClientInformationForm"> | string | null
    governmentIssuedID?: StringNullableFilter<"ClientInformationForm"> | string | null
    declaration?: BoolFilter<"ClientInformationForm"> | boolean
    consent?: BoolFilter<"ClientInformationForm"> | boolean
    signature?: StringFilter<"ClientInformationForm"> | string
    date?: StringFilter<"ClientInformationForm"> | string
    createdAt?: DateTimeFilter<"ClientInformationForm"> | Date | string
  }, "id">

  export type ClientInformationFormOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    businessName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    preferredContactMethod?: SortOrder
    businessType?: SortOrderInput | SortOrder
    industryCategory?: SortOrderInput | SortOrder
    taxIdentificationNumber?: SortOrderInput | SortOrder
    businessRegistrationNumber?: SortOrderInput | SortOrder
    annualRevenueRange?: SortOrderInput | SortOrder
    numberOfEmployees?: SortOrderInput | SortOrder
    servicesRequired?: SortOrder
    frequencyOfService?: SortOrder
    specificGoalsOrNeeds?: SortOrder
    currentAccountingSoftware?: SortOrderInput | SortOrder
    preferredCommunicationSchedule?: SortOrderInput | SortOrder
    bankAccountDetails?: SortOrderInput | SortOrder
    creditLimit?: SortOrderInput | SortOrder
    billingAddress?: SortOrderInput | SortOrder
    businessRegistrationCertificate?: SortOrderInput | SortOrder
    taxIdentificationCertificate?: SortOrderInput | SortOrder
    financialStatements?: SortOrderInput | SortOrder
    governmentIssuedID?: SortOrderInput | SortOrder
    declaration?: SortOrder
    consent?: SortOrder
    signature?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: ClientInformationFormCountOrderByAggregateInput
    _avg?: ClientInformationFormAvgOrderByAggregateInput
    _max?: ClientInformationFormMaxOrderByAggregateInput
    _min?: ClientInformationFormMinOrderByAggregateInput
    _sum?: ClientInformationFormSumOrderByAggregateInput
  }

  export type ClientInformationFormScalarWhereWithAggregatesInput = {
    AND?: ClientInformationFormScalarWhereWithAggregatesInput | ClientInformationFormScalarWhereWithAggregatesInput[]
    OR?: ClientInformationFormScalarWhereWithAggregatesInput[]
    NOT?: ClientInformationFormScalarWhereWithAggregatesInput | ClientInformationFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientInformationForm"> | string
    fullName?: StringWithAggregatesFilter<"ClientInformationForm"> | string
    businessName?: StringNullableWithAggregatesFilter<"ClientInformationForm"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"ClientInformationForm"> | string
    email?: StringWithAggregatesFilter<"ClientInformationForm"> | string
    address?: StringWithAggregatesFilter<"ClientInformationForm"> | string
    preferredContactMethod?: StringWithAggregatesFilter<"ClientInformationForm"> | string
    businessType?: StringNullableWithAggregatesFilter<"ClientInformationForm"> | string | null
    industryCategory?: StringNullableWithAggregatesFilter<"ClientInformationForm"> | string | null
    taxIdentificationNumber?: StringNullableWithAggregatesFilter<"ClientInformationForm"> | string | null
    businessRegistrationNumber?: StringNullableWithAggregatesFilter<"ClientInformationForm"> | string | null
    annualRevenueRange?: StringNullableWithAggregatesFilter<"ClientInformationForm"> | string | null
    numberOfEmployees?: IntNullableWithAggregatesFilter<"ClientInformationForm"> | number | null
    servicesRequired?: StringNullableListFilter<"ClientInformationForm">
    frequencyOfService?: StringWithAggregatesFilter<"ClientInformationForm"> | string
    specificGoalsOrNeeds?: StringWithAggregatesFilter<"ClientInformationForm"> | string
    currentAccountingSoftware?: StringNullableWithAggregatesFilter<"ClientInformationForm"> | string | null
    preferredCommunicationSchedule?: StringNullableWithAggregatesFilter<"ClientInformationForm"> | string | null
    bankAccountDetails?: StringNullableWithAggregatesFilter<"ClientInformationForm"> | string | null
    creditLimit?: StringNullableWithAggregatesFilter<"ClientInformationForm"> | string | null
    billingAddress?: StringNullableWithAggregatesFilter<"ClientInformationForm"> | string | null
    businessRegistrationCertificate?: StringNullableWithAggregatesFilter<"ClientInformationForm"> | string | null
    taxIdentificationCertificate?: StringNullableWithAggregatesFilter<"ClientInformationForm"> | string | null
    financialStatements?: StringNullableWithAggregatesFilter<"ClientInformationForm"> | string | null
    governmentIssuedID?: StringNullableWithAggregatesFilter<"ClientInformationForm"> | string | null
    declaration?: BoolWithAggregatesFilter<"ClientInformationForm"> | boolean
    consent?: BoolWithAggregatesFilter<"ClientInformationForm"> | boolean
    signature?: StringWithAggregatesFilter<"ClientInformationForm"> | string
    date?: StringWithAggregatesFilter<"ClientInformationForm"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ClientInformationForm"> | Date | string
  }

  export type PartnerApplicationFormWhereInput = {
    AND?: PartnerApplicationFormWhereInput | PartnerApplicationFormWhereInput[]
    OR?: PartnerApplicationFormWhereInput[]
    NOT?: PartnerApplicationFormWhereInput | PartnerApplicationFormWhereInput[]
    id?: StringFilter<"PartnerApplicationForm"> | string
    businessName?: StringFilter<"PartnerApplicationForm"> | string
    contactPerson?: StringFilter<"PartnerApplicationForm"> | string
    businessAddress?: StringFilter<"PartnerApplicationForm"> | string
    phoneNumber?: StringFilter<"PartnerApplicationForm"> | string
    email?: StringFilter<"PartnerApplicationForm"> | string
    website?: StringNullableFilter<"PartnerApplicationForm"> | string | null
    typeOfBusiness?: StringFilter<"PartnerApplicationForm"> | string
    industryCategory?: StringFilter<"PartnerApplicationForm"> | string
    yearsInOperation?: IntFilter<"PartnerApplicationForm"> | number
    businessRegistrationNumber?: StringFilter<"PartnerApplicationForm"> | string
    taxIdentificationNumber?: StringFilter<"PartnerApplicationForm"> | string
    reasonForPartnership?: StringFilter<"PartnerApplicationForm"> | string
    servicesOrProductsOffered?: StringFilter<"PartnerApplicationForm"> | string
    geographicalCoverage?: StringFilter<"PartnerApplicationForm"> | string
    preferredCollaborationType?: StringFilter<"PartnerApplicationForm"> | string
    previousPartnerships?: StringNullableFilter<"PartnerApplicationForm"> | string | null
    annualRevenue?: StringNullableFilter<"PartnerApplicationForm"> | string | null
    businessLicensesOrPermits?: StringFilter<"PartnerApplicationForm"> | string
    insuranceCoverage?: StringFilter<"PartnerApplicationForm"> | string
    businessRegistrationCertificate?: StringFilter<"PartnerApplicationForm"> | string
    taxIdentificationCertificate?: StringNullableFilter<"PartnerApplicationForm"> | string | null
    portfolioOrReferences?: StringNullableFilter<"PartnerApplicationForm"> | string | null
    declaration?: BoolFilter<"PartnerApplicationForm"> | boolean
    consent?: BoolFilter<"PartnerApplicationForm"> | boolean
    signature?: StringFilter<"PartnerApplicationForm"> | string
    date?: StringFilter<"PartnerApplicationForm"> | string
    createdAt?: DateTimeFilter<"PartnerApplicationForm"> | Date | string
  }

  export type PartnerApplicationFormOrderByWithRelationInput = {
    id?: SortOrder
    businessName?: SortOrder
    contactPerson?: SortOrder
    businessAddress?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    website?: SortOrderInput | SortOrder
    typeOfBusiness?: SortOrder
    industryCategory?: SortOrder
    yearsInOperation?: SortOrder
    businessRegistrationNumber?: SortOrder
    taxIdentificationNumber?: SortOrder
    reasonForPartnership?: SortOrder
    servicesOrProductsOffered?: SortOrder
    geographicalCoverage?: SortOrder
    preferredCollaborationType?: SortOrder
    previousPartnerships?: SortOrderInput | SortOrder
    annualRevenue?: SortOrderInput | SortOrder
    businessLicensesOrPermits?: SortOrder
    insuranceCoverage?: SortOrder
    businessRegistrationCertificate?: SortOrder
    taxIdentificationCertificate?: SortOrderInput | SortOrder
    portfolioOrReferences?: SortOrderInput | SortOrder
    declaration?: SortOrder
    consent?: SortOrder
    signature?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type PartnerApplicationFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PartnerApplicationFormWhereInput | PartnerApplicationFormWhereInput[]
    OR?: PartnerApplicationFormWhereInput[]
    NOT?: PartnerApplicationFormWhereInput | PartnerApplicationFormWhereInput[]
    businessName?: StringFilter<"PartnerApplicationForm"> | string
    contactPerson?: StringFilter<"PartnerApplicationForm"> | string
    businessAddress?: StringFilter<"PartnerApplicationForm"> | string
    phoneNumber?: StringFilter<"PartnerApplicationForm"> | string
    email?: StringFilter<"PartnerApplicationForm"> | string
    website?: StringNullableFilter<"PartnerApplicationForm"> | string | null
    typeOfBusiness?: StringFilter<"PartnerApplicationForm"> | string
    industryCategory?: StringFilter<"PartnerApplicationForm"> | string
    yearsInOperation?: IntFilter<"PartnerApplicationForm"> | number
    businessRegistrationNumber?: StringFilter<"PartnerApplicationForm"> | string
    taxIdentificationNumber?: StringFilter<"PartnerApplicationForm"> | string
    reasonForPartnership?: StringFilter<"PartnerApplicationForm"> | string
    servicesOrProductsOffered?: StringFilter<"PartnerApplicationForm"> | string
    geographicalCoverage?: StringFilter<"PartnerApplicationForm"> | string
    preferredCollaborationType?: StringFilter<"PartnerApplicationForm"> | string
    previousPartnerships?: StringNullableFilter<"PartnerApplicationForm"> | string | null
    annualRevenue?: StringNullableFilter<"PartnerApplicationForm"> | string | null
    businessLicensesOrPermits?: StringFilter<"PartnerApplicationForm"> | string
    insuranceCoverage?: StringFilter<"PartnerApplicationForm"> | string
    businessRegistrationCertificate?: StringFilter<"PartnerApplicationForm"> | string
    taxIdentificationCertificate?: StringNullableFilter<"PartnerApplicationForm"> | string | null
    portfolioOrReferences?: StringNullableFilter<"PartnerApplicationForm"> | string | null
    declaration?: BoolFilter<"PartnerApplicationForm"> | boolean
    consent?: BoolFilter<"PartnerApplicationForm"> | boolean
    signature?: StringFilter<"PartnerApplicationForm"> | string
    date?: StringFilter<"PartnerApplicationForm"> | string
    createdAt?: DateTimeFilter<"PartnerApplicationForm"> | Date | string
  }, "id">

  export type PartnerApplicationFormOrderByWithAggregationInput = {
    id?: SortOrder
    businessName?: SortOrder
    contactPerson?: SortOrder
    businessAddress?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    website?: SortOrderInput | SortOrder
    typeOfBusiness?: SortOrder
    industryCategory?: SortOrder
    yearsInOperation?: SortOrder
    businessRegistrationNumber?: SortOrder
    taxIdentificationNumber?: SortOrder
    reasonForPartnership?: SortOrder
    servicesOrProductsOffered?: SortOrder
    geographicalCoverage?: SortOrder
    preferredCollaborationType?: SortOrder
    previousPartnerships?: SortOrderInput | SortOrder
    annualRevenue?: SortOrderInput | SortOrder
    businessLicensesOrPermits?: SortOrder
    insuranceCoverage?: SortOrder
    businessRegistrationCertificate?: SortOrder
    taxIdentificationCertificate?: SortOrderInput | SortOrder
    portfolioOrReferences?: SortOrderInput | SortOrder
    declaration?: SortOrder
    consent?: SortOrder
    signature?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: PartnerApplicationFormCountOrderByAggregateInput
    _avg?: PartnerApplicationFormAvgOrderByAggregateInput
    _max?: PartnerApplicationFormMaxOrderByAggregateInput
    _min?: PartnerApplicationFormMinOrderByAggregateInput
    _sum?: PartnerApplicationFormSumOrderByAggregateInput
  }

  export type PartnerApplicationFormScalarWhereWithAggregatesInput = {
    AND?: PartnerApplicationFormScalarWhereWithAggregatesInput | PartnerApplicationFormScalarWhereWithAggregatesInput[]
    OR?: PartnerApplicationFormScalarWhereWithAggregatesInput[]
    NOT?: PartnerApplicationFormScalarWhereWithAggregatesInput | PartnerApplicationFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    businessName?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    contactPerson?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    businessAddress?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    phoneNumber?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    email?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    website?: StringNullableWithAggregatesFilter<"PartnerApplicationForm"> | string | null
    typeOfBusiness?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    industryCategory?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    yearsInOperation?: IntWithAggregatesFilter<"PartnerApplicationForm"> | number
    businessRegistrationNumber?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    taxIdentificationNumber?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    reasonForPartnership?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    servicesOrProductsOffered?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    geographicalCoverage?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    preferredCollaborationType?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    previousPartnerships?: StringNullableWithAggregatesFilter<"PartnerApplicationForm"> | string | null
    annualRevenue?: StringNullableWithAggregatesFilter<"PartnerApplicationForm"> | string | null
    businessLicensesOrPermits?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    insuranceCoverage?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    businessRegistrationCertificate?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    taxIdentificationCertificate?: StringNullableWithAggregatesFilter<"PartnerApplicationForm"> | string | null
    portfolioOrReferences?: StringNullableWithAggregatesFilter<"PartnerApplicationForm"> | string | null
    declaration?: BoolWithAggregatesFilter<"PartnerApplicationForm"> | boolean
    consent?: BoolWithAggregatesFilter<"PartnerApplicationForm"> | boolean
    signature?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    date?: StringWithAggregatesFilter<"PartnerApplicationForm"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PartnerApplicationForm"> | Date | string
  }

  export type TaxFilingFormWhereInput = {
    AND?: TaxFilingFormWhereInput | TaxFilingFormWhereInput[]
    OR?: TaxFilingFormWhereInput[]
    NOT?: TaxFilingFormWhereInput | TaxFilingFormWhereInput[]
    id?: StringFilter<"TaxFilingForm"> | string
    name?: StringFilter<"TaxFilingForm"> | string
    birthday?: StringFilter<"TaxFilingForm"> | string
    phoneNumber?: StringFilter<"TaxFilingForm"> | string
    email?: StringFilter<"TaxFilingForm"> | string
    facebookName?: StringNullableFilter<"TaxFilingForm"> | string | null
    instagramName?: StringNullableFilter<"TaxFilingForm"> | string | null
    taxYear?: StringFilter<"TaxFilingForm"> | string
    cashAdvance?: StringFilter<"TaxFilingForm"> | string
    firstName?: StringFilter<"TaxFilingForm"> | string
    middleName?: StringNullableFilter<"TaxFilingForm"> | string | null
    lastName?: StringFilter<"TaxFilingForm"> | string
    ssn?: StringFilter<"TaxFilingForm"> | string
    streetAddress?: StringFilter<"TaxFilingForm"> | string
    addressLine2?: StringNullableFilter<"TaxFilingForm"> | string | null
    city?: StringFilter<"TaxFilingForm"> | string
    state?: StringFilter<"TaxFilingForm"> | string
    zipCode?: StringFilter<"TaxFilingForm"> | string
    occupation?: StringNullableFilter<"TaxFilingForm"> | string | null
    refundOption?: StringFilter<"TaxFilingForm"> | string
    createdAt?: DateTimeFilter<"TaxFilingForm"> | Date | string
  }

  export type TaxFilingFormOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    facebookName?: SortOrderInput | SortOrder
    instagramName?: SortOrderInput | SortOrder
    taxYear?: SortOrder
    cashAdvance?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrder
    ssn?: SortOrder
    streetAddress?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    occupation?: SortOrderInput | SortOrder
    refundOption?: SortOrder
    createdAt?: SortOrder
  }

  export type TaxFilingFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaxFilingFormWhereInput | TaxFilingFormWhereInput[]
    OR?: TaxFilingFormWhereInput[]
    NOT?: TaxFilingFormWhereInput | TaxFilingFormWhereInput[]
    name?: StringFilter<"TaxFilingForm"> | string
    birthday?: StringFilter<"TaxFilingForm"> | string
    phoneNumber?: StringFilter<"TaxFilingForm"> | string
    email?: StringFilter<"TaxFilingForm"> | string
    facebookName?: StringNullableFilter<"TaxFilingForm"> | string | null
    instagramName?: StringNullableFilter<"TaxFilingForm"> | string | null
    taxYear?: StringFilter<"TaxFilingForm"> | string
    cashAdvance?: StringFilter<"TaxFilingForm"> | string
    firstName?: StringFilter<"TaxFilingForm"> | string
    middleName?: StringNullableFilter<"TaxFilingForm"> | string | null
    lastName?: StringFilter<"TaxFilingForm"> | string
    ssn?: StringFilter<"TaxFilingForm"> | string
    streetAddress?: StringFilter<"TaxFilingForm"> | string
    addressLine2?: StringNullableFilter<"TaxFilingForm"> | string | null
    city?: StringFilter<"TaxFilingForm"> | string
    state?: StringFilter<"TaxFilingForm"> | string
    zipCode?: StringFilter<"TaxFilingForm"> | string
    occupation?: StringNullableFilter<"TaxFilingForm"> | string | null
    refundOption?: StringFilter<"TaxFilingForm"> | string
    createdAt?: DateTimeFilter<"TaxFilingForm"> | Date | string
  }, "id">

  export type TaxFilingFormOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    facebookName?: SortOrderInput | SortOrder
    instagramName?: SortOrderInput | SortOrder
    taxYear?: SortOrder
    cashAdvance?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrder
    ssn?: SortOrder
    streetAddress?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    occupation?: SortOrderInput | SortOrder
    refundOption?: SortOrder
    createdAt?: SortOrder
    _count?: TaxFilingFormCountOrderByAggregateInput
    _max?: TaxFilingFormMaxOrderByAggregateInput
    _min?: TaxFilingFormMinOrderByAggregateInput
  }

  export type TaxFilingFormScalarWhereWithAggregatesInput = {
    AND?: TaxFilingFormScalarWhereWithAggregatesInput | TaxFilingFormScalarWhereWithAggregatesInput[]
    OR?: TaxFilingFormScalarWhereWithAggregatesInput[]
    NOT?: TaxFilingFormScalarWhereWithAggregatesInput | TaxFilingFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaxFilingForm"> | string
    name?: StringWithAggregatesFilter<"TaxFilingForm"> | string
    birthday?: StringWithAggregatesFilter<"TaxFilingForm"> | string
    phoneNumber?: StringWithAggregatesFilter<"TaxFilingForm"> | string
    email?: StringWithAggregatesFilter<"TaxFilingForm"> | string
    facebookName?: StringNullableWithAggregatesFilter<"TaxFilingForm"> | string | null
    instagramName?: StringNullableWithAggregatesFilter<"TaxFilingForm"> | string | null
    taxYear?: StringWithAggregatesFilter<"TaxFilingForm"> | string
    cashAdvance?: StringWithAggregatesFilter<"TaxFilingForm"> | string
    firstName?: StringWithAggregatesFilter<"TaxFilingForm"> | string
    middleName?: StringNullableWithAggregatesFilter<"TaxFilingForm"> | string | null
    lastName?: StringWithAggregatesFilter<"TaxFilingForm"> | string
    ssn?: StringWithAggregatesFilter<"TaxFilingForm"> | string
    streetAddress?: StringWithAggregatesFilter<"TaxFilingForm"> | string
    addressLine2?: StringNullableWithAggregatesFilter<"TaxFilingForm"> | string | null
    city?: StringWithAggregatesFilter<"TaxFilingForm"> | string
    state?: StringWithAggregatesFilter<"TaxFilingForm"> | string
    zipCode?: StringWithAggregatesFilter<"TaxFilingForm"> | string
    occupation?: StringNullableWithAggregatesFilter<"TaxFilingForm"> | string | null
    refundOption?: StringWithAggregatesFilter<"TaxFilingForm"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TaxFilingForm"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    verifyCode?: string | null
    verifyCodeExpiry?: Date | string | null
    isVerified?: boolean
    isAcceptingMessages?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    verifyCode?: string | null
    verifyCodeExpiry?: Date | string | null
    isVerified?: boolean
    isAcceptingMessages?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verifyCode?: NullableStringFieldUpdateOperationsInput | string | null
    verifyCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAcceptingMessages?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verifyCode?: NullableStringFieldUpdateOperationsInput | string | null
    verifyCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAcceptingMessages?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    verifyCode?: string | null
    verifyCodeExpiry?: Date | string | null
    isVerified?: boolean
    isAcceptingMessages?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verifyCode?: NullableStringFieldUpdateOperationsInput | string | null
    verifyCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAcceptingMessages?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verifyCode?: NullableStringFieldUpdateOperationsInput | string | null
    verifyCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAcceptingMessages?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    company: string
    reason: string
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type ContactMessageUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    company: string
    reason: string
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type ContactMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    company: string
    reason: string
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type ContactMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationMessageCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    city: string
    country: string
    state: string
    message?: string
    createdAt?: Date | string
  }

  export type ConsultationMessageUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    city: string
    country: string
    state: string
    message?: string
    createdAt?: Date | string
  }

  export type ConsultationMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationMessageCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    city: string
    country: string
    state: string
    message?: string
    createdAt?: Date | string
  }

  export type ConsultationMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxScenarioCreateInput = {
    description: string
    income: number
    deductions: number
    taxRate: number
  }

  export type TaxScenarioUncheckedCreateInput = {
    id?: number
    description: string
    income: number
    deductions: number
    taxRate: number
  }

  export type TaxScenarioUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    income?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
  }

  export type TaxScenarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    income?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
  }

  export type TaxScenarioCreateManyInput = {
    id?: number
    description: string
    income: number
    deductions: number
    taxRate: number
  }

  export type TaxScenarioUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    income?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
  }

  export type TaxScenarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    income?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    taxRate?: FloatFieldUpdateOperationsInput | number
  }

  export type ClientInformationFormCreateInput = {
    id?: string
    fullName: string
    businessName?: string | null
    phoneNumber: string
    email: string
    address: string
    preferredContactMethod: string
    businessType?: string | null
    industryCategory?: string | null
    taxIdentificationNumber?: string | null
    businessRegistrationNumber?: string | null
    annualRevenueRange?: string | null
    numberOfEmployees?: number | null
    servicesRequired?: ClientInformationFormCreateservicesRequiredInput | string[]
    frequencyOfService: string
    specificGoalsOrNeeds: string
    currentAccountingSoftware?: string | null
    preferredCommunicationSchedule?: string | null
    bankAccountDetails?: string | null
    creditLimit?: string | null
    billingAddress?: string | null
    businessRegistrationCertificate?: string | null
    taxIdentificationCertificate?: string | null
    financialStatements?: string | null
    governmentIssuedID?: string | null
    declaration: boolean
    consent: boolean
    signature: string
    date: string
    createdAt?: Date | string
  }

  export type ClientInformationFormUncheckedCreateInput = {
    id?: string
    fullName: string
    businessName?: string | null
    phoneNumber: string
    email: string
    address: string
    preferredContactMethod: string
    businessType?: string | null
    industryCategory?: string | null
    taxIdentificationNumber?: string | null
    businessRegistrationNumber?: string | null
    annualRevenueRange?: string | null
    numberOfEmployees?: number | null
    servicesRequired?: ClientInformationFormCreateservicesRequiredInput | string[]
    frequencyOfService: string
    specificGoalsOrNeeds: string
    currentAccountingSoftware?: string | null
    preferredCommunicationSchedule?: string | null
    bankAccountDetails?: string | null
    creditLimit?: string | null
    billingAddress?: string | null
    businessRegistrationCertificate?: string | null
    taxIdentificationCertificate?: string | null
    financialStatements?: string | null
    governmentIssuedID?: string | null
    declaration: boolean
    consent: boolean
    signature: string
    date: string
    createdAt?: Date | string
  }

  export type ClientInformationFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: StringFieldUpdateOperationsInput | string
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    industryCategory?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdentificationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    annualRevenueRange?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfEmployees?: NullableIntFieldUpdateOperationsInput | number | null
    servicesRequired?: ClientInformationFormUpdateservicesRequiredInput | string[]
    frequencyOfService?: StringFieldUpdateOperationsInput | string
    specificGoalsOrNeeds?: StringFieldUpdateOperationsInput | string
    currentAccountingSoftware?: NullableStringFieldUpdateOperationsInput | string | null
    preferredCommunicationSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountDetails?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: NullableStringFieldUpdateOperationsInput | string | null
    billingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdentificationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    financialStatements?: NullableStringFieldUpdateOperationsInput | string | null
    governmentIssuedID?: NullableStringFieldUpdateOperationsInput | string | null
    declaration?: BoolFieldUpdateOperationsInput | boolean
    consent?: BoolFieldUpdateOperationsInput | boolean
    signature?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientInformationFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: StringFieldUpdateOperationsInput | string
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    industryCategory?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdentificationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    annualRevenueRange?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfEmployees?: NullableIntFieldUpdateOperationsInput | number | null
    servicesRequired?: ClientInformationFormUpdateservicesRequiredInput | string[]
    frequencyOfService?: StringFieldUpdateOperationsInput | string
    specificGoalsOrNeeds?: StringFieldUpdateOperationsInput | string
    currentAccountingSoftware?: NullableStringFieldUpdateOperationsInput | string | null
    preferredCommunicationSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountDetails?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: NullableStringFieldUpdateOperationsInput | string | null
    billingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdentificationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    financialStatements?: NullableStringFieldUpdateOperationsInput | string | null
    governmentIssuedID?: NullableStringFieldUpdateOperationsInput | string | null
    declaration?: BoolFieldUpdateOperationsInput | boolean
    consent?: BoolFieldUpdateOperationsInput | boolean
    signature?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientInformationFormCreateManyInput = {
    id?: string
    fullName: string
    businessName?: string | null
    phoneNumber: string
    email: string
    address: string
    preferredContactMethod: string
    businessType?: string | null
    industryCategory?: string | null
    taxIdentificationNumber?: string | null
    businessRegistrationNumber?: string | null
    annualRevenueRange?: string | null
    numberOfEmployees?: number | null
    servicesRequired?: ClientInformationFormCreateservicesRequiredInput | string[]
    frequencyOfService: string
    specificGoalsOrNeeds: string
    currentAccountingSoftware?: string | null
    preferredCommunicationSchedule?: string | null
    bankAccountDetails?: string | null
    creditLimit?: string | null
    billingAddress?: string | null
    businessRegistrationCertificate?: string | null
    taxIdentificationCertificate?: string | null
    financialStatements?: string | null
    governmentIssuedID?: string | null
    declaration: boolean
    consent: boolean
    signature: string
    date: string
    createdAt?: Date | string
  }

  export type ClientInformationFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: StringFieldUpdateOperationsInput | string
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    industryCategory?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdentificationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    annualRevenueRange?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfEmployees?: NullableIntFieldUpdateOperationsInput | number | null
    servicesRequired?: ClientInformationFormUpdateservicesRequiredInput | string[]
    frequencyOfService?: StringFieldUpdateOperationsInput | string
    specificGoalsOrNeeds?: StringFieldUpdateOperationsInput | string
    currentAccountingSoftware?: NullableStringFieldUpdateOperationsInput | string | null
    preferredCommunicationSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountDetails?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: NullableStringFieldUpdateOperationsInput | string | null
    billingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdentificationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    financialStatements?: NullableStringFieldUpdateOperationsInput | string | null
    governmentIssuedID?: NullableStringFieldUpdateOperationsInput | string | null
    declaration?: BoolFieldUpdateOperationsInput | boolean
    consent?: BoolFieldUpdateOperationsInput | boolean
    signature?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientInformationFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: StringFieldUpdateOperationsInput | string
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    industryCategory?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdentificationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    annualRevenueRange?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfEmployees?: NullableIntFieldUpdateOperationsInput | number | null
    servicesRequired?: ClientInformationFormUpdateservicesRequiredInput | string[]
    frequencyOfService?: StringFieldUpdateOperationsInput | string
    specificGoalsOrNeeds?: StringFieldUpdateOperationsInput | string
    currentAccountingSoftware?: NullableStringFieldUpdateOperationsInput | string | null
    preferredCommunicationSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountDetails?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: NullableStringFieldUpdateOperationsInput | string | null
    billingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdentificationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    financialStatements?: NullableStringFieldUpdateOperationsInput | string | null
    governmentIssuedID?: NullableStringFieldUpdateOperationsInput | string | null
    declaration?: BoolFieldUpdateOperationsInput | boolean
    consent?: BoolFieldUpdateOperationsInput | boolean
    signature?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerApplicationFormCreateInput = {
    id?: string
    businessName: string
    contactPerson: string
    businessAddress: string
    phoneNumber: string
    email: string
    website?: string | null
    typeOfBusiness: string
    industryCategory: string
    yearsInOperation: number
    businessRegistrationNumber: string
    taxIdentificationNumber: string
    reasonForPartnership: string
    servicesOrProductsOffered: string
    geographicalCoverage: string
    preferredCollaborationType: string
    previousPartnerships?: string | null
    annualRevenue?: string | null
    businessLicensesOrPermits: string
    insuranceCoverage: string
    businessRegistrationCertificate: string
    taxIdentificationCertificate?: string | null
    portfolioOrReferences?: string | null
    declaration: boolean
    consent: boolean
    signature: string
    date: string
    createdAt?: Date | string
  }

  export type PartnerApplicationFormUncheckedCreateInput = {
    id?: string
    businessName: string
    contactPerson: string
    businessAddress: string
    phoneNumber: string
    email: string
    website?: string | null
    typeOfBusiness: string
    industryCategory: string
    yearsInOperation: number
    businessRegistrationNumber: string
    taxIdentificationNumber: string
    reasonForPartnership: string
    servicesOrProductsOffered: string
    geographicalCoverage: string
    preferredCollaborationType: string
    previousPartnerships?: string | null
    annualRevenue?: string | null
    businessLicensesOrPermits: string
    insuranceCoverage: string
    businessRegistrationCertificate: string
    taxIdentificationCertificate?: string | null
    portfolioOrReferences?: string | null
    declaration: boolean
    consent: boolean
    signature: string
    date: string
    createdAt?: Date | string
  }

  export type PartnerApplicationFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    businessAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    typeOfBusiness?: StringFieldUpdateOperationsInput | string
    industryCategory?: StringFieldUpdateOperationsInput | string
    yearsInOperation?: IntFieldUpdateOperationsInput | number
    businessRegistrationNumber?: StringFieldUpdateOperationsInput | string
    taxIdentificationNumber?: StringFieldUpdateOperationsInput | string
    reasonForPartnership?: StringFieldUpdateOperationsInput | string
    servicesOrProductsOffered?: StringFieldUpdateOperationsInput | string
    geographicalCoverage?: StringFieldUpdateOperationsInput | string
    preferredCollaborationType?: StringFieldUpdateOperationsInput | string
    previousPartnerships?: NullableStringFieldUpdateOperationsInput | string | null
    annualRevenue?: NullableStringFieldUpdateOperationsInput | string | null
    businessLicensesOrPermits?: StringFieldUpdateOperationsInput | string
    insuranceCoverage?: StringFieldUpdateOperationsInput | string
    businessRegistrationCertificate?: StringFieldUpdateOperationsInput | string
    taxIdentificationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioOrReferences?: NullableStringFieldUpdateOperationsInput | string | null
    declaration?: BoolFieldUpdateOperationsInput | boolean
    consent?: BoolFieldUpdateOperationsInput | boolean
    signature?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerApplicationFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    businessAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    typeOfBusiness?: StringFieldUpdateOperationsInput | string
    industryCategory?: StringFieldUpdateOperationsInput | string
    yearsInOperation?: IntFieldUpdateOperationsInput | number
    businessRegistrationNumber?: StringFieldUpdateOperationsInput | string
    taxIdentificationNumber?: StringFieldUpdateOperationsInput | string
    reasonForPartnership?: StringFieldUpdateOperationsInput | string
    servicesOrProductsOffered?: StringFieldUpdateOperationsInput | string
    geographicalCoverage?: StringFieldUpdateOperationsInput | string
    preferredCollaborationType?: StringFieldUpdateOperationsInput | string
    previousPartnerships?: NullableStringFieldUpdateOperationsInput | string | null
    annualRevenue?: NullableStringFieldUpdateOperationsInput | string | null
    businessLicensesOrPermits?: StringFieldUpdateOperationsInput | string
    insuranceCoverage?: StringFieldUpdateOperationsInput | string
    businessRegistrationCertificate?: StringFieldUpdateOperationsInput | string
    taxIdentificationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioOrReferences?: NullableStringFieldUpdateOperationsInput | string | null
    declaration?: BoolFieldUpdateOperationsInput | boolean
    consent?: BoolFieldUpdateOperationsInput | boolean
    signature?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerApplicationFormCreateManyInput = {
    id?: string
    businessName: string
    contactPerson: string
    businessAddress: string
    phoneNumber: string
    email: string
    website?: string | null
    typeOfBusiness: string
    industryCategory: string
    yearsInOperation: number
    businessRegistrationNumber: string
    taxIdentificationNumber: string
    reasonForPartnership: string
    servicesOrProductsOffered: string
    geographicalCoverage: string
    preferredCollaborationType: string
    previousPartnerships?: string | null
    annualRevenue?: string | null
    businessLicensesOrPermits: string
    insuranceCoverage: string
    businessRegistrationCertificate: string
    taxIdentificationCertificate?: string | null
    portfolioOrReferences?: string | null
    declaration: boolean
    consent: boolean
    signature: string
    date: string
    createdAt?: Date | string
  }

  export type PartnerApplicationFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    businessAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    typeOfBusiness?: StringFieldUpdateOperationsInput | string
    industryCategory?: StringFieldUpdateOperationsInput | string
    yearsInOperation?: IntFieldUpdateOperationsInput | number
    businessRegistrationNumber?: StringFieldUpdateOperationsInput | string
    taxIdentificationNumber?: StringFieldUpdateOperationsInput | string
    reasonForPartnership?: StringFieldUpdateOperationsInput | string
    servicesOrProductsOffered?: StringFieldUpdateOperationsInput | string
    geographicalCoverage?: StringFieldUpdateOperationsInput | string
    preferredCollaborationType?: StringFieldUpdateOperationsInput | string
    previousPartnerships?: NullableStringFieldUpdateOperationsInput | string | null
    annualRevenue?: NullableStringFieldUpdateOperationsInput | string | null
    businessLicensesOrPermits?: StringFieldUpdateOperationsInput | string
    insuranceCoverage?: StringFieldUpdateOperationsInput | string
    businessRegistrationCertificate?: StringFieldUpdateOperationsInput | string
    taxIdentificationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioOrReferences?: NullableStringFieldUpdateOperationsInput | string | null
    declaration?: BoolFieldUpdateOperationsInput | boolean
    consent?: BoolFieldUpdateOperationsInput | boolean
    signature?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerApplicationFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    businessAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    typeOfBusiness?: StringFieldUpdateOperationsInput | string
    industryCategory?: StringFieldUpdateOperationsInput | string
    yearsInOperation?: IntFieldUpdateOperationsInput | number
    businessRegistrationNumber?: StringFieldUpdateOperationsInput | string
    taxIdentificationNumber?: StringFieldUpdateOperationsInput | string
    reasonForPartnership?: StringFieldUpdateOperationsInput | string
    servicesOrProductsOffered?: StringFieldUpdateOperationsInput | string
    geographicalCoverage?: StringFieldUpdateOperationsInput | string
    preferredCollaborationType?: StringFieldUpdateOperationsInput | string
    previousPartnerships?: NullableStringFieldUpdateOperationsInput | string | null
    annualRevenue?: NullableStringFieldUpdateOperationsInput | string | null
    businessLicensesOrPermits?: StringFieldUpdateOperationsInput | string
    insuranceCoverage?: StringFieldUpdateOperationsInput | string
    businessRegistrationCertificate?: StringFieldUpdateOperationsInput | string
    taxIdentificationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioOrReferences?: NullableStringFieldUpdateOperationsInput | string | null
    declaration?: BoolFieldUpdateOperationsInput | boolean
    consent?: BoolFieldUpdateOperationsInput | boolean
    signature?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxFilingFormCreateInput = {
    id?: string
    name: string
    birthday: string
    phoneNumber: string
    email: string
    facebookName?: string | null
    instagramName?: string | null
    taxYear: string
    cashAdvance: string
    firstName: string
    middleName?: string | null
    lastName: string
    ssn: string
    streetAddress: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    occupation?: string | null
    refundOption: string
    createdAt?: Date | string
  }

  export type TaxFilingFormUncheckedCreateInput = {
    id?: string
    name: string
    birthday: string
    phoneNumber: string
    email: string
    facebookName?: string | null
    instagramName?: string | null
    taxYear: string
    cashAdvance: string
    firstName: string
    middleName?: string | null
    lastName: string
    ssn: string
    streetAddress: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    occupation?: string | null
    refundOption: string
    createdAt?: Date | string
  }

  export type TaxFilingFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebookName?: NullableStringFieldUpdateOperationsInput | string | null
    instagramName?: NullableStringFieldUpdateOperationsInput | string | null
    taxYear?: StringFieldUpdateOperationsInput | string
    cashAdvance?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    refundOption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxFilingFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebookName?: NullableStringFieldUpdateOperationsInput | string | null
    instagramName?: NullableStringFieldUpdateOperationsInput | string | null
    taxYear?: StringFieldUpdateOperationsInput | string
    cashAdvance?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    refundOption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxFilingFormCreateManyInput = {
    id?: string
    name: string
    birthday: string
    phoneNumber: string
    email: string
    facebookName?: string | null
    instagramName?: string | null
    taxYear: string
    cashAdvance: string
    firstName: string
    middleName?: string | null
    lastName: string
    ssn: string
    streetAddress: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    occupation?: string | null
    refundOption: string
    createdAt?: Date | string
  }

  export type TaxFilingFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebookName?: NullableStringFieldUpdateOperationsInput | string | null
    instagramName?: NullableStringFieldUpdateOperationsInput | string | null
    taxYear?: StringFieldUpdateOperationsInput | string
    cashAdvance?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    refundOption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxFilingFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebookName?: NullableStringFieldUpdateOperationsInput | string | null
    instagramName?: NullableStringFieldUpdateOperationsInput | string | null
    taxYear?: StringFieldUpdateOperationsInput | string
    cashAdvance?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    streetAddress?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    refundOption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verifyCode?: SortOrder
    verifyCodeExpiry?: SortOrder
    isVerified?: SortOrder
    isAcceptingMessages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verifyCode?: SortOrder
    verifyCodeExpiry?: SortOrder
    isVerified?: SortOrder
    isAcceptingMessages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verifyCode?: SortOrder
    verifyCodeExpiry?: SortOrder
    isVerified?: SortOrder
    isAcceptingMessages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ContactMessageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    reason?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    reason?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    reason?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationMessageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    country?: SortOrder
    state?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    country?: SortOrder
    state?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationMessageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    country?: SortOrder
    state?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TaxScenarioCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    income?: SortOrder
    deductions?: SortOrder
    taxRate?: SortOrder
  }

  export type TaxScenarioAvgOrderByAggregateInput = {
    id?: SortOrder
    income?: SortOrder
    deductions?: SortOrder
    taxRate?: SortOrder
  }

  export type TaxScenarioMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    income?: SortOrder
    deductions?: SortOrder
    taxRate?: SortOrder
  }

  export type TaxScenarioMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    income?: SortOrder
    deductions?: SortOrder
    taxRate?: SortOrder
  }

  export type TaxScenarioSumOrderByAggregateInput = {
    id?: SortOrder
    income?: SortOrder
    deductions?: SortOrder
    taxRate?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ClientInformationFormCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    businessName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    preferredContactMethod?: SortOrder
    businessType?: SortOrder
    industryCategory?: SortOrder
    taxIdentificationNumber?: SortOrder
    businessRegistrationNumber?: SortOrder
    annualRevenueRange?: SortOrder
    numberOfEmployees?: SortOrder
    servicesRequired?: SortOrder
    frequencyOfService?: SortOrder
    specificGoalsOrNeeds?: SortOrder
    currentAccountingSoftware?: SortOrder
    preferredCommunicationSchedule?: SortOrder
    bankAccountDetails?: SortOrder
    creditLimit?: SortOrder
    billingAddress?: SortOrder
    businessRegistrationCertificate?: SortOrder
    taxIdentificationCertificate?: SortOrder
    financialStatements?: SortOrder
    governmentIssuedID?: SortOrder
    declaration?: SortOrder
    consent?: SortOrder
    signature?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientInformationFormAvgOrderByAggregateInput = {
    numberOfEmployees?: SortOrder
  }

  export type ClientInformationFormMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    businessName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    preferredContactMethod?: SortOrder
    businessType?: SortOrder
    industryCategory?: SortOrder
    taxIdentificationNumber?: SortOrder
    businessRegistrationNumber?: SortOrder
    annualRevenueRange?: SortOrder
    numberOfEmployees?: SortOrder
    frequencyOfService?: SortOrder
    specificGoalsOrNeeds?: SortOrder
    currentAccountingSoftware?: SortOrder
    preferredCommunicationSchedule?: SortOrder
    bankAccountDetails?: SortOrder
    creditLimit?: SortOrder
    billingAddress?: SortOrder
    businessRegistrationCertificate?: SortOrder
    taxIdentificationCertificate?: SortOrder
    financialStatements?: SortOrder
    governmentIssuedID?: SortOrder
    declaration?: SortOrder
    consent?: SortOrder
    signature?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientInformationFormMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    businessName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    preferredContactMethod?: SortOrder
    businessType?: SortOrder
    industryCategory?: SortOrder
    taxIdentificationNumber?: SortOrder
    businessRegistrationNumber?: SortOrder
    annualRevenueRange?: SortOrder
    numberOfEmployees?: SortOrder
    frequencyOfService?: SortOrder
    specificGoalsOrNeeds?: SortOrder
    currentAccountingSoftware?: SortOrder
    preferredCommunicationSchedule?: SortOrder
    bankAccountDetails?: SortOrder
    creditLimit?: SortOrder
    billingAddress?: SortOrder
    businessRegistrationCertificate?: SortOrder
    taxIdentificationCertificate?: SortOrder
    financialStatements?: SortOrder
    governmentIssuedID?: SortOrder
    declaration?: SortOrder
    consent?: SortOrder
    signature?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientInformationFormSumOrderByAggregateInput = {
    numberOfEmployees?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PartnerApplicationFormCountOrderByAggregateInput = {
    id?: SortOrder
    businessName?: SortOrder
    contactPerson?: SortOrder
    businessAddress?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    website?: SortOrder
    typeOfBusiness?: SortOrder
    industryCategory?: SortOrder
    yearsInOperation?: SortOrder
    businessRegistrationNumber?: SortOrder
    taxIdentificationNumber?: SortOrder
    reasonForPartnership?: SortOrder
    servicesOrProductsOffered?: SortOrder
    geographicalCoverage?: SortOrder
    preferredCollaborationType?: SortOrder
    previousPartnerships?: SortOrder
    annualRevenue?: SortOrder
    businessLicensesOrPermits?: SortOrder
    insuranceCoverage?: SortOrder
    businessRegistrationCertificate?: SortOrder
    taxIdentificationCertificate?: SortOrder
    portfolioOrReferences?: SortOrder
    declaration?: SortOrder
    consent?: SortOrder
    signature?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type PartnerApplicationFormAvgOrderByAggregateInput = {
    yearsInOperation?: SortOrder
  }

  export type PartnerApplicationFormMaxOrderByAggregateInput = {
    id?: SortOrder
    businessName?: SortOrder
    contactPerson?: SortOrder
    businessAddress?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    website?: SortOrder
    typeOfBusiness?: SortOrder
    industryCategory?: SortOrder
    yearsInOperation?: SortOrder
    businessRegistrationNumber?: SortOrder
    taxIdentificationNumber?: SortOrder
    reasonForPartnership?: SortOrder
    servicesOrProductsOffered?: SortOrder
    geographicalCoverage?: SortOrder
    preferredCollaborationType?: SortOrder
    previousPartnerships?: SortOrder
    annualRevenue?: SortOrder
    businessLicensesOrPermits?: SortOrder
    insuranceCoverage?: SortOrder
    businessRegistrationCertificate?: SortOrder
    taxIdentificationCertificate?: SortOrder
    portfolioOrReferences?: SortOrder
    declaration?: SortOrder
    consent?: SortOrder
    signature?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type PartnerApplicationFormMinOrderByAggregateInput = {
    id?: SortOrder
    businessName?: SortOrder
    contactPerson?: SortOrder
    businessAddress?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    website?: SortOrder
    typeOfBusiness?: SortOrder
    industryCategory?: SortOrder
    yearsInOperation?: SortOrder
    businessRegistrationNumber?: SortOrder
    taxIdentificationNumber?: SortOrder
    reasonForPartnership?: SortOrder
    servicesOrProductsOffered?: SortOrder
    geographicalCoverage?: SortOrder
    preferredCollaborationType?: SortOrder
    previousPartnerships?: SortOrder
    annualRevenue?: SortOrder
    businessLicensesOrPermits?: SortOrder
    insuranceCoverage?: SortOrder
    businessRegistrationCertificate?: SortOrder
    taxIdentificationCertificate?: SortOrder
    portfolioOrReferences?: SortOrder
    declaration?: SortOrder
    consent?: SortOrder
    signature?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type PartnerApplicationFormSumOrderByAggregateInput = {
    yearsInOperation?: SortOrder
  }

  export type TaxFilingFormCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    facebookName?: SortOrder
    instagramName?: SortOrder
    taxYear?: SortOrder
    cashAdvance?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    ssn?: SortOrder
    streetAddress?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    occupation?: SortOrder
    refundOption?: SortOrder
    createdAt?: SortOrder
  }

  export type TaxFilingFormMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    facebookName?: SortOrder
    instagramName?: SortOrder
    taxYear?: SortOrder
    cashAdvance?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    ssn?: SortOrder
    streetAddress?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    occupation?: SortOrder
    refundOption?: SortOrder
    createdAt?: SortOrder
  }

  export type TaxFilingFormMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    facebookName?: SortOrder
    instagramName?: SortOrder
    taxYear?: SortOrder
    cashAdvance?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    ssn?: SortOrder
    streetAddress?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    occupation?: SortOrder
    refundOption?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientInformationFormCreateservicesRequiredInput = {
    set: string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientInformationFormUpdateservicesRequiredInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}