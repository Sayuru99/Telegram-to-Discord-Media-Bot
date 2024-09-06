import TelegramBot from 'node-telegram-bot-api';
import { config } from '../config/index.js';

const bot = new TelegramBot(config.telegramToken, { polling: true });

export const getTelegramBot = () => bot;
