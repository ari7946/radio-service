$(document).ready(function() {
  $('div#header').css('display', 'none').slideDown(1500);
  $('div.month').css('display', 'none').slideDown(1750);
  $('img#bible').css('display', 'none').fadeIn(2000);
  $('div#audio-container').css('display', 'none').fadeIn(2000);
});

/* navigation */
$(document).ready(function() {
  $('li#home').on("click", function() {
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  });

  $('li#navItem1').on("click", function() {
    $('html,body').animate({
      scrollTop: $("div#months2016").offset().top - 60
    }, 'slow');
    $('div#months2016').css('display', 'none').slideDown(1000);
  });

  $('li#navItem2').on("click", function() {
    $('html,body').animate({
      scrollTop: $("div#months2015").offset().top - 60
    }, 'slow');
    $('div#months2015').css('display', 'none').slideDown(1000);
  });

  $('li#navItem3').on("click", function() {
    $('html,body').animate({
      scrollTop: $("div#months2014").offset().top - 60
    }, 'slow');
    $('div#months2014').css('display', 'none').slideDown(1000);
  });
});

/* months hover */
$('div.month p').on("mouseover", function() {
  $(this).css({'border': '1px solid green', 'color': 'yellow', 'text-decoration': 'none'});
});

$('div.month p').on("mouseout", function() {
  $(this).css({'border': '1px solid #f8f8ff', 'color': '#f8f8ff'});
});

/* players */
$('div#months2016 p').on("click", function() {
  $('html,body').animate({
    scrollTop: $("div#audio-container2016").offset().top - 50
  }, 'slow');
  $('div#audio-container2016').css('display', 'none').fadeIn(700);
  $(this).css({'border': '5px solid green', 'color': '#111'});
});

$('div#months2015 p').on("click", function() {
  $('html,body').animate({
    scrollTop: $("div#audio-container2015").offset().top - 50
  }, 'slow');
  $('div#audio-container2015').css('display', 'none').fadeIn(700);
  $(this).css({'border': '5px solid green', 'color': '#111'});
});

$('div#months2014 p').on("click", function() {
  $('html,body').animate({
    scrollTop: $("div#audio-container2014").offset().top - 50
  }, 'slow');
  $('div#audio-container2014').css('display', 'none').fadeIn(700);
  $(this).css({'border': '5px solid green', 'color': '#111'});
});

/********************* 2014 helper functions */

// page title
function pageTitle2014(pg) {
  document.getElementById("pageTitle2014").innerHTML = pg;
}
// audio titles
function audioTitles2014(t1, t2, t3, t4) {
  document.getElementById("firstTitle2014").innerHTML = t1;
  document.getElementById("secondTitle2014").innerHTML = t2;
  document.getElementById("thirdTitle2014").innerHTML = t3;
  document.getElementById("fourthTitle2014").innerHTML = t4;
}
// audio player source
function audioPlayers2014(a1, a2, a3, a4) {
  var audio1 = document.getElementById("firstAudio2014");
  audio1.src = a1;
  audio1.load();
  var audio2 = document.getElementById("secondAudio2014");
  audio2.src = a2;
  audio2.load();
  var audio3 = document.getElementById("thirdAudio2014");
  audio3.src = a3;
  audio3.load();
  var audio4 = document.getElementById("fourthAudio2014");
  audio4.src = a4;
  audio4.load();
}

/********************* 2015 helper functions */

// page title
function pageTitle2015(pg) {
  document.getElementById("pageTitle2015").innerHTML = pg;
}
// audio titles
function audioTitles2015(t1, t2, t3, t4) {
  document.getElementById("firstTitle2015").innerHTML = t1;
  document.getElementById("secondTitle2015").innerHTML = t2;
  document.getElementById("thirdTitle2015").innerHTML = t3;
  document.getElementById("fourthTitle2015").innerHTML = t4;
}
// audio player source
function audioPlayers2015(a1, a2, a3, a4) {
  var audio1 = document.getElementById("firstAudio2015");
  audio1.src = a1;
  audio1.load();
  var audio2 = document.getElementById("secondAudio2015");
  audio2.src = a2;
  audio2.load();
  var audio3 = document.getElementById("thirdAudio2015");
  audio3.src = a3;
  audio3.load();
  var audio4 = document.getElementById("fourthAudio2015");
  audio4.src = a4;
  audio4.load();
}

/********************* 2016 helper functions */

// page title
function pageTitle2016(pg) {
  document.getElementById("pageTitle2016").innerHTML = pg;
}
// audio titles
function audioTitles2016(t1, t2, t3, t4) {
  document.getElementById("firstTitle2016").innerHTML = t1;
  document.getElementById("secondTitle2016").innerHTML = t2;
  document.getElementById("thirdTitle2016").innerHTML = t3;
  document.getElementById("fourthTitle2016").innerHTML = t4;
}
// audio player source
function audioPlayers2016(a1, a2, a3, a4) {
  var audio1 = document.getElementById("firstAudio2016");
  audio1.src = a1;
  audio1.load();
  var audio2 = document.getElementById("secondAudio2016");
  audio2.src = a2;
  audio2.load();
  var audio3 = document.getElementById("thirdAudio2016");
  audio3.src = a3;
  audio3.load();
  var audio4 = document.getElementById("fourthAudio2016");
  audio4.src = a4;
  audio4.load();
}

/*********************************** 2014 ***************************************/

// enero 2014
document.getElementById('enero2014').addEventListener('click', function() {
  var pg = "ENER0 2014";
  var titles = [
    "2014-01-04",
    "2014-01-11",
    "2014-01-18",
    "2014-01-25"
  ];
  var players = [
    "audio/audio2014/2014-01-04/XEDX1010_13-00.mp3",
    "audio/audio2014/2014-01-11/XEDX1010_13-00.mp3",
    "audio/audio2014/2014-01-18/XEDX1010_13-00.mp3",
    "audio/audio2014/2014-01-25/XEDX1010_13-00.mp3"
  ];
  pageTitle2014(pg);
  audioTitles2014(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2014(players[0], players[1], players[2], players[3]);
});

// febrero 2014
document.getElementById('febrero2014').addEventListener('click', function() {
  var pg = "FEBRERO 2014";
  var titles = ["2014-02-01", "2014-02-08", "2014-02-15", "2014-02-22"];
  var players = ["audio/audio2014/2014-02-01/XEDX1010_13-00.mp3", "audio/audio2014/2014-02-08/XEDX1010_13-00.mp3", "audio/audio2014/2014-02-15/XEDX1010_13-00.mp3", "audio/audio2014/2014-02-22/XEDX1010_13-00.mp3"];
  pageTitle2014(pg);
  audioTitles2014(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2014(players[0], players[1], players[2], players[3]);
});

// marzo 2014
document.getElementById('marzo2014').addEventListener('click', function() {
  var pg = "MARZO 2014";
  var titles = ["2014-03-01", "2014-03-08", "2014-03-15", "2014-03-22"];
  var players = ["audio/audio2014/2014-03-01/XEDX1010_13-00.mp3", "audio/audio2014/2014-03-08/XEDX1010_13-00.mp3", "audio/audio2014/2014-03-15/XEDX1010_13-00.mp3", "audio/audio2014/2014-03-22/XEDX1010_13-00.mp3"];
  pageTitle2014(pg);
  audioTitles2014(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2014(players[0], players[1], players[2], players[3]);
});

// april 2014
document.getElementById('abril2014').addEventListener('click', function() {
  var pg = "ABRIL 2014";
  var titles = ["2014-04-05", "2014-04-12", "2014-04-19", "2014-04-26"];
  var players = ["audio/audio2014/2014-04-05/XEDX1010_13-00.mp3", "audio/audio2014/2014-04-12/XEDX1010_13-00.mp3", "audio/audio2014/2014-04-19/XEDX1010_13-00.mp3", "audio/audio2014/2014-04-26/XEDX1010_13-00.mp3"];
  pageTitle2014(pg);
  audioTitles2014(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2014(players[0], players[1], players[2], players[3]);
});

// mayo 2014
document.getElementById('mayo2014').addEventListener('click', function() {
  var pg = "MAYO 2014";
  var titles = ["2014-05-10", "2014-05-17", "2014-05-24", "2014-05-31"];
  var players = ["audio/audio2014/2014-05-10/XEDX1010_13-00.mp3", "audio/audio2014/2014-05-17/XEDX1010_13-00.mp3", "audio/audio2014/2014-05-24/XEDX1010_13-00.mp3", "audio/audio2014/2014-05-31/XEDX1010_13-00.mp3"];
  pageTitle2014(pg);
  audioTitles2014(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2014(players[0], players[1], players[2], players[3]);
});

// junio 2014
document.getElementById('junio2014').addEventListener('click', function() {
  var pg = "JUNIO 2014";
  var titles = ["2014-06-07", "", "", ""];
  var players = ["audio/audio2014/2014-06-07/XEDX1010_13-00.mp3", "", "", ""];
  pageTitle2014(pg);
  audioTitles2014(titles[0]);
  audioPlayers2014(players[0]);
});

// julio 2014
document.getElementById('julio2014').addEventListener('click', function() {
  var pg = "JULIO 2014";
  var titles = ["2014-07-19", null, null, null];
  var players = ["audio/audio2014/2014-07-19/XEDX1010_13-00.mp3", null, null, null];
  pageTitle2014(pg);
  audioTitles2014(titles[0]);
  audioPlayers2014(players[0]);;
  s
});

// agosto 2014
document.getElementById('agosto2014').addEventListener('click', function() {
  var pg = "AGOSTO 2014";
  var titles = ["2014-08-02", "2014-08-09", "2014-08-16", "2014-08-23"];
  var players = ["audio/audio2014/2014-08-02/XEDX1010_13-00.mp3", "audio/audio2014/2014-08-09/XEDX1010_13-00.mp3", "audio/audio2014/2014-08-16/XEDX1010_13-00.mp3", "audio/audio2014/2014-08-23/XEDX1010_13-00.mp3"];
  pageTitle2014(pg);
  audioTitles2014(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2014(players[0], players[1], players[2], players[3]);
});

// septiembre 2014
document.getElementById('septiembre2014').addEventListener('click', function() {
  var pg = "SEPTIEMBRE 2014";
  var titles = ["2014-09-06", "2014-09-20", "", ""];
  var players = ["audio/audio2014/2014-09-06/XEDX1010_13-00.mp3", "audio/audio2014/2014-09-20/XEDX1010_13-00.mp3", "", ""];
  pageTitle2014(pg);
  audioTitles2014(titles[0], titles[1]);
  audioPlayers2014(players[0], players[1]);
});

// octubre 2014
document.getElementById('octubre2014').addEventListener('click', function() {
  var pg = "OCTUBRE 2014";
  var titles = [
    "2014-10-04",
    "2014-10-11",
    "2014-10-18",
    "2014-10-25"
  ];
  var players = ["audio/audio2014/2014-10-04/XEDX1010_13-00.mp3", "audio/audio2014/2014-10-11/XEDX1010_13-00.mp3", "audio/audio2014/2014-10-18/XEDX1010_13-00.mp3", "audio/audio2014/2014-10-25/XEDX1010_13-00.mp3"];
  pageTitle2014(pg);
  audioTitles2014(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2014(players[0], players[1], players[2], players[3]);
});

// noviembre 2014
document.getElementById('noviembre2014').addEventListener('click', function() {
  var pg = "NOVIEMBRE 2014";
  var titles = ["2014-11-01", "2014-11-08", "2014-11-15", "2014-11-22"];
  var players = ["audio/audio2014/2014-11-01/XEDX1010_13-00.mp3", "audio/audio2014/2014-11-08/XEDX1010_13-00.mp3", "audio/audio2014/2014-11-15/XEDX1010_13-00.mp3", "audio/audio2014/2014-11-22/XEDX1010_13-00.mp3"];
  pageTitle2014(pg);
  audioTitles2014(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2014(players[0], players[1], players[2], players[3]);
});

// diciembre 2014
document.getElementById('diciembre2014').addEventListener('click', function() {
  var pg = "DICIEMBRE 2014";
  var titles = ["2014-12-06", "", "", ""];
  var players = ["audio/audio2014/2014-12-06/XEDX1010_13-00.mp3", "", "", ""];
  pageTitle2014(pg);
  audioTitles2014(titles[0]);
  audioPlayers2014(players[0]);
});

/*********************************** 2015 ***************************************/

// julio 2015
document.getElementById('julio2015').addEventListener('click', function() {
  var pg = "JULIO 2015";
  var titles = ["04-07-2015", "11-07-2015", "18-07-2015", "25-07-2015"];
  var players = ["audio/01-Julio/04-07-2015.mp3", "audio/01-Julio/11-07-2015.mp3", "audio/01-Julio/18-07-2015.mp3", "audio/01-Julio/25-07-2015.mp3"];
  pageTitle2015(pg);
  audioTitles2015(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2015(players[0], players[1], players[2], players[3]);
});

// agosto 2015
document.getElementById('agosto2015').addEventListener('click', function() {
  var pg = "AGOSTO 2015";
  var titles = ["01-08-2015", "08-08-2015", "22-08-2015", "29-08-2015"];
  var players = ["audio/02-Agosto/01-08-2015.mp3", "audio/02-Agosto/08-08-2015.mp3", "audio/02-Agosto/22-08-2015.mp3", "audio/02-Agosto/29-08-2015.mp3"];
  pageTitle2015(pg);
  audioTitles2015(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2015(players[0], players[1], players[2], players[3]);
});

// septiembre 2015
document.getElementById('septiembre2015').addEventListener('click', function() {
  var pg = "SEPTIEMBRE 2015";
  var titles = ["05-09-2015", "12-09-2015", "19-09-2015", "26-09-2015"];
  var players = ["audio/03-Septiembre/05-09-2015.mp3", "audio/03-Septiembre/12-09-2015.mp3", "audio/03-Septiembre/19-09-2015.mp3", "audio/03-Septiembre/26-09-2015.mp3"]
  pageTitle2015(pg);
  audioTitles2015(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2015(players[0], players[1], players[2], players[3]);
});

// octubre 2015
document.getElementById('octubre2015').addEventListener('click', function() {
  var pg = "OCTUBRE 2015";
  var titles = ["03-10-2015", "10-10-2015", "24-10-2015", "31-10-2015"];
  var players = ["audio/04-Octubre/03-10-2015.mp3", "audio/04-Octubre/10-10-2015.mp3", "audio/04-Octubre/24-10-2015.mp3", "audio/04-Octubre/31-10-2015.mp3"];
  pageTitle2015(pg);
  audioTitles2015(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2015(players[0], players[1], players[2], players[3]);
});

// noviembre 2015
document.getElementById('noviembre2015').addEventListener('click', function() {
  var pg = "NOVIEMBRE 2015";
  var titles = ["07-11-2015", "14-11-2015", "21-11-2015", "28-11-2015"];
  var players = ["audio/05-Noviembre/07-11-2015.mp3", "audio/05-Noviembre/14-11-2015.mp3", "audio/05-Noviembre/21-11-2015.mp3", "audio/05-Noviembre/28-11-2015.mp3"];
  pageTitle2015(pg);
  audioTitles2015(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2015(players[0], players[1], players[2], players[3]);
});

// diciembre 2015
document.getElementById('diciembre2015').addEventListener('click', function() {
  var pg = "DICIEMBRE 2015";
  var titles = ["05-12-2015", "12-12-2015", "19-12-2015", "26-12-2015"];
  var players = ["audio/06-Diciembre/05-12-2015.mp3", "audio/06-Diciembre/12-12-2015.mp3", "audio/06-Diciembre/19-12-2015.mp3", "audio/06-Diciembre/26-12-2015.mp3"];
  pageTitle2015(pg);
  audioTitles2015(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2015(players[0], players[1], players[2], players[3]);
});

/*********************************** 2016 ***************************************/

// enero 2016
document.getElementById('enero2016').addEventListener('click', function() {
  var pg = "ENERO 2016";
  var titles = ["02-01-2016", "09-01-2016", "16-01-2016", "23-01-2016"];
  var players = ["audio/07-Enero/02-01-2016.mp3", "audio/07-Enero/09-01-2016.mp3", "audio/07-Enero/16-01-2016.mp3", "audio/07-Enero/23-01-2016.mp3"];
  pageTitle2016(pg);
  audioTitles2016(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2016(players[0], players[1], players[2], players[3]);
});

// febrero 2016
document.getElementById('febrero2016').addEventListener('click', function() {
  var pg = "FEBRER0 2016";
  var titles = ["06-02-2016", "13-02-2016", "20-02-2016", "27-02-2016"];
  var players = ["audio/08-Febrero/06-02-2016.mp3", "audio/08-Febrero/13-02-2016.mp3", "audio/08-Febrero/20-02-2016.mp3", "audio/08-Febrero/27-02-2016.mp3"];
  pageTitle2016(pg);
  audioTitles2016(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2016(players[0], players[1], players[2], players[3]);
});

// marzo 2016
document.getElementById('marzo2016').addEventListener('click', function() {
  var pg = "MARZO 2016";
  var titles = ["05-03-2016", "12-03-2016", "19-03-2016", "26-03-2016"];
  var players = ["audio/09-Marzo/05-03-2016.mp3", "audio/09-Marzo/12-03-2016.mp3", "audio/09-Marzo/19-03-2016.mp3", "audio/09-Marzo/26-03-2016.mp3"];
  pageTitle2016(pg);
  audioTitles2016(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2016(players[0], players[1], players[2], players[3]);
});

// april 2016
document.getElementById('abril2016').addEventListener('click', function() {
  var pg = "APRIL 2016";
  var titles = ["02-04-2016", "16-04-2016", "30-04-2016", "30-04-2016"];
  var players = ["audio/10-Abril/02-04-2016.mp3", "audio/10-Abril/16-04-2016.mp3", "audio/10-Abril/30-04-2016.mp3", "audio/10-Abril/30-04-2016.mp3"];
  pageTitle2016(pg);
  audioTitles2016(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2016(players[0], players[1], players[2], players[3]);
});

// mayo 2016
document.getElementById('mayo2016').addEventListener('click', function() {
  var pg = "MAYO 2016";
  var titles = ["07-05-2016", "14-05-2016", "21-05-2016", "28-05-2016"];
  var players = ["audio/11-Mayo/07-05-2016.mp3", "audio/11-Mayo/14-05-2016.mp3", "audio/11-Mayo/21-05-2016.mp3", "audio/11-Mayo/28-05-2016.mp3"];
  pageTitle2016(pg);
  audioTitles2016(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2016(players[0], players[1], players[2], players[3]);
});

// junio 2016
document.getElementById('junio2016').addEventListener('click', function() {
  var pg = "JUNIO 2016";
  var titles = ["04-06-2016", "11-06-2016", "18-06-2016", "25-06-2016"];
  var players = ["audio/12-Junio/04-06-2016.mp3", "audio/12-Junio/11-06-2016.mp3", "audio/12-Junio/18-06-2016.mp3", "audio/12-Junio/25-06-2016.mp3"];
  pageTitle2016(pg);
  audioTitles2016(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2016(players[0], players[1], players[2], players[3]);
});

// julio 2016
document.getElementById('julio2016').addEventListener('click', function() {
  var pg = "JULIO 2016";
  var titles = ["2016-07-02", "2016-07-09", "2016-07-16", "2016-07-23"];
  var players = ["audio/audio2016/2016-07-02/XEDX1010_13-00.mp3", "audio/audio2016/2016-07-09/XEDX1010_13-00.mp3", "audio/audio2016/2016-07-16/XEDX1010_13-00.mp3", "audio/audio2016/2016-07-23/XEDX1010_13-00.mp3"];
  pageTitle2016(pg);
  audioTitles2016(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2016(players[0], players[1], players[2], players[3]);
});

// agosto 2016
document.getElementById('agosto2016').addEventListener('click', function() {
  var pg = "AGOSTO 2016";
  var titles = ["2016-08-13", "2016-08-20", "2016-08-27"];
  var players = ["audio/audio2016/2016-08-13/XEDX1010_13-00.mp3", "audio/audio2016/2016-08-20/XEDX1010_13-00.mp3", "audio/audio2016/2016-08-27/XEDX1010_13-00.mp3"];
  pageTitle2016(pg);
  audioTitles2016(titles[0], titles[1], titles[2]);
  audioPlayers2016(players[0], players[1], players[2]);
});

// septiembre 2016
document.getElementById('septiembre2016').addEventListener('click', function() {
  var pg = "SEPTIEMBRE 2016";
  var titles = ["2016-09-03", "2016-09-17", "2016-09-24"];
  var players = ["audio/audio2016/2016-09-03/XEDX1010_13-00.mp3", "audio/audio2016/2016-09-17/XEDX1010_13-00.mp3", "audio/audio2016/2016-09-24/XEDX1010_13-00.mp3"];
  pageTitle2016(pg);
  audioTitles2016(titles[0], titles[1], titles[2]);
  audioPlayers2016(players[0], players[1], players[2]);
});

// octubre 2016
document.getElementById('octubre2016').addEventListener('click', function() {
  var pg = "OCTUBRE 2016";
  var titles = ["2016-10-01", "2016-10-08", "2016-10-29"];
  var players = ["audio/audio2016/2016-10-01/XEDX1010_13-00.mp3", "audio/audio2016/2016-10-08/XEDX1010_13-00.mp3", "audio/audio2016/2016-10-29/XEDX1010_13-00.mp3"];
  pageTitle2016(pg);
  audioTitles2016(titles[0], titles[1], titles[2]);
  audioPlayers2016(players[0], players[1], players[2]);
});

// noviembre 2016
document.getElementById('noviembre2016').addEventListener('click', function() {
  var pg = "NOVIEMBRE 2016";
  var titles = ["2016-11-05", "2016-11-12", "2016-11-19", "2016-11-26"];
  var players = ["audio/audio2016/2016-11-05/XEDX1010_13-00.mp3", "audio/audio2016/2016-11-12/XEDX1010_13-00.mp3", "audio/audio2016/2016-11-19/XEDX1010_13-00.mp3", "audio/audio2016/2016-11-26/XEDX1010_13-00.mp3"];
  pageTitle2016(pg);
  audioTitles2016(titles[0], titles[1], titles[2], titles[3]);
  audioPlayers2016(players[0], players[1], players[2], players[3]);
});
