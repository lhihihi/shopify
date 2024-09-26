let funcObj={
  f_0:function(){
    const tl = gsap.timeline();
    tl.to("#section0 .tit_wrap > *", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to("#section0 .scroll", {
      opacity: 1,
    });
  },
  f_1:function(){
    const tl = gsap.timeline();
    tl.to("#section1 h2.tit", {
      opacity: 1,
      y: -30,
    });
    tl.to(".s1_list li ", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to(".sub_txt_wrap", {
      opacity: 1,
      y: -30,
    });

    //숫자 카운팅-자바스크립트내에서 제이쿼리 셋팅함
    $(function(){
      $('.count').each(function(){
        let crt = $(this);
        let countTo = crt.attr('data-count');
        //console.log(countTo);

        $({
          countNum:crt.text()
        }).animate({
          countNum:countTo
        },{
          duration:3000,
          easing:'linear',
          step:function(){
            crt.text(Math.floor(this.countNum))
          },
          complete:function(){
            crt.text(this.countNum)
          }
        })
      });
    });
  },
  f_2:function(){
    const tl = gsap.timeline();
    tl.to("#section2 .tit_wrap > *", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to(".s2_card", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
  },
  f_3:function(){
    const tl = gsap.timeline();
    tl.to("#section3 .rel > *", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
  },
  f_4:function(){
    const tl = gsap.timeline();

    tl.to("#section4 .tit_wrap > * ", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to("#section4 .img_wrap > .deco ", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
  },
  f_5:function(){
    const tl = gsap.timeline();

    tl.to("#section5 .tit_wrap > * ", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to("#section5 .img_wrap > .deco ", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
  },
  f_6:function(){
    const tl = gsap.timeline();

    tl.to("#section6 .tit_wrap > * ", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to("#section6 .img_wrap > .deco ", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
  },
  f_7:function(){
    const tl = gsap.timeline();

    tl.to("#section7 .tit_wrap > * ", {
      opacity: 1,
      y: -30,
    });
    tl.to(".s7_list li ", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
  },
};

let section = document.querySelectorAll('section');

funcObj['f_0']();  //스크롤과 상관없이 첫번째는 먼저 실행이 되게 함

window.addEventListener('scroll', function(){

  let scroll = document.scrollingElement.scrollTop;
  let outHeight = this.window.outerHeight;  //브라우저의 높이값

  //console.log(scroll,outHeight);

  for(let i =0; i<section.length;i++){
    //스크롤이 되었을때 섹션이 뷰포트에 들어왔으면 그때 섹션함수를 실행함
    if(scroll > section[i].offsetTop - outHeight &&
      scroll < section[i].offsetTop - outHeight + section[i].offsetHeight){
        funcObj['f_'+i]();
        console.log(i);
    }
  };

});


// jquery_______start
$(document).ready(function(){

  const BODY = $("body");
  const mobBtn = $(".mob_btn");
  const scrollTopBtn = $('.scrollTop_btn');

  //(2)Mobile Menu
  mobBtn.on("click", function () {
    BODY.toggleClass("mOpen");
  });

  //(1)scroll-header
  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    //console.log(scroll);
    if (scroll > 60) {
      BODY.addClass("scrolling");
      scrollTopBtn.addClass('On');
    }else{
      BODY.removeClass("scrolling");
      scrollTopBtn.removeClass('On');
    }
  });

  //(3)Top Button scroll
  scrollTopBtn.on('click',function(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  });

  //footer
  const ftrBtn = $('.family_wrap>a');
  const ftrWrap = $('.family_wrap');

  ftrBtn.on('click',function(e){
    e.preventDefault();
    ftrWrap.toggleClass('active');
  });

});
// jquery_______end