"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Tarea = connection_1.default.define('Tarea', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    completada: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = Tarea;
//# sourceMappingURL=tarea.model.js.map