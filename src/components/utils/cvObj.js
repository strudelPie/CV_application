import uniqid from "uniqid";

const cv = {
    pInfo: {
        firstName: {
            value: '',
            placeholder: 'First Name',
            id: uniqid(),
        },
        secondName: {
            value: '',
            placeholder: 'Surname',
            id: uniqid(),
        },
        title: {
            value: '',
            placeholder: 'Title',
            id: uniqid(),
        },
        address: {
            value: '',
            placeholder: 'Address',
            id: uniqid(),
        },
        email: {
            value: '',
            placeholder: 'Email',
            id: uniqid(),
        },
        telephone: {
            value: '',
            placeholder: 'Telephone',
            id: uniqid(),
        },
        description: {
            value: '',
            placeholder: 'Description',
            id: uniqid(),
        },
    },
    experience: {
        [uniqid()] : {
            position: {
                value: 'Senior Dev',
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
}

export default cv;