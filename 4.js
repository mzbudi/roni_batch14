function palindrom(words){
    let pali = words.match(/[a-zA-Z]/g);
    let ctrue = 0;
    let cfalse = 0
        if(pali.length % 2 != 0){
            let mid = (pali.length - 1) / 2
            let counter = pali.length -1;
            for (let index = 0; index < mid; index++) {
                if(!(pali[index].toLowerCase() == pali[counter].toLowerCase())){
                    return 'Bukan Palindrom';
                }
                counter--;
            }
        }else{
            return 'Bukan Palindrom';
        }
        pali.forEach(character => {
            if (character == character.toUpperCase()){
                ctrue += 1;
            }else{
                cfalse +=1;
            }
        });

        if (((ctrue == 1) && (cfalse == pali.length-1))) {
            return "Palindrom Kapital";
        }else if(((ctrue == pali.length-1) && (cfalse == 1))){
            return "Palindrom Kecil";
        }else if(((ctrue == pali.length) || (cfalse == pali.length))){
            return "Palindrom Murni";
        }else{
            return "Palindrom Mix";
        }
    return "Bukan Palindrom";
}

console.log(palindrom('MAL12Am'));