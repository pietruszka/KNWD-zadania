// Wykonane za pomocą RegExp i zamiany obiektu w string. Bez zapisu poprzedniego stanu.
// 0.57ms

const change = data => {
    return JSON.parse(JSON.stringify(data).replace(new RegExp('/temp', 'g'), '/upload'))
}
