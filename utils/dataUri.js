import DataUriParser from 'datauri/parser.js';
import  path  from 'path';

const getDatauri = (file)=>{

    const parser = new DataUriParser();
    const extName = path.extname(file.originalName).toString();

    return parser.format(extName, file.buffer);
};

export default getDatauri;