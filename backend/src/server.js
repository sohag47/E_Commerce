const http = require('http');
const app = require('./app');
const { port } = require('./config/index');

const server = http.createServer(app);

//! Server Start
app.listen(port, ()=>{
    console.log(`Application is running and listening at http://localhost:${port}`)
})