export default function ReducerAction(state,action){
    console.log("reducer block");
    switch(action.type){
case "ADD":
    return {count:state.count + action.payload}
    case "SUB":
        return{count:state.count- action.payload}
    
    default :
        return state
}
}