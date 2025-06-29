import express from "express"
// import fs from "express"
import {readFileAsync, writeFileAsync,copyFileAsync,appendFileAsync,listDirectoryAsync, createFileAsync, createDirectoryAsync, deleteFileAsync, deleteDirectoryAsync} from "./test-files/test.js"

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
        writeFileAsync("output.txt", "verify")
        copyFileAsync("./test-files/sample.text", "./output.txt")
        appendFileAsync ("./test-files/sample.text", "checking")
        
        listDirectoryAsync(".")

        createDirectoryAsync("temp")
        createFileAsync("./temp/test.txt", "temporary file")
        deleteFileAsync("./temp/test.txt")

        deleteDirectoryAsync("temp")

    });
};

startExpressServer()