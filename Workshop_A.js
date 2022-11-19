const user =  {
    name: "Kittinan",
    nickname: "Nun",
    hobby: "Gaming",
    address:{
        provice : "Bangkok",
        postcode : 10220
    }
}

const showData2 = () => {
    let info = '"My Nickname is '
    let info2 = 'my hobby is sleep '
    let info3 = 'and my postcode is '
    let info4 = '"'
    return `${info}${nickname} ${info2}${hobby} ${info3}${postcode}${info4}`;
}

const {name,nickname,hobby,address: {postcode} } = user

console.log(showData2())

