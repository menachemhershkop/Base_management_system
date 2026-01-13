"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentsService = void 0;
const common_1 = require("@nestjs/common");
;
let AssignmentsService = class AssignmentsService {
    assign = [];
    async findMissions() {
        return this.assign;
    }
    async findMission(missionId) {
        return this.assign.find(mission => mission.missionId === missionId);
    }
    async create(mission) {
        console.log();
        this.assign.push(mission);
    }
    async update(id, updatedMission) {
        const userIndex = this.assign.findIndex(mission => mission.missionId == id);
        console.log(userIndex, id, updatedMission);
        console.log(this.assign);
        if (userIndex > -1) {
            this.assign[userIndex] = updatedMission;
        }
    }
    async delete(missionId) {
        this.assign = this.assign.filter(mission => mission.missionId != missionId);
    }
};
exports.AssignmentsService = AssignmentsService;
exports.AssignmentsService = AssignmentsService = __decorate([
    (0, common_1.Injectable)()
], AssignmentsService);
//# sourceMappingURL=assignments.service.js.map