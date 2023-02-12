import { Module } from '@nestjs/common';
import { WorkoutPlansController } from './workoutPlans.controller';
import { WorkoutPlansService } from './workoutPlans.service';

@Module({
  imports: [],
  controllers: [WorkoutPlansController],
  providers: [WorkoutPlansService],
})
export class WorkoutsModule {}
