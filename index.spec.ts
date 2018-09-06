import { returnNameInJsonFile } from './index';

jest.mock('fs')

describe('index', () => {
  const MOCK_FILE_INFO = { 'test.json': JSON.stringify({ name: 'myname' }) };

  beforeEach(() => {
    require('fs').__setMockFiles(MOCK_FILE_INFO);
  });

  it('returnNameInJsonFile', () => {
    const name: string = returnNameInJsonFile('test.json');
    expect(name).toBe('myname');
  });
});
