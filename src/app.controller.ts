import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private appService: AppService) {}
  @Get('/commits')
  getCommits(@Req() req: Request) {
    return this.appService.getCommits(req.query);
  }
}
