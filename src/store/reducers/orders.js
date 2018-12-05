import * as actionTypes from "../actions/actionTypes"

const initialState={
    orders:[],
    loading:false,
    purchased:false

}

const reducer = (state=initialState,action)=>{
   switch(action.type){
       case actionTypes.PURCHASE_BURGER_SUCCESS:
       let updatedOrders = {
           ...action.orders,
           id:action.id
       }
        return{
            ...state,
            loading:false,
            orders:updatedOrders,
            purchased:true
           // orders:state.orders.concat(updatedOrders)
        }

        case actionTypes.PURCHASE_BURGER_FAIL:
        return{
            ...state,
            loading:false
        }

        case actionTypes.PURCHASE_BURGER_START:
        return{
            ...state,
            loading:true
        }

        case actionTypes.PURCHASE_BURGER_FINISHED:
        return{
            ...state,
            purchased:false
        }

        case actionTypes.FETCH_ORDERS_SUCCESS:
        console.log("Success",action.orders)
        return{
            ...state,
            orders:action.orders,
            loading:false
        }

        case actionTypes.FETCH_ORDERS_START:
        return{
            ...state,
            loading:true
        }

        case actionTypes.FETCH_ORDERS_FAIL:
        return{
            ...state,
            loading:false
        }

        default :
        return{
            state
        }
   }
}
export default reducer;