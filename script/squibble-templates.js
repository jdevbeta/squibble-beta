var sqblTemplate = {
    auth: {
        username: null,
        session: null,
    },
    app: {
        workspace:{
            tools: [
                {icon: 'star'},
                {icon: 'home'}
            ],
            data: [
                {title: 'Welcome', leftClick: function(){alert();}}
            ]
        },
        storage: {
            tools: [
                {icon: 'createNewFolder'},
                {icon: 'fileDownload'},
                {icon: 'fileUpload'},
                {icon: 'shuffle'},
                {icon: 'settings'},
            ],
            data: [
                {title: 'Greetings! ', mem: 'MemorySlot1'},
                {title: 'How To: '},
                {title: 'Contact Us: '},
            ]
        },
    },
    db: {
        MemorySlot1: { 
            app: 'SquibbleWord',
            contents: [
                {
                    id: 0,
                    type: 'message', 
                    text: [
                        'Welcome to the Squibble Alpha!',
                        'In the Alpha Version we\'ll be seeing quite a few major updates before it is ready for release.',
                        'But for now you have the chance to get excited and see what is in store for the near future!'
                    ]
                }
            ],
        }
    },
    user: {
        name: {
            title: null,
            first: null,
            last: null
        },
        location: {
            num: null,
            street: null,
            city: null,
            zip: null
        },
        dob: {
            month: null,
            day: null,
            year: null
        },
        picture: {

        },
        email: {
            primary: null,
        },
    },
    setting: {
        theme: null,
        background: null,
    },
    index: {},
    login: {
        auth: [
            {class: 'auth', id: 'username', title: 'Username', icon: 'accountBox', value: null},
            {class: 'auth', id: 'password', title: 'Password', icon: 'security'}
        ],
        user: [
            {class: 'auth', id: 'confirm', title: 'Password'},
            {class: 'name', id: 'title', title: 'Name', width: '15%'},
            {class: 'name', id: 'first', width: '60%'},
            {class: 'name', id: 'middle', width: '30%'},
            {class: 'name', id: 'last', width: '60%'},
            {class: 'email', id: 'primary', title: 'E-Mail', icon: 'contactMail'},
            {class: 'location', id: 'zip', title: 'Zip Code', icon: 'locationOn'},
            {class: 'dob', id: 'month', title:'Birthday', icon: 'today'},
            {class: 'dob', id: 'day'},
            {class: 'dob', id: 'year'},
        ]
    },
}