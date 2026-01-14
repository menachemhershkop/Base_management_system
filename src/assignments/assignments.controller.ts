import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Assignment } from './assignments.model';

@Controller('assignments')
export class AssignmentsController {
    constructor(private readonly assignmentsService: AssignmentsService) {}
    @UseGuards(AuthGuard)
    @Get()
    findMiisions(@Request() req) {
        if (req['user'].rank == 'command'){
        
        return this.assignmentsService.findMissions();
    }    
    else{
        return {msg:'Only command can read this file'}
    }
          }
         

    @Get(':id')
    findMission(@Param('id') missionId: number) {
        return this.assignmentsService.findMission(missionId);
    }

    @Post()
    create(@Body() mission: Assignment) {

        this.assignmentsService.create(mission);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() mission) {
        this.assignmentsService.update(id, mission);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        this.assignmentsService.delete(id);
    }
}
