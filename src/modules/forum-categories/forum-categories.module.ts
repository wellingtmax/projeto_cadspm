import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForumCategory } from '../../entities/forum-category.entity';
import { ForumCategoryService } from '../../services/forum-category.service';
import { ForumCategoriesController } from './forum-categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ForumCategory])],
  controllers: [ForumCategoriesController],
  providers: [ForumCategoryService],
  exports: [ForumCategoryService],
})
export class ForumCategoriesModule {}
