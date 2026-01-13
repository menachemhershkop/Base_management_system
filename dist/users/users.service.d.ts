export interface User {
    userId: number;
    username: string;
    password: string;
    role: string;
    email: string;
}
export declare class UsersService {
    private users;
    findOne(username: string): Promise<User | undefined>;
    findAll(): Promise<User[]>;
    create(users: User): Promise<void>;
    update(id: number, updatedUser: User): Promise<void>;
    delete(userId: number): Promise<void>;
}
