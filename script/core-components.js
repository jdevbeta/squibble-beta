Vue.component("mainsearch", {
    template: `<div id="mainSearch">
        <icon name="search" size="5vh">
        </icon><input type="text" placeholder="Search"/>
        </div>
    `,
    methods: {
        executeSearch(){
            
        }
    }
})

Vue.component("profile", {
    template: `
        <div id="mainProfile" @click="minimize">
            <span id="circleContainer">
                <div class="profileCircled">
                    <img></img>
                </div>
            </span>
            <h1 class="username"> {{userData.name.first}} </h1>
            <h2 class="userrank"> Starfleet Captain </h2>
            <span class="userstars">
                <icon size="5vh" name="starHalf"></icon>
            </span>
            <profiletools></profiletools>
        </div>
    `,
    methods: {
        minimize(){
            console.log(this.$el);
            this.$el.classList.toggle('minimized');
        }
    },
    props: {
        userData: {
            type: [Object],
        }
    }
})

Vue.component("profiletools", {
    template: `
        <div class="profileTools">
            <icon name="assessment" size="5vw"></icon>
            <icon size="5vw"></icon>
            <icon></icon>
            <icon></icon>
            <icon></icon>
        </div>
    `,
})

Vue.component("navigation", {
    template: `<div class="nav-container" :id="navid">
        <ul>
        <li v-for="navItem in navlocation">
        <h1 
            @click="navClick(navItem.leftClick)"
        > {{navItem.title}} </h1>
        </li>
        </ul>
        </div>
    `,
    methods:{
        navClick(toExecute){
            if(typeof toExecute === 'function'){
                return toExecute();
            } else {
                return alert('Feature Coming Soon.')
            }
        }
    },
    props: {
        'navlocation': {
            type: [Array],
        },
        'navid': {
            type: [String],
        },
    }
})

Vue.component("textinput", {
    template: `
        <div id="mainInput">
            <span contenteditable="true"></span>
        </div>
    `,
})

Vue.component("maindisplay", {
    template: `
        <div id="mainDisplay">
        </div>
    `,
})

Vue.component('sqbl-tools', {
    template: `
        <div class="basicToolbar" :id="barId">
            <icon
                :name="tool.icon" 
                v-for="tool in tools" 
                :key="tool.id"
                w="3.5vw"
                h="100%"
            ></icon>
        </div>
    `,
    methods:{
    },
    props: {
        tools: {
            type: Array,
        },
        barId: {
            type: String,
        }
    }
})


Vue.component('contactus',{
    template: `
        <div id="mainContact">
            <lighttheme></lighttheme>
            <darktheme></darktheme>
            <icon name="store" size="5vh"></icon>
        </div>
    `,
})

Vue.component("darktheme",{
    template: `
        <span id="darkTheme" class="darkBackground" @click="changeTheme">
            <icon name="opacity" size="100%"></icon>
        </span>
    `,
    methods: {
        changeTheme(){
            document.body.classList.remove('lightBackground');
            document.body.classList.add('darkBackground');
        }
    }
})

Vue.component("lighttheme",{
    template: `<span id="lightTheme" class="lightBackground" @click="changeTheme">
        <icon name="opacity" size="100%"></icon>
        </span>
    `,
    methods: {
        changeTheme(){
            document.body.classList.remove('darkBackground');
            document.body.classList.add('lightBackground');
        }
    }
})