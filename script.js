const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","d","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "8","~","`","!","@","$","%","&","*","(",")","-","_",";",":","<",">","?",  "/",]

let length = 15;
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")


function passGenertor(length) {
    let password = ""
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex];
    }
    return password; 
}

function onclick2 () {
    const newPassword = passGenertor(length);
    const newPassword1 = passGenertor(length);
    password1.textContent = "1st Password:- "+newPassword;
    password2.textContent = "2nd Password:- "+newPassword1;
}
