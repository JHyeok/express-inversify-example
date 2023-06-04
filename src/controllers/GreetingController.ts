import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { GreetingService } from '../services/GreetingService';
import { TYPES } from '../types';

@injectable()
export class GreetingController {
  constructor(@inject(TYPES.GreetingService) private greetingService: GreetingService) {
  }

  public greet(req: Request, res: Response): void {
    const name = req.params.name || 'John';
    const greeting = this.greetingService.greet(name);
    res.send(greeting);
  }
}
