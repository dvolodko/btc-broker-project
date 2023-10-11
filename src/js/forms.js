// Прихований інпут про Політично значущу особу

const PEPelement = document.querySelector('[aria-labelledby="isPEP"]');
const PEPTrueElement = document.getElementById("isPEPtrue");
const PEPHiddenInputWrapper = PEPelement.querySelector(
	".hidden-inputs-wrapper",
);
const hiddenLabel = PEPHiddenInputWrapper.querySelector("label");
const hiddenInput = PEPHiddenInputWrapper.querySelector("input");

PEPelement.addEventListener("click", () => {
	if (PEPTrueElement.checked) {
		PEPHiddenInputWrapper.style.maxHeight =
			PEPHiddenInputWrapper.scrollHeight + "px";
		hiddenLabel.classList.add("required");
		hiddenInput.setAttribute("required", true);
	} else {
		PEPHiddenInputWrapper.style.maxHeight = null;
		hiddenLabel.classList.remove("required");
		hiddenInput.removeAttribute("required");
	}
});

// Дізейбл полів про ІПН у разі позначки про відмову від ІПН

const IPNElement = document.querySelector(".taxID-disable");
const taxIDLabel = IPNElement.querySelector(".taxID-label");
const taxIDInput = IPNElement.querySelector(".taxID-input");
const IPNFileLabel = IPNElement.querySelector(".IPN-file-label");
const IPNFileInput = IPNElement.querySelector(".IPN-file-input");
const nonIPNCheckbox = document.getElementById("nonIPN");

nonIPNCheckbox.addEventListener("click", () => {
	if (nonIPNCheckbox.checked) {
		taxIDLabel.classList.remove("required");
		IPNFileLabel.classList.remove("required");
		taxIDInput.removeAttribute("required");
		IPNFileInput.removeAttribute("required");
		taxIDInput.setAttribute("disabled", true);
		IPNFileInput.setAttribute("disabled", true);
	} else {
		taxIDLabel.classList.add("required");
		IPNFileLabel.classList.add("required");
		taxIDInput.setAttribute("required", true);
		IPNFileInput.setAttribute("required", true);
		taxIDInput.removeAttribute("disabled");
		IPNFileInput.removeAttribute("disabled");
	}
});

// Приховані інпути про податкове резиденство Сполучених Штатів

const taxResidenceElement = document.querySelector(
	'[aria-labelledby="tax-residence"]',
);
const citizenshipHiddenInputsWrapper = taxResidenceElement.querySelector(
	".hidden-inputs-wrapper",
);
const USTaxResidentInput = document.getElementById("is-US-tax-residence");
const nonUkraineTaxResidentInput = document.getElementById(
	"is-nonUkraine-tax-residence",
);
const countryUkraine = taxResidenceElement.querySelector('[value="UA"]');
const countryUS = taxResidenceElement.querySelector('[value="US"]');
const countryDummy = taxResidenceElement.querySelector('[value="00"]');

USTaxResidentInput.addEventListener("click", () => {
	if (nonUkraineTaxResidentInput.checked) {
		return;
	} else if (USTaxResidentInput.checked) {
		citizenshipHiddenInputsWrapper.style.maxHeight =
			citizenshipHiddenInputsWrapper.scrollHeight + "px";
		countryUkraine.removeAttribute("selected");
		countryUS.setAttribute("selected", true);
	} else {
		citizenshipHiddenInputsWrapper.style.maxHeight = null;
		countryUkraine.setAttribute("selected", true);
		countryUS.removeAttribute("selected");
	}
});

nonUkraineTaxResidentInput.addEventListener("click", () => {
	if (USTaxResidentInput.checked) {
		return;
	} else if (nonUkraineTaxResidentInput.checked) {
		citizenshipHiddenInputsWrapper.style.maxHeight =
			citizenshipHiddenInputsWrapper.scrollHeight + "px";
		countryUkraine.removeAttribute("selected");
		countryDummy.setAttribute("selected", true);
	} else {
		citizenshipHiddenInputsWrapper.style.maxHeight = null;
		countryUkraine.setAttribute("selected", true);
		countryDummy.removeAttribute("selected");
	}
});
