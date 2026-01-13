import { Injectable } from '@nestjs/common';

export interface Shift{
    id: number,
    startTime: string,
    endTime:string,
    location: string
};

@Injectable()
export class ShiftsService {
      private shift: Shift[] = [];
    
      async getShift(): Promise<Shift[]> {
        return this.shift;
      }
      async findShift(id: number): Promise<Shift | undefined> {
        return this.shift.find(shift => shift.id === id);
      }
      async create(shift: Shift): Promise<void> {
    
        this.shift.push(shift);
      }
      async update(id: number, updatedShift: Shift): Promise<void> {
        const shiftIndex: number = this.shift.findIndex(shift => shift.id == id);
    
        if (shiftIndex > -1) {
          this.shift[shiftIndex] = updatedShift;
        }
      }
      async delete(id: number): Promise<void> {
        this.shift = this.shift.filter(shift => shift.id != id);
      }
}
