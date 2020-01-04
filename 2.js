function emailValidity(email){
    if((email.search(/@gmail.com/i) > 0) && (email.search(/[0-9]/g) == 0) ){
        return true;
    }
    return false;
}


function passwordValidity(pass){
    if(pass.length == 9){
        if(((pass.match(/[\W_]/g).length == 2) && (pass.match(/[0-9]/g).length ==2)) && (pass.match(/[a-zA-Z]/g).length == 5)){
            return true;
        }
    }
    return false;
}

console.log(emailValidity('3budiganteng@gmail.com'));
console.log(passwordValidity('a22dasd_!'));