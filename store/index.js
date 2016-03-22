import Vue from 'vue'
import Vuex from '../src'
import * as actions from './actions'
import {data} from '../data/cartinfo'
import {productsMutations} from './modules/products'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state:{
        products: data.data,
    },
    actions,
    mutations:productsMutations,
    middlewares: debug ? [Vuex.createLogger()] : []
})