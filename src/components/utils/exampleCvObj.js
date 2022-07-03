import uniqid from "uniqid";
import avatar from '../../resources/avatar.png'


const exampleCV = {
    pInfo: {
        firstName: {
            value: 'Joe',
            placeholder: 'First Name',
            id: uniqid(),
        },
        secondName: {
            value: 'Bloggs',
            placeholder: 'Surname',
            id: uniqid(),
        },
        title: {
            value: 'Full Stack Developer',
            placeholder: 'Title',
            id: uniqid(),
        },
        address: {
            value: '14 Fictitious Lane, Sham City, SC4 XXX',
            placeholder: 'Address',
            id: uniqid(),
        },
        email: {
            value: 'joe.bloggs@gmail.com',
            placeholder: 'Email',
            id: uniqid(),
        },
        telephone: {
            value: '12345 678910',
            placeholder: 'Telephone',
            id: uniqid(),
        },
        description: {
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit diam quam, eget pretium arcu aliquet et. Cras iaculis maximus nibh id tincidunt. Nunc quis quam at sem bibendum laoreet accumsan quis libero. Mauris magna libero, pretium sed laoreet ut, maximus porttitor libero. Nulla consequat elit quis sem egestas, ac fermentum diam tristique. Cras aliquet vitae est quis mattis. Cras id pulvinar enim. Suspendisse et risus eleifend, consequat augue non, volutpat velit. Nullam eu nunc justo. Vestibulum hendrerit placerat mauris vel tempor. Aliquam sollicitudin iaculis venenatis. Donec ipsum neque, varius sed nibh eget, egestas feugiat est. Cras scelerisque quam ac sem efficitur ultrices. Donec eget lacinia tellus, nec blandit ligula.',
            placeholder: 'Description',
            id: uniqid(),
        },
        photo: {
            value: avatar,
            placeholder: '',
            id: uniqid(),
        }
    },
    experience: {
        [uniqid()] : {
            position: {
                value: 'Senior Web Developer',
                placeholder: 'Position',
                id: uniqid(),
            },
            organisation: {
                value: 'Apocryphal',
                placeholder: 'Organisation',
                id: uniqid(),
            },
            location: {
                value: 'Sham City',
                placeholder: 'Location',
                id: uniqid(),
            },
            from: {
                value: '2019',
                placeholder: 'From',
                id: uniqid(),
            },
            to: {
                value: 'Present',
                placeholder: 'To',
                id: uniqid(),
            }
        },
        [uniqid()] : {
            position: {
                value: 'Junior Web Developer',
                placeholder: 'Position',
                id: uniqid(),
            },
            organisation: {
                value: 'Spurious Limited',
                placeholder: 'Organisation',
                id: uniqid(),
            },
            location: {
                value: 'Specious City',
                placeholder: 'Location',
                id: uniqid(),
            },
            from: {
                value: '2016',
                placeholder: 'From',
                id: uniqid(),
            },
            to: {
                value: '2019',
                placeholder: 'To',
                id: uniqid(),
            }
        }
    },  
    education: {
        [uniqid()] : {
            institution: {
                value: 'University of Tech',
                placeholder: 'Institution',
                id: uniqid(),
            },
            city: {
                value: 'Sham City',
                placeholder: 'City',
                id: uniqid(),
            },
            qualification: {
                value: 'Masters',
                placeholder: 'Qualification',
                id: uniqid(),
            },
            from: {
                value: '2014',
                placeholder: 'From',
                id: uniqid(),
            },
            to: {
                value: '2015',
                placeholder: 'To',
                id: uniqid(),
            }
        },
        [uniqid()] : {
            institution: {
                value: 'University of Good Studies',
                placeholder: 'Institution',
                id: uniqid(),
            },
            city: {
                value: 'Specious City',
                placeholder: 'City',
                id: uniqid(),
            },
            qualification: {
                value: 'Bachelors',
                placeholder: 'Qualification',
                id: uniqid(),
            },
            from: {
                value: '2011',
                placeholder: 'From',
                id: uniqid(),
            },
            to: {
                value: '2014',
                placeholder: 'To',
                id: uniqid(),
            }
        } 
    }
}

export default exampleCV;