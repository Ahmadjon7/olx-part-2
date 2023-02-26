const initialState = {
    likeProducts : []
}

const likeReducer = (state = initialState , action) => {

    switch(action.type){
        case "LIKE_PRODUCT":
            return{
                likeProducts: [...state.likeProducts, action.product]
            }
            default:
                return state
    }
}

export default likeReducer;                                                      