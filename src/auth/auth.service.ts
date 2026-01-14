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

  async signIn(username: string, pass: string): Promise<{access_token: string}| null> {
    const user = await this.usersService.findOne(username);
    
    if(typeof user?.password == 'string'){
    if (await bcrypt.compare(pass, user?.password)) {
      const payload = { sub: user.id, username: user.name, rank:user.role };
      return {
           access_token: await this.jwtService.signAsync(payload),
      }};
    }
    throw new UnauthorizedException();
     }

}
