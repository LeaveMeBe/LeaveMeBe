var s = 1000;
var gettime = function(aniname,btime){
    _endTime = new Date().getTime();
    _time = _endTime - _beginTime;
    //console.log(aniname + ':' + (_time/1000 - btime)+ 's');  
};
TotalAnimate = {
    //火箭升空 2s~5s
    ani1 : function(){
        var aniTime = 3*s;
        gettime('ani1 begin',0);
        $('.huojian').animate({
            bottom : "+=2200"
            },
            aniTime,
            function(){             
                gettime('ani1 finished',0);
        });
        $('.act_bg3,.act_bg2,.act_bg1').animate({
            top : "+=1600"
            },
            aniTime,
            function(){ 
                $('.act_panel').fadeIn(1*s);        
        });
    },
    //item0串词淡入 6s~12s
    ani2 : function(){
        $('#sentence_1').delay(4*s).fadeIn(2*s,function(){
            gettime('ani2 bigin',2);
            $('#sentence_2').fadeIn(2*s,function(){
                $('#sentence_3').fadeIn(2*s,function(){
                    gettime('ani2 finished',0);
                });    
            });
        });
    },
    //item0串词移出、item1场景移入 17s~20s
    ani3 : function(){
        $('.item0').delay(15*s).animate({left:"-=865"},1*s,function(){
            gettime('ani3 bigin',1);
        });
        $('.item1').delay(16*s).animate({left:"-=905"},1.3*s,function(){
            $('#pic_1').animate({left:"+=40"},0.5*s,function(){});
            $('.child_1').animate({marginLeft:"+=15"},0.5*s);
            $('#word_1').animate({left:"+=40"},0.8*s,function(){
                gettime('ani3 finished',0);
            });
        });
        $('.item2,.item3,.item4,.item5,.item6,.item7,.item8,.item9,.item10,.item11,.item12').delay(16*s).animate({left:"-=865"},1.3*s);
    },
    //item1场景移出、item2串词移入
    ani4 : function(){
        $('.item1').delay(7*s).animate({left:"-=865"},1*s,function(){
            gettime('ani4 bigin',1);
        });
        $('.item2').delay(8*s).animate({left:"-=905"},1.3*s,function(){
            $('#sentence_4').fadeIn(2*s,function(){
                $('#sentence_5').fadeIn(2*s,function(){
                    gettime('ani4 finished',0);
                });
            });
        });
        $('.item3,.item4,.item5,.item6,.item7,.item8,.item9,.item10,.item11,.item12').delay(8*s).animate({left:"-=865"},1.3*s);
    },
    //item2串词移出、item3场景移入
    ani5 : function(){
        $('.item2').delay(9*s).animate({left:"-=865"},1*s,function(){
            gettime('ani5 bigin',1);
        });
        $('.item3').delay(10*s).animate({left:"-=905"},1.3*s,function(){
            $('#pic_3').animate({left:"+=40"},0.5*s);
            $('.ball_1').animate({marginLeft:"+=15"},0.5*s);
            $('#word_3').animate({left:"+=40"},0.8*s,function(){
                gettime('ani5 finished',0);
            });
        });
        $('.item4,.item5,.item6,.item7,.item8,.item9,.item10,.item11,.item12').delay(10*s).animate({left:"-=865"},1.3*s);
    },
    //item3场景移出、item4串词移入
    ani6 : function(){
        $('.item3').delay(7*s).animate({left:"-=865"},1*s,function(){
            gettime('ani6 bigin',1);
        });
        $('.item4').delay(8*s).animate({left:"-=905"},1.3*s,function(){
            $('#sentence_6').fadeIn(2*s,function(){
                $('#sentence_7').fadeIn(2*s,function(){
                    gettime('ani6 finished',0);
                });
            });
        });
        $('.item5,.item6,.item7,.item8,.item9,.item10,.item11,.item12').delay(8*s).animate({left:"-=865"},1.3*s);
    },
    //item4串词移出、item5场景移入
    ani7 : function(){
        $('.item4').delay(9*s).animate({left:"-=865"},1*s,function(){
            gettime('ani7 bigin',1);
        });
        $('.item5').delay(10*s).animate({left:"-=905"},1.3*s,function(){
            $('#pic_5').animate({left:"+=40"},0.5*s);
            $('.city_1').animate({marginLeft:"+=15"},0.5*s);
            $('.city_2').animate({marginLeft:"+=10"},0.5*s);
            $('#word_5').animate({left:"+=40"},0.8*s,function(){
                gettime('ani7 finished',0);
            });
        });
        $('.item6,.item7,.item8,.item9,.item10,.item11,.item12').delay(10*s).animate({left:"-=865"},1.3*s);
    },
    //item5场景移出、item6串词移入
    ani8 : function(){
        $('.item5').delay(7*s).animate({left:"-=865"},1*s,function(){
            gettime('ani8 bigin',1);
        });
        $('.item6').delay(8*s).animate({left:"-=905"},1.3*s,function(){
            $('#sentence_8').fadeIn(2*s,function(){
                $('#sentence_9').fadeIn(2*s,function(){
                    gettime('ani8 finished',0);
                });
            });
        });
        $('.item7,.item8,.item9,.item10,.item11,.item12').delay(8*s).animate({left:"-=865"},1.3*s);
    },
    //item6串词移出、item7场景移入
    ani9 : function(){
        $('.item6').delay(9*s).animate({left:"-=865"},1*s,function(){
            gettime('ani9 bigin',1);
        });
        $('.item7').delay(10*s).animate({left:"-=905"},1.3*s,function(){
            $('#pic_7').animate({left:"+=40"},0.5*s);           
            $('.jiaotang_1').animate({marginLeft:"+=15"},0.5*s);
            $('#word_7').animate({left:"+=40"},0.8*s,function(){
                gettime('ani9 finished',0);
            });
        });
        $('.item8,.item9,.item10,.item11,.item12').delay(10*s).animate({left:"-=865"},1.3*s);
    },
    //item7场景移出、item8场景移入
    ani10 : function(){
        $('.item7').delay(9*s).animate({left:"-=865"},1*s,function(){
            gettime('ani10 bigin',1);
        });
        $('.item8').delay(10*s).animate({left:"-=905"},1.3*s,function(){
            $('#pic_8').animate({left:"+=40"},0.5*s);
            $('.child_3').animate({marginLeft:"+=15"},0.5*s);
            $('.mummy_2').animate({marginLeft:"+=10"},0.5*s);
            $('#word_8').animate({left:"+=40"},0.8*s,function(){
                gettime('ani10 finished',0);
            });
        });
        $('.item9,.item10,.item11,.item12').delay(10*s).animate({left:"-=865"},1.3*s);
    },
    //item8场景移出、item9场景移入
    ani11 : function(){
        $('.item8').delay(9*s).animate({left:"-=865"},1*s,function(){
            gettime('ani11 bigin',1);
        });
        $('.item9').delay(10*s).animate({left:"-=905"},1.3*s,function(){
            $('#pic_9').animate({left:"+=40"},0.5*s);
            $('.family_ba').animate({marginLeft:"+=15"},0.5*s);         
            $('#word_9').animate({left:"+=40"},0.8*s,function(){
                gettime('ani11 finished',0);
            });
        });
        $('.item10,.item11,.item12').delay(10*s).animate({left:"-=865"},1.3*s);
    },
    //item9场景移出、item10场景移入
    ani12 : function(){
        $('.item9').delay(9*s).animate({left:"-=865"},1*s,function(){
            gettime('ani12 bigin',1);
        });
        $('.item10').delay(10*s).animate({left:"-=905"},1.3*s,function(){
            $('#pic_10').animate({left:"+=40"},0.5*s);
            $('.shanlu_1').animate({marginLeft:"+=15"},0.5*s);   
            $('#word_10').animate({left:"+=40"},0.8*s,function(){
                gettime('ani12 finished',0);
            });
        });
        $('.item11,.item12').delay(10*s).animate({left:"-=865"},1.3*s);
    },
    //item10场景移出、item11场景移入
    ani13 : function(){
        $('.item10').delay(9*s).animate({left:"-=865"},1*s,function(){
            gettime('ani13 bigin',1);
        });
        $('.item11').delay(10*s).animate({left:"-=905"},1.3*s,function(){
            $('#pic_11').animate({left:"+=40"},0.5*s);
            $('.snow_1').animate({marginLeft:"+=15"},0.5*s);   
            $('.tree_1').animate({marginLeft:"+=10"},0.5*s);  
            $('#word_11').animate({left:"+=40"},0.8*s,function(){
                gettime('ani13 finished',0);
            });
        });
        $('.item12').delay(10*s).animate({left:"-=865"},1.3*s);
    },
    //item11场景移出、item12串词移入
    ani14 : function(){
        $('.item11').delay(7*s).animate({left:"-=865"},1*s,function(){
            gettime('ani14 bigin',1);
        });
        $('.item12').delay(8*s).animate({left:"-=905"},1.3*s,function(){
            $('#sentence_10').fadeIn(2*s,function(){
                $('#sentence_11').fadeIn(2*s,function(){                                           
                    $('#sentence_10, #sentence_11').fadeOut(3*s,function(){
                        $('.item1,.item2,.item3,.item4,.item5,.item6,.item7,.item8,.item9,.item10,.item11').css('left',0);
                        $('.item1,.item2,.item3,.item4,.item5,.item6,.item7,.item8,.item9,.item10,.item11').animate({left: "-=10420"},3*s,function(){
                            gettime('ani14 finished',0); 
                        });
                    });             
                });
            });
        });
    },
    //尾词开始
    ani15 : function(){        
        $('#sentence_12').delay(147*s).fadeIn(2.5*s,function(){
            gettime('ani15 bigin',2.5);
            $('#sentence_13').fadeIn(2.5*s,function(){
                $('#sentence_14').fadeIn(2.5*s,function(){
                    $('#sentence_15').fadeIn(2.5*s,function(){
                        $('#sentence_16').fadeIn(2.5*s,function(){
                            $('#sentence_12, #sentence_13, #sentence_14, #sentence_15, #sentence_16').fadeOut(3*s,function(){
                                $('#sentence_17').fadeIn(2.5*s,function(){
                                    $('#sentence_18').fadeIn(2.5*s,function(){
                                        $('#sentence_19').fadeIn(2.5*s,function(){
                                            $('#sentence_20').fadeIn(2.5*s,function(){
                                                $('#sentence_21').fadeIn(2.5*s,function(){
                                                    $('#sentence_22').fadeIn(2.5*s,function(){
                                                        $('#sentence_17, #sentence_18, #sentence_19, #sentence_20, #sentence_21, #sentence_22').fadeOut(3*s,function(){
                                                            $('#sentence_23').fadeIn(3*s,function(){
                                                                $('#sentence_24').fadeIn(3*s,function(){
                                                                    gettime('word end',0);
                                                                    $('body').css('background','black');    
                                                                    $('.act_content').fadeOut(3*s,function(){                                                                       
                                                                        $('.ad_div').delay(2*s).fadeIn(4*s,function(){
                                                                            gettime('all the end',0);
                                                                        });                                                                      
                                                                    })
                                                                });
                                                            });
                                                        });                                                                    
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });                                            
                        });
                    });
                });
            });
        });
    }
};
var playMovie = function(){
    _beginTime = new Date().getTime();
    //console.log('start:0s');
    setTimeout(function(){
        TotalAnimate.ani1();
        TotalAnimate.ani2();
        TotalAnimate.ani3();
        TotalAnimate.ani4();
        TotalAnimate.ani5();
        TotalAnimate.ani6();
        TotalAnimate.ani7();
        TotalAnimate.ani8();
        TotalAnimate.ani9();
        TotalAnimate.ani10();
        TotalAnimate.ani11();
        TotalAnimate.ani12();
        TotalAnimate.ani13();
        TotalAnimate.ani14();
        TotalAnimate.ani15();
    },500);
};
document.onkeyup = function (evt) {
	var key = (evt || event).keyCode;
	if (key == 122) {
		var tmp_style = document.getElementById("fullscreen_tip").style;
		var tmp = tmp_style.display;
		if (tmp == "none") {
			tmp_style.display = "";
		} else {
			tmp_style.display = "none";
		}
	}
};