import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {actions as StateActions} from '../../redux/ducks/userState'
import {actions as DataActions} from '../../redux/ducks/fetchData'
import { bindActionCreators } from 'redux'
import { Button } from 'antd';

export const Home = (props) => {

    const[data, setData]=useState()

    useEffect(() => {
        if(props.apiData && props.apiData.error===false){
            setData(props.apiData.data)
        }
    }, [props.apiData])

    const HandleFetch=()=>{
        props.fetchData()
    }

    return (
        <div>
            <div>
                <input type="text" value={props.state.Name} onChange={(e)=>props.setState("Name", e.target.value)} placeholder={"Enter Name"} />
                <div>{props.state.Name}</div>
            </div>
            <div>
                <Button onClick={HandleFetch}>{props.apiData.isLoading?"Loading...":"Fetch Data"}</Button>
                {data &&
                <div>
                    {
                        data.map((e, index)=>(
                        <div key={index}>{e.name}</div>
                        ))
                    }
                </div>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state:state.userState,
    apiData:state.apiData
})

const mapDispatchToProps =(dispatch)=> ({
    ...bindActionCreators({
            ...StateActions, 
            ...DataActions,
          //ADD IF ITS FROM DIFFRENT ACTION FILE
      }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
