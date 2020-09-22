const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    if (message.author.id !== "546305510865895435") return;
  let sayang = args.join(" ");
    if (!args[0]) return message.reply("a").then(msg => msg.delete(400));

  const cmd = args.join(" ").split(" | ")

  message.channel.send(sayang)
  message.delete()
  };

module.exports.help = {
        name: "s"
      }
