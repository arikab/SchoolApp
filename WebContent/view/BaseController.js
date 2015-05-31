jQuery.sap.declare("view.BaseController");

sap.ui.core.mvc.Controller.extend("view.BaseController",{
	
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