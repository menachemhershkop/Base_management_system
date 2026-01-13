import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignmentsController } from './assignments/assignments.controller';
import { AssignmentsService } from './assignments/assignments.service';
import { AssignmentsModule } from './assignments/assignments.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [AuthModule, UsersModule, ShiftsModule, AssignmentsModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mendy',
      password: '770',
      database: 'army',
      models:[]
    })
  ],
  controllers: [AppController, AssignmentsController],
  providers: [AppService, AssignmentsService],
})
export class AppModule {}
