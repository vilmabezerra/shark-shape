import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkoutPlansService {
  getHello(): string {
    return 'Hello World!';
  }
}
