/*CMD
  id: 70932015
  command: /start
  help:
  need_reply: false
  auto_retry_time: 0
  folder:
  answer:
  keyboard:
  aliases:
  updated_at: 2026-02-01T15:57:40.682Z
  folder_id:
  group:
CMD*/

// 1. Если есть параметр (ID пригласителя), сохраняем его
if (params && !User.getProperty("already_started")) {
 User.setProperty("referrer_id", params, "string");
}

// 2. Проверяем, выбран ли язык
let lang = User.getProperty("lang");

if (!lang) {
 // Кнопки для Api.sendMessage (массив массивов)
 let buttons = [
  [{ text: "🇷🇺 Русский", callback_data: "/setlang ru" }],
  [{ text: "🇺🇸 English", callback_data: "/setlang en" }]
 ];

 Api.sendMessage({
  chat_id: chat.chatid,
  text: "<b>Выбери язык / Choose language:</b>",
  parse_mode: "HTML",
  reply_markup: JSON.stringify({ inline_keyboard: buttons })
 });
} else {
 // Если язык уже есть, сразу в меню
 Bot.runCommand("mainMenu");
}