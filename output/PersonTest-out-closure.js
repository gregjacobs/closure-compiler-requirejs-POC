var f = !1;
if ("undefined" !== typeof window) {
  var u = window.navigator.userAgent.toLowerCase(), f = /msie/.test(u) && !/opera/.test(u)
}
var v = 0, w = {p:function() {
  throw Error("method must be implemented in subclass");
}, apply:function(b, c, e) {
  e && w.apply(b, e);
  if (b && c && "object" === typeof c) {
    for (var a in c) {
      b[a] = c[a];
    }
  }
  return b;
}, create:function(b) {
  return w.extend(Object, b);
}};
w.extend = function() {
  function b(b) {
    for (var a in b) {
      this[a] = b[a];
    }
  }
  var c = /xyz/.test(function() {
  }) ? /\b_super\b/ : /.*/;
  return function(e, a) {
    function k(a, b) {
      return function() {
        var c = this.c, d = this;
        this.c = function(b) {
          return m[a].apply(d, b || []);
        };
        var e = b.apply(this, arguments);
        this.c = c;
        return e;
      };
    }
    function l() {
    }
    1 === arguments.length && (a = e, e = Object);
    var d, n, h, m = e.prototype, p = !!a.o, g, q = a.t, r = a.q, s = a.f;
    delete a.t;
    delete a.q;
    delete a.f;
    for (g in a) {
      "constructor" !== g && a.hasOwnProperty(g) && "function" === typeof a[g] && "function" === typeof m[g] && !a[g].hasOwnProperty("__Class") && c.test(a[g]) && (a[g] = k(g, a[g]));
    }
    a.hasOwnProperty("constructor") && "function" === typeof a.constructor && "function" === typeof m.constructor && c.test(a.constructor) && (a.constructor = k("constructor", a.constructor));
    a.constructor !== Object ? (n = a.constructor, delete a.constructor) : n = e === Object ? function() {
    } : function() {
      return e.apply(this, arguments);
    };
    d = function() {
      var a = this.constructor.prototype;
      if (a.hasOwnProperty("abstractClass") && !0 === a.o) {
        throw Error("Error: Cannot instantiate abstract class");
      }
      return n.apply(this, arguments);
    };
    l.prototype = m;
    h = d.prototype = new l;
    h.constructor = d;
    d.l = d.h = m;
    d.u = !0;
    d.d = function(a) {
      w.d(d, a);
    };
    d.extend = function(a) {
      return w.extend(d, a);
    };
    d.a = function(a) {
      return w.a(d, a);
    };
    h.l = h.D = function() {
      return m;
    };
    h.d = b;
    h.a = function(a) {
      return w.a(this.constructor, a);
    };
    w.d(d, a);
    if (!p) {
      for (var t in h) {
        if (h[t] === w.p) {
          if (h.hasOwnProperty(t)) {
            throw Error("The class being created has abstract method '" + t + "', but is not declared with 'abstractClass: true'");
          }
          throw Error("The concrete subclass being created must implement abstract method: '" + t + "', or be declared abstract as well (using 'abstractClass: true')");
        }
      }
    }
    if (r || e.g) {
      r = w.apply({}, r, e.g), w.apply(d, r), d.g = r;
    }
    q && w.apply(d, q);
    if (s) {
      for (p = s.length - 1;0 <= p;p--) {
        for (g in q = s[p].prototype, q) {
          "undefined" === typeof h[g] && (h[g] = q[g]);
        }
      }
      d.f = s;
    }
    d.r && d.r(d);
    d.s && d.s(d);
    return d;
  };
}();
w.d = function(b, c) {
  if (c) {
    var e = b.prototype;
    w.apply(e, c);
    f && c.hasOwnProperty("toString") && (e.toString = c.toString);
  }
};
w.v = function(b, c) {
  if ("function" !== typeof c) {
    throw Error("jsClass argument of isInstanceOf method expected a Function (constructor function) for a JavaScript class");
  }
  return b && "[object Object]" === Object.prototype.toString.call(b) ? b instanceof c ? !0 : w.a(b.constructor, c) ? !0 : !1 : !1;
};
w.w = function(b, c) {
  if ("function" === typeof b && "function" === typeof c) {
    if (b === c) {
      return!0;
    }
    for (var e = b, a = e.prototype;e = (a = e.h) && a.constructor;) {
      if (a.constructor === c) {
        return!0;
      }
    }
  }
  return!1;
};
w.a = function(b, c) {
  var e = c.m;
  e || (e = c.m = ++v);
  var a = b.n;
  a || (a = b.n = {});
  if (e in a) {
    return a[e];
  }
  var k = b.f, l = b.l || b.h;
  if (k) {
    for (var d = 0, n = k.length;d < n;d++) {
      if (k[d] === c) {
        return a[e] = !0;
      }
    }
  }
  return l && l.constructor && l.constructor !== Object ? (k = w.a(l.constructor, c), a[e] = k) : a[e] = !1;
};
var x = w.create({constructor:function(b) {
  for (var c in b) {
    this[c] = b[c];
  }
}, j:function() {
  console.log("Id: " + this.id);
}, e:function() {
  console.log("First Name: " + this.b);
}, k:function() {
  console.log("Last Name: " + this.i);
}});
x.extend({constructor:function(b) {
  this.c(arguments);
  this.b += " THE OBSERVER";
}, e:function() {
  this.c(arguments);
  console.log("ZOMG after logFirstName(): " + this.b);
}, A:function() {
  console.log("Observer name: ", this.C);
}});
x.extend({B:function() {
  console.log("Username: " + this.F);
}});
var y = new (w.create({constructor:function(b) {
  for (var c in b) {
    this[c] = b[c];
  }
}, j:function() {
  console.log("Id: " + this.id);
}, e:function() {
  console.log("First Name: " + this.b);
}, k:function() {
  console.log("Last Name: " + this.i);
}}))({id:1, b:"Bob", i:"Smith"});
y.j();
y.e();
y.k();

