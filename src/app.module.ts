import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@nemone-cluster.mdyvapk.mongodb.net/?retryWrites=true&w=majority&appName=nemone-cluster`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
