import ContainerComponent from "./ContainerComponent";

export default class InheritContainerComponent extends ContainerComponent {
    render() {
        debugger;
        return <h1>Inherited Name is {this.props.showName()}</h1>
    }
}