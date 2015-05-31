sap.ui.jsview("view.Teachers", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Teachers
	*/ 
	getControllerName : function() {
		return "view.Teachers";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Teachers
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Teachers",
			navButtonPress: [function(){
				oController.myNavBack("", {});
			},oController],
			showNavButton: true,
			content: [
			
			]
		});
	}

});