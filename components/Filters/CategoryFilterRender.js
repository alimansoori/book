import React, { Fragment } from 'react'
import { uriToUse } from '../../functions'
import Link from 'next/link'
import { Icon, Menu } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const CategoryFilterRender = (props) => {
    // console.log(catFilters)

    const router = useRouter();
    const { categoriesFilter } = useSelector(state => state.category);

    const RenderCatIsRoot = () => (
        categoriesFilter.node.map((cat, index) => (
            <RenderMenuLinkItem
                active={(categoriesFilter.activeId === cat.node.databaseId) ? true : false}
                index={0}
                cat={cat}
            />
        ))
    )

    const RenderCatNotRoot = () => (
        <>
            <Link
                key={`4567jdkdfuj`}
                href={{
                    pathname: "/shop/[[...slugs]]",
                    query: {
                        ...router.query,
                        slugs: [],
                    }
                }}>
                <Menu.Item
                    as='a'
                    name='inbox'
                    active={false}
                >
                    <span>
                        <Icon name='arrow left' />
                        {`همه آگهی‌ها`}
                    </span>
                </Menu.Item>
            </Link>
            {
                categoriesFilter.node.map((cat, index) => {
                    return (
                        <>
                            <RenderMenuLinkItem index={index} cat={cat} />
                            <Menu.Menu pointing secondary vertical>
                                {(categoriesFilter.node.length == index + 1 && cat.children.length) ? (
                                    cat.children.map((child, index2) => {
                                        return (
                                            <RenderMenuLinkItem
                                                active={(categoriesFilter.activeId === child.node.databaseId) ? true : false}
                                                index={index + 1}
                                                cat={child}
                                            />
                                        )
                                    })
                                ) : ('')}
                            </Menu.Menu>
                        </>
                    )
                })
            }
        </>
    )

    const RenderMenuLinkItem = ({ cat, index = 0, active = false }) => (
        <Link
            key={cat.node.id}
            href={{
                pathname: "/shop/[[...slugs]]",
                query: {
                    ...router.query,
                    slugs: uriToUse(cat.node.uri),
                }
            }}>
            <Menu.Item
                as='a'
                name='inbox'
                active={active}
            >
                {(cat.children && cat.children.length) ? (
                    <Icon name='angle right' />
                ) : ('')}
                <span style={{ marginRight: (index * 20) + `px` }}>{cat.node.name}</span>
            </Menu.Item>
        </Link>
    )

    return (
        <Fragment>
            {categoriesFilter.isRoot ? <RenderCatIsRoot /> : <RenderCatNotRoot />}
        </Fragment>
    )
}

export default CategoryFilterRender;