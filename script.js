function send() {
  let name = document.getElementById("name").value;

  if (!name) {
    alert("اكتب اسمك");
    return;
  }

  let amount = Math.floor(Math.random() * 500) + 10;

  fetch("https://script.google.com/macros/s/AKfycbzc96mKHqHWUZIK5ZxiAL5ZCetCQ73_2-UHbQM-_Y1iTojCtuQEXuOHdEqBmhyx6Ckmdw/exec", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      amount: amount
    })
  });

  alert("تم التسجيل: " + amount + " جنيه");
}
