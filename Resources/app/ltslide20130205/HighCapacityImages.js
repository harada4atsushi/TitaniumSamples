function HighCapacityImages(nav) {
	
	var win = Titanium.UI.createWindow({  
    	backgroundColor:'#ffffff'
	});
	
	var vBox = Ti.UI.createView({
		layout: "vertical",
		top: 0,
		width: "100%", height: "100%"
	});
	win.add(vBox);
	
	for (var i = 0; i < 3; i++) {
		var hBox = Ti.UI.createView({
			layout: "horizontal",
			top: 5,
			width: "100%", height: 100
		});
		vBox.add(hBox);
	
		for (var j = 0; j < 3; j++) {
			var imgView = Ti.UI.createImageView({
				top: 0, left: 5,
				width: 100, height: 100,
				image: "images/ltslide20130205/high_capacity_images/" + ("0" + (i * 3 + j)).slice(-2) + ".jpg"
			});
			hBox.add(imgView);
		}
	}
	
	return win;
}

module.exports = HighCapacityImages;