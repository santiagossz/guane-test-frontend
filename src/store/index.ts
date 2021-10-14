import { createStore } from 'vuex'
import tenCharacters from './rick&morty/tenCharacters'

export default createStore({
  modules:{
    tenCharacters:tenCharacters,
    character:tenCharacters.module.character
}})
