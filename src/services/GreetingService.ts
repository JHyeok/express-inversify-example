import { inject, injectable } from 'inversify';
import { GreetingRepository } from '../repositories/GreetingRepository';
import { TYPES } from '../types';

@injectable()
export class GreetingService {
  constructor(@inject(TYPES.GreetingRepository) private greetingRepository: GreetingRepository) {
  }

  public greet(name: string): string {
    const greeting = this.greetingRepository.getGreeting();
    return `${greeting}, ${name}!`;
  }
}
