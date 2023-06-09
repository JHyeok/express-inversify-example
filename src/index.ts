import 'reflect-metadata';
import express from 'express';
import { GreetingController } from './controllers/GreetingController';
import container from './inversify.config';
import { TYPES } from './types';

const app = express();

app.use(express.json());

// Inversify 컨테이너에서 GreetingController 인스턴스를 가져옵니다.
const greetingController = container.get<GreetingController>(TYPES.GreetingController);

// app.get('/', greetingController.greet.bind(greetingController));
app.get('/', greetingController.greet.bind(greetingController));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
