import axios from "axios";

export const telegramService = {
  async sendMessage(text: string) {
    return await axios.post(
      `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        text,
        parse_mode: "MarkdownV2",
        chat_id: "-1002453211834",
      },
      { headers: { "Content-Type": "application/json" } }
    );
  },

};
