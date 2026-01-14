import { Column, DataType, Model, Table} from 'sequelize-typescript';

@Table
export class Shift extends Model{
    
    @Column(DataType.STRING)
    startTime: string;
    @Column(DataType.STRING)
    endTime: string;
    @Column(DataType.STRING)
    location: string;
    
}