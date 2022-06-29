import uniqid from "uniqid";

const expItem = {
    [uniqid()] : {
        position: {
            value: '',
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

export default expItem;