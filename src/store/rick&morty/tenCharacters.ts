import axios from "axios";
import { GetterTree, MutationTree, ActionTree } from "vuex";
import Character from "./Character";
import { RM } from "../../types/rm";

class State {
  page:any=1;
  info: any = {};
  tenCharacters: RM[] = [];
}
const state = new State();

const mutations = <MutationTree<State>>{
  setInfo: (state, info) => (state.info = info),
  setShow: (state, show) => (state.info = show),

  setTenCharacters: (state, tenCharacters) =>
    (state.tenCharacters = tenCharacters),
};

const actions = <ActionTree<State, any>>{
  async getTenCharacters({ commit }, page) {
    const req_page =
      page % 2 != 0 ? Math.ceil(page / 2) : Math.ceil((page - 1) / 2);
    const req = await axios
      .get("https://rickandmortyapi.com/api/character", {
        params: { page: req_page },
      })
      .catch(function(error) {
        return error;
      });
    const data = await req.data;
    const new_data={'results':data.results.map((i:any)=>Object.assign(i,{'front':true}))}
    commit("setInfo", Object.assign(data.info,new_data));
    console.log(state.info.count)
    page % 2 != 0
      ? commit("setTenCharacters", state.info.results.slice(0, 10))
      : commit("setTenCharacters", state.info.results.slice(10));
  },
};

export default {
  state,
  mutations,
  actions,
  module: {
    character: Character,
  },
};
