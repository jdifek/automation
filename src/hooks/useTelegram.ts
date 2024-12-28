import { useMutation } from "@tanstack/react-query";
import { telegramService } from "@/services/telegram.service";

export function useSendMessage() {
  return useMutation({
    mutationKey: ["send message"],
    mutationFn: async (text: string) => {
      const escapeMarkdown = (text: string): string => {
        return text.replace(/([_[\]()~`>#+=|{}.!-])/g, "\\$1");
      };

      const res = await telegramService.sendMessage(escapeMarkdown(text));
      if (res.status !== 200) throw new Error(res.data);
    },
  });
}
