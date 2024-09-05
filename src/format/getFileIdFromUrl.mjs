export function getFileIdFromUrl(url) {
  const regex = /\/d\/([a-zA-Z0-9_-]+)\//
  const match = url.match(regex)

  if (match && match[1]) {
    return match[1]
  } else {
    console.error('No valid ID found in the URL.')
    return null
  }
}
