import httpClient from '../utilities/httpClient'

export const fetchRovers = (data) => {
  return httpClient.get(`/api/rovers/${data.rover_name}?date=${data.date}`)
};	


export default {
	fetchRovers
}