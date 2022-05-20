"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalTypeDefs = void 0;
const apollo_server_core_1 = require("apollo-server-core");
exports.globalTypeDefs = (0, apollo_server_core_1.gql) `
  # Sorting
  ## Sort fields
  enum SortableField {
    createdAt
  }
  ## Sort order
  enum SortOrder {
    asc
    desc
  }
  ## Sort input
  input SortInput {
    field: SortableField = createdAt
    order: SortOrder = asc
  }

  # Filter
  ## Filter fields
  input FilterInput {
    title: FilterCondition
    content: FilterCondition
  }
  ## Filter conditions
  input FilterCondition {
    eq: String
    ne: String
    gt: String
    gte: String
    lt: String
    lte: String
  }

  # Pagination
  input PaginationInput {
    page: Int
    limit: Int
  }
`;
//# sourceMappingURL=globalTypeDefs.js.map