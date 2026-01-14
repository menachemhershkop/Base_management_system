import { AssignmentsService } from './assignments.service';
import { Assignment } from './assignments.model';
export declare class AssignmentsController {
    private readonly assignmentsService;
    constructor(assignmentsService: AssignmentsService);
    findMiisions(req: any): Promise<Assignment[]> | {
        msg: string;
    };
    findMission(missionId: number): Promise<Assignment | null>;
    create(mission: Assignment): void;
    update(id: number, mission: {
        missionId: number;
        soliderId: number;
        shiftId: number;
    }): void;
    remove(id: number): void;
}
