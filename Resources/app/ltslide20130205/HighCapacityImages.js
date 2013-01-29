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
	
	var hBox = Ti.UI.createView({
		layout: "horizontal",
		top: 5,
		width: "100%", height: 200
	});
	vBox.add(hBox);
	
	addImages(hBox);
	
	var btnReload = Ti.UI.createButton({
		bottom: 10,
		width: 100, height: 50,
		title: "Reload"
	});
	vBox.add(btnReload);
	
	btnReload.addEventListener("click", function() { addImages(hBox); });

	
	/*
	for (var i = 0; i < 5; i++) {
		var hBox = Ti.UI.createView({
			layout: "horizontal",
			top: 5,
			width: "100%", height: 70
		});
		vBox.add(hBox);
	
		for (var j = 0; j < 4; j++) {
			var imgView = Ti.UI.createImageView({
				top: 0, left: 5,
				width: 70, height: 70,
				image: "images/ltslide20130205/high_capacity_images/" + ("0" + (i * 4 + j)).slice(-2) + ".jpg"
			});
			hBox.add(imgView);
		}
	}
	*/
	
	//alert("availableMemory=" + Titanium.Platform.availableMemory);
	
	return win;
}

function addImages(hBox) {
	for (var i = hBox.children.length - 1; i >= 0; i--) {
		hBox.remove(hBox.children[i]);
	}
	for (var j = 0; j < 4; j++) {
		var imgView = Ti.UI.createImageView({
			top: 0, left: 5,
			width: 70, height: 70,
			image: "images/ltslide20130205/high_capacity_images/" + ("0" + j).slice(-2) + ".jpg"
		});
		hBox.add(imgView);
	}
	alert("availableMemory=" + Titanium.Platform.availableMemory);
}

module.exports = HighCapacityImages;
