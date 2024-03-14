const redux=require('redux')
const creareStore=redux.createStore
const bindActionCreators=redux.bindActionCreators
const applyMiddleware=redux.applyMiddleware
const reduxLogger=require('redux-logger')
const logger=reduxLogger.createLogger()

const combineReducers=redux.combineReducers
const CAKE_ORDERED='CAKE_ORDERED'
const CAKE_RESTOCKED='CAKE_RESTOCKED'
const ICECREAM_ORDERED='ICECREAM_ORDERED'
const ICECREAM_RESTOCKED='ICECREAM_RESTOCKED'

function orderCake(){
    return {
        type:CAKE_ORDERED,
        quantity:1,
    }
}

function restockCake(qty=1){
    return {
        type:CAKE_RESTOCKED,
        payload:qty
    } 
}

function orderIcecream(){
    return {
        type:ICECREAM_ORDERED,
        payload:1,
    }
}

function restockIcecream(qty=1){
    return {
        type:ICECREAM_RESTOCKED,
        payload:qty,
    }
}

// const initState={
//     numOfCakes:10,
//     numofIceCream:20
// }

const cakeState={
    numOfCakes:10
}

const iceCreamState={
    numofIceCream:20
}

const cakeReducer=(state=cakeState,action)=>{
switch(action.type) {
    case CAKE_ORDERED :
    return {
        ...state,
        numOfCakes:state.numOfCakes-1
    }

    case CAKE_RESTOCKED: 
    return {
        ...state,
        numOfCakes:state.numOfCakes + action.payload
    }

    default :
    return state
}
}

const iceCreamReducer=(state=iceCreamState,action)=>{
    switch(action.type) {    
        case ICECREAM_ORDERED:
        return {
            ...state,
            numofIceCream:state.numofIceCream - action.payload
    
        }
    
        case ICECREAM_RESTOCKED :
            return {
              ...state,
              numofIceCream:state.numofIceCream + action.payload
            }
    
        default :
        return state
    }
    }

    const rootreducer=combineReducers({
        cake:cakeReducer,
        iceCream:iceCreamReducer
    })

// const store=creareStore(rootreducer);
const store=creareStore(rootreducer,applyMiddleware(logger))

console.log('Intial State',store.getState());

const unsubscribe=store.subscribe(()=>{
    // console.log('updated store',store.getState());
})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

const action=bindActionCreators({orderCake,restockCake,orderIcecream,restockIcecream},store.dispatch);
action.orderCake()
action.orderCake()
action.orderCake()
action.restockCake(3)

// action for ice cream

action.orderIcecream()
action.orderIcecream()
action.orderIcecream()
action.restockIcecream(3);



unsubscribe()