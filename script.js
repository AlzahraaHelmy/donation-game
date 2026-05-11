function send() {
  let name = document.getElementById("name").value;

  if (!name) {
    alert("اكتب اسمك");
    return;
  }

  let amount = Math.floor(Math.random() * 500) + 10;

  fetch("PUT_YOUR_LINK_HERE", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      amount: amount
    })
  });

  alert("تم التسجيل: " + amount + " جنيه");
}
