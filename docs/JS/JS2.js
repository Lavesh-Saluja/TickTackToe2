    const obj1=document.querySelector(".container1");
    const obj2=document.querySelector(".container2");
    const obj3=document.querySelector(".container3");
    const obj4=document.querySelector(".container4");
    const obj5=document.querySelector(".container1");
    const obj6=document.querySelector(".container2");
    const obj7=document.querySelector(".container3");
    const obj8=document.querySelector(".container4");
    const obj9=document.querySelector(".container4");
    const obj11=document.querySelector(".content1");
    const obj22=document.querySelector(".content2");
    const obj33=document.querySelector(".content3");
    const obj44=document.querySelector(".content4");
    const obj55=document.querySelector(".content1");
    const obj66=document.querySelector(".content2");
    const obj77=document.querySelector(".content3");
    const obj88=document.querySelector(".content4");
    const obj99=document.querySelector(".content4");
   
    // console.log(obj.innerHTML);
    let x=0;
    
        obj1.addEventListener("click",function(){
            if(x==0)
        obj11.innerHTML="X";
        else 
        obj11.innerHTML="O";
        x=1-x;  
    });

    obj2.addEventListener("click",function(){
            if(x==0)
        obj22.innerHTML="X";
        else 
        obj22.innerHTML="O";
        x=1-x;  
    });

    obj3.addEventListener("click",function(){
            if(x==0)
        obj33.innerHTML="X";
        else 
        obj33.innerHTML="O";
        x=1-x;  
    });

    obj4.addEventListener("click",function(){
            if(x==0)
        obj44.innerHTML="X";
        else 
        obj44.innerHTML="O";
        x=1-x;  
    });
    obj5.addEventListener("click",function(){
            if(x==0)
        obj55.innerHTML="X";
        else 
        obj55.innerHTML="O";
        x=1-x;  
    });obj6.addEventListener("click",function(){
            if(x==0)
        obj66.innerHTML="X";
        else 
        obj66.innerHTML="O";
        x=1-x;  
    });obj7.addEventListener("click",function(){
            if(x==0)
        obj77.innerHTML="X";
        else 
        obj77.innerHTML="O";
        x=1-x;  
    });
    obj8.addEventListener("click",function(){
            if(x==0)
        obj88.innerHTML="X";
        else 
        obj88.innerHTML="O";
        x=1-x;  
    });
    obj9.addEventListener("click",function(){
        if(x==0)
    obj99.innerHTML="X";
    else 
    obj99.innerHTML="O";
    x=1-x;  
});