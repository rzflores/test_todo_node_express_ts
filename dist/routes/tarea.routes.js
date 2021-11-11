"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tarea_controllers_1 = require("../controllers/tarea.controllers");
const router = (0, express_1.Router)();
router.get('/', tarea_controllers_1.getTareas);
router.get('/:id', tarea_controllers_1.getTarea);
router.post('/', tarea_controllers_1.postTarea);
router.put('/:id', tarea_controllers_1.putTarea);
router.delete('/:id', tarea_controllers_1.deleteTarea);
exports.default = router;
//# sourceMappingURL=tarea.routes.js.map