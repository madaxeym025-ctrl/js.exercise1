
function getUserData (callback){
    setTimeout(() => {
    const user = {id:5, name:"maxamed"}
    callback (user)
}, 2000);
}

console.log("hada dawac")

getUserData(function(user){
    console.log(user)
})

console.log("after user")