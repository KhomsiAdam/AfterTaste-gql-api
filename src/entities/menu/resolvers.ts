import * as resolver from '@services/crud.service';
import type {
  Resolvers,
  MenuResult,
  MenusResult,
  MenuCreatedResult,
  MenuUpdatedResult,
  MenuRemovedResult,
} from '@generated/types';
import { MenuModel } from './model';
import { ErrorMessages, SuccessMessages } from './constants';
import { createMenuSchema, updateMenuSchema } from './validation';

export const resolvers: Resolvers = {
  Query: {
    getAllMenus: async (_parent, args): Promise<MenusResult> =>
      resolver.getAll(MenuModel, args, ErrorMessages.MENUS_NOT_FOUND, 'Menus', 'MenuNotFound'),
    getMenuById: async (_parent, args): Promise<MenuResult> =>
      resolver.getById(MenuModel, args.id, ErrorMessages.MENU_NOT_FOUND, 'MenuBy', 'MenuNotFound'),
    getMenuByField: async (_parent, args): Promise<MenuResult> =>
      resolver.getByField(MenuModel, args.field, args.value, ErrorMessages.MENU_NOT_FOUND, 'MenuBy', 'MenuNotFound'),
  },

  Mutation: {
    createMenu: async (_parent, args): Promise<MenuCreatedResult> =>
      resolver.create(
        MenuModel,
        args.input,
        createMenuSchema,
        SuccessMessages.MENU_CREATED,
        'MenuCreated',
        'MenuNotFound',
      ),
    updateMenu: async (_parent, args): Promise<MenuUpdatedResult> =>
      resolver.update(
        MenuModel,
        args.id,
        args.input,
        updateMenuSchema,
        SuccessMessages.MENU_UPDATED,
        ErrorMessages.MENU_NOT_FOUND,
        'MenuUpdated',
        'MenuNotFound',
      ),
    removeMenu: async (_parent, args): Promise<MenuRemovedResult> =>
      resolver.remove(
        MenuModel,
        args.id,
        SuccessMessages.MENU_DELETED,
        ErrorMessages.MENU_NOT_FOUND,
        'MenuRemoved',
        'MenuNotFound',
      ),
  },
};
