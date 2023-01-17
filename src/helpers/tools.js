
 export function turkishToEnglish (string){
     var letters = {'3':'ucuncu-', "İ": "i", "I": "i", "Ş": "s", "Ğ": "g", "Ü": "u", "Ö": "o", "Ç": "c", 'ş':'s','ü':'u'};
     string = string.replace(/(([3İIŞĞÜÇÖıöüğçş]))+/g, function(letter){ return letters[letter]; })
    string =string.toLowerCase();
    string=string.replaceAll(/[\s\.]/g, '');
    return string;

}

export function replaceSpace(string){
    string=string.replaceAll(/[\s\.]/g, '');
    return string;
}



