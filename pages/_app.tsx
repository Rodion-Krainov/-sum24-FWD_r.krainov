import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <main className="container mx-auto p-4">
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
}

export default MyApp;