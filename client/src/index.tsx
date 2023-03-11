import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { CssBaseline } from '@mui/material';
import { reducer, StateProvider } from './state';
import { ErrorBoundary } from 'react-error-boundary';
import './tailwind.css';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			<Router>
				<StateProvider reducer={reducer}>
					<ErrorBoundary
						FallbackComponent={ErrorFallback}
						onReset={() => {
							window.location.reload();
						}}
					>
						<App />
					</ErrorBoundary>
				</StateProvider>
			</Router>
		</ThemeProvider>
	</React.StrictMode>
);

function ErrorFallback({ error, resetErrorBoundary }) {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}
