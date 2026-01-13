import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(req: any): Promise<import("./users.service").User[]> | {
        msg: string;
    };
    findOne(username: string): Promise<import("./users.service").User | undefined>;
    create(user: {
        userId: number;
        username: string;
        password: string;
        role: string;
        email: string;
    }): void;
    update(id: number, user: {
        userId: number;
        username: string;
        password: string;
        role: string;
        email: string;
    }): void;
    remove(id: number): void;
}
