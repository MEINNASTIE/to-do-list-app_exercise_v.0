import { h, Component, Fragment } from 'preact';
import './login.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    // authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);
  }

  render() {
    const { username, password } = this.state;

    return (
      <Fragment>
      <Header />
      <div class="background">
			<main style={{fontFamily: 'CenturyGothic'}}>
      <div class="home">	
      <section class="login_home">
        <h1>Welcome to your Alpha-S Radon monitor</h1>
        <h3>Please login with your username and your password.</h3>
      <div class="login">
        <form onSubmit={this.handleSubmit}>
          <div class="login_input">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={this.handleInputChange}
            />
          </div>
          <div class="login_input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          <div class="submit_button">
          <button type="submit" class="submit">Login In</button>
          </div>
        </form>
        </div>
        </section>
      </div>
      </main>
      <Footer />
      </div>
      
      </Fragment>
    );
  }
}

export default Login;