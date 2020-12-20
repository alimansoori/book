import React from 'react'
import { Card, Label } from 'semantic-ui-react';

export function AttributesRender({ attrs, label }) {

    return (
        <Card.Meta style={{marginTop:"2px"}}>
            <Label key={label}>
                {`${label}:`}
                {attrs.map(attr => (
                    < Label.Detail key={attr.node.databaseId}>
                        { attr.node.name}
                    </Label.Detail>
                ))
                }
            </Label >
        </Card.Meta>
    )
}

export default AttributesRender;