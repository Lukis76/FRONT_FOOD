import axios from 'axios'
import { BACKEND_FOOD } from '../../config'

export const updateRecipe = (data, id) => {
  axios
    .put(`${BACKEND_FOOD}details/${id}`, data)
    .catch((err) => console.error(err))
}