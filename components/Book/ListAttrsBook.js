import React, { useEffect } from 'react'
import { List } from 'semantic-ui-react'

export default function Listattrsbook({ product }) {

    return (
        <List size='big' divided verticalAlign='middle'>
            <List.Item style={{marginBottom:"5px"}}>
                {product.paPublishers ? (
                    product.paPublishers.nodes.map(item => (
                        <List.Content floated='right'>{item.name}</List.Content>
                    ))
                ) : ('')}
                <List.Content>{`نشر`}</List.Content>
            </List.Item>
            <List.Item style={{marginBottom:"5px"}}>
                {product.paWriters ? (
                    product.paWriters.nodes.map(item => (
                        <List.Content floated='right'>{item.name}</List.Content>
                    ))
                ) : ('')}
                <List.Content>{`نویسنده`}</List.Content>
            </List.Item>
            <List.Item style={{marginBottom:"5px"}}>
                {product.paTranslators ? (
                    product.paTranslators.nodes.map(item => (
                        <List.Content floated='right'>{item.name}</List.Content>
                    ))
                ) : ('')}
                <List.Content>{`مترجم`}</List.Content>
            </List.Item>
            <List.Item style={{marginBottom:"5px"}}>
                {product.paBookCodes ? (
                    product.paBookCodes.nodes.map(item => (
                        <List.Content floated='right'>{item.name}</List.Content>
                    ))
                ) : ('')}
                <List.Content>{`کد کتاب`}</List.Content>
            </List.Item>
            <List.Item style={{marginBottom:"5px"}}>
                {product.paBookPrintSeries ? (
                    product.paBookPrintSeries.nodes.map(item => (
                        <List.Content floated='right'>{item.name}</List.Content>
                    ))
                ) : ('')}
                <List.Content>{`سری چاپ`}</List.Content>
            </List.Item>
            <List.Item style={{marginBottom:"5px"}}>
                {product.paBookSizes ? (
                    product.paBookSizes.nodes.map(item => (
                        <List.Content floated='right'>{item.name}</List.Content>
                    ))
                ) : ('')}
                <List.Content>{`اندازه کتاب`}</List.Content>
            </List.Item>
            <List.Item style={{marginBottom:"5px"}}>
                {product.paCoverTypes ? (
                    product.paCoverTypes.nodes.map(item => (
                        <List.Content floated='right'>{item.name}</List.Content>
                    ))
                ) : ('')}
                <List.Content>{`نوع جلد`}</List.Content>
            </List.Item>
            <List.Item style={{marginBottom:"5px"}}>
                {product.paIsbns ? (
                    product.paIsbns.nodes.map(item => (
                        <List.Content floated='right'>{item.name}</List.Content>
                    ))
                ) : ('')}
                <List.Content>{`شابک`}</List.Content>
            </List.Item>
            <List.Item style={{marginBottom:"5px"}}>
                {product.paNumberPages ? (
                    product.paNumberPages.nodes.map(item => (
                        <List.Content floated='right'>{item.name}</List.Content>
                    ))
                ) : ('')}
                <List.Content>{`تعداد صفحه`}</List.Content>
            </List.Item>
            <List.Item style={{marginBottom:"5px"}}>
                {product.paAdPublishDates ? (
                    product.paAdPublishDates.nodes.map(item => (
                        <List.Content floated='right'>{item.name}</List.Content>
                    ))
                ) : ('')}
                <List.Content>{`تاریخ انتشار به میلادی`}</List.Content>
            </List.Item>
            <List.Item>
                {product.paSolarPublishDates ? (
                    product.paSolarPublishDates.nodes.map(item => (
                        <List.Content floated='right'>{item.name}</List.Content>
                    ))
                ) : ('')}
                <List.Content>{`تاریخ انتشار به شمسی`}</List.Content>
            </List.Item>
        </List>
    )
}
