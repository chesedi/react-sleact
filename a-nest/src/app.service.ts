import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';

// 요청, 응답에 대해서는 몰라요.
@Injectable()
export class AppService {
  constructor(private usersService: UsersService) {}

  getHello() {
    this.usersService.getUser();
    this.getWow();
    return process.env.SECRET;
  }

  async getWow() {}
}
