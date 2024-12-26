require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client(
    { intents: 
        [GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent] 
    });

const config = require("./config.json");
const sec = process.env['TOKEN'];
const quoteArr = config.quotes;
const testServer = false;
const emsoc = true;

client.on('ready', () => {
    console.log(`WAFFLE TIME: ${client.user.tag}`);
    feelingBelgian();
});

function feelingBelgian() {
    var randFactor = waffleTime(18, 36); //target is every 30-60 minutes, so 18-36
    var delay = randFactor * 100000; //normally 100000

    //return a random message index
    var randMsg = waffleTime(0, quoteArr.length);

    if (testServer) {
        const channelTest = client.channels.cache.get('1015353654955495557');
        channelTest.send(quoteArr[randMsg]);
    }

    if (emsoc) {
        const channelEmsoc = client.channels.cache.get('630786745197133836');
        channelEmsoc.send(quoteArr[randMsg]);
    }

    setTimeout(feelingBelgian, delay);
}

function waffleTime(min, max){ //returns a value from 9-18
    return Math.floor(Math.random() * (max - min)) + min;
}

client.on('messageCreate', (message) => {
    if (message.author.bot) return; //ignore bots

    if (message.content.toLowerCase().includes("ixchel")
        && message.content.toLowerCase().includes("ntr")) {
        message.channel.send("NOOOOOOOOOOOOO");
    }

    if (message.content.toLowerCase().includes("dark magician")
        || message.content.toLowerCase().includes("dm")) {
        message.channel.send("REEEEEEEEEEEEE");
    }

    if (message.content.toLowerCase().includes("shs wagon")) {
        message.channel.send("1 WAGON IS OPTIMAL");
    }

    if (message.content.toLowerCase().includes("dog")) {
        message.channel.send("<:BELGIANCHAD:1309229820655304715>");
    }

    if (message.content.toLowerCase().includes("brick")) { //comedy moment
        message.channel.send("at least it's only for your first few fucking duels\n" +
            "it's every other duel for me\n" +
            "for the past few hours\n" +
            "to the point where i'm getting to the pity rank ups\n" +
            "matches where, ofc, i fucking brick\n" +
            "oh ofc\n" +
            "he has light and dark\n" +
            "and a second soylent magician\n" +
            "and magicalized fusion so i'm fucked\n" +
            "ofc the facedown was gravekeeper guard\n" +
            "and not any other gravekeeper\n" +
            "i legit could still have won\n" +
            "but i called it\n" +
            "it was a rank up duel\n" +
            "so i lost");
    }

    if (message.content.toLowerCase() === "blue cheese should be ctrl z from the earth"
        && message.author.id === "129100871630848000") {
        message.channel.send("MEET ME IN OAKLAND BITCH");
    }
});

client.login(sec);
