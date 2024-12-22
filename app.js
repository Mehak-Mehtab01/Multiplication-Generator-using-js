document.getElementById("generateBtn").addEventListener("click", function() {
    const num = document.getElementById("numInput").value;
    const resultContainer = document.getElementById("tableResult");
    resultContainer.innerHTML = "";
    if (num === "" || isNaN(num)) {
        resultContainer.innerHTML = "<p>Please enter a valid number</p>";
        resultContainer.style.color = "red";
        resultContainer.style.marginLeft= "25px"
        return;
    }
   for (let i = 1; i <= 10; i++) {
        resultContainer.innerHTML += `<p>${num} x ${i} = ${num * i}</p>`;
        resultContainer.style.color="black";
         resultContainer.style.marginLeft= "65px";
         resultContainer.style.fontWeight="bold";
    }
});
