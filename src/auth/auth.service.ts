import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
    ) {}

  async signIn(username: string, pass: string): Promise<{access_token: string}> {
    const user = await this.usersService.findOne(username);
    // const saltOrRounds:number = 10;
    //     const hash: string = await bcrypt.hash(pass, saltOrRounds)
    //     console.log(hash);
    //     console.log(await bcrypt.compare(pass, hash));
    //     pass = await bcrypt.hash(pass, saltOrRounds)
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username, rank:user.role };
    return {
         access_token: await this.jwtService.signAsync(payload),
    };
  }
}
