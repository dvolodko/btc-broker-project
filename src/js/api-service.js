const url =
	"https://personal-proxy-b5e6f7bc49eb.herokuapp.com/https://2btc.7buh.online/kw_api/custom/btc.mobile_datas";
const url2 =
	"https://personal-proxy-b5e6f7bc49eb.herokuapp.com/http://217.20.170.109:8469/kw_api/custom/btc.mobile_datas";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append(
	"Cookie",
	"session_id=e49047a2b3b0af393df6ad8bbf55f4a962a8eaa3",
);

var raw = JSON.stringify({
	apartment: "777",
	firstname: "Denys",
	lastname: "Volodko",
	creditor_names: "Монобанк",
	is_fop: true,
	postal_code: "77777",
});

var requestOptions = {
	method: "POST",
	headers: myHeaders,
	body: raw,
	redirect: "follow",
};

fetch(url2, requestOptions)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.log("error", error));
