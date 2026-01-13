export interface Assign {
    missionId: number;
    soliderId: number;
    shiftId: number;
}
export declare class AssignmentsService {
    private assign;
    findMissions(): Promise<Assign[]>;
    findMission(missionId: number): Promise<Assign | undefined>;
    create(mission: Assign): Promise<void>;
    update(id: number, updatedMission: Assign): Promise<void>;
    delete(missionId: number): Promise<void>;
}
