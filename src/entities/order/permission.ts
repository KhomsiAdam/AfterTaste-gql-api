import { is } from '@middlewares/rules';
import { or } from 'graphql-shield';

const permission = {
  Query: {
    getAllOrders: is.Admin,
    getOrderById: is.Admin,
    getOrderByField: is.Admin,
  },
  Mutation: {
    createOrder: is.Auth,
    updateOrder: or(is.Own, is.Admin),
    removeOrder: or(is.Own, is.Admin),
  },
};

export default permission;
