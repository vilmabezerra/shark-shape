import { Controller, Get } from '@nestjs/common';
import { WorkoutItemsService } from './workoutItems.service';

@Controller()
export class WorkoutItemsController {
  constructor(private readonly appService: WorkoutItemsService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
