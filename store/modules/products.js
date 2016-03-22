import {
    CHANGE_QTY,
    INCREMENT_QTY,
    DECREMENT_QTY,
    CHECKED_ITEM
}  from '../mutation-types'

export const productsMutations = {
    [CHANGE_QTY](state , index , value){
        state.products[index]['qty'] = value
    },
    [INCREMENT_QTY](state , index){
        state.products[index]['qty'] += 1
    },
    [DECREMENT_QTY](state , index){
        state.products[index]['qty'] += 1
    },
    [CHECKED_ITEM](state , index , value){
        state.products[index]['checked'] = value
    }
}