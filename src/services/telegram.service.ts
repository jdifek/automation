import axios from "axios";

export const telegramService = {
  async sendMessage(text: string) {
    return await axios.post(
      `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        text,
        parse_mode: "MarkdownV2",
        chat_id: "@testbot111222333",
      },
      { headers: { "Content-Type": "application/json" } }
    );
  },

  async getChatInfo(chatId: string) {
    try {
      const response = await axios.get(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/getChat`,
        {
          params: {
            chat_id: chatId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error getting chat info:", error);
      throw error;
    }
  },
  
};
