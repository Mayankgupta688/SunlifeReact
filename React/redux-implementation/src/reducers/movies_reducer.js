export default function movies_reducer(movieStore=[], action) {
    if(action.type === "Add Movies") {
        return [{
            name: "XYX",
            length: 10
        }]
    }

    return movieStore;
}