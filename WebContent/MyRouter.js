jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
jQuery.sap.require("sap.ui.core.routing.Router");
jQuery.sap.declare("school.MyRouter");

sap.ui.core.routing.Router.extend("school.MyRouter", {
	
	constructor : function() {
		sap.ui.core.routing.Router.apply(this, arguments);
	},
	
	myNavBack : function(sRoute, mData) {
		var oHistory = sap.ui.core.routing.History.getInstance();
		var sPreviousHash = oHistory.getPreviousHash();

		//The history contains a previous entry
		if (sPreviousHash !== undefined) {
			window.history.go(-1);
		} else {
			this.navTo(sRoute, mData, true);
		}
	}
	
});