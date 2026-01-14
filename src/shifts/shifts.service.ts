import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Shift } from './shifts.model';

// export interface Shift{
//     id: number,
//     startTime: string,
//     endTime:string,
//     location: string
// };

@Injectable()
export class ShiftsService {
  constructor(
    @InjectModel(Shift)
      private shift: typeof Shift,
  ){}
    
      async getShift(): Promise<Shift[]> {
        return this.shift.findAll();
      }
      async findShift(id: number): Promise<Shift | null> {
        return this.shift.findOne({where:{id,},});
      }
      async create(shift: Shift): Promise<void> {
    
        this.shift.create({startTime:shift.startTime, endTime:shift.endTime, location:shift.location});
      }
      async update(id: number, updateData: Shift): Promise<Shift> {
        
          if (!Object.keys(updateData).length) {
            throw new BadRequestException('No update data provided');
          }
      
          const user = await this.shift.findByPk(id);
          if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
          }
          await user.update(updateData);
          return user;
        }
      async delete(id: number): Promise<void> {
        const shift =await this.findShift(id);
        await shift?.destroy();

      }
}
