import { Injectable } from '@nestjs/common';

@Injectable()
export class ExerciseItemsService {
  getHello(): string {
    return 'Hello World!';
  }
}
