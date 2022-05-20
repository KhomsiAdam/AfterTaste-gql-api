"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
  # Scalars
  scalar ObjectId
  scalar DateTime

  # Types
  type Admin {
    _id: ObjectId
    firstname: String
    lastname: String
    email: String
    role: Auth
    createdAt: DateTime
    updatedAt: DateTime
  }
  ## Admin by id/field
  type AdminBy {
    entity: Admin!
  }
  ## All Admins
  type Admins {
    entities: [Admin!]!
  }
  ## Updated Admin
  type AdminUpdated {
    entity: Admin!
    message: String!
  }
  ## Deleted Admin
  type AdminDeleted {
    entity: Admin!
    message: String!
  }
  ## Not found
  type AdminNotFound {
    message: String!
  }

  # Inputs
  input AdminUpdatedInput {
    firstname: String
    lastname: String
  }

  # Unions
  union AdminResult = AdminBy | AdminNotFound
  union AdminsResult = Admins | AdminNotFound
  union AdminUpdatedResult = AdminUpdated | AdminNotFound
  union AdminDeletedResult = AdminDeleted | AdminNotFound

  # Queries
  type Query {
    getAllAdmins(sort: SortInput, filter: FilterInput, paginate: PaginationInput): AdminsResult!
    getAdminById(id: ObjectId!): AdminResult!
    getAdminByField(field: String!, value: String!): AdminResult!
  }

  # Mutations
  type Mutation {
    updateAdmin(id: ObjectId!, input: AdminUpdatedInput!): AdminUpdatedResult!
    deleteAdmin(id: ObjectId!): AdminDeletedResult!
  }
`;
//# sourceMappingURL=typeDefs.js.map