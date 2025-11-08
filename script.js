function loadTime() {
  const msg = document.getElementById("msg");
  const img = document.getElementById("image");
  const body = document.body;

  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  let greeting;
  let imageSrc;
  let imageAlt;
  let backgroundColor;
  let textColor;

  if (hour >= 0 && hour < 12) {
    greeting = "Good morning!";
    imageSrc = "./images/morningpic.png";
    imageAlt = "A picture of a sunrise";
    backgroundColor = "#f7d9aa";
    textColor = "#d8d1ccff";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good afternoon!";
    imageSrc = "./images/afternoonpic.png";
    imageAlt = "A picture of an afternoon landscape";
    backgroundColor = "#f4a261";
    textColor = "#2a2a2a";
  } else {
    greeting = "Good evening!";
    imageSrc = "./images/nightpic.png";
    imageAlt = "A picture of a starry night";
    backgroundColor = "#914803ff";
    textColor = "#0e0e0eff";
  }

  msg.innerHTML = `Now is ${hour}:${minutes} hours. ${greeting}`;
  img.src = imageSrc;
  img.alt = imageAlt;
  body.style.background = backgroundColor;
  msg.style.color = textColor;
}
