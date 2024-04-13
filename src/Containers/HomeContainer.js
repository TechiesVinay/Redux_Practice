import {connect} from 'react-redux'
import Home from "../Components/Home";
import {AddToCart} from '../Services/Actions/Action'
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    AddToCartHandle : data => dispatch(AddToCart(data))
})

export default connect(mapDispatchToProps, mapStateToProps)(Home)

// export default Home;
 