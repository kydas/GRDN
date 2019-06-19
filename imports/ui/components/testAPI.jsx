import React from 'react';



export default class TestAPI extends React.Component{
    constructor() {
        super();
        this.state = {
            plant: null
        }
    }

    componentWillMount() {


        Meteor.call("plants.getPlant", "12345", (error, result) => {
            if (error){
                console.log(error);
            } else {
                //sucess
                console.log(result);
                this.setState({
                    plant: result
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
                {this.state.plant.common_name}
            </div>
        )
    }
}
