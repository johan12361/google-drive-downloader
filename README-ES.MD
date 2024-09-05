# Google Drive Downloader

`simple-googledrive-downloader` es una biblioteca para interactuar con archivos de Google Drive. Incluye funciones para descargar archivos de Google Drive y extraer IDs de archivos de URLs de Google Drive.

## Instalación

Para instalar la biblioteca, puedes usar npm:

```bash
npm install simple-googledrive-downloader
```

O con yarn:

```bash
yarn add simple-googledrive-downloader
```

## Uso

### `getFileIdFromUrl`

Extrae el ID del archivo de una URL de Google Drive.

#### Parámetros

- `url` (`string`): La URL de Google Drive de la que se debe extraer el ID del archivo.

#### Retorna

- `string`: El ID del archivo extraído.

#### Lanza

- `Error` si la URL proporcionada no es una cadena válida o si el ID del archivo no puede ser extraído de la URL.

#### Ejemplo

```javascript
import { getFileIdFromUrl } from 'google-drive-downloader'

const url = 'https://drive.google.com/file/d/1CwGEerIO-bunXA0e_yXySEmKNuSECytW/view?usp=sharing'
const fileId = getFileIdFromUrl(url)
console.log(fileId) // Muestra: 1CwGEerIO-bunXA0e_yXySEmKNuSECytW
```

### `downloadFile`

Descarga un archivo de Google Drive y lo guarda en el directorio especificado con el nombre de archivo y la extensión dados.

#### Parámetros

- `fileId` (`string`): El ID del archivo que se debe descargar de Google Drive.
- `dirPath` (`string`): La ruta del directorio donde se debe guardar el archivo.
- `filename` (`string`): El nombre base del archivo (sin incluir la extensión).
- `extension` (`string`): La extensión del archivo (por ejemplo, 'pdf', 'jpg').

#### Retorna

- `Promise<string | null>`: Una promesa que se resuelve con la ruta completa del archivo guardado en caso de éxito, o `null` si ocurre un error.

#### Lanza

- `Error` si los parámetros proporcionados son inválidos o si ocurre un error durante el proceso de descarga o guardado.

#### Ejemplo

```javascript
import { downloadFile } from 'google-drive-downloader'

const fileId = '1CwGEerIO-bunXA0e_yXySEmKNuSECytW'
const dirPath = './downloads'
const filename = 'myfile'
const extension = 'pdf'

downloadFile(fileId, dirPath, filename, extension)
  .then((filePath) => console.log(`Archivo descargado y guardado en: ${filePath}`))
  .catch((error) => console.error('Error en la descarga:', error))
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un problema o una solicitud de extracción en GitHub para discutir cualquier cambio o mejora.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE.md) para más detalles.
