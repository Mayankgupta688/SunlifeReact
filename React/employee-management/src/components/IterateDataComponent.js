import "../styles/IterateDataComponent.css"

export default function IterateDataComponent() {

    var imageData ="https://media.istockphoto.com/photos/speech-of-leader-picture-id936308858?k=20&m=936308858&s=612x612&w=0&h=wUg8CWCsGVqIATjxM4wpj50YBm3OIlNMU0TAQInHvf8=";
    var dataList = [
        {"id":"26", "createdAt": "2019-07-09T18:08:17.841Z", "name":"Lyric Metz", "avatar":imageData},
        {"id":"28", "createdAt": "2019-07-09T20:32:28.258Z", "name":"Efren Windler PhD", "avatar":imageData},
        {"id":"29", "createdAt": "2019-07-10T03:43:08.857Z", "name":"Kenya Reichel", "avatar":imageData}
    ];

    var currentTime = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()

    var divStyle= {
        width: "300px"
    }

    return (
        <div className="employee-list">
            <ShowTime currentTime={currentTime}></ShowTime>
            {dataList.map((value, index) => {
                return (
                    <div className="card-data" style={{display: "inline-block", margin: "10px"}}>
                        <div className="card" style={divStyle}>
                        <img src={value.avatar} className="card-img-top" alt={value.name} />
                        <div style={{color: "red"}} className="card-body">
                            <h5 className="card-title">{value.name}</h5>
                            { value.id % 2 === 0 && <p className="card-text">{value.id}: Even Id, Some quick example text to build on the card title and make up the bulk of the card's content.</p> }
                            { value.id % 2 === 1 && <p className="card-text">{value.id}: Odd Id, Some quick example text to build on the card title and make up the bulk of the card's content.</p> }
                            <input type="button" className="btn btn-primary" value="Delete" />
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function ShowTime(props) {
    return <h1>Updated Employee List is Given Below: {props.currentTime}</h1>
}