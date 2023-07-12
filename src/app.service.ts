import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  fileServices(): string {
    return 'Hola mundo!';
  }

  fileServicePost() {
    return 'Hello world!'
  }
}
