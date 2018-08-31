interface ObjI {
  [key: string]: any;
}

const fs: ObjI = jest.genMockFromModule('fs')

// This is a custom function that our tests can use during setup to specify
// what the files on the "mock" filesystem should look like when any of the
// `fs` APIs are used.
let mockFiles: ObjI = {}
function __setMockFiles(newMockFiles) {
  mockFiles = newMockFiles
}

// A custom version of `readdirSync` that reads from the special mocked out
// file list set via __setMockFiles
function readFileSync(filePath, _options) {
  return mockFiles[filePath] || []
}

fs.__setMockFiles = __setMockFiles
fs.readFileSync = readFileSync

export default fs