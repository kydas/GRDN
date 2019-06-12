import React from 'react';

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
        Meteor.call("plants.getPlant", {
            plantId: '12345'                   //this doesn't mean anything right now
        }, (err, res) => {
            if (err){
                alert(err);
            } else {
                //sucess
                console.log(res);
                this.setState({
                    plant: res
                });
            }
        })
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

