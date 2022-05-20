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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const mailgen_1 = __importDefault(require("mailgen"));
const logger_service_1 = require("./logger.service");
const mail = {
    name: 'name',
    link: 'link',
    intro: 'intro',
    instructions: 'instructions',
    color: '#22BC66',
    text: 'text',
    outro: 'outro',
    subject: 'subject',
};
const mailGenerator = new mailgen_1.default({
    theme: 'default',
    product: {
        name: mail.name,
        link: mail.link,
    },
});
const generatedEmail = () => {
    const content = {
        body: {
            intro: mail.intro,
            action: {
                instructions: mail.instructions,
                button: {
                    color: mail.color,
                    text: mail.text,
                    link: mail.link,
                },
            },
            outro: mail.outro,
        },
    };
    return content;
};
const sendMail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const emailBody = mailGenerator.generate(generatedEmail());
    const emailText = mailGenerator.generatePlaintext(generatedEmail());
    const testAccount = yield nodemailer_1.default.createTestAccount();
    const transporter = nodemailer_1.default.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });
    const info = yield transporter.sendMail({
        from: `"${mail.name}" <${testAccount.user}>`,
        to: email,
        subject: mail.subject,
        text: emailText,
        html: emailBody,
    });
    logger_service_1.log.debug(`Preview URL: ${nodemailer_1.default.getTestMessageUrl(info)}`);
});
exports.sendMail = sendMail;
//# sourceMappingURL=mail.service.js.map