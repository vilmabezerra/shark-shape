import { Controller, Get } from '@nestjs/common';
import { WorkoutPlansService } from './workoutPlans.service';

@Controller()
export class WorkoutPlansController {
  constructor(private readonly appService: WorkoutPlansService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
