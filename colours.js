function pickTextColour(bg) {
	var color = bg.charAt(0) === "#" ? bg.substring(1, 7) : bg;
	var r = parseInt(color.substring(0, 2), 16); // hexToR
	var g = parseInt(color.substring(2, 4), 16); // hexToG
	var b = parseInt(color.substring(4, 6), 16); // hexToB
	return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "var(--black)" : "var(--white)";
}

const colourCards = document.querySelectorAll("#colour-matrix div");

colourCards.forEach((card) => {
	const colourHex = card.querySelector(".colour-code").textContent;
	card.style.backgroundColor = colourHex;
	card.style.color = pickTextColour(colourHex);

	card.addEventListener("click", () => {
		navigator.clipboard.writeText(colourHex);

		const text = card.querySelector(".colour-code").textContent;
		card.querySelector(".colour-code").textContent = "#COPIED";

		setTimeout(() => {
			card.querySelector(".colour-code").textContent = text;
		}, 500);
	});
});
