import React from "react";
import { connect } from "react-redux";


const mapStateToProps = state => {
    return { products: state.products }
};


const ConnectedList = ({ products }) => (
    <ul className="list-group list-group-flush">
        {/* {products.map(el => (
            <li className="list-group-item" key={el.id}>
               <span> { el.pname } </span>
               <span> { el.pprice } </span>
               <span> { el.pcategory } </span>
               <span> { el.pcolor } </span>
            </li>
        ))} */}
    </ul>
);



const List = connect(mapStateToProps)(ConnectedList);

export default List;