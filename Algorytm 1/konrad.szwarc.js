// Wykonanie za pomocą rekurencji i reduce ES6.
// 1.12ms

const stack = [];
const fc = (arr, obj = {}) => arr.reduce((acc, curr, i) => {
    if (Array.isArray(obj[curr])) {
        acc[curr] = fc(obj[curr]);
    } else if (typeof curr === 'object') {
        acc[i] = fc(Object.keys(curr), curr)[0];
    } else if (String(obj[curr]).includes('/temp')) {
        stack.push(obj[curr]);
        acc[i] = {...obj, [curr]: '/uploads'}
    }
    return acc;
}, arr);
