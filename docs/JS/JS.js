
      document.addEventListener('DOMContentLoaded', Call);
      let x=0;
      let flag=0;
        function Call()
        {
          
          document.removeEventListener('DOMContentLoaded', Call);
        console.log(x);
            let e1=document.getElementById("p1");
            let e2=document.getElementById("p2");
            let e3=document.getElementById("p3");
            let e4=document.getElementById("p4");
            let e5=document.getElementById("p5");
            let e6=document.getElementById("p6");
            let e7=document.getElementById("p7");
            let e8=document.getElementById("p8");
            let e9=document.getElementById("p9");
            e1.addEventListener('input',check);
            e2.addEventListener('input',check);
            e3.addEventListener('input',check);
            e4.addEventListener('input',check);
            e5.addEventListener('input',check);
            e6.addEventListener('input',check);
            e7.addEventListener('input',check);
            e8.addEventListener('input',check);
            e9.addEventListener('input',check);
        }
          function check()
          {
            x++;
            let x1=document.getElementById("p1").value;
            let x2=document.getElementById("p2").value;
            let x3=document.getElementById("p3").value;
            let x4=document.getElementById("p4").value;
            let x5=document.getElementById("p5").value;
            let x6=document.getElementById("p6").value;
            let x7=document.getElementById("p7").value;
            let x8=document.getElementById("p8").value;
            let x9=document.getElementById("p9").value;
              if(x>=5)
              {

              if(x1==x2 && x2==x3)
              {
                  flag=1;
                  if (x1=='x')
              alert("player 1 wins");
              else if(x1=='o')
             alert("player 2 wins");
              }
              else if(x4==x5 && x5==x6)
              {
                flag=1;
                if (x4=='x')
              alert("player 1 wins");
              else if(x4=='o')
             alert("player 2 wins");
              }
              else if(x7==x8 && x8==x9)
              {
                flag=1;
                if (x7=='x')
              alert("player 1 wins");
              else if(x7=='o')
             alert("player 2 wins");
              }
              else if(x1==x4 && x4==x7)
              {
                flag=1;
                if (x1=='x')
              alert("player 1 wins");
              else if(x1=='o')
             alert("player 2 wins");
              }
              else if(x2==x5 && x5==x8)
              {
                flag=1;
                if (x2=='x')
              alert("player 1 wins");
              else if(x2=='o')
             alert("player 2 wins");
              }
              else if(x3==x6 && x6==x9)
              {
                flag=1;
                if (x3=='x')
              alert("player 1 wins");
              else if(x3=='o')
             alert("player 2 wins");
              }
              else if(x1==x5 && x5==x9)
              {
                flag=1;
                if (x1=='x')
              alert("player 1 wins");
              else if(x1=='o')
             alert("player 2 wins");
              }
             else if(x7==x5 && x5==x3)
              {
                flag=1;
                if (x7=='x')
              alert("player 1 wins");
              else if(x7=='o')
             alert("player 2 wins");
              }
            }

             

          }

          if(x==9 && flag==0)
        alert("TIE");
            
        
        
