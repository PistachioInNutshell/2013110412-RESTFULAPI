const user =  [
    {nickname: "Nite",hobby: "sleep", postcode : 10220},
    {nickname: "Nit",hobby: "eat", postcode : 10221},
    {nickname: "Noi",hobby: "walk", postcode : 10222}
]

for (const u of user){
    const showData2 = () => {
        let info = '"My Nickname is '
        let info2 = 'my hobby is sleep '
        let info3 = 'and my postcode is '
        let info4 = '"'
        return `${info}${u.nickname} ${info2}${u.hobby} ${info3}${u.postcode}${info4}`;
    }
    console.log(showData2())
}