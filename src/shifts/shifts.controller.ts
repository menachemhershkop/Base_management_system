import { Controller, Get, UseGuards, Request, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ShiftsService } from './shifts.service';
import { Shift } from './shifts.model';

@Controller('shifts')
export class ShiftsController {
    constructor(private readonly shiftService: ShiftsService) {}
        @UseGuards(AuthGuard)
        @Get()
        getShifts(@Request() req) {
            if (req['user'].rank == 'command'){
            
            return this.shiftService.getShift();
        }    
        else{
            return {msg:'Only command can read this file'}
        }
              }
             
        @Get(':id')
        findShift(@Param('id') id: number) {
            return this.shiftService.findShift(id);
        }
    
        @Post()
        create(@Body() shift: Shift ) {
    
            this.shiftService.create(shift);
        }
    
        @Put(':id')
        update(@Param('id') id: number, @Body() shift) {
            this.shiftService.update(id, shift);
        }
    
        @Delete(':id')
        remove(@Param('id') id: number) {
            this.shiftService.delete(id);
        }
}
