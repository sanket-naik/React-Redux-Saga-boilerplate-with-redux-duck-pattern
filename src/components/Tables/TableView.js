import React from 'react'
import './table.css'



// Import default letters

const letters = [
    {
      title: "Sampler",
      auth: "Oles Odynets",
      date: "23/04/2017",
      content: "Sample letter...",
      root: "in"
    },
    {
      title: "Restore your password",
      auth: "Codepen",
      date: "24/04/2017",
      content: "Hi, User!",
      root: "in"
    },
    {
      title: "Interesting text",
      auth: "Oles Odynets",
      date: "23/73/2018",
      content: "IT IS A DYMMI TEKST! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis efficitur urna quis cursus. Mauris nec sem pharetra, iaculis tortor sed, interdum eros. Nunc efficitur semper justo quis viverra. Etiam metus eros, finibus vitae odio in, rutrum viverra urna. Aliquam pulvinar aliquam urna, sodales commodo mi maximus et. Integer in feugiat mi. Sed orci turpis, volutpat suscipit magna at, ornare bibendum mi.Aliquam euismod ut lacus eget faucibus. Duis tincidunt est vestibulum ex accumsan lacinia. Sed aliquet porta enim, nec condimentum tellus dictum ac. Duis quis ligula ac massa posuere bibendum. Curabitur ultricies consequat mauris quis interdum. Fusce at feugiat nisl, vitae sodales lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum in pretium libero, in suscipit ante. Suspendisse tortor urna, vestibulum at metus eget,convallisaliquamnulla.Vivamus elit justo, tincidunt in leo ut, condimentum consequat tellus. Phasellus ut maximus odio, et dignissim elit. Aenean et commodo dui, sit amet pulvinar nisl. Duis feugiat quis enim eu consequat.Nam quis condimentum lacus. Pellentesque sit amet ex felis. Cras ultrices bibendum metus ac pretium. Morbi id eleifend quam. Quisque sed aliquam lacus. Nulla facilisi. Phasellus leo massa, ornare nec pellentesque sed, tincidunt a leo. Donec tortor velit, lacinia a nibh sit amet, placerat accumsan lectus. Nunc convallis, ex varius molestie rutrum, enim lectus tristique lorem, sit amet dignissim felis velit non dui. Curabitur id nisi vitae dui tempor rhoncus. Nulla fermentum cursus dolor, finibus neque aliquam vel. Praesent varius ipsum turpis, eget convallis sapien.",
      root: "in"
    },
    {
      title: "Ohhh",
      auth: "Oles Odynets",
      date: "48/12/2018",
      content: "So many letters",
      root: "in"
    },
    {
      title: "O, jag kan skriva på svenska",
      auth: "Oles Odynets",
      date: "12/04/2018",
      content: "Pratar du svenska eller du är english boy? Sweadish very good",
      root: "in"
    },
    {
      title: "Does you likes coffess to yours beds?",
      auth: "My Computer",
      date: "32/04/2004",
      content: "No, I didn't (english 11/10)",
      root: "in"
    }
  ];

// App



class Mail extends React.Component {
  submit() {
    this.props.onOpen({
      index: this.props.index,
      title: this.props.title,
      content: this.props.content,
      auth: this.props.auth,
      date: this.props.date,
      root: this.props.root
    });
  }

  render() {
    return(
      <div className={ `mail${(this.props.activeID === this.props.index) ? " active" : ""}` } onClick={ this.submit.bind(this) }>
        <p className="mail-title">{ this.props.title.toUpperCase() }</p>
        <div className="mail-infobox">
          <span className="mail-auth">{ this.props.auth.toUpperCase() }</span>
          <span className="mail-date">{ this.props.date.toUpperCase() }</span>
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
          (this.props.display.length) ?
            this.props.display.map((session, index) => {
              return(
                <Mail
                  key={ index }
                  index={ index }
                  title={ session.title }
                  content={ session.content }
                  auth={ session.auth }
                  date={ session.date }
                  root={ session.root }
                  activeID={ this.props.activeID }
                  onOpen={ this.props.onRequest }
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
    let a = newProps.render;
    if(a === undefined) {
      this.setState({
        render: false
      });
    } else {
      this.setState({
        render: true,
        index: a.index,
        title: a.title,
        auth: a.auth,
        date: a.date,
        content: a.content
      });
    }
  }

  render() {
    if(this.state.render) {
      return(
        <div className="window display">
          <div className="display-header">
            <div>
              <h5>{ this.state.title }</h5>
              {
                (this.props.activeTopic !== "trashbin") ?
                  <div
                    key="A"
                    className="display-header-remove"
                    onClick={ () => this.props.onDelete(this.state.index) }
                    >
                    <i className="fas fa-trash-alt"></i>
                  </div>
                :
                  <div className="display-header-removebox">
                    <div
                      key="B"
                      className="display-header-remove safe"
                      onClick={ () => this.props.onDelete(this.state.index, "r") }
                      >
                      <i className="fas fa-undo-alt" />
                    </div>
                    <div
                      className="display-header-remove"
                      onClick={ () => this.props.onDelete(this.state.index, "ur") }
                      >
                      <i className="fas fa-trash" />
                    </div>
                  </div>
              }
            </div>
            <div>
              <span>{ this.state.auth }</span>
              <span>{ this.state.date }</span>
            </div>
          </div>
          <div className="display-display">
            <p className="display-content">{ this.state.content }</p>
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

export default class TableView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      listening: undefined,
      query: letters,
      queryName: "inbox",

      inbox: letters,
      sent: [],
      drafts: [],
      trashbin: []
    }
  }

  componentDidMount(){
      console.log("============================",this.props.dataSource, this.props.selected)
  }

  renderLetter = data => {
    this.setState({
      listening: data
    });
  }

  openWindow = role => {
    if(role === this.state.queryName) return false;

    this.setState({
      listening: undefined
    });
    switch(role) {
      case 'inbox':
        this.setState({
          query: this.state.inbox
        });
      break;
      case 'sent':
        this.setState({
          query: this.state.sent
        });
      break;
      case 'drafts':
        this.setState({
          query: this.state.drafts
        });
      break;
      case 'trashbin':
      this.setState({
        query: this.state.trashbin
      });
      break;
      default:break;
    }
    this.setState({
      queryName: role
    });
  }

  deleteLetter = (index, status) => {
    let a = this.state.query,
        b = a[index];
    a.splice(index, 1);
    switch(this.state.queryName) {
      case 'inbox':
        this.setState({
          inbox: a,
          trashbin: this.state.trashbin.concat(b).reverse()
        });
      break;
      case 'sent':
        this.setState({
          sent: a,
          trashbin: this.state.trashbin.concat(b).reverse()
        });
      break;
      case 'drafts':
        this.setState({
          drafts: a,
          trashbin: this.state.trashbin.concat(b).reverse()
        });
      break;
      case 'trashbin':
        this.setState({
          trashbin: a
        });
        if(status === "ur") break;
        if(b.root === "in") {
          let c = this.state.inbox.concat(b).reverse();
          this.setState({
            inbox: c,
            query: (this.state.queryName === "inbox") ? c : this.state.query
          });
        } else if(b.root === "out") {
          let c = this.state.sent.concat(b).reverse();
          this.setState({
            sent: c,
            query: (this.state.queryName === "sent") ? c : this.state.query
          });
        } else if(b.root === "draft") {
          let c = this.state.drafts.concat(b).reverse();
          this.setState({
            drafts: c,
            query: (this.state.queryName === "drafts") ? c : this.state.query
          });
        }
      break;
      default:break;
    }
    this.setState({
      query: a,
      listening: undefined
    });
  }

  getCurrentTimestamp() {
    let a = new Date(),
        b = a.getDate(),
        c = a.getMonth() + 1,
        d = a.getFullYear();

    if(b < 10){
        b = '0' + b;
    }
    if(c < 10){
        c = '0' + c;
    }
    return b + '/' + c + '/' + d;
  }

  sendLetter = (title, content, to) => {
    let a =
            {
              title: title,
              auth: to,
              date: this.getCurrentTimestamp(),
              content: content,
              root: "out"
            },
        b = this.state.sent.concat(a);

    this.setState({
      sent: b,
      query: (this.state.queryName === "sent") ? b : this.state.query
    });
  }

  createDraft = (title, content, to) => {
    let a =
            {
              title: title,
              auth: to,
              date: this.getCurrentTimestamp(),
              content: content,
              root: "draft"
            },
        b = this.state.drafts.concat(a);

    this.setState({
      drafts: b,
      query: (this.state.queryName === "drafts") ? b : this.state.query
    });
  }

  render() {
    return(
      <div className="AppC">
        <Mails
          onRequest={ this.renderLetter }
          display={ this.state.query }
          activeID={ (this.state.listening !== undefined) ? this.state.listening.index : -1 }
        />
        <Display
          render={ this.state.listening }
          onDelete={ this.deleteLetter }
          activeTopic={ this.state.queryName }
        />
      </div>
    );
  }
}