function ordinal_suffix_of(i) {
	let j = i % 10,
		k = i % 100;
	if (j === 1 && k !== 11) {
		return i + "st";
	}
	if (j === 2 && k !== 12) {
		return i + "nd";
	}
	if (j === 3 && k !== 13) {
		return i + "rd";
	}
	return i + "th";
}

function updateTimeDisplay() {
	const time = getCurrentTime();
	const timeWeekDay = time.toLocaleDateString("en-US", { weekday: "long" });
	const timeDay = time.toLocaleDateString("en-US", { day: "numeric" });
	const timeMonth = time.toLocaleDateString("en-US", { month: "short" });
	const timeYear = time.toLocaleDateString("en-US", { year: "numeric" });

	const timeHour = ("0" + time.getHours()).slice(-2);
	const timeMinute = ("0" + time.getMinutes()).slice(-2);
	const timeSecond = ("0" + time.getSeconds()).slice(-2);

	document.getElementById("time-dow").innerHTML = timeWeekDay;
	document.getElementById("time-day").innerHTML = ordinal_suffix_of(timeDay);
	document.getElementById("time-month").innerHTML = timeMonth;
	document.getElementById("time-year").innerHTML = timeYear;

	// document.getElementById("clock-hour").innerHTML = timeHour;
	// document.getElementById("clock-minute").innerHTML = timeMinute;
	// document.getElementById("clock-second").innerHTML = timeSecond;
}

setInterval(updateTimeDisplay, 0);
