import fs from 'fs'
import path from 'path'
/**
 * Downloads a file from Google Drive and saves it to the specified directory with a given filename and extension.
 *
 * This function constructs a download URL for the file using its Google Drive file ID, fetches the file content,
 * and writes it to the local file system. It ensures the directory exists before saving the file.
 *
 * @param {string} fileId - The ID of the file to download from Google Drive.
 * @param {string} dirPath - The directory path where the file should be saved.
 * @param {string} filename - The base name of the file (excluding the extension).
 * @param {string} extension - The extension of the file (e.g., 'pdf', 'jpg').
 * @returns {Promise<string|null>} A promise that resolves to the full path of the saved file on success, or `null` if an error occurs.
 *
 * @throws {Error} Throws an error if the provided parameters are invalid or if an error occurs during the download or save process.
 *
 * @example
 * const fileId = '1CwGEerIO-bunXA0e_yXySEmKNuSECytW';
 * const dirPath = './downloads';
 * const filename = 'myfile';
 * const extension = 'pdf';
 * downloadFile(fileId, dirPath, filename, extension)
 *   .then(filePath => console.log(`File downloaded and saved to: ${filePath}`))
 *   .catch(error => console.error('Download failed:', error));
 */
export async function downloadFile(fileId, dirPath, filename, extension) {
  if (!fileId || typeof fileId !== 'string') {
    console.error('Invalid fileId provided')
    return null
  }

  if (!dirPath || typeof dirPath !== 'string') {
    console.error('Invalid directory path provided')
    return null
  }

  if (!filename || typeof filename !== 'string') {
    console.error('Invalid filename provided')
    return null
  }

  const filePath = path.join(dirPath, filename + '.' + extension)

  // URL de descarga
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`

  try {
    // Asegúrate de que el directorio exista
    await fs.promises.mkdir(dirPath, { recursive: true })

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Failed to fetch document: ${response.statusText}`)
    }
    // Lee el contenido del archivo como un buffer
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Guardar el archivo en el sistema
    await fs.promises.writeFile(filePath, buffer)
    console.log(`Document saved successfully at ${filePath}`)
    return filePath // Devuelve el nombre del archivo en caso de éxito
  } catch (error) {
    console.error('Error saving the document:', error.message)
    return null // Devuelve null en caso de error
  }
}
