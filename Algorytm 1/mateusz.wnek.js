// Wykonane za pomocą RegExp i zamiany obiektu w string.
// 0.9ms

const change = wejscie => {
    var wyjscie = ``
    var myRegexp = /"([^"]*)"/g;
    var arr = [];

    do {
        var match = myRegexp.exec(wejscie);
        if (match != null)
        {
            arr.push(match[1] ? match[1] : match[0]);
        }
    } while (match != null);
    var arr1 = '';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].includes("/temp") == true){
            arr1=arr1 + " " +arr[i];
        }
    }
    wyjscie = wejscie.replace(/temp/g, 'upload');
    return {wyjscie, arr1};
}


