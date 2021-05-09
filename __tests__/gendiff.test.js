import genDiff from '../src/utils/gendiff.js';
import getFilesData from '../src/utils/getfilesdata.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
console.log(getFixturePath('file1.json'));
console.log(getFixturePath('file2.json'));