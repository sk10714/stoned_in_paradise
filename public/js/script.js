//==================
//手機版 PC版 menu nav
//==================
//定義視窗寬度的變數
let windowWidth = $(window).width()

//進網頁直接執行一次 判斷
if ( windowWidth >= 768){
    //大於等於768執行
    // $('nav>ul>li').hover(function(){}, function(){})
    $('nav>ul>li').hover(function(){
        //滑鼠滑入執行
        $(this).find('.submenu').addClass('active')
    }, function(){
        //滑鼠滑出執行
        $(this).find('.submenu').removeClass('active')
    })
}else{
    //小於768執行
    $('#btn-nav-switch').on('click', function(){
        $('nav').toggleClass('acitve')
        $('span').toggleClass('active')
    })//btn-nav-switch end
    $('nav>ul>li').on('click',function(){
        $(this).find('.submenu').toggleClass('.active')
    })//nav>ul>li end
}//windowWidth>=768 end

//每一次縮放視窗的時候執行
$(window).resize(function(){
    //widthWidth在每次縮放視窗寬度時，換上當前的視窗寬度的數值
    windowWidth = $(window).width()
    if (windowWidth >= 768 ){
        //大於等於768執行
        //$('nav>ul>li').hover(function(){}, function(){})
        $('nav>ul>li').hover(function(){
            //滑鼠滑入執行
            $(this).find('.submenu').addClass('active')
        }, function(){
            //滑鼠滑出執行
            $(this).find('.submenu').removeClass('active')
        })
    }else{
        //小於768執行
        $('#btn-nav-switch').on('click', function(){
            $('nav').toggleClass('active')
        })//btn-nav-switch end

        $('nav>ul>li').on('click', function(){
            $(this).find('.submenu').toggleClass('active')
        })//nav>ul>li end
    }//windowWith>=768 end
})//window resize end