import { Shift } from './shifts.model';
export declare class ShiftsService {
    private shift;
    constructor(shift: typeof Shift);
    getShift(): Promise<Shift[]>;
    findShift(id: number): Promise<Shift | null>;
    create(shift: Shift): Promise<void>;
    delete(id: number): Promise<void>;
}
