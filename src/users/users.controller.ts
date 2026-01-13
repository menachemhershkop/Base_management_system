import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Request} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @UseGuards(AuthGuard)
     @Get()
     findAll(@Request() req) {
      console.log(req['user']);
      
      if (req['user'].rank == 'command'){
    return this.usersService.findAll();
      }
    else{
      return {msg:'Only command can read this file'}
    }
     }
     @Get(':id')
     findOne(@Param('id') username: string) {
       return this.usersService.findOne(username);
     }

     @Post()
     create(@Body() user: { userId: number; username: string; password: string; role: string; email:string}) {
       this.usersService.create(user);
     }

     @Put(':id')
     update(@Param('id') id: number, @Body() user: { userId: number; username: string; password: string; role: string; email:string }) {
       this.usersService.update(id, user);
     }

     @Delete(':id')
     remove(@Param('id') id: number) {
       this.usersService.delete(id);
     }
}
