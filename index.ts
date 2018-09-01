import { readFileSync } from 'fs';
import {join} from 'path'

export function returnNameInJsonFile(fpath: string): string {
  const data = readFileSync(fpath, 'utf8');
  const jdata = JSON.parse(data);
  return jdata.name;
}

export function actuallyReadExistingFile(): string {
  const fpath = join(__dirname, '/package.json')
  const data = readFileSync(fpath, 'utf8');
  const jdata = JSON.parse(data);
  return jdata.name;
}