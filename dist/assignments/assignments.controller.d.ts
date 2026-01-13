import { AssignmentsService } from './assignments.service';
export declare class AssignmentsController {
    private readonly assignmentsService;
    constructor(assignmentsService: AssignmentsService);
    findMiisions(req: any): Promise<import("./assignments.service").Assign[]> | {
        msg: string;
    };
    findMission(missionId: number): Promise<import("./assignments.service").Assign | undefined>;
    create(mission: {
        missionId: number;
        soliderId: number;
        shiftId: number;
    }): void;
    update(id: number, mission: {
        missionId: number;
        soliderId: number;
        shiftId: number;
    }): void;
    remove(id: number): void;
}
