import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';

// export interface User {
//      userId: number;
//      username: string;
//      password: string;
//      role: string;
//      email: string
//    }

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private users: typeof User
  ){}
  async findOne(name: string): Promise<User| null> {
    return this.users.findOne({
      where:
      {
        name,
      },
    });
  }
  
  async findAll(): Promise<User[]> {
       return this.users.findAll();
     }
  async create(users : User): Promise<void> {
    const saltOrRounds:number = 10;
    const hash: string = await bcrypt.hash(users.password, saltOrRounds);
   
    users.password = await bcrypt.hash(users.password, saltOrRounds);
    
    
       this.users.create({name:users.name, email:users.email, password:users.password, role:users.role});
     }
   async update(id: number, updateData: User): Promise<User> {
  
    if (!Object.keys(updateData).length) {
      throw new BadRequestException('No update data provided');
    }

    const user = await this.users.findByPk(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await user.update(updateData);
    return user;
  }

  async delete(id:string): Promise<void> {
       const user =await this.findOne(id);
      //  await user.destroy()
     }
}
