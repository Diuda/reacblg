import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addProduct, addProductAPI } from "../actions/index";


const mapDispatchToProps = dispatch => {
    return {
        // addProduct: product=>dispatch(addProduct(product)),
        addProductAPI: product=>dispatch(addProductAPI(product))
    };
};


class ConnectedForm extends Component {
    constructor() {
        super();

        this.state = {
            pname: "",
            pid: "",
            pcategory: "",
            pprice: "",
            pcolor: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        const { pname, pid, pcategory, pprice, pcolor } = this.state;
        const id = uuidv1();
        this.props.addProductAPI({id, pname, pid, pcategory, pprice, pcolor });
        this.setState({
            pname: "",
            pid: "",
            pcategory: "",
            pprice: "",
            pcolor: ""
        });
    }


    render() {
        const { pname, pid, pcategory, pprice, pcolor } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">
                    Product Name
                    </label>
                    <input type="text" className="form-control" id="pname" value={pname} onChange={this.handleChange}/>
                    <label htmlFor="title">
                    Product Id
                    </label>
                    <input type="text" className="form-control" id="pid" value={pid} onChange={this.handleChange}/>
                    <label htmlFor="title">
                    Category
                    </label>
                    <input type="text" className="form-control" id="pcategory" value={pcategory} onChange={this.handleChange}/>
                    <label htmlFor="title">
                    Price
                    </label>
                    <input type="text" className="form-control" id="pprice" value={pprice} onChange={this.handleChange}/>
                    <label htmlFor="title">
                    Color
                    </label>
                    <input type="text" className="form-control" id="pcolor" value={pcolor} onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    Save
                </button>
            </form>
        );
    }
}


const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;


