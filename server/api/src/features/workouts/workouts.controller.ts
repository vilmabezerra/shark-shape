import { Controller, Get } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';

@Controller()
export class WorkoutsController {
  constructor(private readonly appService: WorkoutsService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
