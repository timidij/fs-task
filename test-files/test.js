//  import fs from "fs"

import { promises as fs } from 'fs';
import  path from 'path';
 export async function readFileAsync(filename){
    
       try {
        fs.readFile(filename, (err, data)=>{
            if(err) throw err
            console.log(data);
        });
        console.log(` Contents of ${filename}`);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`Error: File '${filename}' not found.`);
        } else {
            console.error(`Error reading file: ${error.message}`);
        }
    }

}


export async function writeFileAsync(filename, content){
    try {
        fs.writeFile("output.txt", content, (err)=>{
            if (err){
                console.log(err)
            }else {
                console.log("file created successfully")
            }
        })
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`Error: File '${filename}' not found.`);
        }
    }
    
}







export async function copyFileAsync(src, dest) {
    fs.copyFile(src, dest, (error) => {
        if (error) {
            console.error(`Error copying file: ${error}`);
        } else {
            console.log(`Copied ${src} to ${dest}`);
        }
    });
}

export async function appendFileAsync (filename, content) {
    try {
        // Read and display the file contents before appending
        try {
            const beforeData = await fs.readFile(filename, 'utf8');
            console.log('Before appending:', beforeData);
        } catch (readError) {
            console.log('File does not exist yet. It will be created.');
        }

        // Append the string to the file
        await fs.appendFile(filename, content, { flag: 'a' });
        console.log(`Appended string to ${filename}`);

        // Read and display the file contents after appending
        const afterData = await fs.readFile(filename, 'utf8');
        console.log('After appending:', afterData);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

export async function listDirectoryAsync(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    const fileDetails = await Promise.all(files.map(async (file) => {
      const filePath = path.join(dirPath, file);
      const stats = await fs.stat(filePath);
      return {
        name: file,
        type: stats.isDirectory() ? 'directory' : 'file',
        size: stats.size
      };
    }));

    fileDetails.sort((a, b) => a.name.localeCompare(b.name));

    fileDetails.forEach(file => {
      console.log(`${file.name} - ${file.type} - ${file.size} bytes`);
    });
  } catch (err) {
    console.error(`Error accessing directory: ${err.message}`);
  }
}

// task 6
export async function createDirectoryAsync(dirPath) {
  try {
    await fs.mkdir(dirPath);
    console.log(`Directory created: ${dirPath}`);
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.log(`Directory already exists: ${dirPath}`);
    } else {
      console.error(`Error creating directory: ${err.message}`);
    }
  }
}

export async function deleteFileAsync(filename) {
  try {
    await fs.unlink(filename);
    console.log(`File deleted: ${filename}`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`File does not exist: ${filename}`);
    } else {
      console.error(`Error deleting file: ${err.message}`);
    }
  }
}

export async function deleteDirectoryAsync(dirPath) {
  try {
    await fs.rmdir(dirPath);
    console.log(`Directory deleted: ${dirPath}`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`Directory does not exist: ${dirPath}`);
    } else {
      console.error(`Error deleting directory: ${err.message}`);
    }
  }
}
