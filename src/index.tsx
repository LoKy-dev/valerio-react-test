import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Home, Provincia } from './routes'
import { provinciaLoader } from './routes/provincia'
import reportWebVitals from './reportWebVitals'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/provincia/:key',
		loader: provinciaLoader,
		element: <Provincia />
	}
])

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
)
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
