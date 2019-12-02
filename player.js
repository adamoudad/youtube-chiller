var playlistTag = document.getElementsByTagName('playlist')

// var playlist = ['IdbfoOeN7ho', "tuFp3Iv1T4E", "VZaXsE7P7f0"]
var cursor = 0; 		// Cursor in playlist


// Load the IFrame Player API code asynchronously
function loadYoutubeIFrame() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}

// Youtube Player
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: playlist[0],
        events: {
	    'onReady': onPlayerReady,
	    'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
	cursor += 1;
	player.loadVideoById(playlist[cursor], 5, "large")
    }
}
function stopVideo() {
    player.stopVideo();
}

loadYoutubeIFrame()
