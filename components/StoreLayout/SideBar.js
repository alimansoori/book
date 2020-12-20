import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Accordion, Button, Form, Image, Label, List, Menu, Segment } from 'semantic-ui-react';
import { isEmpty } from '../../functions';
import { categoriesBySlugs, searchCategories } from '../../redux/actions/category.actions';
import CategoryFilter from '../Filters/CategoryFilter';

const ColorForm = (
    <Form>
        <Form.Group grouped>
            <Form.Input placeholder='Search ...' />
            <Form.Checkbox label='Red' name='color' value='red' />
            <Form.Checkbox label='Orange' name='color' value='orange' />
            <Form.Checkbox label='Green' name='color' value='green' />
            <Form.Checkbox label='Blue' name='color' value='blue' />
            <Form.Button>HHHHHH</Form.Button>
        </Form.Group>
    </Form>
)

const SizeForm = (
    <Label>DDDD</Label>
)

function SideBar({router}) {
    const [activeIndex, setActiveIndex] = useState(-1);
    const dispatch = useDispatch();
    // const router = useRouter();
    const [hydrate, setHydrate] = useState(false);
    const { categories } = useSelector(state => state.category);

    const { slugs } = router.query;

    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index;
        setActiveIndex(newIndex)
    }


    useEffect(() => {
        // if (isEmpty(slugs) || typeof slugs === undefined) {
        //     setHydrate(true);
        // }
        // if (hydrate && categories.length) {
        //     dispatch(categoriesBySlugs(slugs, categories));
        // }
    }, [router.query, categories]);

    return (
        <React.Fragment>
            <CategoryFilter router={router} />
            <Accordion as={Menu} vertical fluid>
                <Menu.Item>
                    <Accordion.Title
                        active={activeIndex === 1}
                        content={`دسته بندی ها`}
                        index={1}
                        onClick={handleClick}
                    />
                    <Accordion.Content active={activeIndex === 1} content={SizeForm} />
                </Menu.Item>
                <Menu.Item>
                    <Accordion.Title
                        active={activeIndex === 2}
                        content={`Colors`}
                        index={2}
                        onClick={handleClick}
                    />
                    <Accordion.Content active={activeIndex === 2} content={ColorForm} />
                </Menu.Item>
            </Accordion>
        </React.Fragment>
    )
}

export default SideBar;