import React from 'react'
import {Grid} from '@material-ui/core'

import Product from './Product/Product'

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://shoparti.ru/upload/iblock/3ef/3ef2884afacc4b52573681ba99c80635.jpg'},
    {id: 1, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://ipro-shop.ru/image/cache/catalog/MacBook%20Case/MacBook%20Pro%2013/90207-5636_mbp16-13_ss-glt_1-2000x2000.jpg'},
]

const Products = () => {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products