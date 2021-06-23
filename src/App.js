import logo from './logo.svg';
import './App.css';
import React from 'react';

function Welcome(props) {
  return <h1>Привет, {props.name}!</h1>;
}
let man = {name: 'Alpori', surname: 'Roin', day: '17.10.1276'};

function Initials(props) {
  return <h1>Good evening, {props.init.name} {props.init.surname}</h1>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        Time for you - {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      dozens: 0
    };
  }

  componentDidMount() {
    this.motion = setInterval(
      () => this.addingTime(),
      1000
    );

    this.increase = setInterval(
      () => this.changingTheNumber(),
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.motion);
  }

  addingTime() {
    this.setState({
      quantity: this.state.quantity + 1
    });
  }

  changingTheNumber() {
    this.setState({
      dozens: this.state.dozens + Math.floor(Math.random() * 5)
    });
  }

  render() {
    return (
      <div>
        <h1>Since the beginning of the countdown has passed: {this.state.quantity} seconds</h1>
        <h5>And tens of seconds: {this.state.dozens}</h5>
      </div>
    );
  }
}

class ButtonClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Нажми на меня!',
      click: false
    };

    this.handle = this.handle.bind(this);
  }

  handle() {
    this.setState(state => ({
      click: !state.click
    }));
  }

  render() {
    return (
      <div>
        <button href='#' onClick={this.handle} >
          {this.state.text}
        </button>
        <h2>
          {this.state.click ? 'Кнопка нажата' : 'Кнопка не нажата'}
        </h2>
      </div>
    );
  }
}

class LoggingButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Нажми на меня',
      output: false
    }
  }

  handleClick = () => {
    console.log('значение this:', this.state.output);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.text}
      </button>
    );
  }
}

class LoggingButtonSecond extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Нажми на меня',
      output: true
    }
  }

  handleClick() {
    console.log('значение this:', this.state.output);
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.text}
      </button>
    );
  }
}

class ButtonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  textOutput(data) {
    console.log(data);
  }

  output() {
    for ( let $i = 0 ; $i < 5 ; $i++ ) {
      this.state.list.push(
        <button onClick={this.textOutput.bind(this, $i)} >
          Кнопка: {$i}
        </button>
      );
    }
    for ( let point of this.state.list ) {
      return (
        <button onClick={this.textOutput.bind(this, point)} >
          Кнопка: {point}
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        {this.output()}
      </div>
    )
  }
}

function UserGreeting(props) {
  return <h1>С возвращением!</h1>;
}

function GuestGreeting(props) {
  return <h1>Войдите, пожалуйста.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Войти
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Выйти
    </button>
  );
}


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

class JustClass extends React.Component {
  constructor(props) {
    super(props) ;
    this.state = {
      message: 0
    };
  }

  render() {
    return (
      <div>
        {this.state.message > 0 ? <h1>Количество сообщений: {this.state.message}</h1> : <h1>{this.state.message}</h1>}
      </div>
    );
  }
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages ;
  return (
    <div>
      <h1>Здравствуйте!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          У вас {unreadMessages.length} непрочитанных сообщений.
        </h2> 
      }
    </div>
  );
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Предупреждение!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Спрятать' : 'Показать'}
        </button>
      </div>
    );
  }
}

class JustList extends React.Component {
  constructor(props) {
    super(props) ;
    this.state = {
      numbers: [1,2,3,4,5],
      doubled: []
    } ;
  }

  doub() {
    this.state.doubled = this.state.numbers.map((number) => <li key={number.toString()} >{number}</li>);
  }

  render() {
    return (
      <div>
        {this.doub()}
        <ul>{this.state.doubled}</ul>
      </div>
    );
  }
}

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => <li key={post.id} >{post.title}</li>)}
    </ul>
  );
  const content = props.posts.map((post) => 
    <div key={post.id} >
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

class NameForm extends React.Component {
  constructor(props) {
    super(props) ;
    this.state = {value: ''} ;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value}) ;
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value) ;
    event.preventDefault() ;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Ваш любимый вкус: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Выберите ваш любимый вкус:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option value="coconut">Кокос</option>
            <option value="mango">Манго</option>
          </select>
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Пойдут:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Количество гостей:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

const scaleNames = {
  c: 'Цельсия',
  f: 'Фаренгейта'
};

function BoilingVerdict(props) {
  if ( props.celsius >= 100 ) {
    return <p>Вода закипит.</p>;
  }
  return <p>Вода не закипит.</p>;
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Введите градусы по шкале {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

const messages = ['Hello!', 'Hola!']

const posts = [
  {id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!'},
  {id: 2, title: 'Установка', content: 'React можно установить из npm.'}
];

function Human(props) {
  return <div>
    <Initials init={props.man} />
    <Clock />
  </div>; 
}

function App() {
  return (
    <div className="App">
        <Counter />
        <Counter />
        <Counter />
        <ButtonClick />
        <LoggingButton />
        <LoggingButtonSecond />
        <ButtonList />
        <LoginControl />
        <Mailbox unreadMessages={messages} />
        <JustClass />
        <Page />
        <JustList />
        <Blog posts={posts} />
        <NameForm />
        <FlavorForm />
        <Reservation />
        <Calculator />
    </div>
  );
}

export default App;
