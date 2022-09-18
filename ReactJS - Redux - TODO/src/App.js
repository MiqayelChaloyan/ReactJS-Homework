import React from 'react'
import Header from './components/header/'
import List from './components/list'
import './App.css'

function generateId() {
	let id = 0;
	return () => {
		return id += 1;
	}
}

export const idGenerator = generateId();


function App() {
	return (
		<>
			<Header />
			<List />
		</>
	)
}

export default App;