"use strict";

console.log('Initializing...')
const bootStart = Date.now()
// Dependencies
const
    Discord = require('discord.js'),
    Ffmpeg = require('ffmpeg'),
    Fs = require('os'),
    Opus = require('node-opus'),
    Ytdl = require('ytdl-core');

// Boot sequence
// Everything below each console.log() should be pretty self-explanatory
console.log('Grabbing config file...');
var config = require('./config.json');

console.log('Creating Discord client...');
const client = new Discord.Client();

console.log('Logging in...');
client.login(config.token);

console.log('Waiting for client...');
client.on('ready', ()=>{

    // Main code for doing Discord stuff goes in this ready event
    console.log('Preparing event handlers...');
    client.on('message', message =>{
        if (message.author.id == config.userID) return;
        // Message-driven OS goes in here

        // This is just a test thing
        console.log(`${message.author.username}: ${message.content}`);
    });
    // Finish booting
    const bootEnd = Date.now();
    console.log(`Boot process complete in ${(bootEnd-bootStart)/1000} seconds. Ctrl-C to terminate.`)
});