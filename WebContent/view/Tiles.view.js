sap.ui.jsview("view.Tiles", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Tiles
	*/ 
	getControllerName : function() {
		return "view.Tiles";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Tiles
	*/ 
	createContent : function(oController) {
 		
		var tile1 = new sap.m.StandardTile({
			title: "Students",
			press:[function(){
				oController.gotoPage("students");
			}, oController]
		});
		var tile2 = new sap.m.StandardTile({
			title: "Teachers",
			press:[function(){
				oController.gotoPage("teachers");
			}, oController]
		});
		
		return new sap.m.Page({
			showHeader: false,
			content: [
			    new sap.m.TileContainer({tiles: [tile1, tile2]})
			]
		});
	}

});