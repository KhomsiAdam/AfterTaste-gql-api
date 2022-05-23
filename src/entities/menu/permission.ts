import { is } from '@middlewares/rules';
import { allow } from 'graphql-shield';

const permission = {
  Query: {
    getAllMenus: allow,
    getMenuById: allow,
    getMenuByField: allow,
  },
  Mutation: {
    createMenu: is.Admin,
    updateMenu: is.Admin,
    removeMenu: is.Admin,
  },
};

export default permission;
