const fs = jest.genMockFromModule('fs')

let mockFiles: object = {}

function __setMockFiles(newMockFiles) {
  mockFiles = newMockFiles
}

function readFileSync(filePath, _opts) {
  return mockFiles[filePath] || ''
}

(fs as any).__setMockFiles = __setMockFiles;
(fs as any).readFileSync = readFileSync;

module.exports = fs
