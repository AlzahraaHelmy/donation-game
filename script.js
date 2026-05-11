function send() {
  let name = document.getElementById("name").value;

  if (!name) {
    alert("اكتب اسمك");
    return;
  }

  let amount = Math.floor(Math.random() * 500) + 10;

  fetch("https://script.google.com/macros/s/AKfycbz2Lshx1u6bEvstP2rF6xpHaY0UMfY4jQ8_49H4XyV0Ue2rsG2z-A2Mh-SEjTAAQ-eeZg/exec", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      amount: amount
    })
  });

  alert("تم التسجيل: " + amount + " جنيه");
}
