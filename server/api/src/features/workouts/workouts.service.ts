import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkoutsService {
  getHello(): string {
    return 'Hello World!';
  }
}
