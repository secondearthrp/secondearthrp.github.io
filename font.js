if (localStorage.getItem("mono-font") === null) {
	localStorage.setItem("mono-font", 1);
}

if (localStorage.getItem("mono-font") == 0) {
    document.documentElement.style.setProperty(
        "--body-font",
        "Outfit Light, sans-serif"
    );
}

function toggleFont() {
	if (localStorage.getItem("mono-font") == 1) {
		document.documentElement.style.setProperty(
			"--body-font",
			"Outfit Light, sans-serif"
		);
		localStorage.setItem("mono-font", 0);
	} else if (localStorage.getItem("mono-font") == 0) {
		document.documentElement.style.setProperty(
			"--body-font",
			"Iosevka Regular, monospace"
		);
		localStorage.setItem("mono-font", 1);
	}
}
