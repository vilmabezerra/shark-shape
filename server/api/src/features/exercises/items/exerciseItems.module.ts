import { Module } from '@nestjs/common';
import { ExerciseItemsController } from './exerciseItems.controller';
import { ExerciseItemsService } from './exerciseItems.service';

@Module({
  imports: [],
  controllers: [ExerciseItemsController],
  providers: [ExerciseItemsService],
})
export class ExerciseItemsModule {}
