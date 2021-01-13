const localList = require('./lang.json').words;
const list = Array.prototype.concat.apply(localList)

export const isProfane = (string) => {
    return list
        .filter((word) => {
            const wordExp = new RegExp(`\\b${word.replace(/(\W)/g, '\\$1')}\\b`, 'gi');
            return wordExp.test(string);
        })
}

