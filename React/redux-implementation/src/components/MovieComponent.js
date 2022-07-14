import React from 'react';

import { connect } from "react-redux";

class MovieComponent extends React.Component {

    render() {
        return (
            <>This is Movie Component. Need to Work upon the same</>
        )
    }
}

function mapPropsFromStore(store) {
    return {
        movies: store.movies
    }
}

MovieComponent = connect(mapPropsFromStore, null)(MovieComponent)

export default MovieComponent