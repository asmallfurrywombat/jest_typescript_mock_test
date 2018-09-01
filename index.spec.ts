import { returnNameInJsonFile, actuallyReadExistingFile } from './index';
import * as fs from 'fs';

const MOCK_FILE_INFO = { 'test.json': JSON.stringify({ name: 'myname' }) };

describe('index', () => {
  it('returnNameInJsonFile', () => {
    const mock = jest.spyOn(fs, 'readFileSync');
    mock.mockImplementation((fpath, opts) => {
      if(fpath in MOCK_FILE_INFO){
        return MOCK_FILE_INFO[fpath]
      }
      throw 'unexpected fpath'
    });
    const name: string = returnNameInJsonFile('test.json');
    expect(name).toBe('myname');
    mock.mockRestore()
  });

  it('actuallyReadExistingFile', () => {
    const name: string = actuallyReadExistingFile();
    expect(name).toBe('jest_typescript_mock_test');
  });

  // doesn't work
  // afterEach(() => {
  //   jest.clearAllMocks();
  // });
});
