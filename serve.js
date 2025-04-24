#!/usr/bin/env node
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import http from 'http';
import midcompletion from '@camilaprav/kittygpt/middleware/completion.js';
import midvoicechat from '@camilaprav/kittygpt/middleware/voicechat.js';
import path from 'path';
import serve from 'serve-handler';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

if (!fs.existsSync('.env')) {
  fs.writeFileSync('.env', `OPENAI_API_COMPLETIONS_ENDPOINT=https://api.openai.com/v1/chat/completions
OPENAI_API_VOICECHAT_ENDPOINT=https://api.openai.com/v1/realtime/sessions`);
}

dotenv.config();
if (!process.env.OPENAI_API_COMPLETIONS_ENDPOINT) console.warn(`Missing OPENAI_API_COMPLETIONS_ENDPOINT. Completion requests will fail.`);
if (!process.env.OPENAI_API_VOICECHAT_ENDPOINT) console.warn(`Missing OPENAI_API_VOICECHAT_ENDPOINT. Voice chat requests will fail.`);
if (!process.env.OPENAI_API_KEY) console.warn(`Missing OPENAI_API_KEY. Add it to .env or clients must provide their own key.`);
let dir = process.cwd();
let app = express();
let __filename = fileURLToPath(import.meta.url);
let __dirname = dirname(__filename);
app.use(cors());
app.use(express.json());
app.use('/mespeak', express.static(path.join(__dirname, 'mespeak')));
app.use('/completion', midcompletion);
app.use('/voicechat', midvoicechat);
app.use('/.env', (req, res) => res.status(404).send('Not found'));
app.use(serve);
let server = http.createServer(app);
let port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`🐈 kittygpt-serve purring at http://localhost:${port}`);
});
