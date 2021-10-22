import axios from "axios";
import { MutationTree, ActionTree } from "vuex";
import { RM } from "../types/rm";

import { createStore } from 'vuex'


class State {
  page: any = 1;
  info: any = {};
  tenCharacters: RM[] = [];
  character: any = {};
  species:any=''
}
const state = new State();

const mutations = <MutationTree<State>>{
  setInfo: (state, info) => (state.info = info),
  setTenCharacters: (state, tenCharacters) =>
    (state.tenCharacters = tenCharacters),
  setCharacter: (state, character) => (state.character = character),
  setSpecies: (state, species) => (state.species = species),


};

const actions = <ActionTree<State, any>>{
  async getCharacters({ commit }, { page, id }) {
    const req_page =
      page % 2 != 0 ? Math.ceil(page / 2) : Math.ceil((page - 1) / 2);
    const req = await axios
      .get("https://rickandmortyapi.com/api/character", {
        params: { page: req_page },
      })
      .catch(function (error) {
        return error;
      });
    const data = await req.data;
    commit("setInfo",data.info);

    const new_data = data.results.map((i: any) => Object.assign(i, { 'front': true }))
    page % 2 != 0
      ? commit("setTenCharacters", new_data.slice(0, 10))
      : commit("setTenCharacters", new_data.slice(10));
    id ? commit("setCharacter", state.tenCharacters.slice(id % 10 - 1)[0]) : null

    
    const verify=(specie:string)=>{return(state.character.species==specie)}
    const specie=verify('Human')?'user':verify('Alien')?'dragon':verify('Humanoid')?'user-secret':
    verify('Poopybutthole')?'poo':verify('Mythological Creature')?'horse-head':'question'
    commit("setSpecies", specie)
    
  },
};
export default createStore({
  state,
  mutations,
  actions,
})

