{
	// Make span to serve as counter and mythology roulette span accessible in JavaScript.

	let counter = document.getElementById("counter");
	let mythologyroulette = document.getElementById("mythologyroulette");

	
	// Set date and enddate. enddate is already set in seconds, date is not. So, before being used, date is rounded and the result is then assigned to date.

	let date = new Date() / 1000;
	date = Math.round(date);
	let enddate = new Date(1708390800);
	let timeleft = enddate - date;


	// Begin counter, keep it running every second (every 1000 miliseconds).
	 
	counter.innerHTML = timeleft + ' seconds';
	function updateCounter () {
		timeleft--;
		counter.innerHTML = timeleft + ' seconds';
	}

	setInterval(updateCounter, 1000);


        // Select random story for mythology roulette
        // 0. "Ra"
        // 1. "The Goddess Sekmet Comes To Life From Ra's Eye"
        // 2. "Ra Thinks About Getting Some Rest"
        // 3. "Nouit's Five Children"
        // 4. "Osiris' Death"
        // 5. "Osiris' Resurrection"
        // 6. "Horus"
        // 7. "Sources of The Nile"
        // 8. "The Chaos"
        // 9. "Danae"
        // 10. "Io"
        // 11. "Leda"

        let storynum = Math.floor(Math.random() * 12);
        switch (storynum) {
                case 0:
                        mythologyroulette.innerHTML = '<a href = "ra">"Ra"</a>';
                        break;
                case 1:
                        mythologyroulette.innerHTML = '<a href = "sekmet">"The Goddess Sekmet Comes To Life From Ra\'s Eye"</a>';
                        break;
                case 2:
                        mythologyroulette.innerHTML = '<a href = "rarests">"Ra Thinks About Getting Some Rest"</a>';
                        break;
                case 3:
                        mythologyroulette.innerHTML = '<a href = "nouit">"Nouit\'s Five Children"</a>';
                        break;
                case 4:
                        mythologyroulette.innerHTML = '<a href = "osirisdeath">"Osiris\' Death"</a>';
                        break;
                case 5:
                        mythologyroulette.innerHTML = '<a href = "osirisresurrection">"Osiris\' Resurrection"</a>';
                        break;
                case 6:
                        mythologyroulette.innerHTML = '<a href = "horus">"Horus"</a>';
                        break;
                case 7:
                        mythologyroulette.innerHTML = '<a href = "sourcesofthenile">"Sources of The Nile"</a>';
                        break;
                case 8:
                        mythologyroulette.innerHTML = '<a href = "thechaos">"The Chaos"</a>';

		case 9:
			mythologyroulette.innerHTML = '<a href = "danae">"Danae"</a>';
			break;
		case 10:
			mythologyroulette.innerHTML = '<a href = "io">"Io"</a>';
			break;
		case 11:
			mythologyroulette.innerHTML = '<a href = "leda">"Leda"</a>';
			break;
	}
}
