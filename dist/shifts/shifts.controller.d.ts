import { ShiftsService } from './shifts.service';
import { Shift } from './shifts.model';
export declare class ShiftsController {
    private readonly shiftService;
    constructor(shiftService: ShiftsService);
    getShifts(req: any): Promise<Shift[]> | {
        msg: string;
    };
    findShift(id: number): Promise<Shift | null>;
    create(shift: Shift): void;
    remove(id: number): void;
}
