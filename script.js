<script>

document.addEventListener('DOMContentLoaded', function() {
      document.querySelector('#button1').onclick = hello;
  })
  document.addEventListener('DOMContentLoaded', function() {
      document.querySelector('#button2').onclick = count;
      document.querySelector('#zero').innerHTML = localStorage.getItem('counter');

      //setInterval(count, 1000);
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
              document.querySelector('#resultCurrency').innerHTML = `1 EUR is equal to ${rate.toFixed(3)} ${currency}.`;
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
</script>
