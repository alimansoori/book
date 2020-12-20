import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../redux/actions";
import { Button, Grid, Icon, Image, Input, Item, Menu, Segment, Statistic, Visibility } from "semantic-ui-react";
import SearchBox from "./search-box/SearchBox";
import Logo from './UI/Logo';
import { Media } from './Layout';
import CartIcon from './cart/CartIcon';

const Nav = ({ fixed, inverted }) => {

    useEffect(() => {
    }, []);

    return (
        <>
            <Media greaterThan="mobile">
                <div className={`following bar ${fixed ? 'light fixed' : ''}`}>
                    <div className='ui container'>
                        <Menu

                            className={`large secondary network ${inverted ? 'inverted' : ''}`}
                        >
                            <Menu.Menu position="left">
                                <Link href='/'>
                                    <Menu.Item as='a'>
                                        <Logo />
                                    </Menu.Item>
                                </Link>
                                <Menu.Item className='view-ui' as='a'>
                                    <Icon name='sidebar' />
                                    {`منو`}
                                </Menu.Item>
                            </Menu.Menu>
                            <Menu.Item style={{ maxWidth: "600px", width: "600px" }}>
                                <SearchBox />
                            </Menu.Item>

                            <Menu.Menu position='right'>
                                <Menu.Item>
                                    <Link href="/signin">
                                        <Button
                                            as='a'
                                            content='ورود'
                                            color='teal'
                                            basic
                                        />
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link href='/signup'>
                                        <Button
                                            as='a'
                                            content='ثبت نام'
                                            color='olive'
                                            basic
                                        />
                                    </Link>
                                </Menu.Item>
                                <CartIcon />
                            </Menu.Menu>
                        </Menu>
                    </div>
                </div>
            </Media>
            <Media at="mobile">
                Menu Mobile is not set
            </Media>
        </>
    )
};

const Nav2 = () => {

    const [show, setDisplay] = useState(false);
    const { authenticate } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(signout());
    }

    const renderNonLoggedInLinks = () => {
        return (
            <>
                <Menu.Item >
                    <Link href="/signin">
                        <a>ورود</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">
                        <a>ثبت نام</a>
                    </Link>
                </Menu.Item>
            </>
        );
    }

    const renderLoggedInLinks = () => {
        return (
            <Menu.Item
                name="خروج"
                active={false}
                onClick={logout}
            />
        );
    }

    return (
        <Menu stackable>
            <Menu.Item>
                <img src='/img/logo.png' />
            </Menu.Item>
            <Menu.Item
                name="خانه"
                active={true}
            >
                <Link href="/">
                    <a>خانه</a>
                </Link>
            </Menu.Item>

            <Menu.Item
                name='categories'
                active={false}
            >
                <Link href="/categories">
                    <a>دسته بندی ها</a>
                </Link>
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>
                    <SearchBox />
                </Menu.Item>
                {authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
                <Menu.Item>
                    <Statistic size="mini">
                        <Statistic.Value>
                            <Icon name='cart' />5
                        </Statistic.Value>
                        {/*<Statistic.Label>Flights</Statistic.Label>*/}
                    </Statistic>
                    {/*Cart Icon
                    <div>
                        <CartIcon/>
                    </div>
                    Menu toggle button for mobile
                    <button
                        onClick={() => setDisplay(!show)}
                        className="book-menu-btn" type="button" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>*/}
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
};

export default Nav;
