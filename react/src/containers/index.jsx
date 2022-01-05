import React from 'react';
import HelloWorld from '../components/HelloWorld/HelloWorld.jsx';

class Index extends React.Component {
    state = {
        title: "This is a base react project."
    }

    render() {
        const { title } = this.state;
        return (
            <div>
                <h2>{title}</h2>
                <HelloWorld />
            </div>
        )
    }
}

export default Index;