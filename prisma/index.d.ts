
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Questions
 * 
 */
export type Questions = {
  body: string
  options: Prisma.JsonValue
  answers: Prisma.JsonValue
  ExamNo: number | null
  id: bigint
}

/**
 * Model Exams
 * 
 */
export type Exams = {
  No: number
  time: number | null
}

/**
 * Model datastore
 * 
 */
export type datastore = {
  id: string
  value: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Questions
 * const questions = await prisma.questions.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Questions
   * const questions = await prisma.questions.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.questions`: Exposes CRUD operations for the **Questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.QuestionsDelegate<GlobalReject>;

  /**
   * `prisma.exams`: Exposes CRUD operations for the **Exams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exams.findMany()
    * ```
    */
  get exams(): Prisma.ExamsDelegate<GlobalReject>;

  /**
   * `prisma.datastore`: Exposes CRUD operations for the **datastore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datastores
    * const datastores = await prisma.datastore.findMany()
    * ```
    */
  get datastore(): Prisma.datastoreDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.3.1
   * Query Engine version: c875e43600dfe042452e0b868f7a48b817b9640b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Questions: 'Questions',
    Exams: 'Exams',
    datastore: 'datastore'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ExamsCountOutputType
   */


  export type ExamsCountOutputType = {
    questions: number
  }

  export type ExamsCountOutputTypeSelect = {
    questions?: boolean
  }

  export type ExamsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ExamsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ExamsCountOutputType
    : S extends undefined
    ? never
    : S extends ExamsCountOutputTypeArgs
    ?'include' extends U
    ? ExamsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ExamsCountOutputType ? ExamsCountOutputType[P] : never
  } 
    : ExamsCountOutputType
  : ExamsCountOutputType




  // Custom InputTypes

  /**
   * ExamsCountOutputType without action
   */
  export type ExamsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ExamsCountOutputType
     * 
    **/
    select?: ExamsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Questions
   */


  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsAvgAggregateOutputType = {
    ExamNo: number | null
    id: number | null
  }

  export type QuestionsSumAggregateOutputType = {
    ExamNo: number | null
    id: bigint | null
  }

  export type QuestionsMinAggregateOutputType = {
    body: string | null
    ExamNo: number | null
    id: bigint | null
  }

  export type QuestionsMaxAggregateOutputType = {
    body: string | null
    ExamNo: number | null
    id: bigint | null
  }

  export type QuestionsCountAggregateOutputType = {
    body: number
    options: number
    answers: number
    ExamNo: number
    id: number
    _all: number
  }


  export type QuestionsAvgAggregateInputType = {
    ExamNo?: true
    id?: true
  }

  export type QuestionsSumAggregateInputType = {
    ExamNo?: true
    id?: true
  }

  export type QuestionsMinAggregateInputType = {
    body?: true
    ExamNo?: true
    id?: true
  }

  export type QuestionsMaxAggregateInputType = {
    body?: true
    ExamNo?: true
    id?: true
  }

  export type QuestionsCountAggregateInputType = {
    body?: true
    options?: true
    answers?: true
    ExamNo?: true
    id?: true
    _all?: true
  }

  export type QuestionsAggregateArgs = {
    /**
     * Filter which Questions to aggregate.
     * 
    **/
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }




  export type QuestionsGroupByArgs = {
    where?: QuestionsWhereInput
    orderBy?: Enumerable<QuestionsOrderByWithAggregationInput>
    by: Array<QuestionsScalarFieldEnum>
    having?: QuestionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _avg?: QuestionsAvgAggregateInputType
    _sum?: QuestionsSumAggregateInputType
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }


  export type QuestionsGroupByOutputType = {
    body: string
    options: JsonValue
    answers: JsonValue
    ExamNo: number | null
    id: bigint
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends QuestionsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<QuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      >
    >


  export type QuestionsSelect = {
    body?: boolean
    options?: boolean
    answers?: boolean
    exam?: boolean | ExamsArgs
    ExamNo?: boolean
    id?: boolean
  }

  export type QuestionsInclude = {
    exam?: boolean | ExamsArgs
  }

  export type QuestionsGetPayload<
    S extends boolean | null | undefined | QuestionsArgs,
    U = keyof S
      > = S extends true
        ? Questions
    : S extends undefined
    ? never
    : S extends QuestionsArgs | QuestionsFindManyArgs
    ?'include' extends U
    ? Questions  & {
    [P in TrueKeys<S['include']>]:
        P extends 'exam' ? ExamsGetPayload<Exclude<S['include'], undefined | null>[P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'exam' ? ExamsGetPayload<Exclude<S['select'], undefined | null>[P]> | null :  P extends keyof Questions ? Questions[P] : never
  } 
    : Questions
  : Questions


  type QuestionsCountArgs = Merge<
    Omit<QuestionsFindManyArgs, 'select' | 'include'> & {
      select?: QuestionsCountAggregateInputType | true
    }
  >

  export interface QuestionsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Questions that matches the filter.
     * @param {QuestionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuestionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Questions'> extends True ? CheckSelect<T, Prisma__QuestionsClient<Questions>, Prisma__QuestionsClient<QuestionsGetPayload<T>>> : CheckSelect<T, Prisma__QuestionsClient<Questions | null >, Prisma__QuestionsClient<QuestionsGetPayload<T> | null >>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuestionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Questions'> extends True ? CheckSelect<T, Prisma__QuestionsClient<Questions>, Prisma__QuestionsClient<QuestionsGetPayload<T>>> : CheckSelect<T, Prisma__QuestionsClient<Questions | null >, Prisma__QuestionsClient<QuestionsGetPayload<T> | null >>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `body`
     * const questionsWithBodyOnly = await prisma.questions.findMany({ select: { body: true } })
     * 
    **/
    findMany<T extends QuestionsFindManyArgs>(
      args?: SelectSubset<T, QuestionsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Questions>>, PrismaPromise<Array<QuestionsGetPayload<T>>>>

    /**
     * Create a Questions.
     * @param {QuestionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
    **/
    create<T extends QuestionsCreateArgs>(
      args: SelectSubset<T, QuestionsCreateArgs>
    ): CheckSelect<T, Prisma__QuestionsClient<Questions>, Prisma__QuestionsClient<QuestionsGetPayload<T>>>

    /**
     * Create many Questions.
     *     @param {QuestionsCreateManyArgs} args - Arguments to create many Questions.
     *     @example
     *     // Create many Questions
     *     const questions = await prisma.questions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestionsCreateManyArgs>(
      args?: SelectSubset<T, QuestionsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Questions.
     * @param {QuestionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
    **/
    delete<T extends QuestionsDeleteArgs>(
      args: SelectSubset<T, QuestionsDeleteArgs>
    ): CheckSelect<T, Prisma__QuestionsClient<Questions>, Prisma__QuestionsClient<QuestionsGetPayload<T>>>

    /**
     * Update one Questions.
     * @param {QuestionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestionsUpdateArgs>(
      args: SelectSubset<T, QuestionsUpdateArgs>
    ): CheckSelect<T, Prisma__QuestionsClient<Questions>, Prisma__QuestionsClient<QuestionsGetPayload<T>>>

    /**
     * Delete zero or more Questions.
     * @param {QuestionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestionsDeleteManyArgs>(
      args?: SelectSubset<T, QuestionsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestionsUpdateManyArgs>(
      args: SelectSubset<T, QuestionsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Questions.
     * @param {QuestionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
    **/
    upsert<T extends QuestionsUpsertArgs>(
      args: SelectSubset<T, QuestionsUpsertArgs>
    ): CheckSelect<T, Prisma__QuestionsClient<Questions>, Prisma__QuestionsClient<QuestionsGetPayload<T>>>

    /**
     * Find one Questions that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {QuestionsFindUniqueOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuestionsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, QuestionsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__QuestionsClient<Questions>, Prisma__QuestionsClient<QuestionsGetPayload<T>>>

    /**
     * Find the first Questions that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuestionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QuestionsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__QuestionsClient<Questions>, Prisma__QuestionsClient<QuestionsGetPayload<T>>>

    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionsCountArgs>(
      args?: Subset<T, QuestionsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsGroupByArgs} args - Group by arguments.
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
      T extends QuestionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionsGroupByArgs['orderBy'] }
        : { orderBy?: QuestionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, QuestionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuestionsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    exam<T extends ExamsArgs = {}>(args?: Subset<T, ExamsArgs>): CheckSelect<T, Prisma__ExamsClient<Exams | null >, Prisma__ExamsClient<ExamsGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Questions base type for findUnique actions
   */
  export type QuestionsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Questions
     * 
    **/
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionsInclude | null
    /**
     * Filter, which Questions to fetch.
     * 
    **/
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions: findUnique
   */
  export interface QuestionsFindUniqueArgs extends QuestionsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Questions base type for findFirst actions
   */
  export type QuestionsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Questions
     * 
    **/
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionsInclude | null
    /**
     * Filter, which Questions to fetch.
     * 
    **/
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     * 
    **/
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     * 
    **/
    distinct?: Enumerable<QuestionsScalarFieldEnum>
  }

  /**
   * Questions: findFirst
   */
  export interface QuestionsFindFirstArgs extends QuestionsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Questions findMany
   */
  export type QuestionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Questions
     * 
    **/
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionsInclude | null
    /**
     * Filter, which Questions to fetch.
     * 
    **/
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     * 
    **/
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<QuestionsScalarFieldEnum>
  }


  /**
   * Questions create
   */
  export type QuestionsCreateArgs = {
    /**
     * Select specific fields to fetch from the Questions
     * 
    **/
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionsInclude | null
    /**
     * The data needed to create a Questions.
     * 
    **/
    data: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
  }


  /**
   * Questions createMany
   */
  export type QuestionsCreateManyArgs = {
    /**
     * The data used to create many Questions.
     * 
    **/
    data: Enumerable<QuestionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Questions update
   */
  export type QuestionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Questions
     * 
    **/
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionsInclude | null
    /**
     * The data needed to update a Questions.
     * 
    **/
    data: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
    /**
     * Choose, which Questions to update.
     * 
    **/
    where: QuestionsWhereUniqueInput
  }


  /**
   * Questions updateMany
   */
  export type QuestionsUpdateManyArgs = {
    /**
     * The data used to update Questions.
     * 
    **/
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     * 
    **/
    where?: QuestionsWhereInput
  }


  /**
   * Questions upsert
   */
  export type QuestionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Questions
     * 
    **/
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionsInclude | null
    /**
     * The filter to search for the Questions to update in case it exists.
     * 
    **/
    where: QuestionsWhereUniqueInput
    /**
     * In case the Questions found by the `where` argument doesn't exist, create a new Questions with this data.
     * 
    **/
    create: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
    /**
     * In case the Questions was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
  }


  /**
   * Questions delete
   */
  export type QuestionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Questions
     * 
    **/
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionsInclude | null
    /**
     * Filter which Questions to delete.
     * 
    **/
    where: QuestionsWhereUniqueInput
  }


  /**
   * Questions deleteMany
   */
  export type QuestionsDeleteManyArgs = {
    /**
     * Filter which Questions to delete
     * 
    **/
    where?: QuestionsWhereInput
  }


  /**
   * Questions: findUniqueOrThrow
   */
  export type QuestionsFindUniqueOrThrowArgs = QuestionsFindUniqueArgsBase
      

  /**
   * Questions: findFirstOrThrow
   */
  export type QuestionsFindFirstOrThrowArgs = QuestionsFindFirstArgsBase
      

  /**
   * Questions without action
   */
  export type QuestionsArgs = {
    /**
     * Select specific fields to fetch from the Questions
     * 
    **/
    select?: QuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionsInclude | null
  }



  /**
   * Model Exams
   */


  export type AggregateExams = {
    _count: ExamsCountAggregateOutputType | null
    _avg: ExamsAvgAggregateOutputType | null
    _sum: ExamsSumAggregateOutputType | null
    _min: ExamsMinAggregateOutputType | null
    _max: ExamsMaxAggregateOutputType | null
  }

  export type ExamsAvgAggregateOutputType = {
    No: number | null
    time: number | null
  }

  export type ExamsSumAggregateOutputType = {
    No: number | null
    time: number | null
  }

  export type ExamsMinAggregateOutputType = {
    No: number | null
    time: number | null
  }

  export type ExamsMaxAggregateOutputType = {
    No: number | null
    time: number | null
  }

  export type ExamsCountAggregateOutputType = {
    No: number
    time: number
    _all: number
  }


  export type ExamsAvgAggregateInputType = {
    No?: true
    time?: true
  }

  export type ExamsSumAggregateInputType = {
    No?: true
    time?: true
  }

  export type ExamsMinAggregateInputType = {
    No?: true
    time?: true
  }

  export type ExamsMaxAggregateInputType = {
    No?: true
    time?: true
  }

  export type ExamsCountAggregateInputType = {
    No?: true
    time?: true
    _all?: true
  }

  export type ExamsAggregateArgs = {
    /**
     * Filter which Exams to aggregate.
     * 
    **/
    where?: ExamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     * 
    **/
    orderBy?: Enumerable<ExamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ExamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamsMaxAggregateInputType
  }

  export type GetExamsAggregateType<T extends ExamsAggregateArgs> = {
        [P in keyof T & keyof AggregateExams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExams[P]>
      : GetScalarType<T[P], AggregateExams[P]>
  }




  export type ExamsGroupByArgs = {
    where?: ExamsWhereInput
    orderBy?: Enumerable<ExamsOrderByWithAggregationInput>
    by: Array<ExamsScalarFieldEnum>
    having?: ExamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamsCountAggregateInputType | true
    _avg?: ExamsAvgAggregateInputType
    _sum?: ExamsSumAggregateInputType
    _min?: ExamsMinAggregateInputType
    _max?: ExamsMaxAggregateInputType
  }


  export type ExamsGroupByOutputType = {
    No: number
    time: number | null
    _count: ExamsCountAggregateOutputType | null
    _avg: ExamsAvgAggregateOutputType | null
    _sum: ExamsSumAggregateOutputType | null
    _min: ExamsMinAggregateOutputType | null
    _max: ExamsMaxAggregateOutputType | null
  }

  type GetExamsGroupByPayload<T extends ExamsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ExamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamsGroupByOutputType[P]>
            : GetScalarType<T[P], ExamsGroupByOutputType[P]>
        }
      >
    >


  export type ExamsSelect = {
    No?: boolean
    time?: boolean
    questions?: boolean | QuestionsFindManyArgs
    _count?: boolean | ExamsCountOutputTypeArgs
  }

  export type ExamsInclude = {
    questions?: boolean | QuestionsFindManyArgs
    _count?: boolean | ExamsCountOutputTypeArgs
  }

  export type ExamsGetPayload<
    S extends boolean | null | undefined | ExamsArgs,
    U = keyof S
      > = S extends true
        ? Exams
    : S extends undefined
    ? never
    : S extends ExamsArgs | ExamsFindManyArgs
    ?'include' extends U
    ? Exams  & {
    [P in TrueKeys<S['include']>]:
        P extends 'questions' ? Array < QuestionsGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? ExamsCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'questions' ? Array < QuestionsGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? ExamsCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Exams ? Exams[P] : never
  } 
    : Exams
  : Exams


  type ExamsCountArgs = Merge<
    Omit<ExamsFindManyArgs, 'select' | 'include'> & {
      select?: ExamsCountAggregateInputType | true
    }
  >

  export interface ExamsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Exams that matches the filter.
     * @param {ExamsFindUniqueArgs} args - Arguments to find a Exams
     * @example
     * // Get one Exams
     * const exams = await prisma.exams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExamsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExamsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Exams'> extends True ? CheckSelect<T, Prisma__ExamsClient<Exams>, Prisma__ExamsClient<ExamsGetPayload<T>>> : CheckSelect<T, Prisma__ExamsClient<Exams | null >, Prisma__ExamsClient<ExamsGetPayload<T> | null >>

    /**
     * Find the first Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamsFindFirstArgs} args - Arguments to find a Exams
     * @example
     * // Get one Exams
     * const exams = await prisma.exams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExamsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExamsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Exams'> extends True ? CheckSelect<T, Prisma__ExamsClient<Exams>, Prisma__ExamsClient<ExamsGetPayload<T>>> : CheckSelect<T, Prisma__ExamsClient<Exams | null >, Prisma__ExamsClient<ExamsGetPayload<T> | null >>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exams.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exams.findMany({ take: 10 })
     * 
     * // Only select the `No`
     * const examsWithNoOnly = await prisma.exams.findMany({ select: { No: true } })
     * 
    **/
    findMany<T extends ExamsFindManyArgs>(
      args?: SelectSubset<T, ExamsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Exams>>, PrismaPromise<Array<ExamsGetPayload<T>>>>

    /**
     * Create a Exams.
     * @param {ExamsCreateArgs} args - Arguments to create a Exams.
     * @example
     * // Create one Exams
     * const Exams = await prisma.exams.create({
     *   data: {
     *     // ... data to create a Exams
     *   }
     * })
     * 
    **/
    create<T extends ExamsCreateArgs>(
      args: SelectSubset<T, ExamsCreateArgs>
    ): CheckSelect<T, Prisma__ExamsClient<Exams>, Prisma__ExamsClient<ExamsGetPayload<T>>>

    /**
     * Create many Exams.
     *     @param {ExamsCreateManyArgs} args - Arguments to create many Exams.
     *     @example
     *     // Create many Exams
     *     const exams = await prisma.exams.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExamsCreateManyArgs>(
      args?: SelectSubset<T, ExamsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Exams.
     * @param {ExamsDeleteArgs} args - Arguments to delete one Exams.
     * @example
     * // Delete one Exams
     * const Exams = await prisma.exams.delete({
     *   where: {
     *     // ... filter to delete one Exams
     *   }
     * })
     * 
    **/
    delete<T extends ExamsDeleteArgs>(
      args: SelectSubset<T, ExamsDeleteArgs>
    ): CheckSelect<T, Prisma__ExamsClient<Exams>, Prisma__ExamsClient<ExamsGetPayload<T>>>

    /**
     * Update one Exams.
     * @param {ExamsUpdateArgs} args - Arguments to update one Exams.
     * @example
     * // Update one Exams
     * const exams = await prisma.exams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExamsUpdateArgs>(
      args: SelectSubset<T, ExamsUpdateArgs>
    ): CheckSelect<T, Prisma__ExamsClient<Exams>, Prisma__ExamsClient<ExamsGetPayload<T>>>

    /**
     * Delete zero or more Exams.
     * @param {ExamsDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExamsDeleteManyArgs>(
      args?: SelectSubset<T, ExamsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exams = await prisma.exams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExamsUpdateManyArgs>(
      args: SelectSubset<T, ExamsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Exams.
     * @param {ExamsUpsertArgs} args - Arguments to update or create a Exams.
     * @example
     * // Update or create a Exams
     * const exams = await prisma.exams.upsert({
     *   create: {
     *     // ... data to create a Exams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exams we want to update
     *   }
     * })
    **/
    upsert<T extends ExamsUpsertArgs>(
      args: SelectSubset<T, ExamsUpsertArgs>
    ): CheckSelect<T, Prisma__ExamsClient<Exams>, Prisma__ExamsClient<ExamsGetPayload<T>>>

    /**
     * Find one Exams that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ExamsFindUniqueOrThrowArgs} args - Arguments to find a Exams
     * @example
     * // Get one Exams
     * const exams = await prisma.exams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExamsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ExamsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ExamsClient<Exams>, Prisma__ExamsClient<ExamsGetPayload<T>>>

    /**
     * Find the first Exams that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamsFindFirstOrThrowArgs} args - Arguments to find a Exams
     * @example
     * // Get one Exams
     * const exams = await prisma.exams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExamsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ExamsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ExamsClient<Exams>, Prisma__ExamsClient<ExamsGetPayload<T>>>

    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamsCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exams.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamsCountArgs>(
      args?: Subset<T, ExamsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamsAggregateArgs>(args: Subset<T, ExamsAggregateArgs>): PrismaPromise<GetExamsAggregateType<T>>

    /**
     * Group by Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamsGroupByArgs} args - Group by arguments.
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
      T extends ExamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamsGroupByArgs['orderBy'] }
        : { orderBy?: ExamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Exams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExamsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    questions<T extends QuestionsFindManyArgs = {}>(args?: Subset<T, QuestionsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Questions>>, PrismaPromise<Array<QuestionsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Exams base type for findUnique actions
   */
  export type ExamsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Exams
     * 
    **/
    select?: ExamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExamsInclude | null
    /**
     * Filter, which Exams to fetch.
     * 
    **/
    where: ExamsWhereUniqueInput
  }

  /**
   * Exams: findUnique
   */
  export interface ExamsFindUniqueArgs extends ExamsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Exams base type for findFirst actions
   */
  export type ExamsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Exams
     * 
    **/
    select?: ExamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExamsInclude | null
    /**
     * Filter, which Exams to fetch.
     * 
    **/
    where?: ExamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     * 
    **/
    orderBy?: Enumerable<ExamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     * 
    **/
    cursor?: ExamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     * 
    **/
    distinct?: Enumerable<ExamsScalarFieldEnum>
  }

  /**
   * Exams: findFirst
   */
  export interface ExamsFindFirstArgs extends ExamsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Exams findMany
   */
  export type ExamsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Exams
     * 
    **/
    select?: ExamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExamsInclude | null
    /**
     * Filter, which Exams to fetch.
     * 
    **/
    where?: ExamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     * 
    **/
    orderBy?: Enumerable<ExamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     * 
    **/
    cursor?: ExamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ExamsScalarFieldEnum>
  }


  /**
   * Exams create
   */
  export type ExamsCreateArgs = {
    /**
     * Select specific fields to fetch from the Exams
     * 
    **/
    select?: ExamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExamsInclude | null
    /**
     * The data needed to create a Exams.
     * 
    **/
    data: XOR<ExamsCreateInput, ExamsUncheckedCreateInput>
  }


  /**
   * Exams createMany
   */
  export type ExamsCreateManyArgs = {
    /**
     * The data used to create many Exams.
     * 
    **/
    data: Enumerable<ExamsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Exams update
   */
  export type ExamsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Exams
     * 
    **/
    select?: ExamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExamsInclude | null
    /**
     * The data needed to update a Exams.
     * 
    **/
    data: XOR<ExamsUpdateInput, ExamsUncheckedUpdateInput>
    /**
     * Choose, which Exams to update.
     * 
    **/
    where: ExamsWhereUniqueInput
  }


  /**
   * Exams updateMany
   */
  export type ExamsUpdateManyArgs = {
    /**
     * The data used to update Exams.
     * 
    **/
    data: XOR<ExamsUpdateManyMutationInput, ExamsUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     * 
    **/
    where?: ExamsWhereInput
  }


  /**
   * Exams upsert
   */
  export type ExamsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Exams
     * 
    **/
    select?: ExamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExamsInclude | null
    /**
     * The filter to search for the Exams to update in case it exists.
     * 
    **/
    where: ExamsWhereUniqueInput
    /**
     * In case the Exams found by the `where` argument doesn't exist, create a new Exams with this data.
     * 
    **/
    create: XOR<ExamsCreateInput, ExamsUncheckedCreateInput>
    /**
     * In case the Exams was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ExamsUpdateInput, ExamsUncheckedUpdateInput>
  }


  /**
   * Exams delete
   */
  export type ExamsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Exams
     * 
    **/
    select?: ExamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExamsInclude | null
    /**
     * Filter which Exams to delete.
     * 
    **/
    where: ExamsWhereUniqueInput
  }


  /**
   * Exams deleteMany
   */
  export type ExamsDeleteManyArgs = {
    /**
     * Filter which Exams to delete
     * 
    **/
    where?: ExamsWhereInput
  }


  /**
   * Exams: findUniqueOrThrow
   */
  export type ExamsFindUniqueOrThrowArgs = ExamsFindUniqueArgsBase
      

  /**
   * Exams: findFirstOrThrow
   */
  export type ExamsFindFirstOrThrowArgs = ExamsFindFirstArgsBase
      

  /**
   * Exams without action
   */
  export type ExamsArgs = {
    /**
     * Select specific fields to fetch from the Exams
     * 
    **/
    select?: ExamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExamsInclude | null
  }



  /**
   * Model datastore
   */


  export type AggregateDatastore = {
    _count: DatastoreCountAggregateOutputType | null
    _min: DatastoreMinAggregateOutputType | null
    _max: DatastoreMaxAggregateOutputType | null
  }

  export type DatastoreMinAggregateOutputType = {
    id: string | null
    value: string | null
  }

  export type DatastoreMaxAggregateOutputType = {
    id: string | null
    value: string | null
  }

  export type DatastoreCountAggregateOutputType = {
    id: number
    value: number
    _all: number
  }


  export type DatastoreMinAggregateInputType = {
    id?: true
    value?: true
  }

  export type DatastoreMaxAggregateInputType = {
    id?: true
    value?: true
  }

  export type DatastoreCountAggregateInputType = {
    id?: true
    value?: true
    _all?: true
  }

  export type DatastoreAggregateArgs = {
    /**
     * Filter which datastore to aggregate.
     * 
    **/
    where?: datastoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datastores to fetch.
     * 
    **/
    orderBy?: Enumerable<datastoreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: datastoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datastores from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datastores.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned datastores
    **/
    _count?: true | DatastoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatastoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatastoreMaxAggregateInputType
  }

  export type GetDatastoreAggregateType<T extends DatastoreAggregateArgs> = {
        [P in keyof T & keyof AggregateDatastore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatastore[P]>
      : GetScalarType<T[P], AggregateDatastore[P]>
  }




  export type DatastoreGroupByArgs = {
    where?: datastoreWhereInput
    orderBy?: Enumerable<datastoreOrderByWithAggregationInput>
    by: Array<DatastoreScalarFieldEnum>
    having?: datastoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatastoreCountAggregateInputType | true
    _min?: DatastoreMinAggregateInputType
    _max?: DatastoreMaxAggregateInputType
  }


  export type DatastoreGroupByOutputType = {
    id: string
    value: string
    _count: DatastoreCountAggregateOutputType | null
    _min: DatastoreMinAggregateOutputType | null
    _max: DatastoreMaxAggregateOutputType | null
  }

  type GetDatastoreGroupByPayload<T extends DatastoreGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DatastoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatastoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatastoreGroupByOutputType[P]>
            : GetScalarType<T[P], DatastoreGroupByOutputType[P]>
        }
      >
    >


  export type datastoreSelect = {
    id?: boolean
    value?: boolean
  }

  export type datastoreGetPayload<
    S extends boolean | null | undefined | datastoreArgs,
    U = keyof S
      > = S extends true
        ? datastore
    : S extends undefined
    ? never
    : S extends datastoreArgs | datastoreFindManyArgs
    ?'include' extends U
    ? datastore 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof datastore ? datastore[P] : never
  } 
    : datastore
  : datastore


  type datastoreCountArgs = Merge<
    Omit<datastoreFindManyArgs, 'select' | 'include'> & {
      select?: DatastoreCountAggregateInputType | true
    }
  >

  export interface datastoreDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Datastore that matches the filter.
     * @param {datastoreFindUniqueArgs} args - Arguments to find a Datastore
     * @example
     * // Get one Datastore
     * const datastore = await prisma.datastore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends datastoreFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, datastoreFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'datastore'> extends True ? CheckSelect<T, Prisma__datastoreClient<datastore>, Prisma__datastoreClient<datastoreGetPayload<T>>> : CheckSelect<T, Prisma__datastoreClient<datastore | null >, Prisma__datastoreClient<datastoreGetPayload<T> | null >>

    /**
     * Find the first Datastore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datastoreFindFirstArgs} args - Arguments to find a Datastore
     * @example
     * // Get one Datastore
     * const datastore = await prisma.datastore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends datastoreFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, datastoreFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'datastore'> extends True ? CheckSelect<T, Prisma__datastoreClient<datastore>, Prisma__datastoreClient<datastoreGetPayload<T>>> : CheckSelect<T, Prisma__datastoreClient<datastore | null >, Prisma__datastoreClient<datastoreGetPayload<T> | null >>

    /**
     * Find zero or more Datastores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datastoreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datastores
     * const datastores = await prisma.datastore.findMany()
     * 
     * // Get first 10 Datastores
     * const datastores = await prisma.datastore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datastoreWithIdOnly = await prisma.datastore.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends datastoreFindManyArgs>(
      args?: SelectSubset<T, datastoreFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<datastore>>, PrismaPromise<Array<datastoreGetPayload<T>>>>

    /**
     * Create a Datastore.
     * @param {datastoreCreateArgs} args - Arguments to create a Datastore.
     * @example
     * // Create one Datastore
     * const Datastore = await prisma.datastore.create({
     *   data: {
     *     // ... data to create a Datastore
     *   }
     * })
     * 
    **/
    create<T extends datastoreCreateArgs>(
      args: SelectSubset<T, datastoreCreateArgs>
    ): CheckSelect<T, Prisma__datastoreClient<datastore>, Prisma__datastoreClient<datastoreGetPayload<T>>>

    /**
     * Create many Datastores.
     *     @param {datastoreCreateManyArgs} args - Arguments to create many Datastores.
     *     @example
     *     // Create many Datastores
     *     const datastore = await prisma.datastore.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends datastoreCreateManyArgs>(
      args?: SelectSubset<T, datastoreCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Datastore.
     * @param {datastoreDeleteArgs} args - Arguments to delete one Datastore.
     * @example
     * // Delete one Datastore
     * const Datastore = await prisma.datastore.delete({
     *   where: {
     *     // ... filter to delete one Datastore
     *   }
     * })
     * 
    **/
    delete<T extends datastoreDeleteArgs>(
      args: SelectSubset<T, datastoreDeleteArgs>
    ): CheckSelect<T, Prisma__datastoreClient<datastore>, Prisma__datastoreClient<datastoreGetPayload<T>>>

    /**
     * Update one Datastore.
     * @param {datastoreUpdateArgs} args - Arguments to update one Datastore.
     * @example
     * // Update one Datastore
     * const datastore = await prisma.datastore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends datastoreUpdateArgs>(
      args: SelectSubset<T, datastoreUpdateArgs>
    ): CheckSelect<T, Prisma__datastoreClient<datastore>, Prisma__datastoreClient<datastoreGetPayload<T>>>

    /**
     * Delete zero or more Datastores.
     * @param {datastoreDeleteManyArgs} args - Arguments to filter Datastores to delete.
     * @example
     * // Delete a few Datastores
     * const { count } = await prisma.datastore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends datastoreDeleteManyArgs>(
      args?: SelectSubset<T, datastoreDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datastores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datastoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datastores
     * const datastore = await prisma.datastore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends datastoreUpdateManyArgs>(
      args: SelectSubset<T, datastoreUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Datastore.
     * @param {datastoreUpsertArgs} args - Arguments to update or create a Datastore.
     * @example
     * // Update or create a Datastore
     * const datastore = await prisma.datastore.upsert({
     *   create: {
     *     // ... data to create a Datastore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Datastore we want to update
     *   }
     * })
    **/
    upsert<T extends datastoreUpsertArgs>(
      args: SelectSubset<T, datastoreUpsertArgs>
    ): CheckSelect<T, Prisma__datastoreClient<datastore>, Prisma__datastoreClient<datastoreGetPayload<T>>>

    /**
     * Find one Datastore that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {datastoreFindUniqueOrThrowArgs} args - Arguments to find a Datastore
     * @example
     * // Get one Datastore
     * const datastore = await prisma.datastore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends datastoreFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, datastoreFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__datastoreClient<datastore>, Prisma__datastoreClient<datastoreGetPayload<T>>>

    /**
     * Find the first Datastore that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datastoreFindFirstOrThrowArgs} args - Arguments to find a Datastore
     * @example
     * // Get one Datastore
     * const datastore = await prisma.datastore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends datastoreFindFirstOrThrowArgs>(
      args?: SelectSubset<T, datastoreFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__datastoreClient<datastore>, Prisma__datastoreClient<datastoreGetPayload<T>>>

    /**
     * Count the number of Datastores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datastoreCountArgs} args - Arguments to filter Datastores to count.
     * @example
     * // Count the number of Datastores
     * const count = await prisma.datastore.count({
     *   where: {
     *     // ... the filter for the Datastores we want to count
     *   }
     * })
    **/
    count<T extends datastoreCountArgs>(
      args?: Subset<T, datastoreCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatastoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Datastore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatastoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DatastoreAggregateArgs>(args: Subset<T, DatastoreAggregateArgs>): PrismaPromise<GetDatastoreAggregateType<T>>

    /**
     * Group by Datastore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatastoreGroupByArgs} args - Group by arguments.
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
      T extends DatastoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatastoreGroupByArgs['orderBy'] }
        : { orderBy?: DatastoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DatastoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatastoreGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for datastore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__datastoreClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * datastore base type for findUnique actions
   */
  export type datastoreFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the datastore
     * 
    **/
    select?: datastoreSelect | null
    /**
     * Filter, which datastore to fetch.
     * 
    **/
    where: datastoreWhereUniqueInput
  }

  /**
   * datastore: findUnique
   */
  export interface datastoreFindUniqueArgs extends datastoreFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * datastore base type for findFirst actions
   */
  export type datastoreFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the datastore
     * 
    **/
    select?: datastoreSelect | null
    /**
     * Filter, which datastore to fetch.
     * 
    **/
    where?: datastoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datastores to fetch.
     * 
    **/
    orderBy?: Enumerable<datastoreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for datastores.
     * 
    **/
    cursor?: datastoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datastores from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datastores.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of datastores.
     * 
    **/
    distinct?: Enumerable<DatastoreScalarFieldEnum>
  }

  /**
   * datastore: findFirst
   */
  export interface datastoreFindFirstArgs extends datastoreFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * datastore findMany
   */
  export type datastoreFindManyArgs = {
    /**
     * Select specific fields to fetch from the datastore
     * 
    **/
    select?: datastoreSelect | null
    /**
     * Filter, which datastores to fetch.
     * 
    **/
    where?: datastoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datastores to fetch.
     * 
    **/
    orderBy?: Enumerable<datastoreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing datastores.
     * 
    **/
    cursor?: datastoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datastores from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datastores.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DatastoreScalarFieldEnum>
  }


  /**
   * datastore create
   */
  export type datastoreCreateArgs = {
    /**
     * Select specific fields to fetch from the datastore
     * 
    **/
    select?: datastoreSelect | null
    /**
     * The data needed to create a datastore.
     * 
    **/
    data: XOR<datastoreCreateInput, datastoreUncheckedCreateInput>
  }


  /**
   * datastore createMany
   */
  export type datastoreCreateManyArgs = {
    /**
     * The data used to create many datastores.
     * 
    **/
    data: Enumerable<datastoreCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * datastore update
   */
  export type datastoreUpdateArgs = {
    /**
     * Select specific fields to fetch from the datastore
     * 
    **/
    select?: datastoreSelect | null
    /**
     * The data needed to update a datastore.
     * 
    **/
    data: XOR<datastoreUpdateInput, datastoreUncheckedUpdateInput>
    /**
     * Choose, which datastore to update.
     * 
    **/
    where: datastoreWhereUniqueInput
  }


  /**
   * datastore updateMany
   */
  export type datastoreUpdateManyArgs = {
    /**
     * The data used to update datastores.
     * 
    **/
    data: XOR<datastoreUpdateManyMutationInput, datastoreUncheckedUpdateManyInput>
    /**
     * Filter which datastores to update
     * 
    **/
    where?: datastoreWhereInput
  }


  /**
   * datastore upsert
   */
  export type datastoreUpsertArgs = {
    /**
     * Select specific fields to fetch from the datastore
     * 
    **/
    select?: datastoreSelect | null
    /**
     * The filter to search for the datastore to update in case it exists.
     * 
    **/
    where: datastoreWhereUniqueInput
    /**
     * In case the datastore found by the `where` argument doesn't exist, create a new datastore with this data.
     * 
    **/
    create: XOR<datastoreCreateInput, datastoreUncheckedCreateInput>
    /**
     * In case the datastore was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<datastoreUpdateInput, datastoreUncheckedUpdateInput>
  }


  /**
   * datastore delete
   */
  export type datastoreDeleteArgs = {
    /**
     * Select specific fields to fetch from the datastore
     * 
    **/
    select?: datastoreSelect | null
    /**
     * Filter which datastore to delete.
     * 
    **/
    where: datastoreWhereUniqueInput
  }


  /**
   * datastore deleteMany
   */
  export type datastoreDeleteManyArgs = {
    /**
     * Filter which datastores to delete
     * 
    **/
    where?: datastoreWhereInput
  }


  /**
   * datastore: findUniqueOrThrow
   */
  export type datastoreFindUniqueOrThrowArgs = datastoreFindUniqueArgsBase
      

  /**
   * datastore: findFirstOrThrow
   */
  export type datastoreFindFirstOrThrowArgs = datastoreFindFirstArgsBase
      

  /**
   * datastore without action
   */
  export type datastoreArgs = {
    /**
     * Select specific fields to fetch from the datastore
     * 
    **/
    select?: datastoreSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DatastoreScalarFieldEnum: {
    id: 'id',
    value: 'value'
  };

  export type DatastoreScalarFieldEnum = (typeof DatastoreScalarFieldEnum)[keyof typeof DatastoreScalarFieldEnum]


  export const ExamsScalarFieldEnum: {
    No: 'No',
    time: 'time'
  };

  export type ExamsScalarFieldEnum = (typeof ExamsScalarFieldEnum)[keyof typeof ExamsScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QuestionsScalarFieldEnum: {
    body: 'body',
    options: 'options',
    answers: 'answers',
    ExamNo: 'ExamNo',
    id: 'id'
  };

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type QuestionsWhereInput = {
    AND?: Enumerable<QuestionsWhereInput>
    OR?: Enumerable<QuestionsWhereInput>
    NOT?: Enumerable<QuestionsWhereInput>
    body?: StringFilter | string
    options?: JsonFilter
    answers?: JsonFilter
    exam?: XOR<ExamsRelationFilter, ExamsWhereInput> | null
    ExamNo?: IntNullableFilter | number | null
    id?: BigIntFilter | bigint | number
  }

  export type QuestionsOrderByWithRelationInput = {
    body?: SortOrder
    options?: SortOrder
    answers?: SortOrder
    exam?: ExamsOrderByWithRelationInput
    ExamNo?: SortOrder
    id?: SortOrder
  }

  export type QuestionsWhereUniqueInput = {
    id?: bigint | number
  }

  export type QuestionsOrderByWithAggregationInput = {
    body?: SortOrder
    options?: SortOrder
    answers?: SortOrder
    ExamNo?: SortOrder
    id?: SortOrder
    _count?: QuestionsCountOrderByAggregateInput
    _avg?: QuestionsAvgOrderByAggregateInput
    _max?: QuestionsMaxOrderByAggregateInput
    _min?: QuestionsMinOrderByAggregateInput
    _sum?: QuestionsSumOrderByAggregateInput
  }

  export type QuestionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuestionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuestionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuestionsScalarWhereWithAggregatesInput>
    body?: StringWithAggregatesFilter | string
    options?: JsonWithAggregatesFilter
    answers?: JsonWithAggregatesFilter
    ExamNo?: IntNullableWithAggregatesFilter | number | null
    id?: BigIntWithAggregatesFilter | bigint | number
  }

  export type ExamsWhereInput = {
    AND?: Enumerable<ExamsWhereInput>
    OR?: Enumerable<ExamsWhereInput>
    NOT?: Enumerable<ExamsWhereInput>
    No?: IntFilter | number
    time?: IntNullableFilter | number | null
    questions?: QuestionsListRelationFilter
  }

  export type ExamsOrderByWithRelationInput = {
    No?: SortOrder
    time?: SortOrder
    questions?: QuestionsOrderByRelationAggregateInput
  }

  export type ExamsWhereUniqueInput = {
    No?: number
  }

  export type ExamsOrderByWithAggregationInput = {
    No?: SortOrder
    time?: SortOrder
    _count?: ExamsCountOrderByAggregateInput
    _avg?: ExamsAvgOrderByAggregateInput
    _max?: ExamsMaxOrderByAggregateInput
    _min?: ExamsMinOrderByAggregateInput
    _sum?: ExamsSumOrderByAggregateInput
  }

  export type ExamsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExamsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExamsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExamsScalarWhereWithAggregatesInput>
    No?: IntWithAggregatesFilter | number
    time?: IntNullableWithAggregatesFilter | number | null
  }

  export type datastoreWhereInput = {
    AND?: Enumerable<datastoreWhereInput>
    OR?: Enumerable<datastoreWhereInput>
    NOT?: Enumerable<datastoreWhereInput>
    id?: StringFilter | string
    value?: StringFilter | string
  }

  export type datastoreOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type datastoreWhereUniqueInput = {
    id?: string
  }

  export type datastoreOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    _count?: datastoreCountOrderByAggregateInput
    _max?: datastoreMaxOrderByAggregateInput
    _min?: datastoreMinOrderByAggregateInput
  }

  export type datastoreScalarWhereWithAggregatesInput = {
    AND?: Enumerable<datastoreScalarWhereWithAggregatesInput>
    OR?: Enumerable<datastoreScalarWhereWithAggregatesInput>
    NOT?: Enumerable<datastoreScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    value?: StringWithAggregatesFilter | string
  }

  export type QuestionsCreateInput = {
    body: string
    options: JsonNullValueInput | InputJsonValue
    answers: JsonNullValueInput | InputJsonValue
    exam?: ExamsCreateNestedOneWithoutQuestionsInput
    id?: bigint | number
  }

  export type QuestionsUncheckedCreateInput = {
    body: string
    options: JsonNullValueInput | InputJsonValue
    answers: JsonNullValueInput | InputJsonValue
    ExamNo?: number | null
    id?: bigint | number
  }

  export type QuestionsUpdateInput = {
    body?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    answers?: JsonNullValueInput | InputJsonValue
    exam?: ExamsUpdateOneWithoutQuestionsNestedInput
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type QuestionsUncheckedUpdateInput = {
    body?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    answers?: JsonNullValueInput | InputJsonValue
    ExamNo?: NullableIntFieldUpdateOperationsInput | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type QuestionsCreateManyInput = {
    body: string
    options: JsonNullValueInput | InputJsonValue
    answers: JsonNullValueInput | InputJsonValue
    ExamNo?: number | null
    id?: bigint | number
  }

  export type QuestionsUpdateManyMutationInput = {
    body?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    answers?: JsonNullValueInput | InputJsonValue
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type QuestionsUncheckedUpdateManyInput = {
    body?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    answers?: JsonNullValueInput | InputJsonValue
    ExamNo?: NullableIntFieldUpdateOperationsInput | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ExamsCreateInput = {
    time?: number | null
    questions?: QuestionsCreateNestedManyWithoutExamInput
  }

  export type ExamsUncheckedCreateInput = {
    No?: number
    time?: number | null
    questions?: QuestionsUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamsUpdateInput = {
    time?: NullableIntFieldUpdateOperationsInput | number | null
    questions?: QuestionsUpdateManyWithoutExamNestedInput
  }

  export type ExamsUncheckedUpdateInput = {
    No?: IntFieldUpdateOperationsInput | number
    time?: NullableIntFieldUpdateOperationsInput | number | null
    questions?: QuestionsUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamsCreateManyInput = {
    No?: number
    time?: number | null
  }

  export type ExamsUpdateManyMutationInput = {
    time?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExamsUncheckedUpdateManyInput = {
    No?: IntFieldUpdateOperationsInput | number
    time?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type datastoreCreateInput = {
    id: string
    value: string
  }

  export type datastoreUncheckedCreateInput = {
    id: string
    value: string
  }

  export type datastoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type datastoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type datastoreCreateManyInput = {
    id: string
    value: string
  }

  export type datastoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type datastoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type ExamsRelationFilter = {
    is?: ExamsWhereInput | null
    isNot?: ExamsWhereInput | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type QuestionsCountOrderByAggregateInput = {
    body?: SortOrder
    options?: SortOrder
    answers?: SortOrder
    ExamNo?: SortOrder
    id?: SortOrder
  }

  export type QuestionsAvgOrderByAggregateInput = {
    ExamNo?: SortOrder
    id?: SortOrder
  }

  export type QuestionsMaxOrderByAggregateInput = {
    body?: SortOrder
    ExamNo?: SortOrder
    id?: SortOrder
  }

  export type QuestionsMinOrderByAggregateInput = {
    body?: SortOrder
    ExamNo?: SortOrder
    id?: SortOrder
  }

  export type QuestionsSumOrderByAggregateInput = {
    ExamNo?: SortOrder
    id?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type QuestionsListRelationFilter = {
    every?: QuestionsWhereInput
    some?: QuestionsWhereInput
    none?: QuestionsWhereInput
  }

  export type QuestionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamsCountOrderByAggregateInput = {
    No?: SortOrder
    time?: SortOrder
  }

  export type ExamsAvgOrderByAggregateInput = {
    No?: SortOrder
    time?: SortOrder
  }

  export type ExamsMaxOrderByAggregateInput = {
    No?: SortOrder
    time?: SortOrder
  }

  export type ExamsMinOrderByAggregateInput = {
    No?: SortOrder
    time?: SortOrder
  }

  export type ExamsSumOrderByAggregateInput = {
    No?: SortOrder
    time?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type datastoreCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type datastoreMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type datastoreMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type ExamsCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ExamsCreateWithoutQuestionsInput, ExamsUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamsCreateOrConnectWithoutQuestionsInput
    connect?: ExamsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ExamsUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<ExamsCreateWithoutQuestionsInput, ExamsUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamsCreateOrConnectWithoutQuestionsInput
    upsert?: ExamsUpsertWithoutQuestionsInput
    disconnect?: boolean
    delete?: boolean
    connect?: ExamsWhereUniqueInput
    update?: XOR<ExamsUpdateWithoutQuestionsInput, ExamsUncheckedUpdateWithoutQuestionsInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionsCreateNestedManyWithoutExamInput = {
    create?: XOR<Enumerable<QuestionsCreateWithoutExamInput>, Enumerable<QuestionsUncheckedCreateWithoutExamInput>>
    connectOrCreate?: Enumerable<QuestionsCreateOrConnectWithoutExamInput>
    createMany?: QuestionsCreateManyExamInputEnvelope
    connect?: Enumerable<QuestionsWhereUniqueInput>
  }

  export type QuestionsUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<Enumerable<QuestionsCreateWithoutExamInput>, Enumerable<QuestionsUncheckedCreateWithoutExamInput>>
    connectOrCreate?: Enumerable<QuestionsCreateOrConnectWithoutExamInput>
    createMany?: QuestionsCreateManyExamInputEnvelope
    connect?: Enumerable<QuestionsWhereUniqueInput>
  }

  export type QuestionsUpdateManyWithoutExamNestedInput = {
    create?: XOR<Enumerable<QuestionsCreateWithoutExamInput>, Enumerable<QuestionsUncheckedCreateWithoutExamInput>>
    connectOrCreate?: Enumerable<QuestionsCreateOrConnectWithoutExamInput>
    upsert?: Enumerable<QuestionsUpsertWithWhereUniqueWithoutExamInput>
    createMany?: QuestionsCreateManyExamInputEnvelope
    set?: Enumerable<QuestionsWhereUniqueInput>
    disconnect?: Enumerable<QuestionsWhereUniqueInput>
    delete?: Enumerable<QuestionsWhereUniqueInput>
    connect?: Enumerable<QuestionsWhereUniqueInput>
    update?: Enumerable<QuestionsUpdateWithWhereUniqueWithoutExamInput>
    updateMany?: Enumerable<QuestionsUpdateManyWithWhereWithoutExamInput>
    deleteMany?: Enumerable<QuestionsScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionsUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<Enumerable<QuestionsCreateWithoutExamInput>, Enumerable<QuestionsUncheckedCreateWithoutExamInput>>
    connectOrCreate?: Enumerable<QuestionsCreateOrConnectWithoutExamInput>
    upsert?: Enumerable<QuestionsUpsertWithWhereUniqueWithoutExamInput>
    createMany?: QuestionsCreateManyExamInputEnvelope
    set?: Enumerable<QuestionsWhereUniqueInput>
    disconnect?: Enumerable<QuestionsWhereUniqueInput>
    delete?: Enumerable<QuestionsWhereUniqueInput>
    connect?: Enumerable<QuestionsWhereUniqueInput>
    update?: Enumerable<QuestionsUpdateWithWhereUniqueWithoutExamInput>
    updateMany?: Enumerable<QuestionsUpdateManyWithWhereWithoutExamInput>
    deleteMany?: Enumerable<QuestionsScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type ExamsCreateWithoutQuestionsInput = {
    time?: number | null
  }

  export type ExamsUncheckedCreateWithoutQuestionsInput = {
    No?: number
    time?: number | null
  }

  export type ExamsCreateOrConnectWithoutQuestionsInput = {
    where: ExamsWhereUniqueInput
    create: XOR<ExamsCreateWithoutQuestionsInput, ExamsUncheckedCreateWithoutQuestionsInput>
  }

  export type ExamsUpsertWithoutQuestionsInput = {
    update: XOR<ExamsUpdateWithoutQuestionsInput, ExamsUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ExamsCreateWithoutQuestionsInput, ExamsUncheckedCreateWithoutQuestionsInput>
  }

  export type ExamsUpdateWithoutQuestionsInput = {
    time?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExamsUncheckedUpdateWithoutQuestionsInput = {
    No?: IntFieldUpdateOperationsInput | number
    time?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuestionsCreateWithoutExamInput = {
    body: string
    options: JsonNullValueInput | InputJsonValue
    answers: JsonNullValueInput | InputJsonValue
    id?: bigint | number
  }

  export type QuestionsUncheckedCreateWithoutExamInput = {
    body: string
    options: JsonNullValueInput | InputJsonValue
    answers: JsonNullValueInput | InputJsonValue
    id?: bigint | number
  }

  export type QuestionsCreateOrConnectWithoutExamInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutExamInput, QuestionsUncheckedCreateWithoutExamInput>
  }

  export type QuestionsCreateManyExamInputEnvelope = {
    data: Enumerable<QuestionsCreateManyExamInput>
    skipDuplicates?: boolean
  }

  export type QuestionsUpsertWithWhereUniqueWithoutExamInput = {
    where: QuestionsWhereUniqueInput
    update: XOR<QuestionsUpdateWithoutExamInput, QuestionsUncheckedUpdateWithoutExamInput>
    create: XOR<QuestionsCreateWithoutExamInput, QuestionsUncheckedCreateWithoutExamInput>
  }

  export type QuestionsUpdateWithWhereUniqueWithoutExamInput = {
    where: QuestionsWhereUniqueInput
    data: XOR<QuestionsUpdateWithoutExamInput, QuestionsUncheckedUpdateWithoutExamInput>
  }

  export type QuestionsUpdateManyWithWhereWithoutExamInput = {
    where: QuestionsScalarWhereInput
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type QuestionsScalarWhereInput = {
    AND?: Enumerable<QuestionsScalarWhereInput>
    OR?: Enumerable<QuestionsScalarWhereInput>
    NOT?: Enumerable<QuestionsScalarWhereInput>
    body?: StringFilter | string
    options?: JsonFilter
    answers?: JsonFilter
    ExamNo?: IntNullableFilter | number | null
    id?: BigIntFilter | bigint | number
  }

  export type QuestionsCreateManyExamInput = {
    body: string
    options: JsonNullValueInput | InputJsonValue
    answers: JsonNullValueInput | InputJsonValue
    id?: bigint | number
  }

  export type QuestionsUpdateWithoutExamInput = {
    body?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    answers?: JsonNullValueInput | InputJsonValue
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type QuestionsUncheckedUpdateWithoutExamInput = {
    body?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    answers?: JsonNullValueInput | InputJsonValue
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type QuestionsUncheckedUpdateManyWithoutQuestionsInput = {
    body?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    answers?: JsonNullValueInput | InputJsonValue
    id?: BigIntFieldUpdateOperationsInput | bigint | number
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