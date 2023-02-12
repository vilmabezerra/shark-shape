import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutsModule } from './features/workouts/workouts.module';

@Module({
  imports: [WorkoutsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
