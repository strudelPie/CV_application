import uniqid from "uniqid";

let edId = uniqid();

const edItem = {
    [edId] : {
        institution: {
            value: '',
            placeholder: 'Institution',
            id: uniqid(),
        },
        city: {
            value: '',
            placeholder: 'City',
            id: uniqid(),
        },
        qualification: {
            value: '',
            placeholder: 'Qualification',
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

export { edItem , edId };