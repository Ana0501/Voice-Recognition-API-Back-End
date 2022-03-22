let range = document.getElementById("slider");
let ax = 0;


range.addEventListener('input', (e)=>{
  console.log(range.value);
  let dataString = "status=" + range.value;
  e.preventDefault();
  if(ax != range.value){
    ax = range.value;
    $.ajax
    ({
        type: "GET",
        url: "./setStatusSlider.php",
        data: dataString,
        success: function (res) {
            console.log(res);
            
        }
  });
}
});

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResult = true;

recognition.addEventListener('result', (e)=>{
  const text = Array.from(e.results)
   .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    console.log(text);

  if(e.results[0].isFinal){
    if (text.includes('valor')||text.includes('Valor') ) {
      let num = text.split(' ')[1];
      if (!isNaN(num)){
        console.log("número: " + num);
        let dataString = "status="+ num;
        e.preventDefault();
        if (ax != num){
          ax = num;
          range.value=num;
          $.ajax
          ({
              type: "GET",
              url: "../bakend/https://ihcanlth.000webhostapp.com//setStatusSlider.php",
              data: dataString,
              success: function (res) {
                  console.log(res);
                  
              }
          });
  }
        } 
      }

  }
});
  
recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();