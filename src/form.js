import "./js/mobile-menu";
import "./js/collapsible-menu";
import "./js/header-menu";
import "./js/header-shadow-after-scroll";
import "./js/forms";
import "./js/form-handler";
import { postFormData } from "./js/api-service";

const myData = { name: "Denys", test: "123" };
postFormData(myData);
