var video_ids = [];		// Array of video IDs
var cursor = 0;			// Cursor in video_ids indicating current video playing

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
        videoId: video_ids[0],
        events: {
	    'onReady': onPlayerReady,
	    'onStateChange': onPlayerStateChange,
	    'onError': onError
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
	cursor += 1;
	player.loadVideoById(video_ids[cursor]);
    }
}

function onError(event) {
    cursor += 1;
    if (video_ids[cursor]) {
	player.loadVideoById(video_ids[cursor]);
    }
}

function stopVideo() {
    player.stopVideo();
}
