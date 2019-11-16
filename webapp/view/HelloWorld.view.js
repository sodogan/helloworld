sap.ui.jsview("sodogan.HelloSapUI5.view.HelloWorld", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.HelloWorld
	 */
	getControllerName: function () {
		return "sodogan.HelloSapUI5.controller.HelloWorld";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.HelloWorld
	 */
	createContent: function (oController) {
		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			id: "page",
			content: []
		});

		var app = new sap.m.App(this.createId("app"), {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});