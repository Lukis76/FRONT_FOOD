import axios from 'axios'
import { BACKEND_FOOD } from '../../config'

export const postRecipe = (data) => {
  axios
    .post(`${BACKEND_FOOD}recipes`, data)
    .catch((err) => console.error(err))
}
