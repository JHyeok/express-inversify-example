import { Request, Response } from "express";
import { injectable } from "inversify";
import { GreetingService } from "../services/GreetingService";

@injectable()
export class GreetingController {
  constructor(private greetingService: GreetingService) {}

  public greet(req: Request, res: Response): void {
    const name: string = req.params.name || "John";
    const greeting: string = this.greetingService.greet(name);
    res.send(greeting);
  }
}
