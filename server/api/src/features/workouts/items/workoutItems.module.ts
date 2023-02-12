import { Module } from '@nestjs/common';
import { WorkoutItemsController } from './workoutItems.controller';
import { WorkoutItemsService } from './workoutItems.service';

@Module({
  imports: [],
  controllers: [WorkoutItemsController],
  providers: [WorkoutItemsService],
})
export class WorkoutItemsModule {}
