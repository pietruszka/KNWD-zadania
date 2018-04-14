// Wykonanie za pomocą rekurencji.
// 0.96ms

let stack2 = [];
let change = data => {
    if(Array.isArray(data)) {
        return data.map(e => change(e));
    } else if (typeof data === 'object') {
        return data?Object.keys(data).map(e => data[e] = change(data[e])):data;
    } else if (typeof data === 'string') {
        return data.includes('/temp')
            ? stack2.push(data) && data.replace('/temp', '/uploads')
            : data;
    }
    return data;
};
