/*CMD
  id: 70933537
  command: /viv
  help:
  need_reply: false
  auto_retry_time: 0
  folder:
  answer:
  keyboard:
  aliases:
  updated_at: 2026-02-01T10:16:52.210Z
  folder_id:
  group:
CMD*/

var lang = User.getProperty("lang");
var balance = Libs.ResourcesLib.userRes("balance");

// params — это то, что юзер ввел после /viv (например, если "/viv 500", то params будет "500")
let amount = parseFloat(params);

if (!params || isNaN(amount) || amount <= 0) {
    let helpMsg = (lang == "ru")
        ? "❌ Ошибка! Используйте: <code>/viv сумма</code>\nПример: <code>/viv 100</code>"
        : "❌ Error! Use: <code>/viv amount</code>\nExample: <code>/viv 100</code>";

    Api.sendMessage({
        chat_id: chat.chatid,
        text: helpMsg,
        parse_mode: "HTML"
    });
    return;
}

if (amount > balance.value()) {
    let noMoney = (lang == "ru")
        ? "❌ Недостаточно средств! Ваш баланс: " + balance.value()
        : "❌ Not enough funds! Your balance: " + balance.value();
    Bot.sendMessage(noMoney);
} else {
    // 1. Списываем баланс
    balance.add(-amount);

    // 2. Уведомляем юзера
    let success = (lang == "ru")
        ? "✅ Заявка на вывод <b>" + amount + "</b> принята!"
        : "✅ Withdrawal request for <b>" + amount + "</b> accepted!";

    Api.sendMessage({
        chat_id: chat.chatid,
        text: success,
        parse_mode: "HTML"
    });

    // 3. Уведомляем админа (замени 1234567 на свой ID)
    Api.sendMessage({
        chat_id: 7698220921,
        text: "💰 <b>Новая заявка на вывод</b>\nОт: @" + user.username + "\nСумма: " + amount + "\nID: <code>" + user.telegramid + "</code>",
        parse_mode: "HTML"
    });
}