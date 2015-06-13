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
 		
		//var ddclasses = new sap.ui.commons.DropdownBox("ddclasses",{
		var ddclasses = new sap.m.Select("ddclasses",{
			change: function(oSelData){
				var sel = oSelData.getParameter("selectedItem");
				var ctx = sel.getBindingContext("classModel");
				var path = ctx.getPath();
				
				var teach = sap.ui.getCore().byId("ddTeachers");
				var oModel = this.getModel("classModel");
				var context = oModel.getContext(path);
				
				teach.setBindingContext(context, "classModel");
			}
		});
		ddclasses.bindItems({
			path: "classModel>/classes",
			template: new sap.ui.core.ListItem({
				text: "{classModel>desc}",
				key: "{classModel>key}"
			})
		});
		
		//var ddTeachers = new sap.ui.commons.DropdownBox("ddTeachers");
		var ddTeachers = new sap.m.Select("ddTeachers");
		
		ddTeachers.bindItems({
			path: "classModel>teachers",
			template: new sap.ui.core.ListItem({
				text: "{classModel>name}",
				key: "{classModel>id}"
			})
		});
		
		return new sap.m.Page({
			title: "Teachers",
			navButtonPress: [function(){
				oController.myNavBack("", {});
			},oController],
			showNavButton: true,
			content: [
			    ddclasses,
			    ddTeachers
			]
		});
	}

});