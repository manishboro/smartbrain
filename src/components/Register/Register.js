import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitRegister = () => {
    fetch("https://pure-savannah-23228.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        } else {
          alert("User already exists!");
        }
      });
  };

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f3" htmlFor="email-address">
                  Name
                </label>
                <input
                  className="pa2 f3 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                  required
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f3" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 f3 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                  required
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f3" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 f3 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                  required
                />
              </div>
            </fieldset>
            <div className="">
              <input
                //        onClick={() => onRouteChange('home') /* () => this is added to ensure that the function runs when clicked not when the component renders*/}
                onClick={this.onSubmitRegister}
                className="b ph3 pv2 br4 input-reset ba b--black bg-transparent grow pointer f3 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
