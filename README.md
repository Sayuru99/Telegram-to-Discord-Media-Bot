# Telegram to Discord Media Bot

## Overview

This Node.js application is a bot that listens to media messages in a Telegram channel and forwards them to a Discord channel using webhooks. It handles both images and videos and can be easily configured using environment variables. The codebase is structured for clarity and scalability, with separation of concerns into different modules.

## Architecture

The project follows a modular architecture with the following components:

- **`config/index.js`**: Contains configuration settings loaded from environment variables.
- **`services/telegramService.js`**: Initializes and exports the Telegram bot instance
- **`services/discordService.js`**: Handles sending media to Discord via webhooks.
- **`controllers/botController.js`**: Contains the main logic for processing Telegram messages and forwarding media to Discord.
- **`src/index.js`**: The entry point of the application that sets up and starts the bot.

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Sayuru99/Telegram-to-Discord-Media-Bot.git
   cd Telegram-to-Discord-Media-Bot
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory with the following content:**

   ```env
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   WEBHOOK=https://discord.com/api/webhooks/your_discord_webhook
   APPID=your_telegram_api_id
   APIHASH=your_telegram_api_hash
   ```

4. **Run the bot:**

   ```bash
   npm start
   ```

## How It Works

1. **Telegram Bot Setup:**

   - The bot listens for messages in the configured Telegram channel.
   - It checks if the messages contain photos or videos.

2. **Processing Media:**

   - When a photo or video is detected, the bot fetches the file URL from Telegram's API.
   - The media is then forwarded to a Discord channel using a webhook.

3. **Sending to Discord:**

   - For photos, the bot sends an embed with the image URL.
   - For videos, the bot sends a message with a clickable link to the video.

## Obtaining Credentials

### Discord Webhook URL

1. **Create a Discord Channel:**

   - Go to your Discord server.
   - Create a new text channel or select an existing one.

2. **Set Up a Webhook:**
   - Click on the gear icon next to the channel name to open the channel settings.
   - Go to the "Integrations" tab and click on "Webhooks."
   - Click "New Webhook" and name your webhook.
   - Copy the "Webhook URL" and paste it into your `.env` file under `WEBHOOK`.

### Telegram Bot API Key

1. **Create a New Bot:**

   - Open Telegram and search for the BotFather.
   - Start a chat with BotFather and use the `/newbot` command.
   - Follow the instructions to create a new bot and obtain your API key (token).

2. **Obtain API ID and API Hash:**
   - Visit [Telegram's API development tools](https://my.telegram.org/auth) and log in with your Telegram account.
   - Go to "API development tools" and create a new application.
   - Copy your "API ID" and "API Hash" and add them to your `.env` file.

## File Structure

- **`src/index.js`**: Entry point for the application.
- **`config/index.js`**: Configuration settings.
- **`services/telegramService.js`**: Telegram bot setup and export.
- **`services/discordService.js`**: Discord webhook interaction.
- **`controllers/botController.js`**: Main logic for handling messages and media.

## Development

This project is set up to be extended and integrated with TypeScript and additional features in the future. Currently, it is designed with ES7 modules and can be easily adapted to work with TypeScript.

## Contributing

Feel free to open issues or submit pull requests for improvements. Contributions are welcome!

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.

## Contact

- **Author**: Sayuru De Alwis
- **Email**: sayurudealwis99@gmail.com
- **GitHub**: [sayuru99](https://github.com/sayuru99)
