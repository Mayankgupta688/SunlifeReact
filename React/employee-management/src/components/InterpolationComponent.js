export default function InterpolationComponent() {

    var userName = "Mayank Gupta";
    var userAge= 10;

    return (
        <>
            <h1>Hello {returnName()}...</h1>
            <h2>User Name is: {userName}</h2>
            <h3>User Age is: {userAge}</h3>
            <h4>Todays Date: {new Date().getHours()} {new Date().getMinutes()} {new Date().getSeconds()}</h4>
        </>
    )
}

function returnName() {
    return "TechnoFunnel"
}