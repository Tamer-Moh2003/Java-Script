
const title = document.getElementById("title");
const message = document.querySelector("#message");
const button = document.getElementById("changeButton");
const card = document.querySelector(".card");
const status = document.querySelector(".status");

title.textContent = "DOM Manipulation";
message.textContent = "The page has been updated with JavaScript.";

title.style.color = "#059669";
message.style.fontSize = "18px";

card.classList.add("active");
status.textContent = "Status: Active";

button.textContent = "Page Updated";

console.log("DOM updated successfully!");

