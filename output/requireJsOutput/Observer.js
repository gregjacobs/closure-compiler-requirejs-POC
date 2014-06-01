/*global define */
define( [
	'Person'
], function( Person ) {
	
	/**
	 * @class Observer
	 * @extends Person
	 */
	var Observer = Person.extend( /** @lends Observer.prototype */ {
	
		constructor : function( cfg ) {
			this._super( arguments );
			
			this.firstName += " THE OBSERVER";
		},
		
		logFirstName : function() {
			this._super( arguments );
			
			console.log( "ZOMG after logFirstName(): " + this.firstName );
		},
		
		logObserverName : function() { console.log( "Observer name: ", this.observerName ); }
		
	} );
	
} );