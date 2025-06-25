 import fs from "fs"
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



export async function copyFileAsync(source, destination) {
    try {
        // Verify source exists
        try {
            await fs.access(source);
        } catch (err) {
            throw new Error(`Source file does not exist: ${source}`);
        }

        // Create destination directory if needed
        const destDir = path.dirname(destination);
        await fs.mkdir(destDir, { recursive: true });

        // Perform file copy
        await fs.copyFile(source, destination);

        // Verify destination creation
        await fs.access(destination);
        return `File copied successfully to ${destination}`;
        } catch (err) {
        throw new Error(`Copy failed: ${err.message}`);
    }
}
