import express from 'express'

const app = express()
const port = 5000 // default port

// route handler for default home page
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})

export default app
