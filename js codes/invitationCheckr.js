
function checkInvite (guestList) {
     guestList = ["anuj","angela","anjali","shikha","bandana","abhishek"];
let checkGuest = guestList.includes(prompt("enter you name and check you are confirm you invitation!"));
if (checkGuest === true) {
    return alert("Welcome your are invited");
}else {
    return alert("sorry your name is not there please ask  the host");
}
}
checkInvite(guestList);