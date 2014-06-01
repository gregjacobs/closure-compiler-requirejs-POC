function extend( superclass, overrides ) {
    /** @constructor */
    var F = function(){};
    F.prototype = superclass.prototype;

    var subclass = overrides.constructor;
    subclass.prototype = new F();

    for( var prop in overrides ) {
        subclass.prototype[ prop ] = overrides[ prop ];
    }

    return subclass;
}


/**
 * @class Person
 * @constructor
 */
function Person( cfg ) {
    for( var prop in cfg ) {
        this[ prop ] = cfg[ prop ];
    }
}

Person.prototype.id = undefined;
Person.prototype.sayId = function() { alert( this.id ); };


/**
 * @class User
 * @extends Person
 */
var User = extend( Person, /** @lends {User.prototype} */ {
    /**
     * @constructor
     * @extends Person
     */
    constructor : function( cfg ) {
       Person.call( this, cfg );
    },
    
    sayHi : function() {
        alert( "Hi!" + this.id + " My name is: " + this.firstName + " " + this.lastName );
    }
} );

var user1 = new User( { id: 1, firstName: "Bob", lastName: "Smith" } );
var user2 = new User( { firstName: "Jane", lastName: "Doe" } );

user1.sayId();
user2.sayId();
user1.sayHi();
user2.sayHi();