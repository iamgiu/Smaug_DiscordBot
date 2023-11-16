import 'dotenv/cofig';
import express from 'express';
import {
    InteractionType,
    InteractionResponseType,
    InteractionResponseFlags,
    MessageComponentTypes,
    ButtonStyleTypes,
} from 'discord-interactions';
import { VerifyDiscordRequest, getRandomEmoji, DiscordRequest } from './utils.js';
import { getShuffleOptions, getResult } from '.game.js';

//Create an express app
const app = express();
//Get port, or default to 3000
const PORT = process.env.PORT || 3000;
//Parse request body and verifies incoming requests using discord-interactions package
app.use(express.json())