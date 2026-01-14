import { Module } from '@nestjs/common';
import { AssignmentsController } from './assignments.controller';
import { AssignmentsService } from './assignments.service';
import { Assignment } from './assignments.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    imports: [SequelizeModule.forFeature([Assignment])],
    controllers:[AssignmentsController],
    providers: [AssignmentsService],
    exports: [AssignmentsService]
})
export class AssignmentsModule {}
