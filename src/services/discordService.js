import axios from "axios";
import { config } from "../config/index.js";

export const sendMediaToDiscord = async (fileUrl, channelTitle, mediaType) => {
  try {
    let content;
    if (mediaType === "photo") {
      content = {
        content: `pamidu gobbaya`,
        embeds: [{ image: { url: fileUrl } }],
      };
    } else if (mediaType === "video") {
      content = {
        content: `Thanpe ${channelTitle} | (${fileUrl})`,
        allowed_mentions: { parse: [] },
      };
    }
    await axios.post(config.discordWebhook, content);
    console.log("Media successfully sent to Discord");
  } catch (error) {
    console.error(`Failed to send media to Discord: ${error.message}`);
  }
};
