
export default function layer(state = [], action ) {
    switch (action.type) {
        case 'LAYER_ADD':
            const layer = action.payload;
            return [...state, layer];
        default:
            return state;
    }
}