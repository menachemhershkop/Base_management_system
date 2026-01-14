import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Assignment } from './assignments.model';

// export interface Assign {
//   missionId: number;
//   soliderId: number;
//   shiftId: number;
// };

@Injectable()
export class AssignmentsService {
  constructor(
  @InjectModel(Assignment)
  private assign: typeof Assignment,
){}
  async findMissions(): Promise<Assignment[]> {
    return this.assign.findAll();
  }
  async findMission(missionId: number): Promise<Assignment | null> {
    return this.assign.findOne({
      where:{
        missionId,
      },
    });
  }
  async create(mission: Assignment): Promise<void> {
    console.log();

    this.assign.create({userId:mission.userId, shiftId:mission.shiftId});
  }
  async update(id: number, updateData: Assignment): Promise<Assignment> {
    
      if (!Object.keys(updateData).length) {
        throw new BadRequestException('No update data provided');
      }
  
      const user = await this.assign.findByPk(id);
      if (!user) {
        throw new NotFoundException(`Assignment with ID ${id} not found`);
      }
      await user.update(updateData);
      return user;
    }
  async delete(missionId: number): Promise<void> {
    const mision =await this.findMission(missionId);
    await mision?.destroy();
  }
}
