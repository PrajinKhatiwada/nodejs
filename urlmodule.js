import url from 'url';
const myurl=new URL('https://example.org:8000');
myurl.pathname='/a/b/c';
myurl.search='?d=e';
myurl.hash='#fgh';

console.log(myurl)
console.log(myurl.href)