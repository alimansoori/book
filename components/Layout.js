import Link from 'next/link';
import { AppProvider } from "./context/AppContext";
import client from "./ApolloClient";
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { createMedia } from '@artsy/fresnel';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon, Image,
    Menu,
    Segment,
    Sidebar,
    Visibility
} from "semantic-ui-react";
import React, { useState } from "react";
import SearchBox from "./search-box/SearchBox";
import Nav from './Nav';
import HomepageHeading from './Layout/HomepageHeading';


export const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
});

const Layout = (props) => {
    return (
        <AppProvider>
            <ApolloProvider client={client}>
                <ApolloHooksProvider client={client}>
                    <ResponsiveContainer>
                        {/*<Basket>*/}
                        {/*<Header/>*/}
                        {props.children}
                        {/*</Basket>*/}
                    </ResponsiveContainer>
                </ApolloHooksProvider>
            </ApolloProvider>
        </AppProvider>
    );
};

const ResponsiveContainer = ({ children }) => {
    return (
        <MediaContextProvider>
            <DesktopContainer>{children}</DesktopContainer>
            {/* <DesktopContainer2>{children}</DesktopContainer2> */}
            {/* <MobileContainer>{children}</MobileContainer> */}
        </MediaContextProvider>
    );
}

const DesktopContainer = ({ children }) => {
    const [fixed, setFixed] = useState(false);

    const hideFiexMenu = () => { setFixed(true) }
    const showFiexMenu = () => { setFixed(true) }

    return (
        <div className='pusher'>
            <div className='full height'>
                <Visibility
                    once={false}
                    onBottomPassed={showFiexMenu}
                    onBottomVisibleReverse={hideFiexMenu}
                    onTopVisible={(hideFiexMenu)}
                >
                    <Nav fixed={fixed} />
                </Visibility>
                {children}
                {/* <Content />
            <Footer /> */}
            </div>
        </div>
    );
}

const DesktopContainer2 = ({ children }) => {
    const [fixed, setFixed] = useState(false);
    const hideFixedMenu = () => {
        setFixed(false);
    }
    const showFixedMenu = () => {
        setFixed(true);
    }

    return (
        <Media greaterThan='mobile'>
            <Visibility
                once={false}
                onBottomPassed={showFixedMenu}
                onBottomPassedReverse={hideFixedMenu}
            >
                <Segment
                    textAlign='center'
                    style={{ minHeight: 700, padding: '1em 0em' }}
                    vertical
                >
                    <Menu
                        fixed={fixed ? 'top' : null}
                        inverted={!fixed}
                        pointing={!fixed}
                        secondary={!fixed}
                        size='large'
                    >
                        <Container>

                            <Link prefetch href="/">
                                <Menu.Item as='a'>
                                    <img src='/img/logo.png' />
                                </Menu.Item>
                            </Link>
                            <Link prefetch href="/">
                                <Menu.Item as='a' active>Home</Menu.Item>
                            </Link>
                            <Link prefetch href="/">
                                <Menu.Item as='a'>
                                    Link 1
                                </Menu.Item>
                            </Link>
                            <Link prefetch href="/">
                                <Menu.Item as='a'>
                                    Link 2
                                </Menu.Item>
                            </Link>
                            <Link prefetch href="/">
                                <Menu.Item as='a'>
                                    Link 3
                                </Menu.Item>
                            </Link>
                            <Menu.Menu position='right'>
                                <Menu.Item>
                                    <SearchBox />
                                </Menu.Item>
                                <Menu.Item>
                                    <Link prefetch href="/signin">
                                        <Button as='a' inverted={!fixed}>
                                            Log in
                                        </Button>
                                    </Link>
                                    <Link prefetch href="/signup">
                                        <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                            Sign Up
                                        </Button>
                                    </Link>
                                </Menu.Item>
                            </Menu.Menu>
                        </Container>
                    </Menu>
                    <Menu
                        fixed={fixed ? 'top' : null}
                        stackable
                        pointing={!fixed}
                        secondary={!fixed}
                        size='large'
                    >
                        <div className="ui three column stackable grid container" style={{ margin: 0 }}>
                            <Link href={`/`}>
                                <a className="item three wide column">
                                    Home
                                </a>
                            </Link>
                            {/*<div className="ui search item ten wide column">
                                <div className="ui icon input">
                                    <input className="prompt" type="text"/>
                                    <Icon name={`search`} />
                                </div>
                                <div className="results"/>
                            </div>*/}
                            <SearchBox />
                            <Link href={`/`}>
                                <a className="ui item one wide column">
                                    Login
                                </a>
                            </Link>
                            <Link href={`/`}>
                                <a className="ui item one wide column">
                                    Signup
                                </a>
                            </Link>
                        </div>
                    </Menu>
                    {/*<HomepageHeading/>*/}
                </Segment>
            </Visibility>

            {children}
        </Media>
    );
}

const MobileContainer = ({ children }) => {
    const [sidebarOpened, setSidebarOpened] = useState(false);
    const handleSidebarHide = () => {
        setSidebarOpened(false)
    }
    const handleToggle = () => {
        setSidebarOpened(true)
    }

    return (
        <Media as={Sidebar.Pushable} at='mobile'>
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    inverted
                    onHide={handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Link prefetch href="/">
                        <Menu.Item as='a' active>
                            Home
                        </Menu.Item>
                    </Link>
                    <Link prefetch href="/">
                        <Menu.Item as='a'>Work</Menu.Item>
                    </Link>
                    <Link prefetch href="/">
                        <Menu.Item as='a'>Company</Menu.Item>
                    </Link>
                    <Link prefetch href="/">
                        <Menu.Item as='a'>Careers</Menu.Item>
                    </Link>
                    <Link prefetch href="/">
                        <Menu.Item as='a'>Log in</Menu.Item>
                    </Link>
                    <Link prefetch href="/">
                        <Menu.Item as='a'>Sign Up</Menu.Item>
                    </Link>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 350, padding: '1em 0em' }}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item onClick={handleToggle}>
                                    <Icon name='sidebar' />
                                </Menu.Item>
                                <Menu.Item>
                                    <SearchBox />
                                </Menu.Item>
                                <Menu.Menu position='right'>
                                    <Menu.Item>
                                        <Button as='a' inverted>
                                            Log in
                                        </Button>
                                        <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                                            Sign Up
                                        </Button>
                                    </Menu.Item>
                                </Menu.Menu>
                            </Menu>
                        </Container>
                        <HomepageHeading mobile />
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Media>
    );
}

const Content = () => {
    return (
        <React.Fragment>
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                We Help Companies and Companions
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                We can give your company superpowers to do things that they never thought possible.
                                Let us delight your customers and empower your needs... through pure data analytics.
                            </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                We Make Bananas That Can Dance
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                                bioengineered.
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Button size='huge'>Check Them Out</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment style={{ padding: '0em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                "What a Company"
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                "I shouldn't have gone with their competitor."
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                <Image avatar src='/images/avatar/large/nan.jpg' />
                                <b>Nan</b> Chief Fun Officer Acme Toys
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment style={{ padding: '8em 0em' }} vertical>
                <Container text>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Breaking The Grid, Grabs Your Attention
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Instead of focusing on content creation and hard work, we have learned how to master the
                        art of doing nothing by providing massive amounts of whitespace and generic content that
                        can seem massive, monolithic and worth your attention.
                    </p>
                    <Button as='a' size='large'>
                        Read More
                    </Button>

                    <Divider
                        as='h4'
                        className='header'
                        horizontal
                        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                    >
                        <a href='#'>Case Studies</a>
                    </Divider>

                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Did We Tell You About Our Bananas?
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                        it's really true. It took years of gene splicing and combinatory DNA research, but our
                        bananas can really dance.
                    </p>
                    <Button as='a' size='large'>
                        I'm Still Quite Interested
                    </Button>
                </Container>
            </Segment>
        </React.Fragment>
    );
}

export default Layout;
