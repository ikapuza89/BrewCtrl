BrewCtrl.Models.ControlPoint = Backbone.Model.extend({
	defaults : function() {
		return {
			controlName : "",
			targetName : "",
			automaticControl: false,
			controlIo: 0,
			duty: 0,
			on: false,
			targetTemp: 0
		};
	},
});
BrewCtrl.Models.Step = Backbone.Model.extend({
	initialize : function() {
		this.set('controlPoints', new BrewCtrl.Collections.ControlPoints(this.get("controlPoints")));
	},
	defaults : function() {
		return {
			name : "New Step",
			time : 0,
			controlPoints : []
		};
	},
});
BrewCtrl.Models.StepList = Backbone.Model.extend({
	initialize : function() {
		this.set('steps', new BrewCtrl.Collections.Steps(this.get("steps")));
	},
	defaults : function() {
		return {
			name : "Step List",
			steps : []
		};
	},
});

BrewCtrl.Collections.ControlPoints = Backbone.Collection.extend({
	model : BrewCtrl.Models.ControlPoint,
	initialize : function() {
	},
	findByIo: function(io){
		var cpFound;
		this.each(function(cp){
			if(cp.get("controlIo") == io){
				cpFound = cp;
			}
		});
		return cpFound;
	}
});
BrewCtrl.Collections.Steps = Backbone.Collection.extend({
	model : BrewCtrl.Models.Step,
	initialize : function() {
	}
});
BrewCtrl.Collections.StepLists = Backbone.Collection.extend({
	model : BrewCtrl.Models.StepList,
	initialize : function() {
	}
});




BrewCtrl.Views.Step = Backbone.View.extend({
	template: _.template($('#step-template').html()),
	tagName : "span",

	// The DOM events specific to an item.
	events : {

	},

	initialize : function() {
		this.listenTo(this.model, 'change', this.render);
	},
	render : function() {
		var display = this.template(this.model.toJSON());
		this.$el.html(display);
		return this;
	},
});
