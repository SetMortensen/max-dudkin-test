const initialState = {
    isFetching:true
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch (action.type) {
        case "CONTENT_LOADED":
            newState['content_'+action.payload.fileName] = action.payload;
            delete newState['content_'+action.payload.fileName].fileName;
            newState.isFetching = false;
            break;
        case "FETCHING":
            newState.isFetching = true;
            break;
        default:
            break;
    }
    return newState;
};

export default reducer;