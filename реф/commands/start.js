/*CMD
id: 70932015
command: /start
help: 
need_reply: false
auto_retry_time: 0
folder: 
answer: 
keyboard: 
aliases: []
group: 
updated_at: 2026-02-01T10:05:01.994Z
CMD*/

// 1. Если есть параметр (ID пригласителя), сохраняем его временно
if (params && !User.getProperty("already_started")) {
    User.setProperty("referrer_id", params, "string");
}

// 2. Проверяем, выбран ли уже язык
let lang = User.getProperty("lang");

if (!lang) {
    let buttons = [
        { title: "🇷🇺 Русский", command: "/setLang ru" },
        { title: "🇺🇸 English", command: "setLang en" }
    ];
    Bot.sendInlineKeyboard(buttons, "Выбери язык / Choose language:");
} else {
    // Если язык уже есть, сразу в меню
    Bot.runCommand("mainMenu");
}