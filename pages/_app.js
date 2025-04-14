import '../styles/globals.css'; // Import global styles (e.g., for layout, typography, etc.)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />; // This renders the component for the current page
}

export default MyApp;
