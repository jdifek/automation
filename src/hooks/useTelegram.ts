import { useMutation, useQuery } from "@tanstack/react-query";
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

export function useGetChatInfo(chatId: string) {
  return useQuery({
    queryKey: ["chatInfo", chatId],
    queryFn: () => telegramService.getChatInfo(chatId),
    enabled: !!chatId,
    refetchInterval: (query) => {
      const data = query.state.data;
      if (data) {
        return 10000;
      }
      return false;
    },
  });
}
