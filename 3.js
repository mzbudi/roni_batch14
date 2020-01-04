function validateColor(color){
    if (color.length == 4 || color.length == 7) {
        if(color.charAt(0) == '#'){
            for (let index = 1; index < color.length; index++) {
                if(!((color.charCodeAt(index) >= 48 && color.charCodeAt(index) <= 57) || (color.charCodeAt(index) >= 65 && color.charCodeAt(index) <= 70) || (color.charCodeAt(index) >= 97 && color.charCodeAt(index) <= 102))){
                    return 'Format Code Hexadesimal Salah';
                }
            }
            return 'Format Code Hexadesimal Benar';
        }
    }
    return 'Format Code Hexadesimal Salah';
}

console.log(validateColor('#110fff'));


