// If it's in iFrame for wordpress site,
// it hides header content except for navigation.
if (window.location !== window.parent.location) {
	document.getElementById("iframe-no-display").style.display = "none";
	document.getElementById("header").style.height = "90px";
}

/********** navigation */
$(document).ready(function () {
	$('li#home').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 'slow');
	});

	$('li#navItem1').on("click", function () {
		$('html,body').animate({
			scrollTop: $("div#months2016").offset().top - 60
		}, 'slow');
		$('div#months2016').css('display', 'none').slideDown(1000);
	});

	$('li#navItem2').on("click", function () {
		$('html,body').animate({
			scrollTop: $("div#months2015").offset().top - 60
		}, 'slow');
		$('div#months2015').css('display', 'none').slideDown(1000);
	});

	$('li#navItem3').on("click", function () {
		$('html,body').animate({
			scrollTop: $("div#months2014").offset().top - 60
		}, 'slow');
		$('div#months2014').css('display', 'none').slideDown(1000);
	});

	$('li#navItem4').on("click", function () {
		$('html,body').animate({
			scrollTop: $("div#wrapper-contact").offset().top - 60
		}, 'slow');
	});
});

/* months */
$('div.month p').on("mouseover", function () {
	$(this).css({
		'border': '1px solid #f8f8ff',
		'color': '#f8f8ff',
		'text-decoration': 'none'
	});
});

$('div.month p').on("mouseout", function () {
	$(this).css({
		'border': '1px solid #f8f8ff',
		'color': '#f8f8ff'
	});
});

/* players */
$('div#months2016 p').on("click", function () {
	$('html,body').animate({
		scrollTop: $("div#audio-container2016").offset().top - 50
	}, 'slow');
	$('div#audio-container2016').css('display', 'none').fadeIn(700);
	$(this).css({
		// 'border': '5px solid green',
		'color': '#111'
	});
});

$('div#months2015 p').on("click", function () {
	$('html,body').animate({
		scrollTop: $("div#audio-container2015").offset().top - 50
	}, 'slow');
	$('div#audio-container2015').css('display', 'none').fadeIn(700);
	$(this).css({
		// 'border': '5px solid green',
		'color': '#111'
	});
});

$('div#months2014 p').on("click", function () {
	$('html,body').animate({
		scrollTop: $("div#audio-container2014").offset().top - 50
	}, 'slow');
	$('div#audio-container2014').css('display', 'none').fadeIn(700);
	$(this).css({
		// 'border': '5px solid green',
		'color': '#111'
	});
});

/*************************************************/

// contact form validation
function validateForm(name, email, message) {
	var emailCorrectPattern = /\S+@\S+\.\S+/;
	if (name.value.length === 0) {
		name.focus();
		alert("please enter your name");
		return false;
	} else if (email.value.length === 0) {
		email.focus();
		alert("please enter your email");
		return false;
	} else if (!(email.value.match(emailCorrectPattern))) {
		validForm.focus();
		alert("please correct email");
		return false;
	} else if (message.value.length === 0) {
		message.focus();
		alert("please enter your message");
		return false;
	} else {
		alert("Gracias");
		return true;
	}
}

/*************************************************/

function Month(month) {
	this.monthTitle = month.monthTitle;
	this.id = month.id;
	this.year = month.year;
	this.audioTitles = month.audioTitles;
	this.audioSources = month.audioSources;
	this.setEvent = document.getElementById(this.id).addEventListener('click', this.onClick.bind(this));
}
// handles month title
Month.prototype.handleMonthTitle = function () {
	document.getElementById("pageTitle" + this.year).innerHTML = this.monthTitle;
}
// handles audio titles
Month.prototype.handleAudioTitles = function () {
	var ids = ['firstTitle', 'secondTitle', 'thirdTitle', 'fourthTitle'];
	for (var i = 0; i < this.audioTitles.length; i++) {
		for (var j = i; j < ids.length; j++) {
			document.getElementById(ids[j] + this.year).innerHTML = this.audioTitles[i];
		}
	}
};
// handles audio sources
Month.prototype.handleAudioSources = function () {
	var ids = ['firstAudio', 'secondAudio', 'thirdAudio', 'fourthAudio'];
	var audio;
	for (var i = 0; i < this.audioSources.length; i++) {
		for (var j = i; j < ids.length; j++) {
			audio = document.getElementById(ids[j] + this.year);
			audio.src = this.audioSources[i];
			audio.load();
		}
	}
};
// this event calls handle methods
Month.prototype.onClick = function () {
	this.handleMonthTitle();
	this.handleAudioTitles();
	this.handleAudioSources();
};

/******** 2014 (from enero to diciembre) ********/

var enero2014 = new Month({
	monthTitle: 'ENERO 2014',
	id: 'enero2014',
	year: '2014',
	audioTitles: [
		"2014-01-04",
		"2014-01-11",
		"2014-01-18",
		"2014-01-25",
	],
	audioSources: [
		"audio/audio2014/2014-01-04/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-01-11/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-01-18/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-01-25/XEDX1010_13-00.mp3",
	]
});

var febrero2014 = new Month({
	monthTitle: 'FEBRERO 2014',
	id: 'febrero2014',
	year: '2014',
	audioTitles: [
		"2014-02-01",
		"2014-02-08",
		"2014-02-15",
		"2014-02-22",
	],
	audioSources: [
		"audio/audio2014/2014-02-01/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-02-08/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-02-15/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-02-22/XEDX1010_13-00.mp3",
	]
});

var marzo2014 = new Month({
	monthTitle: 'MARZO 2014',
	id: 'marzo2014',
	year: '2014',
	audioTitles: [
		"2014-03-01",
		"2014-03-08",
		"2014-03-15",
		"2014-03-22",
	],
	audioSources: [
		"audio/audio2014/2014-03-01/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-03-08/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-03-15/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-03-22/XEDX1010_13-00.mp3",
	]
});

var abril2014 = new Month({
	monthTitle: 'ABRIL 2014',
	id: 'abril2014',
	year: '2014',
	audioTitles: [
		"2014-04-05",
		"2014-04-12",
		"2014-04-19",
		"2014-04-26",
	],
	audioSources: [
		"audio/audio2014/2014-04-05/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-04-12/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-04-19/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-04-26/XEDX1010_13-00.mp3",
	]
});

var mayo2014 = new Month({
	monthTitle: 'MAYO 2014',
	id: 'mayo2014',
	year: '2014',
	audioTitles: [
		"2014-05-10",
		"2014-05-17",
		"2014-05-24",
		"2014-05-31",
	],
	audioSources: [
		"audio/audio2014/2014-05-10/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-05-17/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-05-24/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-05-31/XEDX1010_13-00.mp3",
	]
});

var junio2014 = new Month({
	monthTitle: 'JUNIO 2014',
	id: 'junio2014',
	year: '2014',
	audioTitles: [
		"2014-06-07",
		null,
		null,
		null,
	],
	audioSources: [
		"audio/audio2014/2014-06-07/XEDX1010_13-00.mp3",
		null,
		null,
		null,
	]
});

var julio2014 = new Month({
	monthTitle: 'JULIO 2014',
	id: 'julio2014',
	year: '2014',
	audioTitles: [
		"2014-07-19",
		null,
		null,
		null,
	],
	audioSources: [
		"audio/audio2014/2014-07-19/XEDX1010_13-00.mp3",
		null,
		null,
		null,
	]
});

var agosto2014 = new Month({
	monthTitle: 'AGOSTO 2014',
	id: 'agosto2014',
	year: '2014',
	audioTitles: [
		"2014-08-02",
		"2014-08-09",
		"2014-08-16",
		"2014-08-23",
	],
	audioSources: [
		"audio/audio2014/2014-08-02/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-08-09/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-08-16/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-08-23/XEDX1010_13-00.mp3",
	]
});

var septiembre2014 = new Month({
	monthTitle: 'SEPTIEMBRE 2014',
	id: 'septiembre2014',
	year: '2014',
	audioTitles: [
		"2014-09-06",
		"2014-09-20",
		null,
		null,
	],
	audioSources: [
		"audio/audio2014/2014-09-06/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-09-20/XEDX1010_13-00.mp3",
		null,
		null,
	]
});

var octubre2014 = new Month({
	monthTitle: 'OCTUBRE 2014',
	id: 'octubre2014',
	year: '2014',
	audioTitles: [
		"2014-10-04",
		"2014-10-11",
		"2014-10-18",
		"2014-10-25",
	],
	audioSources: [
		"audio/audio2014/2014-10-04/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-10-11/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-10-18/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-10-25/XEDX1010_13-00.mp3",
	]
});

var noviembre2014 = new Month({
	monthTitle: 'NOVIEMBRE 2014',
	id: 'noviembre2014',
	year: '2014',
	audioTitles: [
		"2014-11-01",
		"2014-11-08",
		"2014-11-15",
		"2014-11-22",
	],
	audioSources: [
		"audio/audio2014/2014-11-01/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-11-08/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-11-15/XEDX1010_13-00.mp3",
		"audio/audio2014/2014-11-22/XEDX1010_13-00.mp3",
	]
});

var diciembre2014 = new Month({
	monthTitle: 'DECIEMBRE 2014',
	id: 'diciembre2014',
	year: '2014',
	audioTitles: [
		"2014-12-06",
		null,
		null,
		null,
	],
	audioSources: [
		"audio/audio2014/2014-12-06/XEDX1010_13-00.mp3",
		null,
		null,
		null,
	]
});

/******** 2015 (from julio to diciembre) ********/

var julio2015 = new Month({
	monthTitle: 'JULIO 2015',
	id: 'julio2015',
	year: '2015',
	audioTitles: [
		"04-07-2015",
		"11-07-2015",
		"18-07-2015",
		"25-07-2015",
	],
	audioSources: [
		"audio/01-Julio/04-07-2015.mp3",
		"audio/01-Julio/11-07-2015.mp3",
		"audio/01-Julio/18-07-2015.mp3",
		"audio/01-Julio/25-07-2015.mp3",
	]
});

var agosto2015 = new Month({
	monthTitle: 'AGOSTO 2015',
	id: 'agosto2015',
	year: '2015',
	audioTitles: [
		"01-08-2015",
		"08-08-2015",
		"22-08-2015",
		"29-08-2015",
	],
	audioSources: [
		"audio/02-Agosto/01-08-2015.mp3",
		"audio/02-Agosto/08-08-2015.mp3",
		"audio/02-Agosto/22-08-2015.mp3",
		"audio/02-Agosto/29-08-2015.mp3",
	]
});

var septiembre2015 = new Month({
	monthTitle: 'SEPTIEMBRE 2015',
	id: 'septiembre2015',
	year: '2015',
	audioTitles: [
		"05-09-2015",
		"12-09-2015",
		"19-09-2015",
		"26-09-2015",
	],
	audioSources: [
		"audio/03-Septiembre/05-09-2015.mp3",
		"audio/03-Septiembre/12-09-2015.mp3",
		"audio/03-Septiembre/19-09-2015.mp3",
		"audio/03-Septiembre/26-09-2015.mp3",
	]
});

var octubre2015 = new Month({
	monthTitle: 'OCTUBRE 2015',
	id: 'octubre2015',
	year: '2015',
	audioTitles: [
		"03-10-2015",
		"10-10-2015",
		"24-10-2015",
		"31-10-2015",
	],
	audioSources: [
		"audio/04-Octubre/03-10-2015.mp3",
		"audio/04-Octubre/10-10-2015.mp3",
		"audio/04-Octubre/24-10-2015.mp3",
		"audio/04-Octubre/31-10-2015.mp3",
	]
});

var noviembre2015 = new Month({
	monthTitle: 'NOVIEMBRE 2015',
	id: 'noviembre2015',
	year: '2015',
	audioTitles: [
		"07-11-2015",
		"14-11-2015",
		"21-11-2015",
		"28-11-2015",
	],
	audioSources: [
		"audio/05-Noviembre/07-11-2015.mp3",
		"audio/05-Noviembre/14-11-2015.mp3",
		"audio/05-Noviembre/21-11-2015.mp3",
		"audio/05-Noviembre/28-11-2015.mp3",
	]
});

var diciembre2015 = new Month({
	monthTitle: 'DICIEMBRE 2015',
	id: 'diciembre2015',
	year: '2015',
	audioTitles: [
		"05-12-2015",
		"12-12-2015",
		"19-12-2015",
		"26-12-2015",
	],
	audioSources: [
		"audio/06-Diciembre/05-12-2015.mp3",
		"audio/06-Diciembre/12-12-2015.mp3",
		"audio/06-Diciembre/19-12-2015.mp3",
		"audio/06-Diciembre/26-12-2015.mp3",
	]
});

/******** 2016 (from enero to diciembre) ********/

var enero2016 = new Month({
	monthTitle: 'ENERO 2016',
	id: 'enero2016',
	year: '2016',
	audioTitles: [
		"02-01-2016",
		"09-01-2016",
		"16-01-2016",
		"23-01-2016",
	],
	audioSources: [
		"audio/07-Enero/02-01-2016.mp3",
		"audio/07-Enero/09-01-2016.mp3",
		"audio/07-Enero/16-01-2016.mp3",
		"audio/07-Enero/23-01-2016.mp3",
	]
});

var febrero2016 = new Month({
	monthTitle: 'FEBRER0 2016',
	id: 'febrero2016',
	year: '2016',
	audioTitles: [
		"06-02-2016",
		"13-02-2016",
		"20-02-2016",
		"27-02-2016",
	],
	audioSources: [
		"audio/08-Febrero/06-02-2016.mp3",
		"audio/08-Febrero/13-02-2016.mp3",
		"audio/08-Febrero/20-02-2016.mp3",
		"audio/08-Febrero/27-02-2016.mp3",
	]
});

var marzo2016 = new Month({
	monthTitle: 'MARZO 2016',
	id: 'marzo2016',
	year: '2016',
	audioTitles: [
		"05-03-2016",
		"12-03-2016",
		"19-03-2016",
		"26-03-2016",
	],
	audioSources: [
		"audio/09-Marzo/05-03-2016.mp3",
		"audio/09-Marzo/12-03-2016.mp3",
		"audio/09-Marzo/19-03-2016.mp3",
		"audio/09-Marzo/26-03-2016.mp3",
	]
});

var abril2016 = new Month({
	monthTitle: 'ABRIL 2016',
	id: 'abril2016',
	year: '2016',
	audioTitles: [
		"02-04-2016",
		"16-04-2016",
		"30-04-2016",
		"30-04-2016",
	],
	audioSources: [
		"audio/10-Abril/02-04-2016.mp3",
		"audio/10-Abril/16-04-2016.mp3",
		"audio/10-Abril/30-04-2016.mp3",
		"audio/10-Abril/30-04-2016.mp3",
	]
});

var mayo2016 = new Month({
	monthTitle: 'MAYO 2016',
	id: 'mayo2016',
	year: '2016',
	audioTitles: [
		"07-05-2016",
		"14-05-2016",
		"21-05-2016",
		"28-05-2016",
	],
	audioSources: [
		"audio/11-Mayo/07-05-2016.mp3",
		"audio/11-Mayo/14-05-2016.mp3",
		"audio/11-Mayo/21-05-2016.mp3",
		"audio/11-Mayo/28-05-2016.mp3",
	]
});

var junio2016 = new Month({
	monthTitle: 'JUNIO 2016',
	id: 'junio2016',
	year: '2016',
	audioTitles: [
		"04-06-2016",
		"11-06-2016",
		"18-06-2016",
		"25-06-2016",
	],
	audioSources: [
		"audio/12-Junio/04-06-2016.mp3",
		"audio/12-Junio/11-06-2016.mp3",
		"audio/12-Junio/18-06-2016.mp3",
		"audio/12-Junio/25-06-2016.mp3",
	]
});

var julio2016 = new Month({
	monthTitle: 'JULIO 2016',
	id: 'julio2016',
	year: '2016',
	audioTitles: [
		"2016-07-02",
		"2016-07-09",
		"2016-07-16",
		"2016-07-23",
	],
	audioSources: [
		"audio/audio2016/2016-07-02/XEDX1010_13-00.mp3",
		"audio/audio2016/2016-07-09/XEDX1010_13-00.mp3",
		"audio/audio2016/2016-07-16/XEDX1010_13-00.mp3",
		"audio/audio2016/2016-07-23/XEDX1010_13-00.mp3",
	]
});

var agosto2016 = new Month({
	monthTitle: 'AGOSTO 2016',
	id: 'agosto2016',
	year: '2016',
	audioTitles: [
		"2016-08-13",
		"2016-08-20",
		"2016-08-27",
		null,
	],
	audioSources: [
		"audio/audio2016/2016-08-13/XEDX1010_13-00.mp3",
		"audio/audio2016/2016-08-20/XEDX1010_13-00.mp3",
		"audio/audio2016/2016-08-27/XEDX1010_13-00.mp3",
		null,
	]
});

var septiembre2016 = new Month({
	monthTitle: 'SEPTIEMBRE 2016',
	id: 'septiembre2016',
	year: '2016',
	audioTitles: [
		"2016-09-03",
		"2016-09-17",
		"2016-09-24",
		null,
	],
	audioSources: [
		"audio/audio2016/2016-09-03/XEDX1010_13-00.mp3",
		"audio/audio2016/2016-09-17/XEDX1010_13-00.mp3",
		"audio/audio2016/2016-09-24/XEDX1010_13-00.mp3",
		null,
	]
});

var octubre2016 = new Month({
	monthTitle: 'OCTUBRE 2016',
	id: 'octubre2016',
	year: '2016',
	audioTitles: [
		"2016-10-01",
		"2016-10-08",
		"2016-10-29",
		null,
	],
	audioSources: [
		"audio/audio2016/2016-10-01/XEDX1010_13-00.mp3",
		"audio/audio2016/2016-10-08/XEDX1010_13-00.mp3",
		"audio/audio2016/2016-10-29/XEDX1010_13-00.mp3",
		null,
	]
});

var noviembre2016 = new Month({
	monthTitle: 'NOVIEMBRE 2016',
	id: 'noviembre2016',
	year: '2016',
	audioTitles: [
		"2016-11-05",
		"2016-11-12",
		"2016-11-19",
		"2016-11-26",
	],
	audioSources: [
		"audio/audio2016/2016-11-05/XEDX1010_13-00.mp3",
		"audio/audio2016/2016-11-12/XEDX1010_13-00.mp3",
		"audio/audio2016/2016-11-19/XEDX1010_13-00.mp3",
		"audio/audio2016/2016-11-26/XEDX1010_13-00.mp3",
	]
});

var diciembre2016 = new Month({
	monthTitle: 'DICIEMBRE 2016',
	id: 'diciembre2016',
	year: '2016',
	audioTitles: [
		null,
		null,
		null,
		null,
	],
	audioSources: [
		null,
		null,
		null,
		null,
	]
});