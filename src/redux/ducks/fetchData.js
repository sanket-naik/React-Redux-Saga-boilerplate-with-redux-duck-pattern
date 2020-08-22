export const types={
    FETCH_DATA:'GST/FETCH_DATA',
    FETCH_DATA_SUCCESS:'GST/FETCH_DATA_SUCCESS',
    FETCH_DATA_FAIL:'GST/FETCH_DATA_FAIL'
}

export const initialState = {
    data:null,
    isLoading: false,
    error: null
  }

  export default (state = initialState, action) => {
    switch (action.type) {
      case types.FETCH_DATA:
            return { ...state, isLoading:true, data: null}

      case types.FETCH_DATA_SUCCESS:
            return { ...state, isLoading:false, error:false, data:action.data}

      case types.FETCH_DATA_FAIL:
            return { ...state, isLoading:false, error:true, data:action.data}

      default:
        return state
    }
  }

  export const actions={
      fetchData:()=>({type:types.FETCH_DATA})
  }
