/**
 * Minimal backend for the demo: exposes the BTC rate used by the host app.
 */
import express from 'express';
import cors from 'cors';
import { btc } from '@star/btc';
import { BtcResponse } from '@star/shared/types';

const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

app.get('/api/btc', (req, res) => {
  res.send({ btc: btc() } satisfies BtcResponse);
});

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3333;

const server = app.listen(port, host, () => {
  console.log(`Listening at http://${host}:${port}/api`);
});
server.on('error', console.error);
