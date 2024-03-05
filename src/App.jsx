import "./styles/landing.css";
import "./styles/general.css";

function App() {
  return <Landing />;
}

function Landing() {
  return (
    <div className="landing-container">
      {/* <div className="dates">example</div>
      <div className="logo-container">example</div>
      <div className="info">example</div> */}
      <div className="button-container">
        <button className="register-button">Register</button>
        <button className="tickets-button">Tickets</button>
      </div>
    </div>
  );
}

export default App;
