define( [ 'SimpleModuleDep' ], function( SimpleModuleDep ) {
	
	var abc = {
		a:1,
		b:2,
		c:SimpleModuleDep
	};
	
	return abc;
	
} );