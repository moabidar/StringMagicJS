// Function 1 : String Reversale
function reverseString(str){
    return str.split('').reverse().join('');
}

// Function 2 : subString extraction
function extractSubstring(str, start, end){
    return str.substring(start, end);
}

// Function : Character count
function countCharacters(str){
    return str.length;
}

// Function 4 : String Reversale
function convertCase(str, type){
    if(type==='uppercase'){
        return str.toUpperCase();
    }else if (type==='lowercase'){
        return str.toLowerCase();
    }else {
        return 'Invalid type';
    }
}

// Function 5 : string trimming
function trimString(str){
    return str.trim();
}

module.exports = {
    reverseString,
    extractSubstring,
    countCharacters,
    convertCase,
    trimString
}

