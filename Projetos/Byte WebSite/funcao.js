const form = document.getElementById('form-contato');
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const response = await fetch("https://formspree.io/f/xblaybkj", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert("Mensagem enviada!");
      form.reset();
    } else {
      alert("Ops! Algo deu errado. Tente novamente.");
    }
  });
  
document.getElementById('year').textContent = new Date().getFullYear



/* ==== Botões Sobre ==== */
function expandirContA1(){
  var p = document.getElementById("A1")
  if(p.style.display === "none"|| p.style.display === ""){
    p.style.display ="block";
  }
  else{
    p.style.display ="none";
  }
}
function expandirContA2(){
  var p = document.getElementById("A2")
  if(p.style.display === "none"|| p.style.display === ""){
    p.style.display ="block";
  }
  else{
    p.style.display ="none";
  }
}
function expandirContA3(){
  var p = document.getElementById("A3")
  if(p.style.display === "none"|| p.style.display === ""){
    p.style.display ="block";
  }
  else{
    p.style.display ="none";
  }
}
function expandirContA4(){
  var p = document.getElementById("A4")
  if(p.style.display === "none"|| p.style.display === ""){
    p.style.display ="block";
  }
  else{
    p.style.display ="none";
  }
}
function expandirContA5(){
  var p = document.getElementById("A5")
  if(p.style.display === "none"|| p.style.display === ""){
    p.style.display ="block";
  }
  else{
    p.style.display ="none";
  }
}

/* ====== Botões Pessoal 1====== */
function ConhecaB1(){
  var p = document.getElementById("B1")
  if (p.style.display === "none" || p.style.display === ""){
    p.style.display = "block";
  }
  else{
    p.style.display = "none";
  }
}


function ConhecaB2(){
  var p = document.getElementById("B2")
  if (p.style.display === "none" || p.style.display === ""){
    p.style.display = "block";
  }
  else{
    p.style.display = "none";
  }
}


function ConhecaB3(){
  var p = document.getElementById("B3")
  if (p.style.display === "none" || p.style.display === ""){
    p.style.display = "block";
  }
  else{
    p.style.display = "none";
  }
}