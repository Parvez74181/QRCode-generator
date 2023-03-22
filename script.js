const qr_code_input_text = document.getElementById("qr-code-input-text");
const create_qr_code_btn = document.getElementById("create-qr-code-btn");
const qr_code_img = document.getElementById("qr-code-img");
const qr_code_box = document.querySelector(".qr-code-box");

create_qr_code_btn.addEventListener("click", () => {
  let value = qr_code_input_text.value;
  create_qr_code_btn.innerText = "Genereting QR Code...";
  qr_code_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
  qr_code_img.onload = () => {
    qr_code_box.style.display = "inherit";
    create_qr_code_btn.innerText = "Generate QR Code";
  };
});
