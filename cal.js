document.addEventListener("DOMContentLoaded", function() {

    const buttonValues = {
        'mul':'*',
        'divide':'/',
        'clear':'C',
        'seven':'7',
        'eight':'8',
        'nine':'9',
        'mines':'-',
        'fore':'4',
        'five':'5',
        'six':'6',
        'add':'+',
        'one':'1',
        'two':'2',
        'tree':'3',
        'eq':'=',
        'zero':'0',
        'dot':'.'
    }

        for(const[id,value]of Object.entries(buttonValues)){
            const button =document.getElementById(id);
            if (button){
                button.textContent= value;
                button.setAttribute('data-value',value);

                button.onclick = function(num) {

                    // if(parseInt(document.getElementById("display").innerText) !=0){ 
                    //     // document.getElementById("display").innerText+=value;
                    // }
                    // else
                    console.log(value)
                     if(id === 'clear') {
                        document.getElementById("display").innerText="";
                         
                    }
                    else if(id === 'mul'){
                        document.getElementById("display").innerText='*';
                    }
                    else if(id === 'divide'){
                        document.getElementById("display").innerText='/';
                    }
                    else if(id === 'mines'){
                        document.getElementById("display").innerText='-';
                    }
                    else if(id === 'add'){
                        document.getElementById("display").innerText='+';
                    }
                    // else if(id === 'eq'){
                    //     document.getElementById("display").innerText='=';
                    // }
                    else {
                        document.getElementById("display").innerText+=value;
                    }
                }   
            }  
        }
        
       
    });