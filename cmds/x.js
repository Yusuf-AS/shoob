const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    if (message.author.id !== "546305510865895435") return;
  let sayang = args.join(" ");
    if (!args[0]) return message.reply("Please enter the word!").then(msg => msg.delete(4000));

  const cmd = args.join(" ").split(" | ")

  message.channel.send(`collect ${sayang}`)
  message.delete()
  };

module.exports.help = {
        name: "s"
      }
