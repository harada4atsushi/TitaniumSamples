function HighCapacityImages(nav) {
	
	var win = Titanium.UI.createWindow({  
    	backgroundColor:'#ffffff'
	});
	
	/*
	var vBox = Ti.UI.createView({
		layout: "vertical",
		top: 0,
		width: "100%", height: "100%"
	});
	win.add(vBox);
	*/
	
	var scrollView = Ti.UI.createScrollView({
		showVerticalScrollIndicator: true,
		layout: "vertical",
 		contentWidth: 'auto',
 		contentHeight: 'auto',
  		height: '100%',
  		width: '100%'
	});
	win.add(scrollView);
	
	/*
	var hBox = Ti.UI.createView({
		layout: "horizontal",
		top: 5,
		width: "100%", height: 200
	});
	vBox.add(hBox);
	*/
	
	for (var i = 0; i < 10; i++) {
		var hBox = Ti.UI.createView({
			layout: "horizontal",
			top: 5,
			width: "100%", height: 90
		});
		scrollView.add(hBox);
	
		for (var j = 0; j < 3; j++) {
			var imgView = Ti.UI.createImageView({
				top: 0, left: 5,
				width: 90, height: 90,
				image: "images/ltslide20130205/high_capacity_images/" + ("0" + (i * 3 + j)).slice(-2) + ".jpg"
			});
			hBox.add(imgView);
		}
	}
	
	//alert("availableMemory=" + Titanium.Platform.availableMemory);
	
	return win;
}

/*
function addImages(hBox) {
	for (var i = hBox.children.length - 1; i >= 0; i--) {
		hBox.remove(hBox.children[i]);
	}
	for (var j = 0; j < 9; j++) {
		var imgView = Ti.UI.createImageView({
			top: 0, left: 5,
			width: 100, height: 100,
			image: "images/ltslide20130205/high_capacity_images/" + ("0" + j).slice(-2) + ".jpg"
		});
		hBox.add(imgView);
	}
	alert("availableMemory=" + Titanium.Platform.availableMemory);
}*/

module.exports = HighCapacityImages;
