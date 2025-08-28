import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Back do JHOTA A TODO VAPOR';
  }
}
