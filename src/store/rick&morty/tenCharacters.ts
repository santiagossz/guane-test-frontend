import axios from 'axios'
import { GetterTree, MutationTree, ActionTree } from "vuex"
import Character from './Character';
import {RM} from '../../types/rm'


class State {
    tenCharacters: RM[] = [];
}
const state=new State()


const mutations=<MutationTree<State>>{
    setTenCharacters:(state,tenCharacters)=>state.tenCharacters=tenCharacters
}

const actions= <ActionTree<State, any>>{
    //add filter
    async getTenCharacters({commit},page){
        const req = await axios.get('https://rickandmortyapi.com/api/character',{params:{page:page}}).catch(function (error) {
            return error;
          });
        const data =await req.data.results
        commit ('setTenCharacters',data)
        console.log(data)
    },
}

export default {
    state,mutations,actions,
    module:{
        character:Character
    }
}

