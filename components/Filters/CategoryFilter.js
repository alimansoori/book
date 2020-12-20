import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, Icon, Input, Label, Menu, Segment } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryFilterRender from './CategoryFilterRender';
import { catFilters } from '../../redux/actions/category.actions';
import { useRouter } from 'next/dist/client/router';

const CategoryFilter = (props) => {

    const router = useRouter();
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.category);
    const { slugs } = router.query

    useEffect(() => {
        dispatch(catFilters(slugs, categories));
    }, [slugs, categories]);

    const recurciveCat = (list, slugs = [], lastSlug = null, index = 1) => {
        let node = {};
        let newList = list.filter(function (d) {
            if (index > slugs.length) {
                if (!slugs.length) {
                    return (d.node.parent ? d.node.parent.node.parent : 0) === 0
                }
                if (index - 1 === slugs.length) {
                    return (d.node.parent ? decodeURIComponent(d.node.parent.node.slug) : '') === slugs[slugs.length - 1]
                }
                return false
            }
            else if (slugs.length > index && index === 1) {
                return decodeURIComponent(d.node.slug) === slugs[0]
            }
            else if (slugs.length > index) {
                return decodeURIComponent(d.node.slug) === slugs[index - 1]
            }
            else if (slugs.length === index) {
                return decodeURIComponent(d.node.slug) === slugs[index - 1]
            }
            console.log(d)

            return null;
        });

        if (!slugs.length) return newList

        newList.forEach(function (d) {
            var cd = d;
            cd.child = recurciveCat(list, slugs, lastSlug, index + 1);

            return node[decodeURIComponent(cd.node.slug)] = cd;
        })

        return node;
    }

    return (
        <Menu pointing size='huge' vertical fluid>
            <Menu.Item
                key='hjkuy6789'
                name='inbox'
                as='h3'
                style={{fontWeight: "bold"}}
            >
                <span>
                    {`دسته‌بندی‌ها`}
                </span>
            </Menu.Item>
            <CategoryFilterRender />
            <Menu.Item>
                <Input icon='search' placeholder='Search ...' />
            </Menu.Item>
        </Menu>
    )
}

export default CategoryFilter;