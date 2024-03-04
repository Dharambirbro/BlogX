import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const readJSONFile = async (fileName, next) => {
  try {
    // Resolve the file path dynamically
    const filePath = resolve(__dirname, fileName);
    // Read data from the JSON file
    const data = await readFile(filePath, "utf8");

    // Parse JSON data
    const jsonData = JSON.parse(data);

    // Now you can access the data
    return jsonData;
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

export async function updateJSONFile(fileName, key, newData) {
  try {
    // Resolve the file path dynamically
    const filePath = resolve(__dirname, fileName);

    // Read data from the JSON file
    const data = await readFile(filePath, "utf8");

    // Parse JSON data
    const jsonData = JSON.parse(data);

    // Modify the data
    console.log(jsonData);
    jsonData[key] = newData;

    // Convert JSON data back to string
    const updatedData = JSON.stringify(jsonData, null, 2); // null and 2 are optional arguments for pretty formatting

    // Write updated data back to the JSON file
    await writeFile(filePath, updatedData, "utf8");
    console.log("Data updated successfully.");
  } catch (error) {
    console.error("Error updating file:", error);
  }
}
