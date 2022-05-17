import { API_KEY, BASE_URL } from './baseApi'
import axios from 'axios'

const getDataApi = {
	getDataSlider: function(urlKey, type) {
		return axios.get(BASE_URL + `/${type}/` + urlKey + '?api_key=' + API_KEY)
	},
	getDataHero: function() {
		return axios.get(BASE_URL + '/movie/now_playing?api_key=' + API_KEY)
	}
}

export { getDataApi }