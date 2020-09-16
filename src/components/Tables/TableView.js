import React, { useState, useEffect } from 'react'
import './table.css'
import { CloseOutlined } from '@ant-design/icons';

class Mail extends React.Component {
 click=()=> {
    this.props.onClick({
      index: this.props.index,
      data:this.props.data
    });
  }

  render() {
    return(
      <div className={`mail${(this.props.selectedIndex === this.props.index) ? " active" : ""}`} onClick={ ()=>this.click(this.props.index, this.props.data) }>
        <p className="mail-title">{ this.props.name}</p>
        <div className="mail-infobox">
          <span className="mail-auth">{ this.props.phone}</span>
          <span className="mail-date">{ this.props.cell}</span>
        </div>
      </div>
    );
  }
}

class Mails extends React.Component {
  render() {
    return(
      <div className="window mails">
        {
          (this.props.data.length) ?
            this.props.data.map((data, index) => {
              return(
                <Mail
                  key={ index }
                  index={ index }
                  onClick={this.props.onClick}
                  selectedIndex={this.props.selectedIndex}
                  data={data}
                  name={ `${data.name.first} ${data.name.last}` }
                  phone={ data.phone } //add status
                  cell={data.cell} //plan price here
                />
              );
            })
          :
          <p className="alertion">Something will be displayed here</p>
        }
      </div>
    );
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      render: false,
      index: null,
      title: "",
      auth: "",
      date: "",
      content:""
    }
  }

  componentWillReceiveProps(newProps) { // unsafe lc method [Strict-Mode-Alert]
    console.log("====",newProps)
    let a = newProps.selected;
    if(a === undefined) {
      this.setState({
        render: false
      });
    } else {
      this.setState({
        render:true,
        cell: a.cell,
        email: a.email,
        gender: a.gender,
        // name: a.name.title,
      });
    }
  }

  render() {
    if(this.state.render) {
      return(
        <div className="window display">
          <div className="display-header">
            <div>
              <h5>{ this.state.gender }</h5>
              {/* {
                (this.props.activeTopic !== "trashbin") ?
                  <div
                    key="A"
                    className="display-header-remove"
                    onClick={ () => this.props.onDelete(this.state.index) }
                    >
                    <i className="fas fa-trash-alt"></i>
                  </div>
                : */}
                  <div style={{cursor:'pointer'}} onClick={()=>this.props.closeView()}>
                    <CloseOutlined />
                  </div>
              {/* } */}
            </div>
            <div>
              <span>{ this.state.cell }</span>
              <span>{ this.state.email }</span>
            </div>
          </div>
          <div className="display-display">
            {/* <p className="display-content">Main contents here.....</p> */}
            <img width="100%" src="https://res.cloudinary.com/onsurity/image/upload/v1600265307/OnSurity/OnsurityAssets/008-unforgettable-free-invoice-template-pdf-download-high-resolution-1920_2717_qc8rt1.jpg"/>
          </div>
        </div>
      );
    } else {
      return(
        <div className="window display">
          <p className="alertion">A letter will be displayed here</p>
        </div>
      );
    }
  }
}

export const TableView =(props)=> {

    const[state, setState]=useState({
        editMode: false,
        listening: undefined,
        queryName: "inbox",

        sent: [],
        drafts: [],
        trashbin: [],

        data:props.dataSource,
        selected:'',
        selectedIndex:''
    })

    useEffect(() => {
        setState({...state,
            selected:props.selected,
            selectedIndex:props.selected.index})
    }, [props.selected])


  const renderLetter = data => {
    setState({
        ...state,
      listening: data
    });
  }

  const HandleListClick=(data)=>{
    setState({...state,
        selected:data.data,
        selectedIndex:data.index})
  }

    return(
      <div className="AppC">
        <Mails
          onRequest={ renderLetter }
          data={state.data}
          selectedIndex={state.selectedIndex}
          onClick={HandleListClick}
        />
        <Display
          closeView={()=>props.closeView()}
          selected={ state.selected }
          onDelete={ ()=>alert("delete clicked") }
        />
      </div>
    );
}