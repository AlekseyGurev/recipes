import { MainPage, RecipePage, ErrorPage } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/recipe/:id" element={<RecipePage />} />
			<Route path="/404" element={<ErrorPage />} />
			<Route path="*" element={<MainPage />} />
		</Routes>
	);
}

export default App;
