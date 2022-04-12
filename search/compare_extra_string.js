const str1 = 'kxml'.split('');
const str2 = 'klxml'.split('');

const extra = {}

str2.forEach(c => {
    if(str1.includes(c) && !extra[c]) {
        extra[c] = 1;
    } else if(str1.includes(c) && extra[c]) {
        extra[c]++;
    }else if(!str1.includes(c) && !extra[c]) {
        extra[c] = 0;
    }
})

const findExtras = Object.values(extra).filter(v => v == 0 || v > 1)

const findExact = Object.keys(extra).find(k => extra[k] == findExtras[0])

console.log(findExact)