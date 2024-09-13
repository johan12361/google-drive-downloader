// index.d.ts
declare module 'simple-googledrive-downloader' {
  /**
   * Downloads a file from Google Drive and saves it to the specified directory with a given filename and extension.
   *
   * @param fileId - The ID of the file to download from Google Drive.
   * @param dirPath - The directory path where the file should be saved.
   * @param filename - The base name of the file (excluding the extension).
   * @param extension - The extension of the file (e.g., 'pdf', 'jpg').
   * @returns A promise that resolves to the full path of the saved file on success, or `null` if an error occurs.
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
  export function downloadFile(
    fileId: string,
    dirPath: string,
    filename: string,
    extension: string
  ): Promise<string | null>

  /**
   * Extracts the file ID from a Google Drive URL.
   *
   * This function parses a Google Drive URL and extracts the file ID, which is the unique identifier
   * for the file in Google Drive. The URL must be in the format:
   * `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`.
   *
   * @param url - The Google Drive URL from which to extract the file ID.
   * @returns The extracted file ID.
   * @throws Error - Throws an error if the provided URL is not a valid string or if the file ID
   * cannot be extracted from the URL.
   *
   * @example
   * const url = 'https://drive.google.com/file/d/1CwGEerIO-bunXA0e_yXySEmKNuSECytW/view?usp=sharing';
   * const fileId = getFileIdFromUrl(url);
   * console.log(fileId); // Outputs: 1CwGEerIO-bunXA0e_yXySEmKNuSECytW
   */
  export function getFileIdFromUrl(url: string): string
}
