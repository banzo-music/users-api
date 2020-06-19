import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

interface Response {
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('name') name: string = null): Response {
    return {
      message: name ? `Hello, ${name}!` : this.appService.getHello()
    };
  }
}
