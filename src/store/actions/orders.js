import * as actionType from "../actions/actionTypes"
import axios from "axios"
export const purchaseBurgerSuccess=(id,order)=>{
    return{
        type:actionType.PURCHASE_BURGER_SUCCESS,
        id:id,
        order:order
    }
}

export const purchaseBurgerFail=(error)=>{
    console.log(error)
    return{
        type:actionType.PURCHASE_BURGER_FAIL,
        error:error
    }
}

export const isPurchasedComplete=()=>{
    return{
        type:actionType.PURCHASE_BURGER_FINISHED,

    }
}

export const purchaseBurger=()=>{
    return {
        type:actionType.PURCHASE_BURGER_START
    }
}

export const purchaseBurgerStart=(order)=>{
    console.log("Started")
    return dispatch=>{
        dispatch(purchaseBurger())
        axios.post( 'https://react-burger-161a2.firebaseio.com/orders.json', order )
            .then( response => {
                dispatch(purchaseBurgerSuccess(response.data,order))
                console.log(response.data+"ResponseData")   
            } )
            
            .catch( error => {
                dispatch(purchaseBurgerFail(error))
            } );
    }
}
export const purchaseInit = () => {
    return {
        type: actionType.PURCHASE_BURGER_FINISHED
    };
};

export const fetchOrdersSuccess = ( orders ) => {
    return {
        type: actionType.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = ( error ) => {
    return {
        type: actionType.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionType.FETCH_ORDERS_START
    };
};

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        axios.get( 'https://react-burger-161a2.firebaseio.com/orders.json' )
            .then( res => {
                const fetchedOrders = [];
                for ( let key in res.data ) {
                    fetchedOrders.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            } )
            .catch( err => {
                dispatch(fetchOrdersFail(err));
            } );
    };
};