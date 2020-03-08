//import { Client } from "discord.js"

const {Client} = require("discord.js")
const bot = new Client();
const ytdl = require("ytdl-core");
const token =  "Njg1MzE5NjE4MDc1ODIwMTE4.XmG8ZQ.uud0DfnB2yUrUDludiGfkYnRzE4";
const prefix = "!";
//const hey = Client.emojis.get("305818615712579584");
var songs = {};
var version = "1.0.1"
const { Utils } = require("erela.js")
const { RichEmbed } = require("discord.js")


bot.on("ready", async () => {
    console.log('${bot.user.username} is online!')
    bot.user.setActivity("Music")
});

bot.on('message', message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm" ) return;

    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case "ping":
        message.reply('im here');
        break;

        case "hello":
        message.reply('hello');
        break;

        case "ayy":
        message.author.send(`\:eyes:`);
        break;

        case "play":
        
            
            //function play(connection,message){
                //var server = songs[message.guild.id]

                //server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
                //server.queue.shift();
                //server.dispatcher.on("end",function(){
                    //if(server.queue[0]){
                        //play(connection, message)
                    //}else{
                        //connection.disconnect();
                    //}
                //})
            //}


            //if(!args[1]){
                //message.reply('Please provid a link');
                //return;
            //}
            //if(!message.member.voiceChannel){
                //message.reply('You must be in a voice channle to play music')
                //return;
            //}

            //if(!songs[message.guild.id]) songs[message.guild.id] = {
                //queue:[]
            //}

            //var server = songs[message.guild.id];

            //server.queue.push(args[1]);

            //if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
               // play(connection, message);
            //})

        case "info":
            if(args[1] === "version"){
                message.channel.send("Version: " + version);
            }else if(args[1] === "author"){
                message.channel.send("Josiah Laster");
            }else{
                message.reply("Invild Argument");
            }
        break;
        
        }
    
})


bot.login(token);

/*const botconfig =  require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log('${bot.user.username} is online!')
    bot.user.setActivity("Music")
});

bot.on("message",async message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm" ) return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd =  messageArray[0];
    let args =  messageArray.slice(1);

    if (cmd === '${prefix}hello'){
        return message.channel.send("hello");
    }
});

bot.login(botconfig.token);
*/
