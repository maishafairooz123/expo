import { Router } from "express";
import tkn from 'jsonwebtoken';
import handler from 'express-async-handler';
import { UserModel } from "../models/user.model.js";


const router = Router();

router.post('/login', handler(async (req, res) => {
    const {employee, password} = req.body;
    const user = await UserModel.findOne({employee});

    if (user && password === user.password) {
        res.send(generate(user));
        return;
    }

}));

router.post('/register', handler (async (req, res) => {
    const {name, employee, password} = req.body;

    const user = await UserModel.findOne({employee});

    if (user) {
        res.status(400).send('Employee Already Registered');
        return;
    }

    const newUser = {
        name, 
        employee,
        password,
    };

    const result = await UserModel.create(newUser);
    res.send(generate(result));

}));

const generate = user => {
    const token = tkn.sign ({
        id: user.id, employee: user.employee, admin: user.admin
    }, process.env.JWT_SECRET);

    return {
        id: user.id,
        employee: user.employee,
        name: user.name,
        admin: user.admin,
        token,


    };
};

export default router;