/*CMD
id: 70932673
command: /ref
help: 
need_reply: false
folder: 
answer: 
keyboard: 
aliases: []
group: 
updated_at: 2026-02-01T10:16:30.989Z
CMD*/

var lang = User.getProperty("lang");
var refLink = "https://t.me/" + bot.name + "?start=" + user.telegramid;

if (lang == "ru") {
    Bot.sendMessage("🔗 Твоя ссылка: \n" + refLink);
} else {
    Bot.sendMessage("🔗 Your link: \n" + refLink);
}
