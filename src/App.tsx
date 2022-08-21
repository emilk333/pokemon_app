import React from 'react'
import './App.css'
import AppRouter from './router/AppRouter'
import { GlobalStoreProvider } from './context/globalStore'

function App() {

	return (
		<React.Fragment>
			<GlobalStoreProvider>
				<AppRouter />
			</GlobalStoreProvider>
		</React.Fragment>
	)
}

export default App
