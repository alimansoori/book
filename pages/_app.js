import { Provider, useDispatch } from "react-redux";
import store from "../redux/store";
import Layout from "../components/Layout";
import { createWrapper } from "next-redux-wrapper";
import { getCart, isUserLoggedIn } from "../redux/actions";
import { useEffect } from "react";
import Head from "next/head";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";


const progress = new ProgressBar({
    size: 2,
    color: "#38a169",
    className: "bar-of-progress",
    delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);


const MyApp = (props) => {
    process.browser ? window.store = store : null;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(isUserLoggedIn());
        dispatch(getCart());
        document.querySelector("body").setAttribute("dir", "rtl");
        document.querySelector("body").setAttribute("class", "index");
        document.querySelector("body").setAttribute("id", "example");
    }, []);

    const { Component, pageProps } = props;
    return (
        <Provider store={store}>
            <Head>
                <title>Book Store</title>
                {/*<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>*/}

                {/* <link
                    rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css" /> */}
                <link
                    rel="stylesheet"
                    href="https://cdn.rtlcss.com/semantic-ui/2.4.1/semantic.rtl.min.css" />
                <link
                    rel="stylesheet"
                    href="/css/style.css" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
