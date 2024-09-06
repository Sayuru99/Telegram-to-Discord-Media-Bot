import dotenv from 'dotenv';

dotenv.config();

export const config = {
  telegramToken: process.env.TELEGRAM_BOT_TOKEN,
  discordWebhook: process.env.WEBHOOK,
  apiId: process.env.APPID,
  apiHash: process.env.APIHASH
};
