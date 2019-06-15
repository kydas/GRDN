import React from 'react';
import getPlant from '../server/trefleAPITest.js'

// function testPlant() { Meteor.call("plants.getPlant", {
//     plantId: '12345'                   //this doesn't mean anything right now
// }, (err, res) => {
//     if (err){
//         alert(err);
//     } else {
//         //sucess
//         console.log(res);
//         return res;
//     }
// })};

export default class TestAPI extends React.Component{
    constructor() {
        super();
        this.state = {
            plant: null
        }
    }

    componentWillMount() {

        const plant = Promise.await(getPlant());
        this.setState({
            plant: plant
        });
        // Meteor.call("plants.getPlant", "12345", (error, result) => {
        //     if (error){
        //         alert(error);
        //     } else {
        //         //sucess
        //         console.log(result);
        //         this.setState({
        //             plant: result
        //         });
        //     }
        // })
    }
    render() {
        if (this.state.plant == null){
            return "loading"
        }
        return (
            <div>
                {this.state.plant}
            </div>
        )
    }
}

