"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const add = (x, y) => x + y;
app.get('/inputX/:x/inputY/:y', (req, res, next) => {
    console.log('Param x = ' + req.params.x);
    console.log('Param y = ' + req.params.y);
    if (isNaN(+req.params.x) || isNaN(+req.params.y)) {
        res.status(400).send('Bad Request');
    }
    let pX = +req.params.x;
    let pY = +req.params.y;
    let addResult = add(pX, pY);
    console.log(addResult);
    res.send({ "x": req.params.x, "y": req.params.y, "add result": addResult });
});
app.listen(3333, () => console.log('Server running - port 3333'));
