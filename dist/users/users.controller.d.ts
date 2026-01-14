import { UsersService } from './users.service';
import { User } from './users.model';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(req: any): Promise<User[]> | {
        msg: string;
    };
    findOne(username: string): Promise<User | null>;
    create(user: User): void;
    update(id: number, user: any): void;
    remove(id: string): void;
}
