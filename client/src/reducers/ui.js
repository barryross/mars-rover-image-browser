export default (state = {loading:false}, action) => {
  switch (action.type) {
		case "LOADING":
		return {...state, loading:action.data}
   default:
    return state
   }
 }