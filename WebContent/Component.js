jQuery.sap.declare("school.Component");
//jQuery.sap.require("school.MyRouter");

sap.ui.core.UIComponent.extend("school.Component", {
	
	metadata: {
		routing: {
			
			config: {
				routerClass: "sap.m.routing.Router", //school.MyRouter, // "sap.m.routing.Router",
				viewType: "JS",
				viewPath: "view",
				controlId: "App",
				controlAggregation: "pages",
				transition: "slide"
			},
			
			routes: [
						{
							pattern: "",
							name: "tiles",
							target: "tiles"
						},
						{
							pattern: "teachers",
							name: "teachers",
							target: "teachers"
						},
						{
							pattern: "students",
							name: "students",
							target: "students"
						}
				],
						
			targets: {
				tiles: {
					viewName: "Tiles",
					viewId: "tiles",
					viewLevel: 1
				},
				teachers: {
					viewName: "Teachers",
					viewId: "teachers",
					viewLevel: 2					
				},
				students: {
					viewName: "Students",
					viewId: "students",
					viewLevel: 2					
				}
			}
			
		}
	},
	
	init: function(){
		
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		
		// create the views based on the url/hash
		var rt = this.getRouter();
		rt.initialize();
		//var rt = sap.ui.core.UIComponent.getRouterFor(this);
		//rt.initialize();
	},
	
	createContent : function() {
	
		var oView = sap.ui.view({
			id: "appView",
			viewName: "view.App",
			type: "JS",
			viewData: {component: this}
		});
		
		return oView;
		
	}
	
});