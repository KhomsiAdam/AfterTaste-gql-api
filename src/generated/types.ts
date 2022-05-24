import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../config/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  ObjectId: any;
};

export type Admin = {
  __typename?: 'Admin';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  role?: Maybe<Auth>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminBy = {
  __typename?: 'AdminBy';
  entity: Admin;
};

export type AdminDeleted = {
  __typename?: 'AdminDeleted';
  entity: Admin;
  message: Scalars['String'];
};

export type AdminDeletedResult = AdminDeleted | AdminNotFound;

export type AdminNotFound = {
  __typename?: 'AdminNotFound';
  message: Scalars['String'];
};

export type AdminResult = AdminBy | AdminNotFound;

export type AdminUpdated = {
  __typename?: 'AdminUpdated';
  entity: Admin;
  message: Scalars['String'];
};

export type AdminUpdatedInput = {
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type AdminUpdatedResult = AdminNotFound | AdminUpdated;

export type Admins = {
  __typename?: 'Admins';
  entities: Array<Admin>;
};

export type AdminsResult = AdminNotFound | Admins;

export type Auth = {
  __typename?: 'Auth';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AuthError = {
  __typename?: 'AuthError';
  message: Scalars['String'];
};

export type FilterCondition = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
};

export type FilterInput = {
  content?: InputMaybe<FilterCondition>;
  title?: InputMaybe<FilterCondition>;
};

export type Login = {
  __typename?: 'Login';
  message: Scalars['String'];
  role: Scalars['String'];
  token: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResult = AuthError | Login;

export type Logout = {
  __typename?: 'Logout';
  message: Scalars['String'];
};

export type LogoutResult = AuthError | Logout;

export type Menu = {
  __typename?: 'Menu';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<Product>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MenuBy = {
  __typename?: 'MenuBy';
  entity: Menu;
};

export type MenuCreated = {
  __typename?: 'MenuCreated';
  entity: Menu;
  message: Scalars['String'];
};

export type MenuCreatedInput = {
  name: Scalars['String'];
  products: Array<InputMaybe<Scalars['ObjectId']>>;
};

export type MenuCreatedResult = MenuCreated | MenuNotFound;

export type MenuNotFound = {
  __typename?: 'MenuNotFound';
  message: Scalars['String'];
};

export type MenuRemoved = {
  __typename?: 'MenuRemoved';
  entity: Menu;
  message: Scalars['String'];
};

export type MenuRemovedResult = MenuNotFound | MenuRemoved;

export type MenuResult = MenuBy | MenuNotFound;

export type MenuUpdated = {
  __typename?: 'MenuUpdated';
  entity: Menu;
  message: Scalars['String'];
};

export type MenuUpdatedInput = {
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
};

export type MenuUpdatedResult = MenuNotFound | MenuUpdated;

export type Menus = {
  __typename?: 'Menus';
  entities: Array<Menu>;
};

export type MenusResult = MenuNotFound | Menus;

export type Mutation = {
  __typename?: 'Mutation';
  createMenu: MenuCreatedResult;
  createOrder: OrderCreatedResult;
  createProduct: ProductCreatedResult;
  deleteAdmin: AdminDeletedResult;
  deleteUser: UserDeletedResult;
  login: LoginResult;
  logout: LogoutResult;
  refresh: RefreshResult;
  register: RegisterResult;
  removeMenu: MenuRemovedResult;
  removeOrder: OrderRemovedResult;
  removeProduct: ProductRemovedResult;
  updateAdmin: AdminUpdatedResult;
  updateMenu: MenuUpdatedResult;
  updateOrder: OrderUpdatedResult;
  updateProduct: ProductUpdatedResult;
  updateUser: UserUpdatedResult;
};


export type MutationCreateMenuArgs = {
  input: MenuCreatedInput;
};


export type MutationCreateOrderArgs = {
  input: OrderCreatedInput;
};


export type MutationCreateProductArgs = {
  input: ProductCreatedInput;
};


export type MutationDeleteAdminArgs = {
  id: Scalars['ObjectId'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ObjectId'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRemoveMenuArgs = {
  id: Scalars['ObjectId'];
};


export type MutationRemoveOrderArgs = {
  id: Scalars['ObjectId'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ObjectId'];
};


export type MutationUpdateAdminArgs = {
  id: Scalars['ObjectId'];
  input: AdminUpdatedInput;
};


export type MutationUpdateMenuArgs = {
  id: Scalars['ObjectId'];
  input: MenuUpdatedInput;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['ObjectId'];
  input: OrderUpdatedInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ObjectId'];
  input: ProductUpdatedInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ObjectId'];
  input: UserUpdatedInput;
};

export type Order = {
  __typename?: 'Order';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  menus?: Maybe<Array<Maybe<Menu>>>;
  menusQuantity?: Maybe<Array<Maybe<Scalars['Int']>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  productsQuantity?: Maybe<Array<Maybe<Scalars['Int']>>>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type OrderBy = {
  __typename?: 'OrderBy';
  entity: Order;
};

export type OrderCreated = {
  __typename?: 'OrderCreated';
  entity: Order;
  message: Scalars['String'];
};

export type OrderCreatedInput = {
  menus?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  menusQuantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  productsQuantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  user: Scalars['ObjectId'];
};

export type OrderCreatedResult = OrderCreated | OrderNotFound;

export type OrderNotFound = {
  __typename?: 'OrderNotFound';
  message: Scalars['String'];
};

export type OrderRemoved = {
  __typename?: 'OrderRemoved';
  entity: Order;
  message: Scalars['String'];
};

export type OrderRemovedResult = OrderNotFound | OrderRemoved;

export type OrderResult = OrderBy | OrderNotFound;

export type OrderUpdated = {
  __typename?: 'OrderUpdated';
  entity: Order;
  message: Scalars['String'];
};

export type OrderUpdatedInput = {
  menus?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  menusQuantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  productsQuantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  user?: InputMaybe<Scalars['ObjectId']>;
};

export type OrderUpdatedResult = OrderNotFound | OrderUpdated;

export type Orders = {
  __typename?: 'Orders';
  entities: Array<Order>;
};

export type OrdersResult = OrderNotFound | Orders;

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  _id?: Maybe<Scalars['ObjectId']>;
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductBy = {
  __typename?: 'ProductBy';
  entity: Product;
};

export type ProductCreated = {
  __typename?: 'ProductCreated';
  entity: Product;
  message: Scalars['String'];
};

export type ProductCreatedInput = {
  category: Scalars['String'];
  description: Scalars['String'];
  images: Array<InputMaybe<Scalars['String']>>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type ProductCreatedResult = ProductCreated | ProductNotFound;

export type ProductNotFound = {
  __typename?: 'ProductNotFound';
  message: Scalars['String'];
};

export type ProductRemoved = {
  __typename?: 'ProductRemoved';
  entity: Product;
  message: Scalars['String'];
};

export type ProductRemovedResult = ProductNotFound | ProductRemoved;

export type ProductResult = ProductBy | ProductNotFound;

export type ProductUpdated = {
  __typename?: 'ProductUpdated';
  entity: Product;
  message: Scalars['String'];
};

export type ProductUpdatedInput = {
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type ProductUpdatedResult = ProductNotFound | ProductUpdated;

export type Products = {
  __typename?: 'Products';
  entities: Array<Product>;
};

export type ProductsResult = ProductNotFound | Products;

export type Query = {
  __typename?: 'Query';
  getAdminByField: AdminResult;
  getAdminById: AdminResult;
  getAllAdmins: AdminsResult;
  getAllMenus: MenusResult;
  getAllOrders: OrdersResult;
  getAllProducts: ProductsResult;
  getAllUsers: UsersResult;
  getMenuByField: MenuResult;
  getMenuById: MenuResult;
  getOrderByField: OrderResult;
  getOrderById: OrderResult;
  getProductByField: ProductResult;
  getProductById: ProductResult;
  getUserByField: UserResult;
  getUserById: UserResult;
};


export type QueryGetAdminByFieldArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


export type QueryGetAdminByIdArgs = {
  id: Scalars['ObjectId'];
};


export type QueryGetAllAdminsArgs = {
  filter?: InputMaybe<FilterInput>;
  paginate?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetAllMenusArgs = {
  filter?: InputMaybe<FilterInput>;
  paginate?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetAllOrdersArgs = {
  filter?: InputMaybe<FilterInput>;
  paginate?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetAllProductsArgs = {
  filter?: InputMaybe<FilterInput>;
  paginate?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetAllUsersArgs = {
  filter?: InputMaybe<FilterInput>;
  paginate?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetMenuByFieldArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


export type QueryGetMenuByIdArgs = {
  id: Scalars['ObjectId'];
};


export type QueryGetOrderByFieldArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


export type QueryGetOrderByIdArgs = {
  id: Scalars['ObjectId'];
};


export type QueryGetProductByFieldArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


export type QueryGetProductByIdArgs = {
  id: Scalars['ObjectId'];
};


export type QueryGetUserByFieldArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ObjectId'];
};

export type Refresh = {
  __typename?: 'Refresh';
  message: Scalars['String'];
  role: Scalars['String'];
  token: Scalars['String'];
};

export type RefreshResult = AuthError | Refresh;

export type Register = {
  __typename?: 'Register';
  message: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Scalars['String']>;
};

export type RegisterResult = AuthError | Register;

export type SortInput = {
  field?: InputMaybe<SortableField>;
  order?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum SortableField {
  CreatedAt = 'createdAt'
}

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fidelity?: Maybe<Scalars['Int']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  role?: Maybe<Auth>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserBy = {
  __typename?: 'UserBy';
  entity: User;
};

export type UserDeleted = {
  __typename?: 'UserDeleted';
  entity: User;
  message: Scalars['String'];
};

export type UserDeletedResult = UserDeleted | UserNotFound;

export type UserNotFound = {
  __typename?: 'UserNotFound';
  message: Scalars['String'];
};

export type UserResult = UserBy | UserNotFound;

export type UserUpdated = {
  __typename?: 'UserUpdated';
  entity: User;
  message: Scalars['String'];
};

export type UserUpdatedInput = {
  fidelity?: InputMaybe<Scalars['Int']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type UserUpdatedResult = UserNotFound | UserUpdated;

export type Users = {
  __typename?: 'Users';
  entities: Array<User>;
};

export type UsersResult = UserNotFound | Users;



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Admin: ResolverTypeWrapper<Admin>;
  AdminBy: ResolverTypeWrapper<AdminBy>;
  AdminDeleted: ResolverTypeWrapper<AdminDeleted>;
  AdminDeletedResult: ResolversTypes['AdminDeleted'] | ResolversTypes['AdminNotFound'];
  AdminNotFound: ResolverTypeWrapper<AdminNotFound>;
  AdminResult: ResolversTypes['AdminBy'] | ResolversTypes['AdminNotFound'];
  AdminUpdated: ResolverTypeWrapper<AdminUpdated>;
  AdminUpdatedInput: AdminUpdatedInput;
  AdminUpdatedResult: ResolversTypes['AdminNotFound'] | ResolversTypes['AdminUpdated'];
  Admins: ResolverTypeWrapper<Admins>;
  AdminsResult: ResolversTypes['AdminNotFound'] | ResolversTypes['Admins'];
  Auth: ResolverTypeWrapper<Auth>;
  AuthError: ResolverTypeWrapper<AuthError>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  FilterCondition: FilterCondition;
  FilterInput: FilterInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Login: ResolverTypeWrapper<Login>;
  LoginInput: LoginInput;
  LoginResult: ResolversTypes['AuthError'] | ResolversTypes['Login'];
  Logout: ResolverTypeWrapper<Logout>;
  LogoutResult: ResolversTypes['AuthError'] | ResolversTypes['Logout'];
  Menu: ResolverTypeWrapper<Menu>;
  MenuBy: ResolverTypeWrapper<MenuBy>;
  MenuCreated: ResolverTypeWrapper<MenuCreated>;
  MenuCreatedInput: MenuCreatedInput;
  MenuCreatedResult: ResolversTypes['MenuCreated'] | ResolversTypes['MenuNotFound'];
  MenuNotFound: ResolverTypeWrapper<MenuNotFound>;
  MenuRemoved: ResolverTypeWrapper<MenuRemoved>;
  MenuRemovedResult: ResolversTypes['MenuNotFound'] | ResolversTypes['MenuRemoved'];
  MenuResult: ResolversTypes['MenuBy'] | ResolversTypes['MenuNotFound'];
  MenuUpdated: ResolverTypeWrapper<MenuUpdated>;
  MenuUpdatedInput: MenuUpdatedInput;
  MenuUpdatedResult: ResolversTypes['MenuNotFound'] | ResolversTypes['MenuUpdated'];
  Menus: ResolverTypeWrapper<Menus>;
  MenusResult: ResolversTypes['MenuNotFound'] | ResolversTypes['Menus'];
  Mutation: ResolverTypeWrapper<{}>;
  ObjectId: ResolverTypeWrapper<Scalars['ObjectId']>;
  Order: ResolverTypeWrapper<Order>;
  OrderBy: ResolverTypeWrapper<OrderBy>;
  OrderCreated: ResolverTypeWrapper<OrderCreated>;
  OrderCreatedInput: OrderCreatedInput;
  OrderCreatedResult: ResolversTypes['OrderCreated'] | ResolversTypes['OrderNotFound'];
  OrderNotFound: ResolverTypeWrapper<OrderNotFound>;
  OrderRemoved: ResolverTypeWrapper<OrderRemoved>;
  OrderRemovedResult: ResolversTypes['OrderNotFound'] | ResolversTypes['OrderRemoved'];
  OrderResult: ResolversTypes['OrderBy'] | ResolversTypes['OrderNotFound'];
  OrderUpdated: ResolverTypeWrapper<OrderUpdated>;
  OrderUpdatedInput: OrderUpdatedInput;
  OrderUpdatedResult: ResolversTypes['OrderNotFound'] | ResolversTypes['OrderUpdated'];
  Orders: ResolverTypeWrapper<Orders>;
  OrdersResult: ResolversTypes['OrderNotFound'] | ResolversTypes['Orders'];
  PaginationInput: PaginationInput;
  Product: ResolverTypeWrapper<Product>;
  ProductBy: ResolverTypeWrapper<ProductBy>;
  ProductCreated: ResolverTypeWrapper<ProductCreated>;
  ProductCreatedInput: ProductCreatedInput;
  ProductCreatedResult: ResolversTypes['ProductCreated'] | ResolversTypes['ProductNotFound'];
  ProductNotFound: ResolverTypeWrapper<ProductNotFound>;
  ProductRemoved: ResolverTypeWrapper<ProductRemoved>;
  ProductRemovedResult: ResolversTypes['ProductNotFound'] | ResolversTypes['ProductRemoved'];
  ProductResult: ResolversTypes['ProductBy'] | ResolversTypes['ProductNotFound'];
  ProductUpdated: ResolverTypeWrapper<ProductUpdated>;
  ProductUpdatedInput: ProductUpdatedInput;
  ProductUpdatedResult: ResolversTypes['ProductNotFound'] | ResolversTypes['ProductUpdated'];
  Products: ResolverTypeWrapper<Products>;
  ProductsResult: ResolversTypes['ProductNotFound'] | ResolversTypes['Products'];
  Query: ResolverTypeWrapper<{}>;
  Refresh: ResolverTypeWrapper<Refresh>;
  RefreshResult: ResolversTypes['AuthError'] | ResolversTypes['Refresh'];
  Register: ResolverTypeWrapper<Register>;
  RegisterInput: RegisterInput;
  RegisterResult: ResolversTypes['AuthError'] | ResolversTypes['Register'];
  SortInput: SortInput;
  SortOrder: SortOrder;
  SortableField: SortableField;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  UserBy: ResolverTypeWrapper<UserBy>;
  UserDeleted: ResolverTypeWrapper<UserDeleted>;
  UserDeletedResult: ResolversTypes['UserDeleted'] | ResolversTypes['UserNotFound'];
  UserNotFound: ResolverTypeWrapper<UserNotFound>;
  UserResult: ResolversTypes['UserBy'] | ResolversTypes['UserNotFound'];
  UserUpdated: ResolverTypeWrapper<UserUpdated>;
  UserUpdatedInput: UserUpdatedInput;
  UserUpdatedResult: ResolversTypes['UserNotFound'] | ResolversTypes['UserUpdated'];
  Users: ResolverTypeWrapper<Users>;
  UsersResult: ResolversTypes['UserNotFound'] | ResolversTypes['Users'];
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Admin: Admin;
  AdminBy: AdminBy;
  AdminDeleted: AdminDeleted;
  AdminDeletedResult: ResolversParentTypes['AdminDeleted'] | ResolversParentTypes['AdminNotFound'];
  AdminNotFound: AdminNotFound;
  AdminResult: ResolversParentTypes['AdminBy'] | ResolversParentTypes['AdminNotFound'];
  AdminUpdated: AdminUpdated;
  AdminUpdatedInput: AdminUpdatedInput;
  AdminUpdatedResult: ResolversParentTypes['AdminNotFound'] | ResolversParentTypes['AdminUpdated'];
  Admins: Admins;
  AdminsResult: ResolversParentTypes['AdminNotFound'] | ResolversParentTypes['Admins'];
  Auth: Auth;
  AuthError: AuthError;
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  FilterCondition: FilterCondition;
  FilterInput: FilterInput;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Login: Login;
  LoginInput: LoginInput;
  LoginResult: ResolversParentTypes['AuthError'] | ResolversParentTypes['Login'];
  Logout: Logout;
  LogoutResult: ResolversParentTypes['AuthError'] | ResolversParentTypes['Logout'];
  Menu: Menu;
  MenuBy: MenuBy;
  MenuCreated: MenuCreated;
  MenuCreatedInput: MenuCreatedInput;
  MenuCreatedResult: ResolversParentTypes['MenuCreated'] | ResolversParentTypes['MenuNotFound'];
  MenuNotFound: MenuNotFound;
  MenuRemoved: MenuRemoved;
  MenuRemovedResult: ResolversParentTypes['MenuNotFound'] | ResolversParentTypes['MenuRemoved'];
  MenuResult: ResolversParentTypes['MenuBy'] | ResolversParentTypes['MenuNotFound'];
  MenuUpdated: MenuUpdated;
  MenuUpdatedInput: MenuUpdatedInput;
  MenuUpdatedResult: ResolversParentTypes['MenuNotFound'] | ResolversParentTypes['MenuUpdated'];
  Menus: Menus;
  MenusResult: ResolversParentTypes['MenuNotFound'] | ResolversParentTypes['Menus'];
  Mutation: {};
  ObjectId: Scalars['ObjectId'];
  Order: Order;
  OrderBy: OrderBy;
  OrderCreated: OrderCreated;
  OrderCreatedInput: OrderCreatedInput;
  OrderCreatedResult: ResolversParentTypes['OrderCreated'] | ResolversParentTypes['OrderNotFound'];
  OrderNotFound: OrderNotFound;
  OrderRemoved: OrderRemoved;
  OrderRemovedResult: ResolversParentTypes['OrderNotFound'] | ResolversParentTypes['OrderRemoved'];
  OrderResult: ResolversParentTypes['OrderBy'] | ResolversParentTypes['OrderNotFound'];
  OrderUpdated: OrderUpdated;
  OrderUpdatedInput: OrderUpdatedInput;
  OrderUpdatedResult: ResolversParentTypes['OrderNotFound'] | ResolversParentTypes['OrderUpdated'];
  Orders: Orders;
  OrdersResult: ResolversParentTypes['OrderNotFound'] | ResolversParentTypes['Orders'];
  PaginationInput: PaginationInput;
  Product: Product;
  ProductBy: ProductBy;
  ProductCreated: ProductCreated;
  ProductCreatedInput: ProductCreatedInput;
  ProductCreatedResult: ResolversParentTypes['ProductCreated'] | ResolversParentTypes['ProductNotFound'];
  ProductNotFound: ProductNotFound;
  ProductRemoved: ProductRemoved;
  ProductRemovedResult: ResolversParentTypes['ProductNotFound'] | ResolversParentTypes['ProductRemoved'];
  ProductResult: ResolversParentTypes['ProductBy'] | ResolversParentTypes['ProductNotFound'];
  ProductUpdated: ProductUpdated;
  ProductUpdatedInput: ProductUpdatedInput;
  ProductUpdatedResult: ResolversParentTypes['ProductNotFound'] | ResolversParentTypes['ProductUpdated'];
  Products: Products;
  ProductsResult: ResolversParentTypes['ProductNotFound'] | ResolversParentTypes['Products'];
  Query: {};
  Refresh: Refresh;
  RefreshResult: ResolversParentTypes['AuthError'] | ResolversParentTypes['Refresh'];
  Register: Register;
  RegisterInput: RegisterInput;
  RegisterResult: ResolversParentTypes['AuthError'] | ResolversParentTypes['Register'];
  SortInput: SortInput;
  String: Scalars['String'];
  User: User;
  UserBy: UserBy;
  UserDeleted: UserDeleted;
  UserDeletedResult: ResolversParentTypes['UserDeleted'] | ResolversParentTypes['UserNotFound'];
  UserNotFound: UserNotFound;
  UserResult: ResolversParentTypes['UserBy'] | ResolversParentTypes['UserNotFound'];
  UserUpdated: UserUpdated;
  UserUpdatedInput: UserUpdatedInput;
  UserUpdatedResult: ResolversParentTypes['UserNotFound'] | ResolversParentTypes['UserUpdated'];
  Users: Users;
  UsersResult: ResolversParentTypes['UserNotFound'] | ResolversParentTypes['Users'];
};

export type AdminResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Admin'] = ResolversParentTypes['Admin']> = {
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminByResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminBy'] = ResolversParentTypes['AdminBy']> = {
  entity?: Resolver<ResolversTypes['Admin'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminDeletedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminDeleted'] = ResolversParentTypes['AdminDeleted']> = {
  entity?: Resolver<ResolversTypes['Admin'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminDeletedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminDeletedResult'] = ResolversParentTypes['AdminDeletedResult']> = {
  __resolveType: TypeResolveFn<'AdminDeleted' | 'AdminNotFound', ParentType, ContextType>;
};

export type AdminNotFoundResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminNotFound'] = ResolversParentTypes['AdminNotFound']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminResult'] = ResolversParentTypes['AdminResult']> = {
  __resolveType: TypeResolveFn<'AdminBy' | 'AdminNotFound', ParentType, ContextType>;
};

export type AdminUpdatedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminUpdated'] = ResolversParentTypes['AdminUpdated']> = {
  entity?: Resolver<ResolversTypes['Admin'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminUpdatedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminUpdatedResult'] = ResolversParentTypes['AdminUpdatedResult']> = {
  __resolveType: TypeResolveFn<'AdminNotFound' | 'AdminUpdated', ParentType, ContextType>;
};

export type AdminsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Admins'] = ResolversParentTypes['Admins']> = {
  entities?: Resolver<Array<ResolversTypes['Admin']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminsResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminsResult'] = ResolversParentTypes['AdminsResult']> = {
  __resolveType: TypeResolveFn<'AdminNotFound' | 'Admins', ParentType, ContextType>;
};

export type AuthResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = {
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthErrorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AuthError'] = ResolversParentTypes['AuthError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type LoginResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Login'] = ResolversParentTypes['Login']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LoginResult'] = ResolversParentTypes['LoginResult']> = {
  __resolveType: TypeResolveFn<'AuthError' | 'Login', ParentType, ContextType>;
};

export type LogoutResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Logout'] = ResolversParentTypes['Logout']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogoutResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LogoutResult'] = ResolversParentTypes['LogoutResult']> = {
  __resolveType: TypeResolveFn<'AuthError' | 'Logout', ParentType, ContextType>;
};

export type MenuResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Menu'] = ResolversParentTypes['Menu']> = {
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MenuByResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MenuBy'] = ResolversParentTypes['MenuBy']> = {
  entity?: Resolver<ResolversTypes['Menu'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MenuCreatedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MenuCreated'] = ResolversParentTypes['MenuCreated']> = {
  entity?: Resolver<ResolversTypes['Menu'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MenuCreatedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MenuCreatedResult'] = ResolversParentTypes['MenuCreatedResult']> = {
  __resolveType: TypeResolveFn<'MenuCreated' | 'MenuNotFound', ParentType, ContextType>;
};

export type MenuNotFoundResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MenuNotFound'] = ResolversParentTypes['MenuNotFound']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MenuRemovedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MenuRemoved'] = ResolversParentTypes['MenuRemoved']> = {
  entity?: Resolver<ResolversTypes['Menu'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MenuRemovedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MenuRemovedResult'] = ResolversParentTypes['MenuRemovedResult']> = {
  __resolveType: TypeResolveFn<'MenuNotFound' | 'MenuRemoved', ParentType, ContextType>;
};

export type MenuResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MenuResult'] = ResolversParentTypes['MenuResult']> = {
  __resolveType: TypeResolveFn<'MenuBy' | 'MenuNotFound', ParentType, ContextType>;
};

export type MenuUpdatedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MenuUpdated'] = ResolversParentTypes['MenuUpdated']> = {
  entity?: Resolver<ResolversTypes['Menu'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MenuUpdatedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MenuUpdatedResult'] = ResolversParentTypes['MenuUpdatedResult']> = {
  __resolveType: TypeResolveFn<'MenuNotFound' | 'MenuUpdated', ParentType, ContextType>;
};

export type MenusResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Menus'] = ResolversParentTypes['Menus']> = {
  entities?: Resolver<Array<ResolversTypes['Menu']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MenusResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MenusResult'] = ResolversParentTypes['MenusResult']> = {
  __resolveType: TypeResolveFn<'MenuNotFound' | 'Menus', ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createMenu?: Resolver<ResolversTypes['MenuCreatedResult'], ParentType, ContextType, RequireFields<MutationCreateMenuArgs, 'input'>>;
  createOrder?: Resolver<ResolversTypes['OrderCreatedResult'], ParentType, ContextType, RequireFields<MutationCreateOrderArgs, 'input'>>;
  createProduct?: Resolver<ResolversTypes['ProductCreatedResult'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
  deleteAdmin?: Resolver<ResolversTypes['AdminDeletedResult'], ParentType, ContextType, RequireFields<MutationDeleteAdminArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['UserDeletedResult'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  login?: Resolver<ResolversTypes['LoginResult'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  logout?: Resolver<ResolversTypes['LogoutResult'], ParentType, ContextType>;
  refresh?: Resolver<ResolversTypes['RefreshResult'], ParentType, ContextType>;
  register?: Resolver<ResolversTypes['RegisterResult'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
  removeMenu?: Resolver<ResolversTypes['MenuRemovedResult'], ParentType, ContextType, RequireFields<MutationRemoveMenuArgs, 'id'>>;
  removeOrder?: Resolver<ResolversTypes['OrderRemovedResult'], ParentType, ContextType, RequireFields<MutationRemoveOrderArgs, 'id'>>;
  removeProduct?: Resolver<ResolversTypes['ProductRemovedResult'], ParentType, ContextType, RequireFields<MutationRemoveProductArgs, 'id'>>;
  updateAdmin?: Resolver<ResolversTypes['AdminUpdatedResult'], ParentType, ContextType, RequireFields<MutationUpdateAdminArgs, 'id' | 'input'>>;
  updateMenu?: Resolver<ResolversTypes['MenuUpdatedResult'], ParentType, ContextType, RequireFields<MutationUpdateMenuArgs, 'id' | 'input'>>;
  updateOrder?: Resolver<ResolversTypes['OrderUpdatedResult'], ParentType, ContextType, RequireFields<MutationUpdateOrderArgs, 'id' | 'input'>>;
  updateProduct?: Resolver<ResolversTypes['ProductUpdatedResult'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'id' | 'input'>>;
  updateUser?: Resolver<ResolversTypes['UserUpdatedResult'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
};

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectId'], any> {
  name: 'ObjectId';
}

export type OrderResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  menus?: Resolver<Maybe<Array<Maybe<ResolversTypes['Menu']>>>, ParentType, ContextType>;
  menusQuantity?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  productsQuantity?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderByResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OrderBy'] = ResolversParentTypes['OrderBy']> = {
  entity?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderCreatedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OrderCreated'] = ResolversParentTypes['OrderCreated']> = {
  entity?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderCreatedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OrderCreatedResult'] = ResolversParentTypes['OrderCreatedResult']> = {
  __resolveType: TypeResolveFn<'OrderCreated' | 'OrderNotFound', ParentType, ContextType>;
};

export type OrderNotFoundResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OrderNotFound'] = ResolversParentTypes['OrderNotFound']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderRemovedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OrderRemoved'] = ResolversParentTypes['OrderRemoved']> = {
  entity?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderRemovedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OrderRemovedResult'] = ResolversParentTypes['OrderRemovedResult']> = {
  __resolveType: TypeResolveFn<'OrderNotFound' | 'OrderRemoved', ParentType, ContextType>;
};

export type OrderResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OrderResult'] = ResolversParentTypes['OrderResult']> = {
  __resolveType: TypeResolveFn<'OrderBy' | 'OrderNotFound', ParentType, ContextType>;
};

export type OrderUpdatedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OrderUpdated'] = ResolversParentTypes['OrderUpdated']> = {
  entity?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderUpdatedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OrderUpdatedResult'] = ResolversParentTypes['OrderUpdatedResult']> = {
  __resolveType: TypeResolveFn<'OrderNotFound' | 'OrderUpdated', ParentType, ContextType>;
};

export type OrdersResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Orders'] = ResolversParentTypes['Orders']> = {
  entities?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrdersResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OrdersResult'] = ResolversParentTypes['OrdersResult']> = {
  __resolveType: TypeResolveFn<'OrderNotFound' | 'Orders', ParentType, ContextType>;
};

export type ProductResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductByResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductBy'] = ResolversParentTypes['ProductBy']> = {
  entity?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCreatedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductCreated'] = ResolversParentTypes['ProductCreated']> = {
  entity?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCreatedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductCreatedResult'] = ResolversParentTypes['ProductCreatedResult']> = {
  __resolveType: TypeResolveFn<'ProductCreated' | 'ProductNotFound', ParentType, ContextType>;
};

export type ProductNotFoundResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductNotFound'] = ResolversParentTypes['ProductNotFound']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductRemovedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductRemoved'] = ResolversParentTypes['ProductRemoved']> = {
  entity?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductRemovedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductRemovedResult'] = ResolversParentTypes['ProductRemovedResult']> = {
  __resolveType: TypeResolveFn<'ProductNotFound' | 'ProductRemoved', ParentType, ContextType>;
};

export type ProductResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductResult'] = ResolversParentTypes['ProductResult']> = {
  __resolveType: TypeResolveFn<'ProductBy' | 'ProductNotFound', ParentType, ContextType>;
};

export type ProductUpdatedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductUpdated'] = ResolversParentTypes['ProductUpdated']> = {
  entity?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductUpdatedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductUpdatedResult'] = ResolversParentTypes['ProductUpdatedResult']> = {
  __resolveType: TypeResolveFn<'ProductNotFound' | 'ProductUpdated', ParentType, ContextType>;
};

export type ProductsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Products'] = ResolversParentTypes['Products']> = {
  entities?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductsResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductsResult'] = ResolversParentTypes['ProductsResult']> = {
  __resolveType: TypeResolveFn<'ProductNotFound' | 'Products', ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAdminByField?: Resolver<ResolversTypes['AdminResult'], ParentType, ContextType, RequireFields<QueryGetAdminByFieldArgs, 'field' | 'value'>>;
  getAdminById?: Resolver<ResolversTypes['AdminResult'], ParentType, ContextType, RequireFields<QueryGetAdminByIdArgs, 'id'>>;
  getAllAdmins?: Resolver<ResolversTypes['AdminsResult'], ParentType, ContextType, Partial<QueryGetAllAdminsArgs>>;
  getAllMenus?: Resolver<ResolversTypes['MenusResult'], ParentType, ContextType, Partial<QueryGetAllMenusArgs>>;
  getAllOrders?: Resolver<ResolversTypes['OrdersResult'], ParentType, ContextType, Partial<QueryGetAllOrdersArgs>>;
  getAllProducts?: Resolver<ResolversTypes['ProductsResult'], ParentType, ContextType, Partial<QueryGetAllProductsArgs>>;
  getAllUsers?: Resolver<ResolversTypes['UsersResult'], ParentType, ContextType, Partial<QueryGetAllUsersArgs>>;
  getMenuByField?: Resolver<ResolversTypes['MenuResult'], ParentType, ContextType, RequireFields<QueryGetMenuByFieldArgs, 'field' | 'value'>>;
  getMenuById?: Resolver<ResolversTypes['MenuResult'], ParentType, ContextType, RequireFields<QueryGetMenuByIdArgs, 'id'>>;
  getOrderByField?: Resolver<ResolversTypes['OrderResult'], ParentType, ContextType, RequireFields<QueryGetOrderByFieldArgs, 'field' | 'value'>>;
  getOrderById?: Resolver<ResolversTypes['OrderResult'], ParentType, ContextType, RequireFields<QueryGetOrderByIdArgs, 'id'>>;
  getProductByField?: Resolver<ResolversTypes['ProductResult'], ParentType, ContextType, RequireFields<QueryGetProductByFieldArgs, 'field' | 'value'>>;
  getProductById?: Resolver<ResolversTypes['ProductResult'], ParentType, ContextType, RequireFields<QueryGetProductByIdArgs, 'id'>>;
  getUserByField?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<QueryGetUserByFieldArgs, 'field' | 'value'>>;
  getUserById?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'id'>>;
};

export type RefreshResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Refresh'] = ResolversParentTypes['Refresh']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RefreshResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RefreshResult'] = ResolversParentTypes['RefreshResult']> = {
  __resolveType: TypeResolveFn<'AuthError' | 'Refresh', ParentType, ContextType>;
};

export type RegisterResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Register'] = ResolversParentTypes['Register']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegisterResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RegisterResult'] = ResolversParentTypes['RegisterResult']> = {
  __resolveType: TypeResolveFn<'AuthError' | 'Register', ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fidelity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserByResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserBy'] = ResolversParentTypes['UserBy']> = {
  entity?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserDeletedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserDeleted'] = ResolversParentTypes['UserDeleted']> = {
  entity?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserDeletedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserDeletedResult'] = ResolversParentTypes['UserDeletedResult']> = {
  __resolveType: TypeResolveFn<'UserDeleted' | 'UserNotFound', ParentType, ContextType>;
};

export type UserNotFoundResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserNotFound'] = ResolversParentTypes['UserNotFound']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserResult'] = ResolversParentTypes['UserResult']> = {
  __resolveType: TypeResolveFn<'UserBy' | 'UserNotFound', ParentType, ContextType>;
};

export type UserUpdatedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserUpdated'] = ResolversParentTypes['UserUpdated']> = {
  entity?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserUpdatedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserUpdatedResult'] = ResolversParentTypes['UserUpdatedResult']> = {
  __resolveType: TypeResolveFn<'UserNotFound' | 'UserUpdated', ParentType, ContextType>;
};

export type UsersResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Users'] = ResolversParentTypes['Users']> = {
  entities?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UsersResult'] = ResolversParentTypes['UsersResult']> = {
  __resolveType: TypeResolveFn<'UserNotFound' | 'Users', ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Admin?: AdminResolvers<ContextType>;
  AdminBy?: AdminByResolvers<ContextType>;
  AdminDeleted?: AdminDeletedResolvers<ContextType>;
  AdminDeletedResult?: AdminDeletedResultResolvers<ContextType>;
  AdminNotFound?: AdminNotFoundResolvers<ContextType>;
  AdminResult?: AdminResultResolvers<ContextType>;
  AdminUpdated?: AdminUpdatedResolvers<ContextType>;
  AdminUpdatedResult?: AdminUpdatedResultResolvers<ContextType>;
  Admins?: AdminsResolvers<ContextType>;
  AdminsResult?: AdminsResultResolvers<ContextType>;
  Auth?: AuthResolvers<ContextType>;
  AuthError?: AuthErrorResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Login?: LoginResolvers<ContextType>;
  LoginResult?: LoginResultResolvers<ContextType>;
  Logout?: LogoutResolvers<ContextType>;
  LogoutResult?: LogoutResultResolvers<ContextType>;
  Menu?: MenuResolvers<ContextType>;
  MenuBy?: MenuByResolvers<ContextType>;
  MenuCreated?: MenuCreatedResolvers<ContextType>;
  MenuCreatedResult?: MenuCreatedResultResolvers<ContextType>;
  MenuNotFound?: MenuNotFoundResolvers<ContextType>;
  MenuRemoved?: MenuRemovedResolvers<ContextType>;
  MenuRemovedResult?: MenuRemovedResultResolvers<ContextType>;
  MenuResult?: MenuResultResolvers<ContextType>;
  MenuUpdated?: MenuUpdatedResolvers<ContextType>;
  MenuUpdatedResult?: MenuUpdatedResultResolvers<ContextType>;
  Menus?: MenusResolvers<ContextType>;
  MenusResult?: MenusResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  ObjectId?: GraphQLScalarType;
  Order?: OrderResolvers<ContextType>;
  OrderBy?: OrderByResolvers<ContextType>;
  OrderCreated?: OrderCreatedResolvers<ContextType>;
  OrderCreatedResult?: OrderCreatedResultResolvers<ContextType>;
  OrderNotFound?: OrderNotFoundResolvers<ContextType>;
  OrderRemoved?: OrderRemovedResolvers<ContextType>;
  OrderRemovedResult?: OrderRemovedResultResolvers<ContextType>;
  OrderResult?: OrderResultResolvers<ContextType>;
  OrderUpdated?: OrderUpdatedResolvers<ContextType>;
  OrderUpdatedResult?: OrderUpdatedResultResolvers<ContextType>;
  Orders?: OrdersResolvers<ContextType>;
  OrdersResult?: OrdersResultResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductBy?: ProductByResolvers<ContextType>;
  ProductCreated?: ProductCreatedResolvers<ContextType>;
  ProductCreatedResult?: ProductCreatedResultResolvers<ContextType>;
  ProductNotFound?: ProductNotFoundResolvers<ContextType>;
  ProductRemoved?: ProductRemovedResolvers<ContextType>;
  ProductRemovedResult?: ProductRemovedResultResolvers<ContextType>;
  ProductResult?: ProductResultResolvers<ContextType>;
  ProductUpdated?: ProductUpdatedResolvers<ContextType>;
  ProductUpdatedResult?: ProductUpdatedResultResolvers<ContextType>;
  Products?: ProductsResolvers<ContextType>;
  ProductsResult?: ProductsResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Refresh?: RefreshResolvers<ContextType>;
  RefreshResult?: RefreshResultResolvers<ContextType>;
  Register?: RegisterResolvers<ContextType>;
  RegisterResult?: RegisterResultResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserBy?: UserByResolvers<ContextType>;
  UserDeleted?: UserDeletedResolvers<ContextType>;
  UserDeletedResult?: UserDeletedResultResolvers<ContextType>;
  UserNotFound?: UserNotFoundResolvers<ContextType>;
  UserResult?: UserResultResolvers<ContextType>;
  UserUpdated?: UserUpdatedResolvers<ContextType>;
  UserUpdatedResult?: UserUpdatedResultResolvers<ContextType>;
  Users?: UsersResolvers<ContextType>;
  UsersResult?: UsersResultResolvers<ContextType>;
};

