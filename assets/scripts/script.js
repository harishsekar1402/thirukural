var counter=2;
function kural(){
      fetch('https://api-thirukkural.vercel.app/api?num=' + counter)
    .then((res) => res.json())
    .then((msg) => {
      document.getElementById('ku-title').innerHTML = msg.chap_tam;
      document.getElementById('ku-line1').innerHTML = msg.line1;
      document.getElementById('ku-line2').innerHTML = msg.line2;
      document.getElementById('ku-explain').innerHTML = msg.tam_exp;
    })
    .catch((error) => console.log(error));
    document.getElementById('count').innerHTML = counter;
    counter++;
    
}
   


