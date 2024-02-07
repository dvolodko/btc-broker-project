// const form = document.querySelector(".form-survey");
// const inputs = form.querySelectorAll("[name]");
// const namesArray = [];
// inputs.forEach(node => {
// 	namesArray.push(node.name);
// });
// const filteredArrayNames = namesArray.filter(
// 	(element, index, array) => array.indexOf(element) === index,
// );
// console.log(filteredArrayNames);

// Прихований інпут про Політично значущу особу

const PEPelement = document.querySelector('[aria-labelledby="isPEP"]');
const PEPTrueElement = document.getElementById("isPEPtrue");
const PEPHiddenInputWrapper = PEPelement.querySelector(
	".hidden-inputs-wrapper",
);
const hiddenLabel = PEPHiddenInputWrapper.querySelector("label");
const hiddenInput = PEPHiddenInputWrapper.querySelector("input");

if (PEPTrueElement.checked) {
	toExpandArea(PEPHiddenInputWrapper, hiddenLabel, hiddenInput);
}

PEPelement.addEventListener("click", () => {
	if (PEPTrueElement.checked) {
		toExpandArea(PEPHiddenInputWrapper, hiddenLabel, hiddenInput);
	} else {
		toCollapseArea(PEPHiddenInputWrapper, hiddenLabel, hiddenInput);
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
const taxResidenceHiddenInputsWrapper = taxResidenceElement.querySelector(
	".hidden-inputs-wrapper",
);
const USTaxResidentInput = document.getElementById("isUSTaxResidence");
const nonUkraineTaxResidentInput = document.getElementById(
	"isNonUkraineTaxResidence",
);
const countryUkraine = taxResidenceElement.querySelector('[value="UA"]');
const countryUS = taxResidenceElement.querySelector('[value="US"]');
const countryDummy = taxResidenceElement.querySelector('[value="00"]');

USTaxResidentInput.addEventListener("click", () => {
	if (nonUkraineTaxResidentInput.checked) {
		return;
	} else if (USTaxResidentInput.checked) {
		taxResidenceHiddenInputsWrapper.style.maxHeight =
			taxResidenceHiddenInputsWrapper.scrollHeight + "px";
		countryUkraine.removeAttribute("selected");
		countryUS.setAttribute("selected", true);
	} else {
		taxResidenceHiddenInputsWrapper.style.maxHeight = null;
		countryUkraine.setAttribute("selected", true);
		countryUS.removeAttribute("selected");
	}
});

nonUkraineTaxResidentInput.addEventListener("click", () => {
	if (USTaxResidentInput.checked) {
		return;
	} else if (nonUkraineTaxResidentInput.checked) {
		taxResidenceHiddenInputsWrapper.style.maxHeight =
			taxResidenceHiddenInputsWrapper.scrollHeight + "px";
		countryUkraine.removeAttribute("selected");
		countryDummy.setAttribute("selected", true);
	} else {
		taxResidenceHiddenInputsWrapper.style.maxHeight = null;
		countryUkraine.setAttribute("selected", true);
		countryDummy.removeAttribute("selected");
	}
});

// Динамічні інпути в залежності від документу, що посвідчує особу

const citizenshipElement = document.querySelector(
	'[aria-labelledby="citizenship"]',
);
const citizenshipRadioGroup =
	citizenshipElement.querySelector(".form-group-radio");
const passportTypeIDCard = document.getElementById("is-passport-type-id-card");
const passportTypePassport = document.getElementById(
	"is-passport-type-passport",
);
const passportTypeForeignPassport = document.getElementById(
	"is-passport-type-foreign-passport",
);
const passportTypeOther = document.getElementById("is-passport-type-other");
const citizenshipHiddenInputsWrapper = citizenshipElement.querySelector(
	".hidden-inputs-wrapper",
);
const passportNameInput = citizenshipElement.querySelector(
	".passport-name-wrapper",
);
const passportCodeInputWrapper = citizenshipElement.querySelector(
	".passport-code-wrapper",
);
const passportDateExpiredInput = citizenshipElement.querySelector(
	".passport-date-expired-wrapper",
);
const passportIssuedInput = document.getElementById("passportIssued");
const passportNumberInput = document.getElementById("passportNumber");
const passportCodeInput = document.getElementById("passportCode");

if (passportTypeIDCard.checked) {
	toExpandIDCard();
	toExpand(citizenshipHiddenInputsWrapper);
}

if (passportTypePassport.checked) {
	toExpandPassport();
	toExpand(citizenshipHiddenInputsWrapper);
}

if (passportTypeForeignPassport.checked) {
	toExpandForeignPassport();
	toExpand(citizenshipHiddenInputsWrapper);
}

if (passportTypeOther.checked) {
	toExpandOther();
	toExpand(citizenshipHiddenInputsWrapper);
}

citizenshipRadioGroup.addEventListener("click", e =>
	dynamicInputsForPassportType(e),
);

function dynamicInputsForPassportType(e) {
	{
		const checkedRadio = e.target.closest(".form-input-radio:checked");
		if (!checkedRadio) return;
		switch (checkedRadio.value) {
			case "ID card":
				toExpandIDCard();
				break;

			case "passport":
				toExpandPassport();
				break;

			case "foreign passport":
				toExpandForeignPassport();
				break;

			case "other":
				toExpandOther();
				break;

			default:
				return;
		}
		toExpand(citizenshipHiddenInputsWrapper);
	}
}

function toExpand(area) {
	area.style.maxHeight = area.scrollHeight + "px";
}

function toExpandIDCard() {
	toShow(passportDateExpiredInput);
	toHide(passportNameInput);
	toHide(passportCodeInputWrapper);
	toChangeAttributes(passportNumberInput, "9", "9", "[0-9]{9}", "012345678");
	toChangeAttributes(passportIssuedInput, "4", "4", "[0-9]{4}", "0123");
}

function toExpandPassport() {
	toShow(passportCodeInputWrapper);
	toHide(passportNameInput);
	toHide(passportDateExpiredInput);
	toChangeAttributes(passportCodeInput, "2", "2", "", "АА");
	toChangeAttributes(passportNumberInput, "6", "6", "[0-9]{6}", "012345");
	toChangeAttributes(
		passportIssuedInput,
		"2",
		"50",
		"",
		"Голосіївським РУ ГМВС України в місті Києві",
	);
}

function toExpandForeignPassport() {
	toShow(passportCodeInputWrapper);
	toShow(passportDateExpiredInput);
	toHide(passportNameInput);
	toChangeAttributes(passportCodeInput, "2", "2", "", "АА");
	toChangeAttributes(passportNumberInput, "6", "6", "[0-9]{6}", "012345");
	toChangeAttributes(passportIssuedInput, "4", "4", "[0-9]{4}", "0123");
}

function toExpandOther() {
	toShow(passportCodeInputWrapper);
	toShow(passportDateExpiredInput);
	toShow(passportNameInput);
	toChangeAttributes(passportCodeInput, "2", "16", "", "AA");
	toChangeAttributes(passportNumberInput, "2", "16", "[0-9]{2,16}", "012345");
	toChangeAttributes(passportIssuedInput, "2", "50", "", "0123");
}

// Утилітки

function toShow(inputToShow) {
	inputToShow.classList.remove("hidden");
	inputToShow.style.maxHeight = inputToShow.scrollHeight + "px";
}

function toHide(inputToHide) {
	inputToHide.classList.add("hidden");
	inputToHide.children[1].removeAttribute("required");
	inputToHide.style.maxHeight = null;
}

function toChangeAttributes(
	inputToChange,
	minLength,
	maxLength,
	pattern,
	placeholder,
) {
	inputToChange.setAttribute("minlength", minLength);
	inputToChange.setAttribute("maxlength", maxLength);
	if (!pattern) {
		inputToChange.removeAttribute("pattern");
	} else {
		inputToChange.setAttribute("pattern", pattern);
	}
	inputToChange.setAttribute("placeholder", placeholder);
}

function toExpandArea(areaToExpand, labelToExpand, inputToExpand) {
	areaToExpand.style.maxHeight = areaToExpand.scrollHeight + "px";
	labelToExpand.classList.add("required");
	inputToExpand.setAttribute("required", true);
}

function toCollapseArea(areaToCollapse, labelToCollapse, inputToCollapse) {
	areaToCollapse.style.maxHeight = null;
	labelToCollapse.classList.remove("required");
	inputToCollapse.removeAttribute("required");
}
