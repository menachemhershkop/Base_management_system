"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const shifts_module_1 = require("./shifts/shifts.module");
const assignments_controller_1 = require("./assignments/assignments.controller");
const assignments_service_1 = require("./assignments/assignments.service");
const assignments_module_1 = require("./assignments/assignments.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, users_module_1.UsersModule, shifts_module_1.ShiftsModule, assignments_module_1.AssignmentsModule],
        controllers: [app_controller_1.AppController, assignments_controller_1.AssignmentsController],
        providers: [app_service_1.AppService, assignments_service_1.AssignmentsService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map