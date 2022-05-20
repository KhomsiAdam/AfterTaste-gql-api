"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDatabaseConnection = void 0;
require("dotenv/config");
const mongoose_1 = require("mongoose");
const logger_service_1 = require("../services/logger.service");
const DB_URI = process.env.DB_URI;
const initializeDatabaseConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { connection } = yield (0, mongoose_1.connect)(DB_URI);
        logger_service_1.log.info(`Connected to database: ${connection.name}`);
        connection.on('error', (error) => {
            logger_service_1.log.error(error);
        });
        connection.on('disconnected', () => {
            logger_service_1.log.error('Database connection was lost.');
        });
        connection.on('reconnect', () => {
            logger_service_1.log.warn('Reconnecting...');
        });
        connection.on('connected', () => {
            logger_service_1.log.warn('Database connection was restored.');
        });
    }
    catch (error) {
        logger_service_1.log.error(error);
    }
});
exports.initializeDatabaseConnection = initializeDatabaseConnection;
//# sourceMappingURL=db.js.map