import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 2000;

const app = express();

app.use(cors({
  origin: '*',
}));

app.use('/test', (req, res) => {
  return res.status(200).json({
    msg: 'this is from node backend!',
  });
});

app.use('*', (req, res, next) => {
  return res.status(404).send('not found!!');
});

app.listen(PORT, () => {
  console.log(`node running on ${PORT}`)
});