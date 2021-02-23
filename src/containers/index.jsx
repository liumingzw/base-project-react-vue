import React from 'react';
import HelloWorld from '../components/HelloWorld/HelloWorld.jsx';

class Index extends React.Component {
    render() {
        return (
            <div>
                <h2>This is a base react project.</h2>
                <HelloWorld />
            </div>
        )
    }
}

export default Index;