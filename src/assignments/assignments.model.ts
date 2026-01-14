import { Column, DataType, ForeignKey, Model, Table, BelongsTo} from 'sequelize-typescript';
import { Shift } from 'src/shifts/shifts.model';
import { User } from 'src/users/users.model';

@Table
export class Assignment extends Model{
    
    @Column(DataType.NUMBER)
    @ForeignKey(() =>User)
    userId: number;
    @ForeignKey(()=> Shift)
    @Column(DataType.NUMBER)
    shiftId: number;
    @BelongsTo(()=> User)
    user:User;
    @BelongsTo(()=> Shift)
    shift:Shift;
}