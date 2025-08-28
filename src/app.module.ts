import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';


import { UsersModule } from './modules/users/users.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { ActivityLogsModule } from './modules/activity-logs/activity-logs.module';
import { ChatMessagesModule } from './modules/chat-messages/chat-messages.module';
import { ChatParticipantsModule } from './modules/chat-participants/chat-participants.module';
import { ChatRoomsModule } from './modules/chat-rooms/chat-rooms.module';
import { ForumCategoriesModule } from './modules/forum-categories/forum-categories.module';
import { ForumRepliesModule } from './modules/forum-replies/forum-replies.module';
import { ForumTopicsModule } from './modules/forum-topics/forum-topics.module';
import { GalleryModule } from './modules/gallery/gallery.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST'),
        port: parseInt(config.get('DB_PORT') || '3306', 10),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: false, // Use false em produção
      }),
    }),
    TypeOrmModule.forFeature([User]),
  UsersModule,
  JobsModule,
  ActivityLogsModule,
  ChatMessagesModule,
  ChatParticipantsModule,
  ChatRoomsModule,
  ForumCategoriesModule,
  ForumRepliesModule,
  ForumTopicsModule,
  GalleryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
