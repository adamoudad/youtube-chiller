var isIframeLoaded = false;
var playlistText = document.getElementById("playlist-text");
var playlist = document.getElementById("playlist");
function updatePlaylist() {
    ids = parseURL(playlistText.value)
    listing = formatIDs(ids);
    
    playlist.innerHTML = listing;
    
    video_ids = ids;
    if (isIframeLoaded) {
	player.loadVideoById(video_ids[0]);
	cursor = 0;
    } else {
	loadYoutubeIFrame();
	isIframeLoaded = true;
    }
}

function parseURL(text) {
    var lines = text.split("\n")
    patterns = [/(\?|&)v=([^&#]+)/ // For youtube.com/watch&v=video_id
	   	, /(\.be\/)+([^\/]+)/ // For youtu.be/video_id
	   	, /(\embed\/)+([^\/]+)/]; // For youtube.com/embed/video_id
    ids = [];
    
    // Match patterns
    for (i in lines) {
	if (ids[i] = lines[i].match(patterns[0]).pop()) {
	} else if (ids[i] = lines[i].match(patterns[1]).pop()) {
	} else if (ids[i] = lines[i].match(patterns[2]).pop()) {
	}
    }
    
    return ids;
}

function formatIDs(ids) {
    var result = "";
    var youtube_url = "https://youtube.com/watch?v=";
    for(i in ids){
	result += "<li>"
	    + "<a href=\"" + youtube_url + ids[i] + "\">"
	    + ids[i]
	    + "</a> -- "
	    + "<a href=\"JavaScript:void(0)\""
	    + "onClick=\"updateCursor(" + i + ");\">"
	    + "Play" + "</a>"
	    + "</li>"
    }
    return result;
}
