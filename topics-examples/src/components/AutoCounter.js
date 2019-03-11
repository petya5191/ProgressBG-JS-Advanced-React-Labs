import React from 'react';

export class AutoCounter extends React.Component{
    constructor(props){
        console.log('====================================');
        console.log(`constructor is fired`);
        console.log('====================================');
        super(props)

        this.state = {
            'count': 0,
        }
        this.startCount = this.startCount.bind(this);
    }

    startCount(){
        // console.dir(this.state);

        setInterval( ()=>{
            this.setState( (prevState,prevProps)=>{
                return {'count': prevState.count + 1}
            } );
        }, 1000);
    }

    shouldComponentUpdate(){
        console.log('====================================');
        console.log(`shouldComponentUpdate fired`);
        console.log('====================================');

        // if false is returned, the render() would not be fired!
        return true;
    }

    render(){
        console.log('====================================');
        console.log(`render is fired`);
        console.log('====================================');
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.startCount}>start</button>
            </div>
        )

    }


}
