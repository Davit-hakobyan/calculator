var input = document.getElementById('input')
var a =0,b = 0,c = 0;

document.body.addEventListener('click',function(){
    let div = event.target.textContent
   
    if(div === 'c'){
        input.value='';
    }else if(div==='/' || div === '*' || div==='-' || div==='+'){
        if(div ==='-'&& input.value.length===0){
            input.value+="-"
        }else{
        a = +input.value
        c = div
        input.value = ''
        }
    }else if(div==='=' && c==='/'){
        b = +input.value
        input.value = a/b;
    }else if(div==='=' && c==='+'){
        b = +input.value
      return  input.value = a+b;
    }else if(div==='=' && c==='-'){
        b = +input.value
       return input.value = a-b;
    }else if(div==='=' && c==='*'){
        b = +input.value
       return input.value = a*b;
    }else if(div==='.'){
        if(input.value.length===0){
            input.value ='0.'
        }else if(input.value.includes('.')){
                    
        }else{
               input.value+='.'
        }

    }else if(div === '0'){
        if(input.value.length===0){
            input.value+='0.'
        }else if(input.value==='0'){
            input.value='0.'
        }else{
            input.value+=div
        }

    }else{
        if(input.value==='0'){
            input.value='0.'
            input.value +=div
        }else{
        input.value +=div
        }
       
    }
})