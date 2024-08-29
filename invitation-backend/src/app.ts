import express from 'express'
import connectDB from './utils/connectDB'

const app = express()
const port = 5000 // default port

app.get('/', (req, res) => { // route handler for default home page
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
    connectDB()
})

export default app
