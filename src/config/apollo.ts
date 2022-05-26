import express from 'express';
// import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import depthLimit from 'graphql-depth-limit';
import compression from 'compression';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import { log } from '@services/logger.service';
import { morgan } from '@middlewares';
import { context } from './context';

const port = process.env.PORT || 4000;

export const initializeExpress = async (schema: GraphQLSchema) => {
  const app = express();

  app.use(
    helmet({
      crossOriginEmbedderPolicy: process.env.NODE_ENV !== 'development',
      contentSecurityPolicy: process.env.NODE_ENV !== 'development',
    }),
  );
  // app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(morgan);
  app.use(compression());
  // app.use('/graphql', limiter);
  app.use(express.json({ limit: '10kb' }));
  app.use(mongoSanitize());

  const server = new ApolloServer({
    introspection: process.env.NODE_ENV !== 'production',
    context,
    schema,
    plugins: [responseCachePlugin()],
    validationRules: [depthLimit(7)],
    formatError: (err) => {
      if (err.message.startsWith('Database Error:')) {
        return new Error('Internal server error');
      }
      return err;
    },
  });

  await server.start();
  server.applyMiddleware({
    app,
    path: '/graphql',
    cors: {
      origin: '*',
      credentials: true,
    },
  });

  app.listen(port, async () => {
    log.info(`Server ready at: http://localhost:${port}${server.graphqlPath}`);
  });
};
