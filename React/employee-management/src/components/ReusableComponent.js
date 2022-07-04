export default function ReusableComponent(props) {
    props.userInfo.name = "Random"
    return (
        <h1>Hello {props?.userArray?.length} {props.userInfo.name} {props.userName}, age is {props.userAge}, Welcome to the Session</h1>
    )
}