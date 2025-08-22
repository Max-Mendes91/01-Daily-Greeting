function loadTime() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("image");
  var body = document.body;

  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes().toString().padStart(2, "0");

  msg.innerHTML = `Now is ${hour}:${minutes} hours.`;

  if (hour >= 0 && hour < 12) {
    msg.innerHTML += " Good morning!";
    img.src = "./images/morningpic.png";
    body.style.background = "#f7d9aa";
    msg.style.color = "#d8d1ccff";
  } else if (hour >= 12 && hour < 18) {
    msg.innerHTML += " Good afternoon!";
    img.src = "./images/afternoonpic.png";
    body.style.background = "#f4a261";
    msg.style.color = "#2a2a2a";
  } else {
    msg.innerHTML += " Good evening!";
    img.src = "./images/nightpic.png";
    body.style.background = "#914803ff";
    msg.style.color = "#0e0e0eff";
  }
}
