/*CMD
id: 70932687
command: lang
help: 
need_reply: false
folder: 
answer: 
keyboard: 
aliases: []
group: 
updated_at: 2026-02-01T10:05:09.392Z
CMD*/

const lang = () => {
    let buttons = [
        [{ text: "🇷🇺 Русский", callback_data: "/setLang ru" }],
        [{ text: "🇺🇸 English", callback_data: "/setLang en" }]
    ];
    Api.sendMessage({
        text: "Выбери язык / Choose language:",
        reply_markup: {
            inline_keyboard: buttons
        }
    })
}
lang()