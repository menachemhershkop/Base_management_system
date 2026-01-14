import { Assignment } from './assignments.model';
export declare class AssignmentsService {
    private assign;
    constructor(assign: typeof Assignment);
    findMissions(): Promise<Assignment[]>;
    findMission(missionId: number): Promise<Assignment | null>;
    create(mission: Assignment): Promise<void>;
    delete(missionId: number): Promise<void>;
}
