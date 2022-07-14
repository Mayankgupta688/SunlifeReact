import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { loadEmployeeData } from "./actions/employeeAction";

import EmployeeListComponentWrapper from "./components/EmployeeListComponent";
import EmployeeCountComponent from "./components/EmployeeCountComponent";
import MovieComponent from "./components/MovieComponent";

import rootReducer from "./reducers/index";

// Provide Information about the Reducer
var appStore = createStore(rootReducer, applyMiddleware(thunk));

appStore.dispatch(loadEmployeeData())

ReactDOM.render((
    <Provider store={appStore}>
        <MovieComponent></MovieComponent>
        <EmployeeListComponentWrapper></EmployeeListComponentWrapper>
        <EmployeeCountComponent></EmployeeCountComponent>
    </Provider>
), document.getElementById("root"))
