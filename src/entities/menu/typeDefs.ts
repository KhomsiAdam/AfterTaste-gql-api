import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # Scalars
  scalar ObjectId
  scalar DateTime

  # Types
  type Menu {
    _id: ObjectId
    name: String
    products: [Product]
    createdAt: DateTime
    updatedAt: DateTime
  }
  ## Menu by id/field
  type MenuBy {
    entity: Menu!
  }
  ## All Menus
  type Menus {
    entities: [Menu!]!
  }
  ## Created Menu
  type MenuCreated {
    entity: Menu!
    message: String!
  }
  ## Updated Menu
  type MenuUpdated {
    entity: Menu!
    message: String!
  }
  ## Removed Menu
  type MenuRemoved {
    entity: Menu!
    message: String!
  }
  ## Not found
  type MenuNotFound {
    message: String!
  }

  # Inputs
  input MenuCreatedInput {
    name: String!
    products: [ObjectId]!
  }
  input MenuUpdatedInput {
    name: String
    products: [ObjectId]
  }

  # Unions
  union MenuResult = MenuBy | MenuNotFound
  union MenusResult = Menus | MenuNotFound
  union MenuCreatedResult = MenuCreated | MenuNotFound
  union MenuUpdatedResult = MenuUpdated | MenuNotFound
  union MenuRemovedResult = MenuRemoved | MenuNotFound

  # Queries
  type Query {
    getAllMenus(sort: SortInput, filter: FilterInput, paginate: PaginationInput): MenusResult!
    getMenuById(id: ObjectId!): MenuResult!
    getMenuByField(field: String!, value: String!): MenuResult!
  }

  # Mutations
  type Mutation {
    createMenu(input: MenuCreatedInput!): MenuCreatedResult!
    updateMenu(id: ObjectId!, input: MenuUpdatedInput!): MenuUpdatedResult!
    removeMenu(id: ObjectId!): MenuRemovedResult!
  }
`;
