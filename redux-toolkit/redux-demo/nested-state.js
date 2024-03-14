const redux=require('redux')
const {produce} =require('immer')

const initialState={
    name:'ANfas',
    address:{
        street:'123 main st',
        city:'Boston',
        state:'KL'
    }
}

const STREET_UPDATE='STREET_UPDATE'

const updateStreet=(street)=>{
return {
    type:STREET_UPDATE,
    payload:street
}
}

const reducer=(state=initialState,action)=>{
switch(action.type){
    case STREET_UPDATE :
        // return {
        //     ...state,
        //     address:{
        //         ...state.address,
        //         street:action.payload

        //     }
        // }

        return produce(state,(draft)=>{
            draft.address.street=action.payload
        })

        default :
        return   state
           
        
}
}

const store=redux.createStore(reducer)

console.log('Intial State',store.getState());

const unsubscribe=store.subscribe(()=>{
    console.log('updated state',store.getState());
})

store.dispatch(updateStreet('456 Main ST'));

unsubscribe();