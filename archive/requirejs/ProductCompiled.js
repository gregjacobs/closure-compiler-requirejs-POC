var f = !1;
if ("undefined" !== typeof window) {
  var u = window.navigator.userAgent.toLowerCase(), f = /msie/.test(u) && !/opera/.test(u)
}
var v = 0, w = {k:function() {
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
        var c = this.f, d = this;
        this.f = function(b) {
          return m[a].apply(d, b || []);
        };
        var e = b.apply(this, arguments);
        this.f = c;
        return e;
      };
    }
    function l() {
    }
    1 === arguments.length && (a = e, e = Object);
    var d, n, h, m = e.prototype, p = !!a.j, g, q = a.t, r = a.m, s = a.c;
    delete a.t;
    delete a.m;
    delete a.c;
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
      if (a.hasOwnProperty("abstractClass") && !0 === a.j) {
        throw Error("Error: Cannot instantiate abstract class");
      }
      return n.apply(this, arguments);
    };
    l.prototype = m;
    h = d.prototype = new l;
    h.constructor = d;
    d.g = d.e = m;
    d.u = !0;
    d.b = function(a) {
      w.b(d, a);
    };
    d.extend = function(a) {
      return w.extend(d, a);
    };
    d.a = function(a) {
      return w.a(d, a);
    };
    h.g = h.A = function() {
      return m;
    };
    h.b = b;
    h.a = function(a) {
      return w.a(this.constructor, a);
    };
    w.b(d, a);
    if (!p) {
      for (var t in h) {
        if (h[t] === w.k) {
          if (h.hasOwnProperty(t)) {
            throw Error("The class being created has abstract method '" + t + "', but is not declared with 'abstractClass: true'");
          }
          throw Error("The concrete subclass being created must implement abstract method: '" + t + "', or be declared abstract as well (using 'abstractClass: true')");
        }
      }
    }
    if (r || e.d) {
      r = w.apply({}, r, e.d), w.apply(d, r), d.d = r;
    }
    q && w.apply(d, q);
    if (s) {
      for (p = s.length - 1;0 <= p;p--) {
        for (g in q = s[p].prototype, q) {
          "undefined" === typeof h[g] && (h[g] = q[g]);
        }
      }
      d.c = s;
    }
    d.r && d.r(d);
    d.s && d.s(d);
    return d;
  };
}();
w.b = function(b, c) {
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
    for (var e = b, a = e.prototype;e = (a = e.e) && a.constructor;) {
      if (a.constructor === c) {
        return!0;
      }
    }
  }
  return!1;
};
w.a = function(b, c) {
  var e = c.h;
  e || (e = c.h = ++v);
  var a = b.i;
  a || (a = b.i = {});
  if (e in a) {
    return a[e];
  }
  var k = b.c, l = b.g || b.e;
  if (k) {
    for (var d = 0, n = k.length;d < n;d++) {
      if (k[d] === c) {
        return a[e] = !0;
      }
    }
  }
  return l && l.constructor && l.constructor !== Object ? (k = w.a(l.constructor, c), a[e] = k) : a[e] = !1;
};
var x = new (w.create({constructor:function(b) {
  for (var c in b) {
    this[c] = b[c];
  }
}, p:function() {
  console.log("Id: " + this.id);
}, o:function() {
  console.log("First Name: " + this.l);
}, q:function() {
  console.log("Last Name: " + this.n);
}}))({id:1, l:"Bob", n:"Smith"});
x.p();
x.o();
x.q();

