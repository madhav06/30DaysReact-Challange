import React, {Component} from 'react'
import Product from './Product'

// import { propTypes } from 'react-bootstrap/esm/Image';

const Products = () => {

    const getProducts = () => {
      return [
        { 
          imageUrl: "http://loremflickr.com/150/150?random=1",
          productName: "Product 1",
          releasedDate: "May 31, 2016",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
          rating: 4,
          numOfReviews: 2
      },
      { 
          imageUrl: "http://loremflickr.com/150/150?random=2",
          productName: "Product 2",
          releasedDate: "October 31, 2016",
          description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. ",        
          rating: 2,
          numOfReviews: 12          
      },
      { 
          imageUrl: "http://loremflickr.com/150/150?random=3",
          productName: "Product 3",
          releasedDate: "July 30, 2016",
          description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ",        
          rating: 5,
          numOfReviews: 2
      }
      ]
    }

    // const products = [
    //     "learning React",
    //     "Pro React",
    //     "Beginning React"
    // ];
    const products = getProducts();

    const listProducts = products.map((product) =>
        <Product key={product.productName} data={product} />
    );


  return (
    <div>
      <ul>{listProducts}</ul>
    </div>
  )
}

export default Products
