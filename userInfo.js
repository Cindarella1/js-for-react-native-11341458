import './arrayManipulation';


function createUserProfiles (stringsArray, formattedStringsArray) {
    let id = 1;
    const accounts = [];

    let i;
    for (i = 0; i < stringsArray.length; i++) {
        const account = {
            originalName: stringsArray[i],
            modifiedName: formattedStringsArray[i],
            id: id++
        };
        accounts.push(account);
    }
    
    return accounts;
}

modules.export = {
    createUserProfiles
}