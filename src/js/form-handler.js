import { throttle } from "lodash";
import { save, load, remove } from "./storage";

const STORAGE_KEY = "survey-form-state";

const refs = {
	form: document.querySelector(".form-survey"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onFormInput, 500));

populateForm();

initialState();

function initialState() {
	const savedFormData = load(STORAGE_KEY);
	if (savedFormData) {
		return (formData = Object.assign(savedFormData));
	} else {
		return (formData = {});
	}
}

function onFormInput(e) {
	formData[e.target.name] = e.target.value;
	save(STORAGE_KEY, formData);
}

// function onFormSubmit(e) {
// 	if (formData.email && formData.message) {
// 		e.preventDefault();
// 		console.log(formData);
// 		e.currentTarget.reset();
// 		remove(STORAGE_KEY);
// 		formData = {
// 			email: "",
// 			message: "",
// 		};
// 	} else {
// 		console.log("Користувач намагається відправити недозаповнену форму");
// 	}
// }

// Тимчасове прибирання реквайред з полів
const requiredArray = document.querySelectorAll("[required]");
requiredArray.forEach(requiredElement => {
	requiredElement.removeAttribute("required");
});
// ______________________________________

function onFormSubmit(e) {
	e.preventDefault();
	for (const inputData of e.target) {
		if (inputData.value) {
			formData[inputData.name] = inputData.value;
		}
	}
	for (const inputDataToLog in formData) {
		console.log(inputDataToLog, ": ", formData[inputDataToLog]);
	}
	e.currentTarget.reset();
	remove(STORAGE_KEY);
	for (key in formData) {
		delete formData[key];
	}
}

function populateForm() {
	const savedFormData = load(STORAGE_KEY);

	if (savedFormData) {
		const keys = Object.keys(savedFormData);
		for (const key of keys) {
			refs.form[key].value = savedFormData[key];
		}
	}
}
