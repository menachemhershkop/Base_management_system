import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export interface User {
     userId: number;
     username: string;
     password: string;
     role: string;
     email: string
   }

@Injectable()
export class UsersService {
    private users: User[] = [ {
      userId: 1,
      username: 'john',
      password: 'changeme',
      role: 'solder',
      email: 'dvdsfsafd'
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      role:'command',
      email: 'kdsjogfm;a'
    },];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
  async findAll(): Promise<User[]> {
       return this.users;
     }
  async create(users : User): Promise<void> {
    console.log();
    const saltOrRounds:number = 10;
    const hash: string = await bcrypt.hash(users.password, saltOrRounds)
    console.log(hash);
    console.log(await bcrypt.compare(users.password, hash));
    users.password = await bcrypt.hash(users.password, saltOrRounds)
    
    
       this.users.push(users);
     }
  async update(id: number, updatedUser: User): Promise<void> {
       const userIndex: number = this.users.findIndex(user => user.userId == id);
       console.log(userIndex, id, updatedUser);
       console.log(this.users)
       
       
       if (userIndex > -1) {
         this.users[userIndex] = updatedUser;
       }
     }
  async delete(userId:number): Promise<void> {
       this.users = this.users.filter(user => user.userId != userId);
     }
}
