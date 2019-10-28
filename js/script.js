// Akan form submit

const submit = document.getElementById("submit");

// Akan Variables declaration

submit.addEventListener("click", function display() {
 
    const dd = document.getElementById("day").value;
    const mm = document.getElementById("month").value;
    const yy = document.getElementById("year").value;
    const date = new Date(`${yy}-${mm}-${dd}`);
    const dayOfBirth = date.getDay();
    const maleGender = document.getElementById("male");
    const femaleGender = document.getElementById("female");
    const display = document.getElementById("display");
  
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
    const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  
    const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    ``;
    if (dd < 1 && dd < 31) {
        display.style.background = "red";
        display.style.color = "#fff";
        display.innerHTML = `Fala, enter a valid date`;
      } else if (male.checked) {
        display.innerHTML = `Hello Papagena, you were born on a ${days[dayOfBirth]} and your Akan name is ${maleNames[dayOfBirth]} `;
      } else {
        display.innerHTML = `Bonjour Maidemoiselle, you were born on a ${days[dayOfBirth]} and your Akan name is ${femaleNames[dayOfBirth]} `;
      }
    });
