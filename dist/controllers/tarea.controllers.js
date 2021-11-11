"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTarea = exports.putTarea = exports.postTarea = exports.getTarea = exports.getTareas = void 0;
const tarea_model_1 = __importDefault(require("../models/tarea.model"));
const getTareas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tareas = yield tarea_model_1.default.findAll();
    res.json({
        data: tareas
    });
});
exports.getTareas = getTareas;
const getTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tarea = yield tarea_model_1.default.findByPk(id);
    if (tarea) {
        res.json({
            data: tarea
        });
    }
    else {
        res.status(404).json({ msg: "No existe tarea con id " + id });
    }
});
exports.getTarea = getTarea;
const postTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const tarea = yield tarea_model_1.default.create(body);
        tarea.save();
        res.json({
            data: tarea
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
});
exports.postTarea = postTarea;
const putTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const tarea = yield tarea_model_1.default.findByPk(id);
        if (!tarea) {
            return res.status(404).json({ msg: "No existe tarea con id " + id });
        }
        yield tarea.update(body);
        res.json({
            data: tarea
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
});
exports.putTarea = putTarea;
const deleteTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const tarea = yield tarea_model_1.default.findByPk(id);
        if (!tarea) {
            return res.status(404).json({ msg: "No existe tarea con id " + id });
        }
        yield tarea.destroy();
        res.json({
            msg: `tarea con id ${id} eliminada`
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
});
exports.deleteTarea = deleteTarea;
//# sourceMappingURL=tarea.controllers.js.map