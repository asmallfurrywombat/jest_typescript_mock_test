import { readFileSync } from 'fs';

export function returnNameInJsonFile(fpath: string) {
  const data = readFileSync(fpath, 'utf8');
  const jdata = JSON.parse(data);
  return jdata.name;
}
