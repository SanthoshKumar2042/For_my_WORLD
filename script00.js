document.getElementById("password-input").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      const password = event.target.value;
      if (password === "0102") {
        window.location.href = "book.html";
      } else {
        alert("Incorrect password. Password Maranthutiya vellapaniyaram🙄.");
      }
    }
  });
  