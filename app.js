window.onload = function(argument) {

    var lyric = "I-got-I-got-I-got loyalty royalty inside my DNA cocaine quarter-piece got war-and-peace I got power poison pain and joy I got hustle though ambition flow I was born like this since one immaculate conception I transform perform was Yeshua new weapon don't contemplate meditate then off-your-fucking-head this that put kids to bed Realness kill shit 'cause I got millions I got riches buildin' I got dark I got evil that rot I got off I got troublesome heart I just win again then win again like Wimbledon I serve Yeah that's him again sound that engine in is like a bird you see fireworks and Corvette tire skrrt boulevard I know how you work I know just who you are see you's-a-BITCH your hormones probably switch problem is all that sucker-shit Daddy probably snitched heritage backbone don't exist born outside a jellyfish I gauge See my pedigree most definitely don't tolerate front shit I've been through probably offend Paula's oldest son know murder conviction Burners boosters burglars ballers dead redemption scholars fathers dead with kids wish I was fed forgiveness yeah-yeah-yeah-yeah soldier's DNA Born inside beast my expertise checked out in second grade When I was 9 on-sale motel we didn't have nowhere to stay at 29 I've done so well hit cartwheel in my estate And I'm gon' shine like I'm supposed to antisocial extrovert And excellent mean extra work and absentness what fuck you heard And pessimists never struck my nerve and that's a riff gonna plead this case reason my power's here on earth salute truth when prophet say fuck-your-life Tell me somethin' motherfuckers can't tell me nothin' I'd rather die than to listen to imitation abomination in Matrix Dodgin' bullets reapin' what you sow And stackin' up footage livin' on go And sleepin' in a villa Sippin' from a Grammy and walkin' buildin' Diamond ceilin' marble on floors Beach inside window peekin' out window Baby pool godfather goals Only Lord Knows I've been goin' hammer Dodgin' paparazzi freakin' through cameras Eat at Four-Daughters Brock wearin' sandals Yoga on a Monday stretchin' to Nirvana Watchin' all snakes curvin' all fakes Phone never on I don't conversate compromise I just penetrate Sex money murder these are breaks times Level-Number-Nine Look up in sky TEN is on way Sentence killings Motherfucker I got winners You ain't shit without a body on your belt You ain't shit without ticket on your plate ain't sick enough to pull it on yourself ain't rich enough to hit lot and skate Tell me when destruction gonna be my fate Gonna be your fate gonna be our faith Peace to world let it rotate Sex money murder our DNA";

    var words = {};
    var words_attr = [];
    string_handle(lyric);

    var canvas = document.getElementById('c');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (canvas.getContext) {
        var c = canvas.getContext('2d'),
        w = canvas.width,
        h = canvas.height;

        c.strokeStyle = 'red';
        c.fillStyle = 'white';
        c.lineWidth = 5;

        // constructor
        Word = function(key) {
            this.text = key;
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.font = words[key] * 10 + 'px arial';
            this.speed = (words[key]);
        }

        for (key in words) {
            words_attr.push(new Word(key));
        }
        console.log(words_attr.length);

        function animation() {
            for (var i = 0; i < words_attr.length; i++) {
                c.font = words_attr[i].font;
                c.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
                words_attr[i].width = c.measureText(words_attr[i].text).width;
                c.stroke();
            }
            move();
        }

        function move() {
            for (var i = 0; i < words_attr.length; i++) {
                if (words_attr[i].x > w) {
                    words_attr[i].x = -words_attr[i].width;
                    words_attr[i].y = Math.random() * h;
                } else {
                    words_attr[i].x += words_attr[i].speed;
                }
            }
        }

        setInterval(function() {
            c.clearRect(0, 0, w, h);
            animation();
        }, 24); 
    }

    function string_handle(str) {
        var split_str = str.split(" ");
        var word_array = [];
        var word_count = [];

        for (var i = 0; i < split_str.length; i++) {
            check = true;
            for (var j = 0; j <= word_array.length; j++) {

                if(split_str[i] == word_array[j]) {
                    word_count[j]++;
                    check = false;
                    break;
                }
            }
            if (check) {
                word_array.push(split_str[i]);
                word_count.push(1);
            }
        }

        for (var i = 0; i < word_array.length; i++) {
            words[word_array[i]] = word_count[i];
        }
        return words;
    }

}