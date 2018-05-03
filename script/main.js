var Security = function(){
    var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    function newKey(){
        var obj = new Object();
        var used = new String();
        for(var i = 0; i<abc.length; i++){
            var assign = Math.floor(Math.random() * (25) );
        }

        return obj;
    }
    
    var key = newKey();

    return key;
}