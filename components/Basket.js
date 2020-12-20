import React from 'react';
import {Button, Icon, Image, Item, List, Menu, Segment, Sidebar} from "semantic-ui-react";
import Link from "next/link";

/**
 * @author
 * @function Basket
 **/

const Basket = props => {
    const [visible, setVisible] = React.useState(false);

    return (
        <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={() => setVisible(false)}
                vertical
                visible={visible}
                width='very wide'
            >
                <List divided verticalAlign='middle'>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
                        <List.Content>Lena</List.Content>
                        <List.Content floated='right'>
                            <Button>Add</Button>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
                        <List.Content>Lindsay</List.Content>
                        <List.Content floated='right'>
                            <Button>Add</Button>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='right'>
                            <Button>Add</Button>
                        </List.Content>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />
                        <List.Content>Mark</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='right'>
                            <Button>Add</Button>
                        </List.Content>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
                        <List.Content>Molly</List.Content>
                    </List.Item>
                </List>
            </Sidebar>

            <Sidebar.Pusher dimmed={visible}>
                <Segment basic>
                    {props.children}
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

export default Basket;
