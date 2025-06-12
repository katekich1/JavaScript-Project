function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize('jAVASCRIPT')); 
console.log(capitalize('hello world')); 