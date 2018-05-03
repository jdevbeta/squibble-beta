Vue.component('icon', {
    props: {
        name: {
        type: [String],
        default:'star'
        },
        size: {
        type: [String],
        default: '24px'
        },
        color: {
        type: [String]
        },
    },
    template: `
        <span class="icon"
            v-bind:style="{width:this.size, height:this.size}">
            <svg class="iconSvg" 
                viewBox="0 0 24 24"
                v-html=svgHtml 
                width="100%" 
                height="100%">
            </svg>
        </span>
    `,
    computed: {
        svgHtml(){
            return library[this.name];
        }
    },
})

Vue.component("darktheme",{
    template:`<span id="darkTheme" class="darkBackground" @click="changeTheme">
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
    template:`<span id="lightTheme" class="lightBackground" @click="changeTheme">
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

Vue.component('contactus',{
    template: `<div id="mainContact">
        <lighttheme></lighttheme>
        <darktheme></darktheme>
        <icon name="store" size="5vh"></icon>
        </div>
    `
})

Vue.component("mainsearch", {
    template: `
        <div id="mainSearch">
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
            <h1 class="username"> </h1>
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
})

Vue.component("profiletools", {
    template: `<div class="profileTools">
        <icon name="assessment" size="5vw"></icon>
        <icon size="5vw"></icon>
        <icon></icon>
        <icon></icon>
        <icon></icon>
        </div>
    `
})

Vue.component("mainnavigation", {
    template:`<div id="mainNavigation">
        <ul>
        <li>
        <h1> Title </h1>
        </li>
        </ul>
        </div>
    `
})

Vue.component("textinput", {
    template:`<div id="mainInput">
        <span contenteditable="true"></span>
        </div>
    `
})

Vue.component("subnavigation", {
    template:`<div id="subNavigation">
        </div>
    `
})

Vue.component("maindisplay", {
    template:`<div id="mainDisplay">
        </div>,
    `
})

Vue.component('maintools', {
    template:`<div id="mainTools">
        </div>
    `
})

Vue.component('subtools', {
    template:`<div id="subTools">
        </div>
    `
})