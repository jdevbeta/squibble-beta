function SquibbleComputer(){

    var Developer  = true;

    var about = {
        release: 'alpha',
        number: '1.000.001',
        application: 'squibble'
    }

    var database = {
        auth: sqblTemplate.auth,
        user: sqblTemplate.user,
        app: sqblTemplate.app,
        setting: sqblTemplate.setting
    }

    var elements = {
        login: '#squibble-login',
        application: '#squibble-engine',
    }
    
    var tool = new SquibbleToolkit();

    var $n = {
        a: about,
        d: database,
        e: elements,
        t: tool
    }

    this.vm = [
        new Vue({
            el: "#squibble-login"
        })
    ]

    this.vm.app = function(){
        var nVm = new Vue({
            el: "#squibble-engine",
            data: database
        })
        this.push(nVm);
    }

    if(Developer === true){
        window.Dev = $n;
    }

    return this;
}

var sqbl = new SquibbleComputer();