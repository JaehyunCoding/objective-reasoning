// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin (user){
    if (user.userRole === "ADMIN"){
        return true
    }   else {
        return false
    }
}

function getEmail (user){
    let firstName = user.firstName.toLowerCase()
    let lastName = user.lastName.toLowerCase()
    return firstName + "." + lastName + "@codeimmersives.com"
}

function getPlaylistLength (playlist) {
    return playlist.songs.length
}

function getHardestHomework (homeworkArray) {
    let x = ""
    if(homeworkArray.length === 0){
        return x
    }   
    let lowestHw = homeworkArray[0]

    for(let i = 0; i < homeworkArray.length; i++){
        if(homeworkArray[i].averageScore < lowestHw.averageScore){
            lowestHw = homeworkArray[i];
        }
    }

    return lowestHw.name;
}

function createPhonebook (names, numbers){
    let phonebook = {}
    for (let i = 0; i < names.length; i++){
        phonebook[names[i]] = numbers[i]
    }
    return phonebook
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};