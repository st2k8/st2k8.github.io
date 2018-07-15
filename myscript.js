var wear=[1,1,1,1,1,1];
$(document).ready(function(){
  for(var i=1; i<7; i++){
    $("div.btn:nth-child("+i+")").click(function(){
      var j=$(this).index()+3;
      console.log("button "+j+" clicked");
      if(wear[$(this).index()]==1){
	$("img.acc:nth-child("+j+")").animate({opacity:'0'});
	$(this).animate({opacity:'0.5'});
	wear[$(this).index()]=0;
	if($(this).index()==1){
	  $("img.acc:nth-child(5)").animate({opacity:'0'});
	  wear[2]=0;
	  $("div.btn:nth-child(3)").animate({opacity:'0.5'});
	}
	console.log(j+" off");
      }
      else if(wear[$(this).index()]==0){
	$("img.acc:nth-child("+j+")").animate({opacity:'1'});
	$(this).animate({opacity:'1'});
	wear[$(this).index()]=1;
	console.log(j+" on");
      }
    });
  }
});
