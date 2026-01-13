import { Injectable } from '@nestjs/common';

export interface Assign {
  missionId: number;
  soliderId: number;
  shiftId: number;
};

@Injectable()
export class AssignmentsService {
  private assign: Assign[] = [];

  async findMissions(): Promise<Assign[]> {
    return this.assign;
  }
  async findMission(missionId: number): Promise<Assign | undefined> {
    return this.assign.find(mission => mission.missionId === missionId);
  }
  async create(mission: Assign): Promise<void> {
    console.log();

    this.assign.push(mission);
  }
  async update(id: number, updatedMission: Assign): Promise<void> {
    const userIndex: number = this.assign.findIndex(mission => mission.missionId == id);
    console.log(userIndex, id, updatedMission);
    console.log(this.assign)


    if (userIndex > -1) {
      this.assign[userIndex] = updatedMission;
    }
  }
  async delete(missionId: number): Promise<void> {
    this.assign = this.assign.filter(mission => mission.missionId != missionId);
  }
}
