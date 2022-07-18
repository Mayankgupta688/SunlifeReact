import React, { lazy, Suspense } from 'react';

export default class LazyLoading extends React.Component {

    renderHomeComponent = () => {
        debugger;
        var LazyComponent = lazy(() =>  import("../components/HomeComponent"));
        return (
            <>
                <Suspense fallback={<h3>Loading...</h3>}>
                    <LazyComponent></LazyComponent>
                </Suspense>
            </>
        )
    }

    renderHelpComponent = () => {
        var LazyComponent = lazy(() =>  import("../components/HelpComponent"));
        return (
            <>
                <Suspense fallback={<h3>Loading...</h3>}>
                    <LazyComponent></LazyComponent>
                </Suspense>
            </>
        )
    }

    render() {
        return (
            <div>

                <h1>This is Lazy Component</h1><br/><hr/>
                {this.props.name === "Mayank" && (
                    this.renderHomeComponent()
                )}
                
                {this.props.name === "Anshul" && (
                    this.renderHelpComponent()
                )}

            </div>
        )
    }
}