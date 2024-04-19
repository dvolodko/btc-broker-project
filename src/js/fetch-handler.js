async function fetchBonds() {
	const response = await fetch("https://bond.ua/landing/asset/?asset_type=0");
	const bonds = await response.json();
	console.log(bonds.results);
}

fetchBonds();
