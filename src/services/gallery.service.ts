import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gallery } from '../entities/gallery.entity';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(Gallery)
    private readonly galleryRepository: Repository<Gallery>,
  ) {}

  findAll() {
    return this.galleryRepository.find();
  }

  findOne(id: number) {
    return this.galleryRepository.findOneBy({ id });
  }

  create(data: Partial<Gallery>) {
    const gallery = this.galleryRepository.create(data);
    return this.galleryRepository.save(gallery);
  }

  update(id: number, data: Partial<Gallery>) {
    return this.galleryRepository.update(id, data);
  }

  remove(id: number) {
    return this.galleryRepository.delete(id);
  }
}
