import React from 'react'
import Logo from './Logo'
import Loading from './Loading'

class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }


    render() { 
        return (  
            <React.Fragment className="splash">
                <h1 className="tracking-in-expand middle">Festival Attendee Mapper</h1>
                <Logo/>
                <Loading/>
            </React.Fragment>
        );
    }
}
 
export default App;