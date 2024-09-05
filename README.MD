# Google Drive File Downloader

This project provides utility functions for interacting with Google Drive files. It includes functions to download files from Google Drive and extract file IDs from Google Drive URLs.

## Installation

To use these utilities in your Node.js project, follow these steps:

1. **Clone the repository** (if applicable):

   ```bash
   git clone https://github.com/your-username/google-drive-file-downloader.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd google-drive-file-downloader
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

## Functions

### `getFileIdFromUrl`

Extracts the file ID from a Google Drive URL.

#### Parameters

- `url` (`string`): The Google Drive URL from which to extract the file ID.

#### Returns

- `string`: The extracted file ID.

#### Throws

- `Error` if the provided URL is not a valid string or if the file ID cannot be extracted from the URL.

#### Example

```javascript
import { getFileIdFromUrl } from './path/to/your/module'

const url = 'https://drive.google.com/file/d/1CwGEerIO-bunXA0e_yXySEmKNuSECytW/view?usp=sharing'
const fileId = getFileIdFromUrl(url)
console.log(fileId) // Outputs: 1CwGEerIO-bunXA0e_yXySEmKNuSECytW

````

### `downloadFile`

Downloads a file from Google Drive and saves it to the specified directory with a given filename and extension.

#### Parameters

- `fileId` (`string`): The ID of the file to download from Google Drive.
- `dirPath` (`string`): The directory path where the file should be saved.
- `filename` (`string`): The base name of the file (excluding the extension).
- `extension` (`string`): The file extension (e.g., 'pdf', 'jpg').

#### Returns

- `Promise<string | null>`: A promise that resolves to the full path of the saved file on success, or `null` if an error occurs.

#### Throws

- `Error` if the provided parameters are invalid or if an error occurs during the download or save process.

#### Example

```javascript
import { downloadFile } from './path/to/your/module'

const fileId = '1CwGEerIO-bunXA0e_yXySEmKNuSECytW'
const dirPath = './downloads'
const filename = 'myfile'
const extension = 'pdf'

downloadFile(fileId, dirPath, filename, extension)
  .then((filePath) => console.log(`File downloaded and saved to: ${filePath}`))
  .catch((error) => console.error('Download failed:', error))
````


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


```

### Explanation:
- **Installation Instructions**: Guides users on how to set up the project.
- **Function Documentation**: Details on how to use `getFileIdFromUrl` and `downloadFile`, including parameters, return values, and example usage.
- **Dependencies**: Lists the dependencies required for the project.
- **License and Contact Information**: Provides information on licensing and how to contact you for support.

Feel free to customize it further based on your project's specifics.
```
