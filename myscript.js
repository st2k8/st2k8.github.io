var wear=[1,1,1,1,1,1,1,1,1,1];

$(document).ready(function(){
  
  $("#hat").click(function(){
    if(wear[0]==1){
      $("img.hat").animate({opacity:'0'});
      $(this).animate({opacity:'0.2'});
      wear[0]=0;
    }
    else if(wear[0]==0){
      $("img.hat").animate({opacity:'1'});
      $(this).animate({opacity:'1'});
      wear[0]=1;
    }
  });

  $("#cape").click(function(){
    if(wear[1]==1){
      $("img.cape").animate({opacity:'0'});
      $(this).animate({opacity:'0.2'});
      wear[1]=0;
      if(wear[2]==1){
	$("img.tie").animate({opacity:'0'});
	$("#tie").animate({opacity:'0.2'});
	wear[2]=0;
      }
    }
    else if(wear[1]==0){
      $("img.cape").animate({opacity:'1'});
      $(this).animate({opacity:'1'});
      wear[1]=1;
    }
  });

   $("#tie").click(function(){
    if(wear[2]==1){
      $("img.tie").animate({opacity:'0'});
      $(this).animate({opacity:'0.2'});
      wear[2]=0;
    }
    else if(wear[2]==0 && wear[1]==1){
      $("img.tie").animate({opacity:'1'});
      $(this).animate({opacity:'1'});
      wear[2]=1;
    }
  });

   $("#sus").click(function(){
    if(wear[3]==1){
      $("img.sus").animate({opacity:'0'});
      $(this).animate({opacity:'0.2'});
      wear[3]=0;
    }
    else if(wear[3]==0){
      $("img.sus").animate({opacity:'1'});
      $(this).animate({opacity:'1'});
      wear[3]=1;
    }
  });

   $("#shirt").click(function(){
    if(wear[4]==1){
      $("img.shirt").animate({opacity:'0'});
      $(this).animate({opacity:'0.2'});
      wear[4]=0;
    }
    else if(wear[4]==0){
      $("img.shirt").animate({opacity:'1'});
      $(this).animate({opacity:'1'});
      wear[4]=1;
    }
  });

   $("#skirt").click(function(){
    if(wear[5]==1){
      $("img.skirt").animate({opacity:'0'});
      $(this).animate({opacity:'0.2'});
      wear[5]=0;
    }
    else if(wear[5]==0){
      $("img.skirt").animate({opacity:'1'});
      $(this).animate({opacity:'1'});
      wear[5]=1;
    }
  });

   $("#pansuto").click(function(){
    if(wear[6]==1){
      $("img.pansuto").animate({opacity:'0'});
      $("img.pansuto2").animate({opacity:'1'});
      $(this).animate({opacity:'0.6'});
      wear[6]=0.5;
    }
    else if(wear[6]==0.5){
      $("img.pansuto2").animate({opacity:'0'});
      $(this).animate({opacity:'0.2'});
      wear[6]=0;
    }
    else if(wear[6]==0){
      $("img.pansuto").animate({opacity:'1'});
      $(this).animate({opacity:'1'});
      wear[6]=1;
    }
  });

  $("#sitagi").click(function(){
    if(wear[7]==1){
      $("img.sitagi").animate({opacity:'0'});
      $(this).animate({opacity:'0.2'});
      wear[7]=0;
    }
    else if(wear[7]==0){
      $("img.sitagi").animate({opacity:'1'});
      $(this).animate({opacity:'1'});
      wear[7]=1;
    }
  });

  $("#pantu").click(function(){
    if(wear[8]==1){
      $("img.pantu").animate({opacity:'0'});
      $(this).animate({opacity:'0.2'});
      wear[8]=0;
    }
    else if(wear[8]==0){
      $("img.pantu").animate({opacity:'1'});
      $(this).animate({opacity:'1'});
      wear[8]=1;
    }
  });

  
  $("#tebukuro").click(function(){
    if(wear[9]==1){
      $("img.tebukuro").animate({opacity:'0'});
      $(this).animate({opacity:'0.2'});
      wear[9]=0;
    }
    else if(wear[9]==0){
      $("img.tebukuro").animate({opacity:'1'});
      $(this).animate({opacity:'1'});
      wear[9]=1;
    }
  });
});
