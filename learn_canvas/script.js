// let canvas = document.getElementById("tutorial");
// let ctx = canvas.getContext("2d");

function draw() {
  let canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    let stx = canvas.getContext("2d");

    // stx.fillStyle = "rgb(200,0,0)";
    // stx.fillRect(10, 10, 50, 50);

    // stx.fillStyle = "rgb(0,0,200,0.5)";
    // stx.fillRect(30, 30, 50, 50);

    // stx.strokeRect(50, 50, 50, 50);

    // stx.fillRect(25, 25, 100, 100);
    // stx.clearRect(45, 45, 60, 60);
    // stx.strokeRect(50, 50, 50, 50);

    // Uchbruchak chizish
    stx.beginPath();
    // chizishni boshlash metodi
    stx.moveTo(75, 50);
    // bu uchburchakning bitta burchagi joylashgan joy
    stx.lineTo(100, 75);
    // ikkinchi burchagi joylashgan joyni belgilaydi
    stx.lineTo(100, 25);
    // uchinchi burchagi joylashgan joyni belgilaydi
    stx.fill();
    // bu 3 ta burchak orasini toldirib berish uchun ishlatiladi
  }
}
