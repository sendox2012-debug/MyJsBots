/*CMD
  id: 70932253
  command: /mainMenu
  help:
  need_reply: false
  auto_retry_time: 0
  folder:
  answer:
  keyboard:
  aliases:
  updated_at: 2026-02-01T10:17:26.390Z
  folder_id:
  group:
CMD*/

var lang = User.getProperty("lang");
var balance = Libs.ResourcesLib.userRes("balance").value();

if (lang == "ru") {
    Api.sendMessage({
        text: `<b>🏠 Главное меню\n💰 Ваш баланс: ${balance} USDT</b>`, parse_mode: "html",
        reply_markup: {
            inline_keyboard: [
                [{ text: "Профиль", callback_data: "profile" }],
                [{ text: "Реферал", callback_data: "/ref" }],
                [{ text: "Язык", callback_data: "lang" }]
            ]
        }
    });
} else {
    Api.sendMessage({
        text: `<b>🏠 Main Menu\n💰 Your balance: ${balance} USDT</b>`, parse_mode: "html",
        reply_markup: {
            inline_keyboard: [
                [{ text: "Profile", callback_data: "profile" }],
                [{ text: "Ref", callback_data: "/ref" }],
                [{ text: "Lang", callback_data: "lang" }]
            ]
        }
    });
}