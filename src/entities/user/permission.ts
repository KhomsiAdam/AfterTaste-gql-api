import { is } from '@middlewares/rules';
import { allow, or } from 'graphql-shield';

const permission = {
  Query: {
    getAllUsers: allow,
    getUserById: is.Auth,
    getUserByField: is.Auth,
  },
  Mutation: {
    updateUser: or(is.Self, is.Admin),
    deleteUser: or(is.Self, is.Admin),
  },
};

export default permission;
