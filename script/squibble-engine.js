function SquibbleEngine(){
    
    var LoadEl = document.querySelector('#loading');
    var Bar = document.querySelector('#mainProgress .bar');
    var Delay = 200;
    var styleDelay = Delay/1000;
    console.log(styleDelay)
    Bar.style.transition = "max-width "+styleDelay+"s linear";
    function Loaded(number){
        return Bar.style.maxWidth = number+"%";
    }

    this.load = Loaded;

    function beginLoad(){

        var status = false;
        var token = localStorage.getItem('sqblToken');
        
        if(token){
            status = true;
        } else {
            token = sys.app.substring(0,4) + sys.version.substring(0,2);
            localStorage.setItem('sqblToken', token);
            status = true;
        }

        Loaded(10);
        setTimeout(loadVueModel, Delay, token);

        return;
    }

    function loadVueModel(token){
        Loaded(20);
        sqbl.vm.app();
        setTimeout(secureSession, Delay, token);
    }
    
    function secureSession(token){

        Loaded(30);
        setTimeout(loadStorage, Delay, token);
    }

    function loadStorage(token){
        Loaded(40);

        setTimeout(parseData, 200, token);
    }

    function parseData(token){
        
        Loaded(60);
        setTimeout(loadAssets, 200, token);
    }

    function loadAssets(token){

        Loaded(80)
        setTimeout(cleaningUp, 200, token);
    }

    function cleaningUp(token){

        function cleanInterface(){

            setTimeout(function(){
                LoadEl.remove();
            }, 1000)

            setTimeout(function(){
                document.querySelector('#squibble-engine')
                    .classList.remove('disabled');
            }, 300)

            setTimeout(function(){
                document.getElementById('disabled')
                    .remove();
            }, 500)
        }

        cleanInterface();
        Loaded(100);
    }

    return setTimeout(beginLoad,500);
}