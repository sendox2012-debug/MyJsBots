/*CMD
id: 70932815
command: profile
help: 
need_reply: false
folder: 
answer: 
keyboard: 
aliases: []
group: 
updated_at: 2026-02-01T10:03:07.203Z
CMD*/

var lang = User.getProperty("lang");
var balance = Libs.ResourcesLib.userRes("balance").value();
var invited = Libs.ResourcesLib.userRes("invite").value();

if (lang == "ru") {
    Api.sendMessage({
        chat_id: chat.chatid,
        text: "<b>👤 Ваш профиль</b>\n💰 Баланс: <code>" + balance + "</code>\n👥 Приглашено: <code>" + invited + "</code>\n\n📝 Команда для вывода:\n<code>/viv {сумма}</code>",
        parse_mode: "HTML"
    });
} else {
    Api.sendMessage({
        chat_id: chat.chatid,
        text: "<b>👤 Your Profile</b>\n💰 Balance: <code>" + balance + "</code>\n👥 Invited: <code>" + invited + "</code>\n\n📝 Withdrawal command:\n<code>/viv {amount}</code>",
        parse_mode: "HTML"
    });
}
