document.getElementById('play-btn').onclick = function(){
	var video = document.getElementById('video');
	var idImg = video.src.replace(/http...img.youtube.com.vi.(.*?).maxresdefault.jpg/gi, '$1');
	theIframe = document.createElement('iframe');
	theIframe.src = 'http://www.youtube.com/embed/' + idImg;
	theIframe.onclick = function () {video.parentElement.removeChild(this);};
	video.parentNode.insertBefore(theIframe, video.nextSibling);
}

var img = document.querySelectorAll('img[src$="/maxresdefault.jpg"]');
for (var i = 0; i < img.length; i++) {
img[i].onclick = function() {
		var idImg = this.src.replace(/http...img.youtube.com.vi.(.*?).maxresdefault.jpg/gi, '$1');
		theIframe = document.createElement('iframe');
		theIframe.src = 'http://www.youtube.com/embed/' + idImg;
		theIframe.onclick = function () {this.parentElement.removeChild(this);};
		this.parentNode.insertBefore(theIframe, this.nextSibling);
	}
}
