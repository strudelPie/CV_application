import uniqid from "uniqid";

let exId = uniqid();

const expItem = {
    [exId] : {
        position: {
            value: 'Junior Dev',
            placeholder: 'Position',
            id: uniqid(),
        },
        organisation: {
            value: '',
            placeholder: 'Organisation',
            id: uniqid(),
        },
        location: {
            value: '',
            placeholder: 'Location',
            id: uniqid(),
        },
        from: {
            value: '',
            placeholder: 'From',
            id: uniqid(),
        },
        to: {
            value: '',
            placeholder: 'To',
            id: uniqid(),
        }
    }
}

export { expItem, exId };