const rovers =  (state = [], action) => {
  switch (action.type) {
	 case "GET_CURIOSITY_SUCCESS":
	  return action.response.data.response.photos
	 case "GET_OPPORTUNITY_SUCCESS":
	  return action.response.data.response.photos
	 case "GET_SPIRIT_SUCCESS":
	  return action.response.data.response.photos
   default:
    return state
   }
 }

 export default rovers