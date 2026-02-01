/*CMD
  id: 70938086
  command: /setlang
  help:
  need_reply: false
  auto_retry_time: 0
  folder:
  answer:
  keyboard:
  aliases:
  updated_at: 2026-02-01T15:46:03.486Z
  folder_id:
  group:
CMD*/

User.setProperty("lang", params, "string");

let refId = User.getProperty("referrer_id");
let alreadyStarted = User.getProperty("already_started");

if (refId && !alreadyStarted && refId != user.telegramid) {
    let res = Libs.ResourcesLib.anotherUserRes("balance", refId);
    res.add(10);
    let invated = Libs.ResourcesLib.anotherUserRes("invite", refId);
    invated.add(1);


    let refLang = Libs.ResourcesLib.anotherChatRes("lang", refId).value; // или просто на двух языках
    let notification = "💰 У вас новый реферал! +10\n💰 New referral! +10";
    Bot.sendMessageToChatWithId(refId, notification);

    User.setProperty("already_started", true, "boolean");
}

let msg = (params == "ru") ? "✅ Язык установлен!" : "✅ Language set!";
Bot.editMessage(msg); 

Bot.runCommand("mainMenu");