/*global define */
define( [
	'data/Model'
], function( Model ) {
	
	var Document = Model.extend( {
		
		attributes : [
			{ name: 'id', type: 'int' },
			{ name: 'title', type: 'string' }
		]
	
	} );
	
	return Document;
	
} );