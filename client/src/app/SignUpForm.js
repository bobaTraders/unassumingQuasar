class SignUpForm extends React.Component {
  constructor(){
    super();
    this.state = {
      userName: '',
      email: '',
      password: ''
    };
  }


  handleUserNameChange(e) {
    this.setState({userName: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }


  //handleSubmit is set as the callback passed through props; not sure if we need in in redux
  render() {
    return <div>

      <form onSubmit={(event) => this.props.handleSubmit(event, this.state)}>

        <input id="userName"
          onChange={this.handleUserNameChange.bind(this)}
          type="text" value={this.state.userName}
          placeholder="What's your name?"
        />


        <input id="Email"
          type="text" onChange={this.handleEmailChange.bind(this)}
          value={this.state.email}
          placeholder="Email"
        />

        <input id="password"
          type="text" onChange={this.handlePasswordChange.bind(this)}
          value={this.state.password}
          placeholder="Enter a password"
        />

        <button type="submit">
          SignUp for DinnerParty
        </button>

      </form>
    </div>
  }
}


window.SignUpForm = SignUpForm;
