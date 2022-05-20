"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
  # Scalars
  scalar ObjectId
  scalar DateTime

  # Types
  type Auth {
    _id: ObjectId
    email: String
    role: String
    createdAt: DateTime
    updatedAt: DateTime
  }
  ## Register
  type Register {
    message: String!
  }
  type Login {
    token: String!
    role: String!
    message: String!
  }
  type Refresh {
    token: String!
    role: String!
    message: String!
  }
  type Logout {
    message: String!
  }
  ## Error
  type AuthError {
    message: String!
  }

  # Inputs
  input RegisterInput {
    email: String!
    password: String!
    firstname: String!
    lastname: String!
    role: String
  }
  input LoginInput {
    email: String!
    password: String!
  }

  # Unions
  union RegisterResult = Register | AuthError
  union LoginResult = Login | AuthError
  union RefreshResult = Refresh | AuthError
  union LogoutResult = Logout | AuthError

  # Mutations
  type Mutation {
    register(input: RegisterInput!): RegisterResult!
    login(input: LoginInput!): LoginResult!
    refresh: RefreshResult!
    logout: LogoutResult!
  }
`;
//# sourceMappingURL=typeDefs.js.map