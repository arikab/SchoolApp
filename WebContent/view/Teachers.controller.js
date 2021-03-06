jQuery.sap.require("view.BaseController");

//sap.ui.controller("view.Teachers", {
view.BaseController.extend("view.Teachers", {
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Teachers
*/
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel({
			classes: [
			     {
			    	 key: 1,
			    	 desc: "Math",
			    	 teachers: [
			    	      {
			    	    	  id: 100,
			    	    	  name: "Tuvia"
			    	      },
			    	      {
			    	    	  id: 200,
			    	    	  name : "Bela"
			    	      }
			    	 ]
				 },
				 {
					 key: 2,
					 desc: "Science",
					 teachers: [
					      {
					    	  id: 300,
					    	  name: "Haya"
					      },
					      {
					    	  id: 400,
					    	  name : "Rivka"
					      }
					 ]
				 },
				 {
					 key: 3,
					 desc: "Art",
					 teachers: [
					      {
					    	  id: 500,
					    	  name: "Moshe"
					      },
					      {
					    	  id: 600,
					    	  name : "Yehoshua"
					      }
					 ]
				 }
			]
		
		});
		this.getView().setModel(oModel, "classModel");
		
		var teach = sap.ui.getCore().byId("ddTeachers");
		
		var context = oModel.getContext("/classes/0/");
		
		teach.setBindingContext(context, "classModel");
	},

	/*myNavBack : function(sRoute, mData) {
		var oHistory = sap.ui.core.routing.History.getInstance();
		var sPreviousHash = oHistory.getPreviousHash();

		//The history contains a previous entry
		if (sPreviousHash !== undefined) {
			window.history.go(-1);
		} else {
			var bReplace = true; // otherwise we go backwards with a forward history
			this.navTo(sRoute, mData, bReplace);
		}
	}*/
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Teachers
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Teachers
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Teachers
*/
//	onExit: function() {
//
//	}

});