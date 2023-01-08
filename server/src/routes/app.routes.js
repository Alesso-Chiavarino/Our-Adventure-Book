import adventureRoutes from './adventure/adventure.routes.js'
import { Router } from 'express';

const router = Router();

router.use('/adventure', adventureRoutes);

router.get("/", (req, res) => {
    res.send("Hello api!");
})

export default router;