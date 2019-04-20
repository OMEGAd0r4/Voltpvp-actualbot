const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ">";
const bot = new commando.Client({
  commandPrefix: prefix
});

class announceCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'announce', 
      group: 'voltpvp',
      memberName: 'announce',
      description: "Announces a message in #announcements"
    });
  }

  async run (message, args)
  {
    let announcementargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
    let announcementmessage = announcementargs.join(" ").slice(9);

    let announcementschannel = message.guild.channels.find(`name`, "announcements");
    if(!announcementschannel) return message.channel.send("Couldn't find the announcements channel");
    var supportteamrole = message.guild.roles.find(`name`, "Ticket Support");
    if (!message.member.roles.has(supportteamrole.id)) return message.channel.send("Insufficient permission. You do not have permission to announce messages")

    var announcementmessageembed = new Discord.RichEmbed()
    .setTitle("**__Announcement__**")
    .setColor("#FFDF00")
    .addField("**__Announcement__**", announcementmessage)
    .setTimestamp()

    announcementschannel.send(announcementmessageembed);
  }
}

module.exports = announceCommand;
