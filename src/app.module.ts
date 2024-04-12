import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://haitrieu2524:TibENO31kXbPHQpj@nemone-cluster.mdyvapk.mongodb.net/?retryWrites=true&w=majority&appName=nemone-cluster',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
