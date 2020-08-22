import { combineReducers } from 'redux'
import userState from './userState'
import apiData from './fetchData'

const appReducer= combineReducers({
    userState,
    apiData
})

export default appReducer


//WHITELIST WHAT TO PERSIST (INCLUDE THE REDUCER FORM COMBINED REDUCER )
export const whitelisted=[
    "userState"
]
