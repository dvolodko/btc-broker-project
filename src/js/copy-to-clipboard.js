const elementToCopy = document.querySelector(".banking-details-list");

elementToCopy.addEventListener("click", e => {
	if (e.target.className === "banking-details-item-strong-text") {
		console.log(e.target.innerText);
		navigator.clipboard.writeText(e.target.className);
	}
});
