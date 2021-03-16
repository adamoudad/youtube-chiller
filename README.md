# Youtube chiller #
Drop some links to youtube videos and start streaming in an automatic play mode.

The javascript code uses YouTube Player API for iframe Embeds to make retrieve Youtube player and autoplay. More: https://developers.google.com/youtube/iframe_api_reference

Soundcloud API: https://developers.soundcloud.com/docs/api/html5-widget

1. Open `index.html` in your web browser
2. Drop some links in the text area
3. Press *Update playlist* button to update the playlist and start playing

# Allow autoplay #
Autoplay is required to be allowed on your browser for the script to play. Especially with soundcloud music.

To do so, refer to the documentation of your browser on how to allow autoplay.

# Notes #
Some Youtube videos are not available for embed. These videos are not playable with this script. 

# Possible future improvements #
- Hybrid soundcloud and youtube player
- Read playlists from file
- Export playlist to file, easy to share
- Implement with ReactNative for multiplatform support
