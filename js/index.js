//作品
{
	const types=document.querySelectorAll(".resp-tabs-list .resp-tab-item");
	const goodlist=document.querySelectorAll(".container1");
	types.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(var i=0;i<types.length;i++){
				types[i].classList.remove("active");
				goodlist[i].classList.remove("active");
			}
			this.classList.add("active");
			goodlist[index].classList.add("active");
		}
	});
}

//回到顶部
{
    let totop=document.querySelector(".totop");
    totop.onclick=function(){
        let st=document.documentElement.scrollTop;
        let t=setInterval(function(){
            st-=200;
            if(st<0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },25);
    }
}

//选项卡
{
    var ones=document.querySelectorAll(".fa");
    var twos=document.querySelectorAll(".qq_erwei");
    for(let i=0;i<twos.length;i++) {
        ones[i].onmouseenter = function () {
            for (var j = 0; j < twos.length; j++) {
                twos[j].style.opacity = "0";
            }
            twos[i].style.opacity = "1";
        }
        ones[i].onmouseleave = function () {
            for (var j = 0; j < twos.length; j++) {
                twos[j].style.opacity = "0";
            }
            twos[i].style.opacity = "0";
        }
    }
}