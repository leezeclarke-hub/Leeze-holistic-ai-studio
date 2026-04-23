import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf-8');

// Replace standard JSX comments
html = html.replace(/\{\/\*([\s\S]*?)\*\/\}/g, '<!--$1-->');

// Just in case there are some weird other artifacts let's double check class= replacement
// No other things stand out, just the comments.
fs.writeFileSync('index.html', html);
console.log('Fixed HTML comments');
