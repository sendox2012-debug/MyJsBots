/*CMD
  id: 70932687
  command: /lang
  help:
  need_reply: false
  auto_retry_time: 0
  folder:
  answer:
  keyboard:
  aliases:
  updated_at: 2026-02-01T15:58:35.770Z
  folder_id:
  group:
CMD*/

const lang = () => {
    let buttons = [
        [{ text: "🇷🇺 Русский", callback_data: "/setlang ru" }],
        [{ text: "🇺🇸 English", callback_data: "/setlang en" }]
    ];
    Api.sendMessage({
        text: "Выбери язык / Choose language:",
        reply_markup: {
            inline_keyboard: buttons
        }
    })
}
lang()