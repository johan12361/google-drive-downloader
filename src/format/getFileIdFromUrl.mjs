/**
 * Extracts the file ID from a Google Drive URL.
 *
 * This function parses a Google Drive URL and extracts the file ID, which is the unique identifier
 * for the file in Google Drive. The URL must be in the format:
 * `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`.
 *
 * @param {string} url - The Google Drive URL from which to extract the file ID.
 * @returns {string} The extracted file ID.
 * @throws {Error} Throws an error if the provided URL is not a valid string or if the file ID
 * cannot be extracted from the URL.
 *
 * @example
 * const url = 'https://drive.google.com/file/d/1CwGEerIO-bunXA0e_yXySEmKNuSECytW/view?usp=sharing';
 * const fileId = getFileIdFromUrl(url);
 * console.log(fileId); // Outputs: 1CwGEerIO-bunXA0e_yXySEmKNuSECytW
 */
export function getFileIdFromUrl(url) {
  if (!url || typeof url !== 'string') {
    throw new Error('A valid URL string must be provided.')
  }
  const regex = /\/d\/([a-zA-Z0-9_-]+)\//
  const match = url.match(regex)

  if (match && match[1]) {
    return match[1]
  } else {
    throw new Error('Could not extract the file ID from the provided URL.')
  }
}
