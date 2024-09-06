import { getTelegramBot } from '../services/telegramService.js';
import { sendMediaToDiscord } from '../services/discordService.js';
import { config } from '../config/index.js';

const bot = getTelegramBot();

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const channelTitle = msg.chat.title || 'Unknown Channel';
  console.log(`Chat ID: ${chatId}`);
  console.log(`Channel Title: ${channelTitle}`);
  console.log(`Received message: ${msg.text}`);

  if (msg.photo || msg.video) {
    const fileId = msg.photo
      ? msg.photo[msg.photo.length - 1].file_id
      : msg.video.file_id;
    const mediaType = msg.photo ? 'photo' : 'video';

    try {
      const file = await bot.getFile(fileId);
      const fileUrl = `https://api.telegram.org/file/bot${config.telegramToken}/${file.file_path}`;
      console.log(`Media file URL: ${fileUrl}`);

      await sendMediaToDiscord(fileUrl, channelTitle, mediaType);
    } catch (error) {
      console.error(`Error getting or sending media: ${error.message}`);
    }
  }
});

bot.on('polling_error', (error) => {
  console.error(`Polling error: ${error.message}`);
});
