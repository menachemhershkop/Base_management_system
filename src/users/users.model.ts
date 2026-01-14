import { DataTypes } from 'sequelize';
import {AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from 'sequelize-typescript';

@Table
export class User extends Model{
    
    @Column(DataType.STRING)
    name: string;
    @Column(DataType.STRING)
    email: string;
    @Column(DataType.STRING)
    password: string;
    @Column(DataType.STRING)
    role: string;
}