import Header from '../Header'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="products-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="cart"
        className="products-img"
      />
    </div>
  </>
)

export default Products

// import {Component} from 'react'
// import Cookies from 'js-cookie'
// import Header from '../Header'

// import './index.css'

// class Products extends Component {
//   state = {
//     productsList: [],
//   }

//   getProductsList = async () => {
//     const url = 'https://apis.ccbp.in/products'
//     const jwtToken = Cookies.get('jwt_token')
//     const options = {
//       headers: {
//         Authorization: `Bearer ${jwtToken}`,
//       },
//       method: GET,
//     }

//     const response = await fetch(url, options)

//     if (response.ok === true) {
//       const data = await response.json()
//       const updatedData = data.map(product => ({
//         title: product.title,
//         brand: product.brand,
//         price: product.price,
//         id: product.id,
//         imageUrl: product.image_url,
//         rating: product.rating,
//       }))
//       this.setState({productsList: updatedData})
//     }
//   }

//   componentDidMount() {
//     this.getProductsList()
//   }

//   render(){
//       const {productsList} = this.state
//       return(
//         <div>

//         </div>
//       )
//   }
// }

// export default Products
