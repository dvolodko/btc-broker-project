const documentDateSelector = document.getElementById("pricing-date");
const pdfViewerMain = document.getElementById("pdf-main");
const pdfViewerFallback = document.getElementById("pdf-main-mobile");

const dateSelectorHandler = event => {
	console.log(event.currentTarget.value);
	pdfViewerMain.setAttribute(
		"data",
		`/upload/documents/pricing/2023/${event.currentTarget.value}.pdf`,
	);
	console.log(pdfViewerMain.data);
};

documentDateSelector.addEventListener("change", dateSelectorHandler);
