import React, {useState} from 'react';
import {Button, Form, Grid, Header, Icon, Input, Search, Segment} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {clearSearchBox, getSearch, moveSearchResultToProducts} from "../../redux/actions";
import ResultSearch from "./ResultSearch";
import {useRouter} from "next/router";
import {productConstants, searchConstants} from "../../redux/actions/constants";

/**
 * @author
 * @function SearchBox
 **/

const SearchBox = props => {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchValue = router.query.search;
    const {products, loading} = useSelector(state => state.product);
    const [value, setValue] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
        // dispatch(getSearch(e.target.value, 'inside-iran', 20));
        router.push({
            pathname: "/shop/[[...categorySlug]]",
            query: {
                ...router.query,
                search: e.target.value,
            },
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form
            className={`ui ${loading ? 'loading' : ''} item ten wide column ${products.length ? 'visible' : ''}`}
            onSubmit={handleSubmit}
        >
                <div className={`ui icon input ${loading ? 'loading' : ''}`}>
                    <input
                        className="prompt"
                        type="text"
                        value={(searchValue ? searchValue : value)}
                        placeholder="جستجو ..."
                        onChange={(e) => handleInputChange(e)}
                    />
                    <Icon name={`search`}/>
                </div>
                {/* <div className={`results ${products.length ? 'transition visible' : ''}`} >
                    <ResultSearch products={products} />
                </div> */}
        </form>

        /*<Form inverted={false} className="bk-form" onSubmit={handleFormSubmit}>
            <Form.Input type='text' placeholder='Search...' action>
                <Form.Input placeholder='جستجو...' value={value} onChange={handleInputChange}/>
                <Form.Button loading={loading} icon type='submit'>
                    <Icon name='search'/>
                </Form.Button>
            </Form.Input>
            <style jsx global>{`
              .bk-form .field {
                margin: 0 0 0 50px !important;
              }
            `}</style>
        </Form>*/
    );
};

export default SearchBox;
