const elementToCopy = document.querySelector(".banking-details-list");

elementToCopy.addEventListener("click", e => {
	if (e.target.className === "banking-details-item-strong-text") {
		navigator.clipboard.writeText(e.target.innerText);
	}
});
