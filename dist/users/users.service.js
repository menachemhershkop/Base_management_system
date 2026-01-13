"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
let UsersService = class UsersService {
    users = [{
            userId: 1,
            username: 'john',
            password: 'changeme',
            role: 'solder',
            email: 'dvdsfsafd'
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
            role: 'command',
            email: 'kdsjogfm;a'
        },];
    async findOne(username) {
        return this.users.find(user => user.username === username);
    }
    async findAll() {
        return this.users;
    }
    async create(users) {
        console.log();
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(users.password, saltOrRounds);
        console.log(hash);
        console.log(await bcrypt.compare(users.password, hash));
        users.password = await bcrypt.hash(users.password, saltOrRounds);
        this.users.push(users);
    }
    async update(id, updatedUser) {
        const userIndex = this.users.findIndex(user => user.userId == id);
        console.log(userIndex, id, updatedUser);
        console.log(this.users);
        if (userIndex > -1) {
            this.users[userIndex] = updatedUser;
        }
    }
    async delete(userId) {
        this.users = this.users.filter(user => user.userId != userId);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map