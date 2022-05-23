import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # Scalars
  scalar ObjectId
  scalar DateTime

  # Types
  type Order {
    _id: ObjectId
    user: User
    products: [Product]
    productsQuantity: [Int]
    menus: [Menu]
    menusQuantity: [Int]
    status: String
    createdAt: DateTime
    updatedAt: DateTime
  }
  ## Order by id/field
  type OrderBy {
    entity: Order!
  }
  ## All Orders
  type Orders {
    entities: [Order!]!
  }
  ## Created Order
  type OrderCreated {
    entity: Order!
    message: String!
  }
  ## Updated Order
  type OrderUpdated {
    entity: Order!
    message: String!
  }
  ## Removed Order
  type OrderRemoved {
    entity: Order!
    message: String!
  }
  ## Not found
  type OrderNotFound {
    message: String!
  }

  # Inputs
  input OrderCreatedInput {
    user: ObjectId!
    products: [ObjectId]
    productsQuantity: [Int]
    menus: [ObjectId]
    menusQuantity: [Int]
  }
  input OrderUpdatedInput {
    user: ObjectId
    products: [ObjectId]
    productsQuantity: [Int]
    menus: [ObjectId]
    menusQuantity: [Int]
  }

  # Unions
  union OrderResult = OrderBy | OrderNotFound
  union OrdersResult = Orders | OrderNotFound
  union OrderCreatedResult = OrderCreated | OrderNotFound
  union OrderUpdatedResult = OrderUpdated | OrderNotFound
  union OrderRemovedResult = OrderRemoved | OrderNotFound

  # Queries
  type Query {
    getAllOrders(sort: SortInput, filter: FilterInput, paginate: PaginationInput): OrdersResult!
    getOrderById(id: ObjectId!): OrderResult!
    getOrderByField(field: String!, value: String!): OrderResult!
  }

  # Mutations
  type Mutation {
    createOrder(input: OrderCreatedInput!): OrderCreatedResult!
    updateOrder(id: ObjectId!, input: OrderUpdatedInput!): OrderUpdatedResult!
    removeOrder(id: ObjectId!): OrderRemovedResult!
  }
`;
