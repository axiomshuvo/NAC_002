//  select the dom 
let balance =document.getElementById("balance");
let totaldp = document.getElementById("totaldp");
let totalwd = document.getElementById("totalwd");

let deposit = document.getElementById("deposit");
let withdraw = document.getElementById("withdraw");
let num = document.getElementById("num");

// take input 
let balancesheet = 0;
let depositbal = 0;
let withdrawbal = 0;
// initialize basic value
balance.innerHTML = balancesheet;
totaldp.innerHTML = depositbal;
totalwd.innerHTML = withdrawbal;


// & calculation
deposit.addEventListener('click', function(){
let damount = num.value;
    damount = parseInt(damount)

  if(damount > 0 ){
    console.log(damount);
    balancesheet += damount;
    depositbal += damount;
  
    balance.innerHTML = balancesheet;
    totaldp.innerHTML = depositbal;
  }else{
    alert('Please enter a valid amount');
  }

});


withdraw.addEventListener('click', function(){
  let withamount = num.value;
      withamount = parseInt(withamount);
  
      if(withamount < 0 ){
        // console.log(withamount);
        // console.log(typeof(withamount));
        alert('Please enter a valid amount');
      }
      else{

 if((balancesheet - withamount) < 0){
          alert("Insufficient Balance");
        //   console.log(withamount);
        // console.log(typeof(withamount));

        } else{
          console.log(withamount);
          console.log(typeof(withamount));
          balancesheet -= withamount;
          withdrawbal += withamount;
          balance.innerHTML = balancesheet;
          totalwd.innerHTML = withdrawbal;
        }
      }

  });
