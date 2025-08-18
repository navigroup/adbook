
/** sticky-menu */
$(window).scroll(function () {
    $('#scroll-color').toggleClass('scrolled', $(this).scrollTop() > 100);
})

/** 시계 */
Date.prototype.format = function (f) {
    if (!this.valueOf()) 
        return " ";
    var weekKorName = [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일"
    ];
    var weekKorShortName = [
        "일",
        "월",
        "화",
        "수",
        "목",
        "금",
        "토"
    ];
    var weekEngName = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    var weekEngShortName = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    var d = this;
    return f.replace(
        /(yyyy|yy|MM|dd|KS|KL|ES|EL|HH|hh|mm|ss|a\/p)/gi,
        function ($1) {
            switch ($1) {
                case "yyyy":
                    return d.getFullYear(); // 년 (4자리)
                case "yy":
                    return (d.getFullYear() % 1000).zf(2); // 년 (2자리)
                case "MM":
                    return (d.getMonth() + 1).zf(1); // 월 (2자리)
                case "dd":
                    return d
                        .getDate()
                        .zf(1); // 일 (2자리)

                case "KS":
                    return weekKorShortName[d.getDay()]; // 요일 (짧은 한글)
                case "KL":
                    return weekKorName[d.getDay()]; // 요일 (긴 한글)
                case "ES":
                    return weekEngShortName[d.getDay()]; // 요일 (짧은 영어)
                case "EL":
                    return weekEngName[d.getDay()]; // 요일 (긴 영어)

                case "HH":
                    return d
                        .getHours()
                        .zf(2); // 시간 (24시간 기준, 2자리)
                case "hh":
                    return (
                        (h = d.getHours() % 12)
                            ? h
                            : 12
                    ).zf(2); // 시간 (12시간 기준, 2자리)
                case "mm":
                    return d
                        .getMinutes()
                        .zf(2); // 분 (2자리)
                case "ss":
                    return d
                        .getSeconds()
                        .zf(2); // 초 (2자리)
                case "a/p":
                    return d.getHours() < 12
                        ? "오전"
                        : "오후"; // 오전/오후 구분
                default:
                    return $1;
            }
        }
    );
};
String.prototype.string = function (len) {
    var s = '',
        i = 0;
    while (i++ < len) {
        s += this;
    }
    return s;
};
String.prototype.zf = function (len) {
    return "0".string(len - this.length) + this;
};
Number.prototype.zf = function (len) {
    return this
        .toString()
        .zf(len);
};

var today = new Date();
console.log(today.format('yyyy년 MM월 dd일 a/p hh:mm 기준'));
today = today.format('yyyy년 MM월 dd일 a/p hh:mm 기준');

var endDay = new Date();
endDay = endDay.format('MM월 dd일');






$(function(){
	//visual skip button
	$("#main .sec01 .skip").on("click", function(){
		const target = $(this).attr("href");
		const offset = $(target).offset().top;
		
		$("body, html").stop().animate({ scrollTop : offset });
	});

	gsap.registerPlugin(ScrollTrigger);

	//sec02 - scrollTrigger
	ScrollTrigger.matchMedia({
		"(min-width: 900px)": function(){
			const anis = gsap.utils.toArray(".ani-wrap .ani");
			const total = $(window).height() / 2;
			//const height = $(".ani-wrap").outerHeight(true);
			const single = total / anis.length;
			const length = anis.length;
			const animation = gsap.timeline();
			ScrollTrigger.create({
				trigger: ".ani-wrap",
				start: "top top",
				end: "+=" + total * (length -1) + ", top",
				//end: "+=" + total,
				pin: true,
				scrub: true,
				//markers: true
			});

			anis.forEach((ele, i) => {
				const aniAnimation = gsap.timeline();
				const header = document.querySelector("header");
				const ani = document.querySelector(".ani-wrap");
				const allani = document.querySelectorAll(".ani");
				const relani = ani.querySelector(".ani0" + (i+1));
				ScrollTrigger.create({
					trigger: ".sec02",
					start: "top" + ", -=" + total * i,
					end: "+=" + total + ", -=" + total * i,
					animation: aniAnimation,
					//toggleActions: "play none none reverse",
					//markers: true,
					onEnter(){
						header.classList.add("none");
						relani.classList.add("active");
						relani.classList.remove("up");
						relani.classList.remove("down");
					},
					onLeave(){
						relani.classList.remove("active");
						relani.classList.remove("up");
						relani.classList.add("down");
					},
					onEnterBack(){
						header.classList.add("none");
						relani.classList.add("active");
						relani.classList.add("up");
						relani.classList.remove("down");
					},
					onLeaveBack(){
						header.classList.remove("none");
						relani.classList.remove("active");
						relani.classList.add("up");
						relani.classList.remove("down");
					}
				});
			})
		},
		"(max-width: 899px)": function(){
			const anis = gsap.utils.toArray(".ani-wrap .ani");
			const total = $(window).height();
			//const height = $(".ani-wrap").outerHeight(true);
			//const single = total / anis.length;
			const length = anis.length;
			const animation = gsap.timeline();
			ScrollTrigger.create({
				trigger: ".ani-wrap",
				start: "top top",
				end: "+=" + total * length + ", top",
				//end: "+=" + total,
				pin: true,
				scrub: true,
				//markers: true
			});

			anis.forEach((ele, i) => {
				const aniAnimation = gsap.timeline();
				const header = document.querySelector("header");
				const ani = document.querySelector(".ani-wrap");
				const allani = document.querySelectorAll(".ani");
				const relani = ani.querySelector(".ani0" + (i+1));
				ScrollTrigger.create({
					trigger: ".sec02",
					start: "top" + ", -=" + total * i,
					end: "+=" + total + ", -=" + total * i,
					animation: aniAnimation,
					//toggleActions: "play none none reverse",
					//markers: true,
					onEnter(){
						header.classList.add("none");
						relani.classList.add("active");
						relani.classList.remove("up");
						relani.classList.remove("down");
					},
					onLeave(){
						relani.classList.remove("active");
						relani.classList.remove("up");
						relani.classList.add("down");
					},
					onEnterBack(){
						header.classList.add("none");
						relani.classList.add("active");
						relani.classList.add("up");
						relani.classList.remove("down");
					},
					onLeaveBack(){
						header.classList.remove("none");
						relani.classList.remove("active");
						relani.classList.add("up");
						relani.classList.remove("down");
					}
				});
			})
		}
	})

	//sec03 - scrollTrigger
	const wh = $(window).outerHeight();
	const totalHeight = $(".list-box").outerHeight(true) - $(window).outerHeight(true);
	const sec03 = document.querySelector(".sec03");
	const scrollAnimation = gsap.timeline();
	gsap.timeline({
				scrollTrigger: {
					trigger: ".section-wrap",
					start: "top top",
					end: "+=" + totalHeight + ", top",
					scrub: true,
					//markers: true,
					onEnter:() => {
						document.querySelector("#header").classList.remove("none");
						sec03.classList.remove("black");
					},
					onLeaveBack:() => {
						document.querySelector("#header").classList.add("none");
						sec03.classList.add("black");
					}
				}
			})
	

	//sec04 - logo-rolling
	$(".logo-wrap.left ul").clone().appendTo(".logo-wrap.left");
	$(".logo-wrap.right ul").clone().appendTo(".logo-wrap.right");

	$(".logo-wrap ul:first-of-type").addClass("origin");
	$(".logo-wrap ul:last-of-type").addClass("clone");

	//sec05 - slide
	$(".blog-wrap").slick({
		slidesToShow: 3,
		dots: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},{
				breakpoint: 800,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});