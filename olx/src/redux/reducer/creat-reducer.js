const initialState = {
    user: null
}



const creatReducer = (state = initialState , action) =>{
    //get data
    switch(action.type){
        case "CREATE_USER":
            return {user: action.user}
        default : 
            return state
    }
}

export default creatReducer;