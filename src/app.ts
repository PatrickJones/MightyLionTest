import express from 'express';

const app: express.Application = express();

const add = (x: number, y: number): number => x + y;

app.get('/inputX/:x/inputY/:y', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('Param x = ' + req.params.x);
    console.log('Param y = ' + req.params.y);
    
    if(isNaN(+req.params.x) || isNaN(+req.params.y)){
        res.status(400).send('Bad Request')
    }

    let pX: number = +req.params.x;
    let pY: number = +req.params.y;
    let addResult = add(pX, pY);

    console.log(addResult);

    res.send({"x": req.params.x, "y": req.params.y, "add result": addResult});
});

app.listen(3333, () => console.log('Server running - port 3333'));