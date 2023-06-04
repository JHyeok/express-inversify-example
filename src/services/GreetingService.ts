import { injectable } from "inversify";

@injectable()
export class GreetingService {
  public greet(name: string): string {
    return `Hello, ${name}!`;
  }
}
