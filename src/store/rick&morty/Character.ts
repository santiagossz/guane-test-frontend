import axios from 'axios'
import { GetterTree, MutationTree, ActionTree } from "vuex"
import {RM} from '../../types/rm'


class State {
    character: RM= {id: 0,
        name: '',
        status: '',
        species: '',
        type: '',
        gender:'',
        origin:{name:'',url:''},
        location:{name:'',url:''},
        episode:[],
        url:'',
        created:''
}
}

const state=new State()


const mutations=<MutationTree<State>>{
    setCharacter:(state,allcharacters)=>state.character=allcharacters
}

const actions= <ActionTree<State, any>>{

    }


export default {
    state,mutations,actions
}
