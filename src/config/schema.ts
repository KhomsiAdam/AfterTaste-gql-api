import { join } from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { allow, IRules, shield } from 'graphql-shield';
import { globalTypeDefs } from './globalTypeDefs';

const typesArray = loadFilesSync(join(__dirname, '../entities/**/typeDefs.*'));
const resolversArray = loadFilesSync(join(__dirname, '../entities/**/resolvers.*'));
const permissionArray = loadFilesSync(join(__dirname, '../entities/**/permission.*'));

typesArray.push(globalTypeDefs);

const typeDefs = mergeTypeDefs(typesArray);
const resolvers = mergeResolvers(resolversArray);

export const permissions = shield(mergeResolvers(permissionArray) as IRules, {
  fallbackRule: allow,
  allowExternalErrors: true,
});

export const schema = makeExecutableSchema({ typeDefs, resolvers });
