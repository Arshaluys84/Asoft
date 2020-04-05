
    function Slider() {
        
            this.sliderimgurl=[],
            this.currentIntex =0,
            this.prevbtn=null, //document.getElementById("prev-button"),
            this.nextbtn=null,//document.getElementById("next-button"),
            this.sliderimg=null,//document.getElementById("slider-img"),
            this.start=function (elId) {
        
                var that=this;
        
                var elSelector='#'+ elId;
                var el=document.querySelector(elSelector);
                this.prevbtn=el.querySelector(".prev-button"),
                this.nextbtn=el.querySelector(".next-button"),
                this.sliderimg=el.querySelector(".slider-img"),
        
        
        
                this.nextbtn.addEventListener("click",function (e){
                 that.clickedNextButton(e)
                });
                this.prevbtn.addEventListener("click",function(e){
                that.clickedPrevButton(e)
                });
        
                this.sliderimgurl.push("https://vip-transfer.com.ua/wp-content/uploads/2017/10/toyota_camry_v40_black_2-min.jpg");
                this.sliderimgurl.push("https://www.motortrend.com/uploads/sites/10/2019/11/2020-toyota-camry-le-auto-sedan-angular-front.png?fit=around%7C875:492.1875");
                this.sliderimgurl.push("https://autoreview.ru/images/Article/1653/Article_165358_860_575.jpg");
                this.sliderimgurl.push("https://auto.ndtvimg.com/car-images/large/toyota/camry/toyota-camry.jpg?v=29");
        
        
                this.sliderimg.src=this.sliderimgurl[this.currentIntex];
                this.prevbtn.disabled=true;
           },
                this.clickedNextButton=function (e) {
                
                this.currentIntex++;
                this.sliderimg.src=this.sliderimgurl[this.currentIntex];
                this.prevbtn.disabled=false;
                if (this.currentIntex===(this.sliderimgurl.length-1)) {
                    this.nextbtn.disabled=true;
            
                }
                
            };
               this.clickedPrevButton=function (e) {
                this.currentIntex--;
                this.sliderimg.src=this.sliderimgurl[this.currentIntex];
                this.nextbtn.disabled=false;
                if (this.currentIntex===0) {
                    this.prevbtn.disabled=true;
            
                }
            }
        
        } 
      
     


