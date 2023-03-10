function init() {
    //mobile detection and redirection
    if (mobileCheck() == true || navigator.userAgentData.mobile == true) {
        var HTMLfilename = document.location.href;
        var filename = HTMLfilename.substring(HTMLfilename.lastIndexOf('/') + 1);
        if (filename = 'index.html') {
            filename = 'index-mobile.html';
        }
        else {
            filename = filename.replace('desktop', 'mobile');
        };
        document.location = filename;
        return(null);
    };

    //apply favicon content
    document.head.insertAdjacentHTML('beforeend', `
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-stuff/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-stuff/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-stuff/favicon-16x16.png">
        <link rel="manifest" href="/favicon-stuff/site.webmanifest">
        <link rel="mask-icon" href="/favicon-stuff/safari-pinned-tab.svg" color="#2b2929">
        <link rel="shortcut icon" href="/favicon-stuff/favicon.ico">
        <meta name="msapplication-TileColor" content="#2b2929">
        <meta name="msapplication-config" content="/favicon-stuff/browserconfig.xml">
        <meta name="theme-color" content="#2b2929">`);

    const location = document.location.href.substring(document.location.href.lastIndexOf('/') +1);

    //introbox activation
    if (location == 'index.html' && sessionStorage.getItem('first load') == 'false') {
        setTimeout(() => {
            document.getElementById('introbox').classList.add('cleared');
            setTimeout(() => {
                document.getElementById('introbox').style.width = 0, height = 0;
            }, 1001);
        }, 1000);
    };
    sessionStorage.setItem('first load', 'false');
};

function change_page(page) {
    document.body.style.opacity = 0.0;
    setTimeout(() => {
        document.location = page;
    }, 2000);
};

function header_toggled() {
    document.getElementById('header').classList.toggle('open');
};

const gallery_images = ['images/Merch/black hoodie.webp',
                        'images/Merch/black long sleeve t-shirt.webp',
                        'images/Merch/Black t-shirt.webp',
                        'images/Merch/blue t-shirt.webp',
                        'images/Merch/R4R hoodie.webp',
                        'images/Merch/Todd is bad at golf t-shirt.webp',
                        'images/Merch/tote bag.webp',
                        'images/Merch/White Hoodie.webp',
                        'images/Merch/white long sleeve t-shirt.webp',
                        'images/Merch/white t-shirt.webp'];

function is_in_bounds (lower_bound, upper_bound, input) {
    if (input > upper_bound) {
        var difference = input - upper_bound -1;
        input = lower_bound + difference;
    }
    else if (input < lower_bound) {
        var difference = lower_bound - input -1;
        input = upper_bound - difference;
    };
    return(input);
};

function clean_src_input(src) {
    src = src.substring(src.lastIndexOf('/') +1);
    src = decodeURI(src);
    return(src);
};

function gallery_refresh() {
    if (!document.getElementById('image1').src.includes('black%20hoodie')) {
        gallery_num = 1;
        document.getElementById('gallery').style.opacity = 0.0;
        setTimeout(() => {
            document.getElementById('image1').src = gallery_images[0];
            document.getElementById('image2').src = gallery_images[1];
            document.getElementById('image3').src = gallery_images[2];
            setTimeout(() => {
                document.getElementById('gallery').style.opacity = 1.0;
            }, 500);
        }, 500);
    };
};

function gallery_move() {
    document.getElementById('gallery').style.opacity = 0.0;
    setTimeout(() => {
        document.getElementById('image1').src = gallery_images[is_in_bounds(0, gallery_images.length -1, gallery_num%gallery_images.length)];
        document.getElementById('image2').src = gallery_images[is_in_bounds(0, gallery_images.length -1, gallery_num%gallery_images.length +1)];
        document.getElementById('image3').src = gallery_images[is_in_bounds(0, gallery_images.length -1, gallery_num%gallery_images.length +2)];
        gallery_num++;
        setTimeout(() => {
            document.getElementById('gallery').style.opacity = 1.0;
        }, 500);
    }, 500);
};

function introbox_cleared() {
    document.getElementById('introbox').classList.add('cleared');
};

function mobileCheck() {     //massive mobile detection script
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

window.onscroll = function scrolled() {
    document.getElementById('background').style.opacity = (0.8-window.scrollY/document.documentElement.scrollHeight*3);
    if (window.scrollY > document.getElementById('background').height-20) {
        document.getElementById('header').classList.add('init');
        document.getElementById('button-header').classList.add('menu');
    }
    else if (window.scrollY <= document.getElementById('background').height-20) {
        document.getElementById('header').classList.remove('init');
        document.getElementById('button-header').classList.remove('menu');
    };
};

var gallery_num = 1;

init();