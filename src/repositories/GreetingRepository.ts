import { injectable } from 'inversify';

@injectable()
export class GreetingRepository {
  public getGreeting(): string {
    return 'Hello';
  }
}
