
$(document).ready(function(){

	$("#jquery_jplayer_2").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				title: "Nightcrawler",
				m4a: "Nightcrawler - Painkiller.mp3",
				oga: "Nightcrawler - Painkiller.mp3"
			});
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "../js",
		supplied: "m4a, oga",
		cssSelectorAncestor: "#jp_container_2",
		wmode: "window",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});

	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
			});
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "../js",
		supplied: "m4a, mp3",
		cssSelectorAncestor: "#jp_container_1",
		wmode: "window",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		// Portfolio Playlist
		{
			title:" Better Days - Plugmeindee ",
			mp3:"assets/mp3/Better.mp3",

		},
		{
			title:" All Night - Plugmeindee ",
			mp3:"assets/mp3/All.mp3",

		},
		{
			title:" Impala 86 - Plugmeindee ",
			mp3:"assets/mp3/Brick.mp3",

		},
	], {
		swfPath: "../../dist/jplayer",
		supplied: "oga, mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});

	$("#jquery_jplayer_5").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
			});
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "../js",
		supplied: "m4a, oga, mp3",
		cssSelectorAncestor: "#jp_container_5",
		wmode: "window",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_5",
		cssSelectorAncestor: "#jp_container_5"
	}, [
		{
			title:" Nike ",
			mp3:"assets/mp3/nike.mp3",

		},
		{
			title:" Bounce ",
			mp3:"assets/mp3/Nyc.mp3",

		},
			
	], {
		swfPath: "../../dist/jplayer",
		supplied: "oga, mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_2",
		cssSelectorAncestor: "#jp_container_2"
	}, [
		{
			title:"Cro Magnon Man",
			mp3:"https://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
			oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
		},
		{
			title:"Your Face",
			mp3:"https://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
			oga:"https://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
		},
		{
			title:"Cyber Sonnet",
			mp3:"https://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
			oga:"https://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
		},
		{
			title:"Tempered Song",
			mp3:"https://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
			oga:"https://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
		},
		{
			title:"Hidden",
			mp3:"https://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
			oga:"https://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
		},
		{
			title:"Lentement",
			free:true,
			mp3:"https://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
			oga:"https://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
		},
		{
			title:"Lismore",
			mp3:"https://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
			oga:"https://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
		}		
	], {
		swfPath: "../../dist/jplayer",
		supplied: "oga, mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
});