import React from "react";
import BaseHoc from "../hoc/BaseHoc";

class ClassComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: "Roshni",
            age: 21,
        }

        console.log("Constructor");
    }

    componentDidMount() {
        console.log("Component did mount");
    }

    componentDidUpdate() {
        console.log("Component did update");
    }

    componentWillUnmount() {
        console.log("Component did unmount");
    }

    render() {

        console.log("Render")

        return (
            <div>
                <p>This is Class Component</p>
                <button
                    onClick={
                        () => this.setState({
                            ...this.state,
                            age: this.state.age +1,
                        })
                    }>Add 1 to age</button>
                <h1>{this.state.age}</h1>
            </div>
        );
    }
}

export default BaseHoc(ClassComponent);