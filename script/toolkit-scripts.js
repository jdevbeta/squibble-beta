function SquibbleToolkit(){
    var sq = new Object();

    sq.log = new Array(),
    sq.log.to = function(logThis){
        this.push(logThis);
    }

    sq.createKey = function(intLength){
        var length = intLength || 6;
        if(length < 8){
            return Math.random().toString(36).substring(2, length + 2);
        } else {
            var iterate = length / 6;
            iterate = Math.floor(iterate) + 1;
            var randomArray = [];
            for(var i = 0; i < iterate; i++){
                randomArray.push(Math.random().toString(36).substring(2,8))
            }
            return randomArray.join("").substring(0, length);
        }
    }

    sq.userAgent = function(){
        var Time = new Date();
        return {
            cookies: navigator.cookieEnabled,
            lang: navigator.language,
            platform: navigator.platform,
            agent: navigator.userAgent,
            vendor: navigator.vendor,
            localStorage: localStorage ? true : false,
            speech: webkitSpeechRecognition ? true : false,
            timezone: Time.getTimezoneOffset(),
            time: Time.toTimeString(),
            date: Time.toDateString(),
            screen: {
                width: window.screen.width,
                height: window.screen.height,
                pixelDepth: 24,
                orientation: window.screen.orientation.type
            }
        }
    }

    sq.between = function(stringSrc, charsOne, charsTwo, keepChars){
        var indexOne = stringSrc.indexOf(charsOne);
        var indexTwo = stringSrc.lastIndexOf(charsTwo);
        if(!keepChars){
            indexOne = indexOne + charsOne.length;
        } else {
            indexTwo = indexTwo + charsTwo.length;
        }
        return stringSrc.substring(indexOne, indexTwo);
    }

    return sq;
}