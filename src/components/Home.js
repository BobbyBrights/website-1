import React from 'react'
import MainToolbar from './MainToolbar'
import preload from './data.json'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }
    render() {
        return (
            <div>
                <MainToolbar/>
                <div>
                    {preload.hotels.map(hotel => {
                        return(
                            <li key={hotel.hotelname}>
                            <Link to={`hotel/${hotel.hotelname}`} >
                            {hotel.hotelname}
                                {hotel.category}
                            </Link>
                            </li>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Home
