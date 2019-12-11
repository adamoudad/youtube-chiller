var video_ids = [];		// Array of video IDs
var blacklist_ids = [];
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
	nextVideo()
    }
}

function onError(event) {
    addBlacklist(video_ids[cursor])
    nextVideo();
}

function stopVideo() {
    player.stopVideo();
}

function nextVideo() {
    cursor += 1;
    cursor %= video_ids.length;
    player.loadVideoById(video_ids[cursor]);
}

function updateCursor(i) {
    cursor = i % video_ids.length;
    player.loadVideoById(video_ids[cursor])
}

function addBlacklist(id) {
    if (!blacklist_ids.includes(id)) {
	blacklist_ids.push(id);
    } else {
	console.log("Video " + id + " is already in blacklist!");
    }
    console.log("Blacklist: " + blacklist_ids);
}
