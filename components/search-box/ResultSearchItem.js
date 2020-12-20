import React from 'react';
import Link from "next/link";
import {useSelector} from "react-redux";
import SearchBoxAttrsRender from "./SearchBoxAttrsRender";

const ResultSearchItem = ({product}) => {
    return (
        <React.Fragment>
            <Link href={'/'}>
                <a className={`result`}>
                    <div className="image">
                        {(product.image !== null) ? (
                            <img src={product.image.sourceUrl}/>
                        ) : ''}
                    </div>
                    <div className="content">
                        <div className="header">{product.parent.node.name}</div>
                        <p className="extra">
                            {`انشارات : `}
                            <SearchBoxAttrsRender attributes={product.attributes}/>
                        </p>
                    </div>
                </a>
            </Link>
        </React.Fragment>
    );
};

export default ResultSearchItem;
