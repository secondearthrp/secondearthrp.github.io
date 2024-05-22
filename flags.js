const colourCards = document.querySelectorAll("#colour-matrix div");

colourCards.forEach((card) => {
	card.addEventListener("click", () => {
		// copy the colour code to the clipboard
		navigator.clipboard.writeText(
			card.querySelector(".colour-code").textContent
		);

        const text = card.querySelector(".colour-code").textContent;
        card.querySelector(".colour-code").textContent = "#COPIED";

        setTimeout(() => {
            card.querySelector(".colour-code").textContent = text;
        }, 500);
	});
});