const toLower = function(value) {
    return value.toLowerCase();
}
const toUpper = function(value) {
    return value.toUpperCase();
}

function checked(currentValue, value){
    if (currentValue==value){
        return "checked";
    }
    else{
        return "";
    }
}

function printError(errors, campo){
    let message;
    if (typeof errors !== "undefined"){
        errors.errors.forEach(error => {
            if(error.path === campo){
                message = error.message;
            }
        });
    }   

    return message;    

}

module.exports = { toLower, toUpper, checked, printError};


