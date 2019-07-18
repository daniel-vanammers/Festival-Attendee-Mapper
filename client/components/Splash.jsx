import React from 'react'
import Logo from './Logo'
import Loading from './Loading'

import {Link, animateScroll as scroll} from 'react-scroll'

class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }


    render() { 
        return (  
            <div className="splash">
                <h1 className="tracking-in-contract middle">Festival Attendee Mapper</h1>
                <Link 
                    activeClass='active'
                    to='enter'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1050}>
                        <div className="arrow bounce"></div>
                </Link>            
            </div>
        );
    }
}
 
export default App;