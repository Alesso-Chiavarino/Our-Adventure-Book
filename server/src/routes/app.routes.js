import adventureRoutes from './adventure/adventure.routes.js'
import { Router } from 'express';
// import tasksRoutes from './tasks/tasks.routes.js'
import tasksRoutes from './tasks/tasks.routes.js'

const router = Router();

router.use('/adventure', adventureRoutes);
router.use('/tasks', tasksRoutes);

router.get("/", (req, res) => {
    res.send("Hello api!");
})

export default router;