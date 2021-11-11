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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const tarea_routes_1 = __importDefault(require("../routes/tarea.routes"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiRuta = {
            tareas: '/api/tarea'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.dbInit();
        this.middlewares();
        //definir rutas
        this.routes();
    }
    dbInit() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('conexion exitosa');
            }
            catch (error) {
                throw new Error("Ocurrio un error en la conexion" + error);
            }
        });
    }
    middlewares() {
        //condigurar cors
        this.app.use((0, cors_1.default)());
        //parseo de body
        this.app.use(express_1.default.json());
        //carpeta de contenido estatico
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiRuta.tareas, tarea_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servido corrien en puerto --' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map