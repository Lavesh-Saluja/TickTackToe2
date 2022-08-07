    const obj1=document.querySelector(".container1");
    const obj2=document.querySelector(".container2");
    const obj3=document.querySelector(".container3");
    const obj4=document.querySelector(".container4");
    const obj5=document.querySelector(".container5");
    const obj6=document.querySelector(".container6");
    const obj7=document.querySelector(".container7");
    const obj8=document.querySelector(".container8");
    const obj9=document.querySelector(".container9");
    const obj11=document.querySelector("#p1");
    const obj22=document.querySelector("#p2");
    const obj33=document.querySelector("#p3");
    const obj44=document.querySelector("#p4");
    const obj55=document.querySelector("#p5");
    const obj66=document.querySelector("#p6");
    const obj77=document.querySelector("#p7");
    const obj88=document.querySelector("#p8");
    const obj99=document.querySelector("#p9");
    let signal=0;
    // console.log(obj.innerHTML);
    let x=0;
    
        obj1.addEventListener("click",()=>{change(obj11)});
        obj2.addEventListener("click",()=>{change(obj22)});
        obj3.addEventListener("click",()=>{change(obj33)});
        obj4.addEventListener("click",()=>{change(obj44)});
        obj5.addEventListener("click",()=>{change(obj55)});
        obj6.addEventListener("click",()=>{change(obj66)});
        obj7.addEventListener("click",()=>{change(obj77)});
        obj8.addEventListener("click",()=>{change(obj88)});
        obj9.addEventListener("click",()=>{change(obj99)});
    
    

        function change(obj){
        if(x==0)
        {
            console.log("change")
            obj.innerHTML="X";
          
        }
     else 
        {
        obj.innerHTML="O";
            
        }
        x=1-x; 
        if(obj==obj1)
        signal=1;
        
} 
if(signal==1){
    obj1.removeEventListener("click",()=>{change(obj11)});
}
    