import { Model } from 'sequelize-typescript';
import { Shift } from 'src/shifts/shifts.model';
import { User } from 'src/users/users.model';
export declare class Assignment extends Model {
    userId: number;
    shiftId: number;
    user: User;
    shift: Shift;
}
