

const increment = () => {
    return {

        type: "INC",
        payload: 1

    }
}

const decrement = (Number) => {
    return {
        type: "DEC",
        payload: Number ? Number : 1
    }

}


const login = ()=> {
return {
type :"LOGIN",
}
}

const logout = () =>{

return {

    type:"LOGOUT",
}

}



export { increment, decrement , login , logout };