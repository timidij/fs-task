import express from "express"
// import fs from "express"
import {readFileAsync, writeFileAsync} from "./test-files/test.js"

const app = express()

app.use(express.json())
const PORT = 3000

import { createServer } from 'node:http';

const server = createServer((req, res) => {
    
    res.statusCode = 200;
    
});

 



const startExpressServer = () => {
    app.listen(PORT, () => {
        console.log(`Express Server running at http://localhost:${PORT}`);
        console.log('Access API routes at http://localhost:3000');
        console.log('Press Ctrl+C to stop the server.');
        readFileAsync("./test-files/sample.text")
        // writeFileAsync("output.txt", "verify")
        
        
    });
};

startExpressServer()