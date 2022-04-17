import './Landing_Page.scss'

import Grid from '@material-ui/core/Grid';
import Login from '../Login/Login'
import iphone from '../../assets/Iphone_13_Pro.png'

const LandingPage = () => {
    return (
        <Grid container xs={12} className="landing-page-wrapper">
            <Grid item xs={8} className="landing-page-image-grid">
                <img src={iphone} alt={'iphone'} className="landing-page-image" />
                <div className="heading-bio">
                    <h1>Shop Bridge.com</h1>
                    <h3>your satisfaction is our happiness</h3>
                    <p>Saves time and efforts.
                        The convenience of shopping at home.
                        Wide variety/range of products are available.
                        Good discounts / lower prices.
                        Get detailed information about the product.
                        We can compare various models/brands.</p>
                </div>
            </Grid>
            <Grid item xs={4} className='login-screen-grid'>
                <Login />
            </Grid>
        </Grid>)
}

export default LandingPage