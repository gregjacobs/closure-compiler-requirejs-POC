/*global define */
define( [
	'Class'
], function( Class ) {

	/**
	 * @class Person
	 */
	var Person = Class.create( /** @lends Person.prototype */ {
	    
		/**
		 * @constructor
		 */
		constructor : function( cfg ) {
		    for( var prop in cfg ) {
				this[ prop ] = cfg[ prop ];
			}
		},
		
		logId : function() { console.log( "Id: " + this.id ); },
		logFirstName : function() { console.log( "First Name: " + this.firstName ); },
		logLastName : function() { console.log( "Last Name: " + this.lastName ); }
		
	} );
	
	return Person;
	
} );