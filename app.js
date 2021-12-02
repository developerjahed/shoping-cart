


// update case and phone price function
function updateCaseNumber(product,price, isIncreasing){
    const caseInput= document.getElementById(product + '-number');
       let caseNumber= parseFloat(caseInput.value);
        if(isIncreasing == true){
          caseNumber=caseNumber+1;
        }
        else if(caseNumber>0){
          caseNumber=caseNumber-1;
        }
        caseInput.value=caseNumber;
      // update case total
      const caseTotal = document.getElementById(product+'-total');
      caseTotal.innerText=caseNumber * price;
    // calculate total
      calculateTotal();
    
    }
    
    // product price
    function getInputValue(product){
       const productInput=document.getElementById(product + '-number');
       const productNumber=parseInt(productInput.value);
       return productNumber;
    }
    
    // Total All price
    function calculateTotal(){
       const phoneTotal=getInputValue('phone') * 1219;
       const caseTotal=getInputValue('case') * 59;
       const subTotal=phoneTotal+caseTotal;
       const tax=subTotal / 10;
       const TotalPrice=subTotal+tax;
       // subtotal update on the html
       document.getElementById('sub-total').innerText=subTotal;
       document.getElementById('tax-amount').innerText=tax;
       document.getElementById('total-price').innerText=TotalPrice;
       
    
    }
    // Update case price
    const casePlus= document.getElementById('case-plus');
     casePlus.addEventListener('click', function(){ 
        updateCaseNumber("case",59,true);
     })
     const caseMin= document.getElementById('case-minus');
    caseMin.addEventListener('click', function(){ 
        updateCaseNumber("case",59,false);
     
     })
    
    // update Phone price
    const phonePlus=document.getElementById('phone-plus');
    phonePlus.addEventListener("click", function(){
      updateCaseNumber("phone",1219,true);
    })
    const phoneMinus=document.getElementById("phone-minus");
    phoneMinus.addEventListener("click", function(){
      updateCaseNumber("phone",1219,false);
    })
    
    
    
     
    