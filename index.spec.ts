import { returnNameInJsonFile } from './index';
import fs from './__mocks__/fs';

jest.mock('fs');

describe('index', () => {
  const fpath = 'test.json';
  const MOCK_FILE_INFO = { 'test.json': JSON.stringify({ name: 'myname' }) };

  beforeEach(() => {
    fs.__setMockFiles(MOCK_FILE_INFO);
  });

  it('returnNameInJsonFile', () => {
    const name: string = returnNameInJsonFile('test.json');
    expect(name).toBe('myname'); // 1.0.0 is installed and 2.0.0 is available
  });
});
