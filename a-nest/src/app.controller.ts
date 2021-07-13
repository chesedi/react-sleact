import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// req, res 대해 알아요.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
