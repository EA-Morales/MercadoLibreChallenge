import '@/styles/App.css';

import product from '@/Mockup/product.json';

function App() {
	return <h1 className='text-5xl text-green-600'>{product.title}</h1>;
}

export default App;
