import { Container } from 'inversify';
import { GreetingService } from './services/GreetingService';
import { GreetingRepository } from './repositories/GreetingRepository';
import { GreetingController } from './controllers/GreetingController';
import { TYPES } from './types';

const container = new Container();
container.bind<GreetingService>(TYPES.GreetingService).to(GreetingService);
container.bind<GreetingRepository>(TYPES.GreetingRepository).to(GreetingRepository);
container.bind<GreetingController>(TYPES.GreetingController).to(GreetingController);

export default container;
