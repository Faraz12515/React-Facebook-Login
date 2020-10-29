import logo from './logo.svg';
import './App.css';
import Facebook from './components/Facebook';

function App() {
	return (
		<div className='App'>
			<img src={logo} className='App-logo' alt='logo' />
			<h1>Facebook Auth</h1>
			<p>To get started, authenticate with Facebook.</p>

			<Facebook />
		</div>
	);
}

export default App;
