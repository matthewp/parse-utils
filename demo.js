import { parse } from './mod.js';

const html = '<!DOCTYPE html><html><head></head><body>Hi there!</body></html>';
const document = parse(html);

console.log(document.childNodes[1].tagName); //> 'html'