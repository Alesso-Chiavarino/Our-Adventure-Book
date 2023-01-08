import { PORT } from './config.js'
import app from './app.js'
import { connectDb } from './db.js'

connectDb();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));