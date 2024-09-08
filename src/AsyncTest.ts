import { promises as fs } from 'fs';

// const fs = require('fs').promises;
const filePath = 'src/file.txt';

// `async` before the parent function
async function readFileAsync() {
    try {
        // `await` before the async method
        const data = await fs.readFile(filePath, 'utf-8');
        console.log(data);
        console.log('Done!');
    } catch (error) {
        console.log('An error occurred...: ', error);
    }
}

// `async` before the parent function
readFileAsync()
    .then(() => {
        console.log('Success!');
    })
    .catch((error) => {
        console.log('An error occurred...: ', error);
    });

async function asyncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 1000);
    });
}

async function asyncFunction2() {
    const result = await asyncFunction();
    console.log(result)
}

asyncFunction().then((result) => {
    console.log(result)
});

asyncFunction2();