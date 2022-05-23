import { is } from '@middlewares/rules';
import { allow } from 'graphql-shield';

const permission = {
  Query: {
    getAllProducts: allow,
    getProductById: allow,
    getProductByField: allow,
  },
  Mutation: {
    createProduct: is.Admin,
    updateProduct: is.Admin,
    removeProduct: is.Admin,
  },
};

export default permission;
