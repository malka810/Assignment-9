const light_count=6;
let current_light=-1;
let direction="RIGHT";
let intervalId = null;


updateLight =()=>{
    if(direction=="RIGHT"){
        current_light++;
        $(".light").css("background","white")
        $(".light").eq(current_light).css("background","red");
     
        if(current_light==light_count-1){
            direction="LEFT";
        }

        
    }else{
        current_light--;
        $(".light").css("background","white")
        $(".light").eq(current_light).css("background","red");
        $(".light").eq(current_light+1).css("background","pink");

        if(current_light==0){
            direction="RIGHT";
        }
    }
   
}


$('#startbtn').on('click',function(){

    intervalId = setInterval(updateLight,100);

})

$('#stopbtn').on('click',function(){
    clearInterval(intervalId);
    
})