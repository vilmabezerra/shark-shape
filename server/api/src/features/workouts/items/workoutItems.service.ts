import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkoutItemsService {
  getHello(): string {
    return 'Hello World!';
  }
}
