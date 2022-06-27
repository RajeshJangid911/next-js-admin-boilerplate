import type {AppProps} from 'next/app'
import App from "app";
import {Provider} from "react-redux";
import {store} from "store";
// style + assets
import 'assets/scss/style.scss';
import '../styles/globals.css'
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <Head>
                <title>Next Js Admin</title>
            </Head>
            <App>
                <Component {...pageProps} />
            </App>
        </Provider>

    )
}

export default MyApp
