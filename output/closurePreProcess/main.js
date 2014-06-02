/*global define */
define( [
	'person/Person',
	'model/Document'
], function( Person, Document ) {

	var person1 = new Person( { id: 1, firstName: "Bob", lastName: "Smith" } );
	
	person1.logId();
	person1.logFirstName();
	person1.logLastName();
	
	var document = new Document( { id: 1, title: "Document 1" } );
	console.log( "Document " + document.get( 'id' ) + ": " + document.get( 'title' ) );
	
	return document;
	
} );