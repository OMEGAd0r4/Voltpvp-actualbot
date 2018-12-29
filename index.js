//PLUGINS
const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = ">";
const bot = new commando.Client({
    commandPrefix: prefix
});
//PLUGINS

//BOT TOKEN
bot.login(process.env.token);
//BOT TOKEN

//GETS THE BOT ONLINE
bot.on('ready',function(){
    console.log(`Bot is now online!, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
    bot.user.setActivity(`>help | VoltPvP`, { type: 'WATCHING' });
});
//GETS THE BOT ONLINE

//WELCOME/LEAVE MESSAGE
bot.on('guildMemberAdd', (member) => {
    const welcomechannel = member.guild.channels.find('name', `entrance`);
    welcomechannel.send({embed: new Discord.RichEmbed()
        .setColor("#FFDF00")
        .setTitle("**New Member**")
        .setDescription(`:warning:||**Welcome** ${member} to the **VoltPvP Network**.`)
        .setImage("https://cdn.discordapp.com/attachments/523073883427831809/525212118882975755/Volt_old_logo.png")
        .setTimestamp()});
})

bot.on('guildMemberRemove', (member) => {
    const welcomechannel = member.guild.channels.find('name', `entrance`);
    welcomechannel.send({embed: new Discord.RichEmbed()
        .setColor("#FFDF00")
        .setTitle("**New Member**")
        .setDescription(`:warning:||${member} has left the **VoltPvP Network**.`)
        .setImage("https://cdn.discordapp.com/attachments/523073883427831809/525212118882975755/Volt_old_logo.png")
        .setTimestamp()});
})
//WELCOME/lEAVE MESSAGE

//REGISTRIES
bot.registry.registerGroup('voltpvp', 'voltpvp')
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerDefaults();
//REGISTIES

//RANKS INFORMATION
bot.on('message', (message) => {
    if (message.content == "$Vertus")
    message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**Vertus | Rank**")
        .setDescription("Buying this rank will allow you to have the permissions below")
        .setColor("#FFDF00")
        .addField("**__Nick__**", "/nick")
        .addField("**__Fly__**", "/fly")
        .addField("**__Host public parties__**", "[Ingame]")})
    
})

bot.on('message', (message) =>{
    if (message.content == "$Nova")
    message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**Nova | Rank**")
        .setColor("#FFDF00")
        .setDescription("Buying this rank will allow you to have the permissions below")
        .addField("**__Nick__**", "/nick")
        .addField("**__Fly__**", "/fly")
        .addField("**__Host public parties__**", "[Ingame]")
        .addField("**__Host sumo events__**", "/hostevent sumo")})
})

bot.on('message', (message) => {
    if (message.content == "$Volt")
    message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**Volt | Rank**")
        .setColor("#FFDF00s")
        .setDescription("Buying this rank will allow you to have the permissions below")
        .addField("**__Nick__**", "/nick")
        .addField("**__Fly__**", "/fly")
        .addField("**__Host public parties__**", "[Ingame]")
        .addField("**__Host sumo events__**", "/hostevent sumo")
        .addField("**__Host KOTH events__**", "/hostevent koth")})
})
//RANKS INFORMATION
