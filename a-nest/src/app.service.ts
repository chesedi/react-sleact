import { Injectable } from '@nestjs/common';

// 요청, 응답에 대해서는 몰라요.
@Injectable()
export class AppService {
  getHello(): string {
    return process.env.SECRET;
  }
}
