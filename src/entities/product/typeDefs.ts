import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # Scalars
  scalar ObjectId
  scalar DateTime

  # Types
  type Product {
    _id: ObjectId
    name: String
    category: String
    description: String
    images: [String]
    price: Float
    createdAt: DateTime
    updatedAt: DateTime
  }
  ## Product by id/field
  type ProductBy {
    entity: Product!
  }
  ## All Products
  type Products {
    entities: [Product!]!
  }
  ## Created Product
  type ProductCreated {
    entity: Product!
    message: String!
  }
  ## Updated Product
  type ProductUpdated {
    entity: Product!
    message: String!
  }
  ## Removed Product
  type ProductRemoved {
    entity: Product!
    message: String!
  }
  ## Not found
  type ProductNotFound {
    message: String!
  }

  # Inputs
  input ProductCreatedInput {
    name: String!
    category: String!
    description: String!
    images: [String]!
    price: Float!
  }
  input ProductUpdatedInput {
    name: String
    category: String
    description: String
    images: [String]
    price: Float
  }

  # Unions
  union ProductResult = ProductBy | ProductNotFound
  union ProductsResult = Products | ProductNotFound
  union ProductCreatedResult = ProductCreated | ProductNotFound
  union ProductUpdatedResult = ProductUpdated | ProductNotFound
  union ProductRemovedResult = ProductRemoved | ProductNotFound

  # Queries
  type Query {
    getAllProducts(sort: SortInput, filter: FilterInput, paginate: PaginationInput): ProductsResult!
    getProductById(id: ObjectId!): ProductResult!
    getProductByField(field: String!, value: String!): ProductResult!
  }

  # Mutations
  type Mutation {
    createProduct(input: ProductCreatedInput!): ProductCreatedResult!
    updateProduct(id: ObjectId!, input: ProductUpdatedInput!): ProductUpdatedResult!
    removeProduct(id: ObjectId!): ProductRemovedResult!
  }
`;
