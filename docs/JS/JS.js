
      document.addEventListener('DOMContentLoaded', Call);
      let c=0;
      let flag=0;
        function Call()
        {
          
          document.removeEventListener('DOMContentLoaded', Call);
    
            let e1=document.getElementById("p1");
            let e2=document.getElementById("p2");
            let e3=document.getElementById("p3");
            let e4=document.getElementById("p4");
            let e5=document.getElementById("p5");
            let e6=document.getElementById("p6");
            let e7=document.getElementById("p7");
            let e8=document.getElementById("p8");
            let e9=document.getElementById("p9");
            // e1.addEventListener('input',check);
            // e2.addEventListener('input',check);
            // e3.addEventListener('input',check);
            // e4.addEventListener('input',check);
            // e5.addEventListener('input',check);
            // e6.addEventListener('input',check);
            // e7.addEventListener('input',check);
            // e8.addEventListener('input',check);
            // e9.addEventListener('input',check);
            const mutation=new MutationObserver(check);
            mutation.observe(e1 ,{subtree:true,childList:true});
            mutation.observe(e2 ,{subtree:true,childList:true});
            mutation.observe(e3 ,{subtree:true,childList:true});
            mutation.observe(e4 ,{subtree:true,childList:true});
            mutation.observe(e5 ,{subtree:true,childList:true});
            mutation.observe(e6 ,{subtree:true,childList:true});
            mutation.observe(e7 ,{subtree:true,childList:true});
            mutation.observe(e8 ,{subtree:true,childList:true});
            mutation.observe(e9 ,{subtree:true,childList:true});

            console.log(c+11);
        }
          function check()
          {
            console.log("checked");
            c++;
            let x1=document.getElementById("p1").innerHTML;
            let x2=document.getElementById("p2").innerHTML;
            let x3=document.getElementById("p3").innerHTML;
            let x4=document.getElementById("p4").innerHTML;
            let x5=document.getElementById("p5").innerHTML;
            let x6=document.getElementById("p6").innerHTML;
            let x7=document.getElementById("p7").innerHTML;
            let x8=document.getElementById("p8").innerHTML;
            let x9=document.getElementById("p9").innerHTML;
              if(c>=5)
              {

              if(x1==x2 && x2==x3)
              {
                console.log("c1");
                  flag=1;
                  if (x1=='X')
              alert("player 1 wins");
              else if(x1=='O')
             alert("player 2 wins");
              }
              else if(x4==x5 && x5==x6)
              {
                console.log("c2");
                flag=1;
                if (x4=='X')
              alert("player 1 wins");
              else if(x4=='O')
             alert("player 2 wins");
              }
              else if(x7==x8 && x8==x9)
              {
                console.log("c2");
                flag=1;
                if (x7=='X')
              alert("player 1 wins");
              else if(x7=='O')
             alert("player 2 wins");
              }
              else if(x1==x4 && x4==x7)
              {
                console.log("c2");
                flag=1;
                if (x1=='X')
              alert("player 1 wins");
              else if(x1=='O')
             alert("player 2 wins");
              }
              else if(x2==x5 && x5==x8)
              {
                console.log("c2");
                flag=1;
                if (x2=='X')
              alert("player 1 wins");
              else if(x2=='O')
             alert("player 2 wins");
              }
              else if(x3==x6 && x6==x9)
              {
                console.log("c2");
                flag=1;
                if (x3=='X')
              alert("player 1 wins");
              else if(x3=='O')
             alert("player 2 wins");
              }
              else if(x1==x5 && x5==x9)
              {
                console.log("c2");
                flag=1;
                if (x1=='X')
              alert("player 1 wins");
              else if(x1=='O')
             alert("player 2 wins");
              }
             else if(x7==x5 && x5==x3)
              {
                console.log("c2");
                flag=1;
                if (x7=='X')
              alert("player 1 wins");
              else if(x7=='O')
             alert("player 2 wins");
              }
             
            }

            console.log(c+' '+flag);
            if(c==9 && flag==0)
          alert("TIE");

          }
          
            
        
        
