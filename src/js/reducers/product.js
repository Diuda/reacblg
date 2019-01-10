import {
    ADD_PRODUCT
} from "../constants/action-type";

const initialState = {
    products: []
};


export default function product(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state,
                products: [...state.products, action.payload]
            };


        default:
            return state;
    }
};
