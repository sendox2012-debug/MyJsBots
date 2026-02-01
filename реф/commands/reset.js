/*CMD
  id: 70938294
  command: /reset
  help:
  need_reply: false
  auto_retry_time: 0
  folder:
  answer:
  keyboard:
  aliases:
  updated_at: 2026-02-01T15:56:21.072Z
  folder_id:
  group:
CMD*/

// Удаляем все данные пользователя
User.setProperty("already_started", null);
User.setProperty("referrer_id", null);
User.setProperty("lang", null);

Bot.sendMessage("✅ *Данные сброшены.* Теперь при вводе /start всё начнется заново.");