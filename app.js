let inputfield=document.getElementById('input-field');
console.log(inputfield.value);
let Cebtn=document.getElementById('Ce');
console.log(Cebtn)

let buttons=document.getElementsByTagName('button');
let calculatedvalue;

for(let btn of buttons ){
    btn.addEventListener('click',function(e){

        if(btn.textContent==='C'){
        
           
            inputfield.value="0";
            Cebtn.textContent="Ce"
            return;
        }


        if(btn.textContent==='Ac'){
        
           
            inputfield.value="0";
            Cebtn.textContent="Ce";
            return;
        }



    //     else if(btn.textContent==='sin'){
    //     if(inputfield.value==='0')  inputfield.value=""; 
    //     let number=inputfield.value.match(/\d+/);
      
    //    let sinvalue= Math.round(Math.sin(number))
    //        inputfield.value=sinvalue;

    //     inputfield.value += btn.textContent ;

           
    //     }

        

    

        else if(btn.textContent==='Ce'){
        
       

            
            
                let recal= String(inputfield.value).slice(0,-1);
                inputfield.value=recal;
            

            return;
        }


        else if(btn.textContent==='='){

           if(inputfield.value.includes('sin')) {
            let number=inputfield.value.match(/\d+/);
            let calculatesin=(Math.sin(number));
           inputfield.value=calculatesin;
            
           }

           if(inputfield.value.includes('cos')) {
            let number=inputfield.value.match(/\d+/);
            let calculatesin=(Math.cos(number));
           inputfield.value=calculatesin;
            
           }


           if(inputfield.value.includes('tan')) {
            let number=inputfield.value.match(/\d+/);
            let calculatesin=(Math.tan(number)).toFixed(6);
           inputfield.value=calculatesin;
            
           }

           if(inputfield.value.includes('sqrt')) {
            let number=inputfield.value.match(/\d+/);
            let calculatesin=(Math.sqrt(number));
           inputfield.value=calculatesin;
            
           }


           if(inputfield.value.includes('log')) {
            let number=inputfield.value.match(/\d+/);
            let calculatesin=(Math.log(number));
           inputfield.value=calculatesin;
            
           }


           if(inputfield.value.includes('sinh')) {
            let number=inputfield.value.match(/\d+/);
            let calculatesin=(Math.sinh(number)).toFixed(6);
           inputfield.value=calculatesin;
            
           }


           if(inputfield.value.includes('pow')) {
            let number=inputfield.value.match(/\d+/);
            let calculatesin=Math.pow(number,2).toFixed(6);
           inputfield.value=calculatesin;
            
           }

           

            calculatedvalue=  eval(inputfield.value);
            inputfield.value=calculatedvalue;
            if(calculatedvalue){
                Cebtn.textContent="Ac"
            }
          

        }
        else{
        console.log(btn.textContent);

        if(inputfield.value==='0')  inputfield.value=""; 
       
        



        if(btn.textContent==='x'){
            let newvalue='*';
        inputfield.value += newvalue ;

        }
       
        else{

        inputfield.value += btn.textContent ;
        }



        }
       
        
    })
}



