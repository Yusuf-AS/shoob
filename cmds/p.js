const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    if (message.author.id !== "553455706477428737") return;
  let sayang = args.join(" ");
    if (!args[0]) return;

  const cmd = args.join(" ").split(" | ")

  message.channel.send(`owopray ${sayang}`).then(msg => msg.delete(100))
  message.delete()
  };

module.exports.help = {
        name: "s"
      }
