Vue.component('mainlogin', {
    template: `<div id="mainLogin" v-if="!this.session">
        <div class="loginTools">
            <button class="signin" @click="changeApp(\'form-signin\')"> Sign In </button>
            <button class="register" @click="changeApp(\'form-register\')"> New User </button>
        </div>
        <transition mode="out-in"
            enter-active-class="animated flipInY"
            leave-active-class="animated flipOutY">
        <keep-alive>
                <component :is="activeApp"></component>
        </keep-alive>
        </transition>
        <button class="loginButton" @click=attemptLogin> Submit </button>
        </div>
    `,
    methods: {
        changeApp(appName){
            var prevApp = this.activeApp;
            console.log('Switching to: '+appName);
            this.activeApp = appName;
            this.$el.classList.remove(prevApp);
            this.$el.classList.add(appName);
            return prevApp;
        },
        attemptLogin(){
            this.approveLogin();
        },
        approveLogin(){
            this.session = true;
            sqbl.vue = new SquibbleEngine();
        },
    },
    data(){
        return {
            activeApp: null,
            session: null,
        }
    },
    mounted(){
        return this.changeApp('form-signin');
    }
})

Vue.component('form-register', {
    name: 'form-signin',
    template: ` 
        <div class="registerApp">
            <formbuilder :dataArray="this.auth.concat(this.user)"></formbuilder>
        </div>
    `,
    data(){
        return sqblTemplate.login;
    }
})

Vue.component('form-signin', {
    name: 'form-signin',
    template: `
        <div class="signinApp">
            <formbuilder :dataArray="this.auth"></formbuilder>
        </div>
    `,
    data(){
        return sqblTemplate.login;
    }
})

Vue.component('loading-assets', {
    name: 'loading-assets',
    template: `
        <div id="loading" style="z-index: -1">
        <h1>Loading...</h1>
            <div id="mainProgress">
                <span class="bar"></span>
            </div>
        </div>
    `,

})