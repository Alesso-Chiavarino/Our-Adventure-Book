import adventureRoutes from './adventure/adventure.routes.js'
import lettersRutes from './letters/letters.routes.js'
import { Router } from 'express';
// import tasksRoutes from './tasks/tasks.routes.js'
import tasksRoutes from './tasks/tasks.routes.js'

const router = Router();

router.use('/adventure', adventureRoutes);
router.use('/tasks', tasksRoutes);
router.use('/letters', lettersRutes);

router.get("/", (req, res) => {
    res.send("Welcome to OurAdventureBook REST API");
})

export default router;