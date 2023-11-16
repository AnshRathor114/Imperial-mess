import './App.css';
// import { Link } from "react-router-dom";


function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Imperial mess</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://www.mnnit.ac.in/">College</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login & Signup
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item"  href="/login.js">● Student</a></li>
            <link></link>
            <li><a className="dropdown-item" href="/">● Authority</a></li>
            <li><a className="dropdown-item" href="/">● Management</a></li>
            <li><a className="dropdown-item" href="/" >  Sign up</a></li>

          
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" href="/">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<head>
    <meta charset="utf-8"/>
    <title></title>
    <link rel="stylesheet" href="style.css"/>
  </head>
  <body>
<div class="login-box">
  <h1>Login</h1>
  <i class="fas fa-twitter"></i>
  <div class="textbox">

    <i class="fas fa-user"></i>
    <input type="text" placeholder="Username"/>
  </div>

  <div class="textbox">
    <i class="fas fa-lock"></i>
    <input type="password" placeholder="Password"/>
  </div>

  <input type="button" class="btn" value="Sign in"/>
</div>
  </body>
  {/* </></head> */}
  </>
  );
}

export default App;
