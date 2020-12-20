import React from 'react';

const SearchBoxAttrsRender = ({attributes}) => {
    return (
        <React.Fragment>
            {
                attributes.nodes.map(attr => {
                    if (attr.name === 'pa_publisher') {
                        return (<span key={attr.attributeId}>{attr.value}</span>);
                    }
                    return null;
                })
            }
        </React.Fragment>
    );
};

export default SearchBoxAttrsRender;
