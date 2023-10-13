import { throttle } from "lodash";
import { save, load, remove } from "./storage";

const STORAGE_KEY = "survey-form-state";

const formData = {
	// email: "",
	// message: "",
};

const refs = {
	form: document.querySelector(".form-survey"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onFormInput, 500));

// populateForm();

function onFormInput(e) {
	// const savedFormData = load(STORAGE_KEY);

	// if (savedFormData) {
	// 	formData = load(STORAGE_KEY);
	// }

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

const requiredArray = document.querySelectorAll("[required]");
requiredArray.forEach(requiredElement => {
	requiredElement.removeAttribute("required");
});

function onFormSubmit(e) {
	e.preventDefault();
	const formData = {};
	for (const inputData of e.target) {
		formData[inputData.name] = inputData.value;
	}
	console.log(formData);
}

function populateForm() {
	const savedFormData = load(STORAGE_KEY);

	if (savedFormData) {
		refs.form.email.value = savedFormData.email;
		refs.form.message.value = savedFormData.message;
	}
}
