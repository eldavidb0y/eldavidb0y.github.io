

document.addEventListener('DOMContentLoaded', function() {
      document.querySelector('#button1').onclick = hello;
  })
  document.addEventListener('DOMContentLoaded', function() {
      document.querySelector('#button2').onclick = count;
      document.querySelector('#zero').innerHTML = localStorage.getItem('counter');

      //setInterval(count, 1000);
  })
        //by default, submit button is disabled
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('#submit').disabled = true;
        document.querySelector('#formCurrency').onkeyup = () => { 
            if (document.querySelector('#currency').value.length > 0) {
                document.querySelector('#submit').disabled = false;
            }
            else { 
            document.querySelector('#submit').disabled = true;
            }
        }
    })


  document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('#formCurrency').onsubmit=function() {
          fetch('https://api.exchangeratesapi.io/latest?base=EUR')
         .then(response => {
         return response.json()})
         //equiv version is .then(respons => response.json())
         .then(data => {
              const currency=document.querySelector('#currency').value.toUpperCase();
              const rate = data.rates[currency];
              if (rate !== undefined) { 
              document.querySelector('#resultCurrency').innerHTML = `1 EUR son ${rate.toFixed(3)} ${currency}... está dlv`;
              document.querySelector('#formCurrency').value = '';
                

                //stop form from submiting
                return false;

          } else {
                  document.querySelector('#resultCurrency').innerHTML = 'Invalid currency.';

              }
          })
          .catch(error =>{
              console.log('Error:', error);
          });
          return false;
      }
  })



  //        let counter = 0;
  if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
  }
  function count() {
      let counter = localStorage.getItem('counter'); //equal to saying counter++;
      counter++;
      document.querySelector('#zero').innerHTML = counter;
      localStorage.setItem('counter', counter);
  }


  function hello() {
      let helloGoodbye = document.querySelector('#hello');
     
      if (helloGoodbye.innerHTML === 'Hello!') { 
      helloGoodbye.innerHTML = 'Goodbye!';
  } else {helloGoodbye.innerHTML = 'Hello!';
  } 
  }        