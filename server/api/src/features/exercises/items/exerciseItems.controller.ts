import { Controller, Get } from '@nestjs/common';
import { ExerciseItemsService } from './exerciseItems.service';

@Controller()
export class ExerciseItemsController {
  constructor(private readonly appService: ExerciseItemsService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
