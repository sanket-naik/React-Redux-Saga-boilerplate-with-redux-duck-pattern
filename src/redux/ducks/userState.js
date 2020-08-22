
export const types={
    SET_STATE:'STATE/SET_STATE',
}

export const initialState = {
    Name:"",
  }


  export default (state = initialState, action) => {
    switch (action.type) {
      case types.SET_STATE:
            return { ...state,
                        [action.name]:action.value,
                    }
      default:
        return state
    }
  }

  export const actions={
      setState:(name, value)=>({type:types.SET_STATE, name, value}),
  }
