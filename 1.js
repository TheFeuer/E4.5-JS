const person = {
    gender: "man",
}

const user = Object.create(person);

user.city = "Moscow"

for (let key in user){
    if (user.hasOwnProperty(key)){
        console.log(key)
    }
}