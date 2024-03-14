const store=require('./app/store');

const cakeActions=require('./features/cake/cakeslice').cakeActions

const creamActions=require('./features/iceCream/cream').creamActions
const fetchUser=require('./features/users/user').fetchUser
console.log('Intial state',store.getState());

const unsubscribe=store.subscribe(()=>{
    console.log('Updated State',store.getState());
});

store.dispatch(fetchUser())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())

// store.dispatch(cakeActions.restocked(3))

// store.dispatch(creamActions.ordered())
// store.dispatch(creamActions.ordered())
// store.dispatch(creamActions.restocked(2))



// unsubscribe();