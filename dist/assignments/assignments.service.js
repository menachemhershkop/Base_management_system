"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const assignments_model_1 = require("./assignments.model");
let AssignmentsService = class AssignmentsService {
    constructor(assign) {
        this.assign = assign;
    }
    async findMissions() {
        return this.assign.findAll();
    }
    async findMission(missionId) {
        return this.assign.findOne({
            where: {
                missionId,
            },
        });
    }
    async create(mission) {
        console.log();
        this.assign.create({ userId: mission.userId, shiftId: mission.shiftId });
    }
    async delete(missionId) {
        const mision = await this.findMission(missionId);
        await mision?.destroy();
    }
};
exports.AssignmentsService = AssignmentsService;
exports.AssignmentsService = AssignmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(assignments_model_1.Assignment)),
    __metadata("design:paramtypes", [Object])
], AssignmentsService);
//# sourceMappingURL=assignments.service.js.map