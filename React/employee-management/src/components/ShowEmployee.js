export default function ShowEmployee(props) {

    function updateDetails(event) {
        props.history.push("/employees/" + event.target.id)
    }


    return (
        <div className="card-data" style={{display: "inline-block", margin: "10px", width: "200px"}}>
            <div className="card">
            <img src="https://media.istockphoto.com/photos/speech-of-leader-picture-id936308858?k=20&m=936308858&s=612x612&w=0&h=wUg8CWCsGVqIATjxM4wpj50YBm3OIlNMU0TAQInHvf8=" className="card-img-top" alt={props.employee.name} />
            <div style={{color: "red"}} className="card-body">
                <h5 className="card-title">{props.employee.name}</h5>
                <p className="card-text">Employee Id: {props.employee.id} created at: {props.employee.createdAt}: Even Id, Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <input type="button" className="btn btn-primary" id={props.employee.id} value="Delete" style={{marginRight: "5px"}} onClick={props.deleteEmployee} />
                <input type="button" className="btn btn-primary" value="Details" onClick={updateDetails} />
            </div>
            </div>
        </div>
    )
}