import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className='login-form-wrap'>
          <h2>Login</h2>
          <form className='login-form'>
            <input type='email' name='email' placeholder='email' required></input>
            <input type='password' name='password' placeholder='password' required></input>
            <button type='submit' className='btn-login'>Login Screen</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
