import { Container } from "inversify";
import { GreetingService } from "./services/GreetingService";
import { GreetingController } from "./controllers/GreetingController";

const container = new Container();
container.bind<GreetingService>(GreetingService).toSelf();
container.bind<GreetingController>(GreetingController).toSelf();

export default container;
