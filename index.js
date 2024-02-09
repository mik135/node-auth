import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import userRoutes from './routes/users.js'

const app = express()
const PORT = 3000

app.use(cors())

app.use('/api', userRoutes)



app.listen(PORT, () => {
    console.log(`Server started on port 3000`)
})