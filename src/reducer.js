export const initialState = {
    basket:[],
    user:null,
    userDetails:{}
}

const reducer = (state,action) =>{
    console.log("actiontype>>>",action.type)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item]
            }

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id===action.id
            );
            let newBasket=[...state.basket];
            if(index>=0){
                newBasket.splice(index,1)
            }
            else{
                console.warn(`Cant remove (id:${action.id}`)
            }
            return{
                ...state,
                basket:newBasket
            }
        
        case 'EMPTY_BASKET':
            return{
                ...state,
                basket:[]
            }

        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }

        case 'USER_DETAILS':
            return{
                ...state,
                userDetails:action.item
            }
        
        default:
            return state;
    }
    
    
} 

export default reducer;
