import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import EmployeeListComponent from "./components/EmployeeListComponent";
import EmployeeCountComponent from "./components/EmployeeCountComponent";
import MovieComponent from "./components/MovieComponent";

import rootReducer from "./reducers/index";

// Provide Information about the Reducer
var appStore = createStore(rootReducer);

ReactDOM.render((
    <Provider store={appStore}>
        <MovieComponent></MovieComponent>
        <EmployeeListComponent></EmployeeListComponent>
        <EmployeeCountComponent></EmployeeCountComponent>
    </Provider>
), document.getElementById("root"))
