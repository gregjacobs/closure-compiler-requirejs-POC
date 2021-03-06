var s = function() {
  var h = !1;
  if ("undefined" !== typeof window) {
    var g = window.navigator.userAgent.toLowerCase(), h = /msie/.test(g) && !/opera/.test(g)
  }
  var x = 0, f = {o:function() {
    throw Error("method must be implemented in subclass");
  }, apply:function(d, e, b) {
    b && f.apply(d, b);
    if (d && e && "object" === typeof e) {
      for (var a in e) {
        d[a] = e[a];
      }
    }
    return d;
  }, create:function(d) {
    return f.extend(Object, d);
  }};
  f.extend = function() {
    function d(b) {
      for (var a in b) {
        this[a] = b[a];
      }
    }
    var e = /xyz/.test(function() {
    }) ? /\b_super\b/ : /.*/;
    return function(b, a) {
      function u(a, b) {
        return function() {
          var c = this.b, d = this;
          this.b = function(b) {
            return m[a].apply(d, b || []);
          };
          var e = b.apply(this, arguments);
          this.b = c;
          return e;
        };
      }
      function v() {
      }
      1 === arguments.length && (a = b, b = Object);
      var c, h, l, m = b.prototype, g = !!a.n, k, n = a.w, p = a.p, q = a.f;
      delete a.w;
      delete a.p;
      delete a.f;
      for (k in a) {
        "constructor" !== k && a.hasOwnProperty(k) && "function" === typeof a[k] && "function" === typeof m[k] && !a[k].hasOwnProperty("__Class") && e.test(a[k]) && (a[k] = u(k, a[k]));
      }
      a.hasOwnProperty("constructor") && "function" === typeof a.constructor && "function" === typeof m.constructor && e.test(a.constructor) && (a.constructor = u("constructor", a.constructor));
      a.constructor !== Object ? (h = a.constructor, delete a.constructor) : h = b === Object ? function() {
      } : function() {
        return b.apply(this, arguments);
      };
      c = function() {
        var a = this.constructor.prototype;
        if (a.hasOwnProperty("abstractClass") && !0 === a.n) {
          throw Error("Error: Cannot instantiate abstract class");
        }
        return h.apply(this, arguments);
      };
      v.prototype = m;
      l = c.prototype = new v;
      l.constructor = c;
      c.k = c.h = m;
      c.B = !0;
      c.d = function(a) {
        f.d(c, a);
      };
      c.extend = function(a) {
        return f.extend(c, a);
      };
      c.a = function(a) {
        return f.a(c, a);
      };
      l.k = l.F = function() {
        return m;
      };
      l.d = d;
      l.a = function(a) {
        return f.a(this.constructor, a);
      };
      f.d(c, a);
      if (!g) {
        for (var r in l) {
          if (l[r] === f.o) {
            if (l.hasOwnProperty(r)) {
              throw Error("The class being created has abstract method '" + r + "', but is not declared with 'abstractClass: true'");
            }
            throw Error("The concrete subclass being created must implement abstract method: '" + r + "', or be declared abstract as well (using 'abstractClass: true')");
          }
        }
      }
      if (p || b.g) {
        p = f.apply({}, p, b.g), f.apply(c, p), c.g = p;
      }
      n && f.apply(c, n);
      if (q) {
        for (g = q.length - 1;0 <= g;g--) {
          for (k in n = q[g].prototype, n) {
            "undefined" === typeof l[k] && (l[k] = n[k]);
          }
        }
        c.f = q;
      }
      c.u && c.u(c);
      c.v && c.v(c);
      return c;
    };
  }();
  f.d = function(d, e) {
    if (e) {
      var b = d.prototype;
      f.apply(b, e);
      h && e.hasOwnProperty("toString") && (b.toString = e.toString);
    }
  };
  f.C = function(d, e) {
    if ("function" !== typeof e) {
      throw Error("jsClass argument of isInstanceOf method expected a Function (constructor function) for a JavaScript class");
    }
    return d && "[object Object]" === Object.prototype.toString.call(d) ? d instanceof e ? !0 : f.a(d.constructor, e) ? !0 : !1 : !1;
  };
  f.D = function(d, e) {
    if ("function" === typeof d && "function" === typeof e) {
      if (d === e) {
        return!0;
      }
      for (var b = d, a = b.prototype;b = (a = b.h) && a.constructor;) {
        if (a.constructor === e) {
          return!0;
        }
      }
    }
    return!1;
  };
  f.a = function(d, e) {
    var b = e.l;
    b || (b = e.l = ++x);
    var a = d.m;
    a || (a = d.m = {});
    if (b in a) {
      return a[b];
    }
    var g = d.f, h = d.k || d.h;
    if (g) {
      for (var c = 0, y = g.length;c < y;c++) {
        if (g[c] === e) {
          return a[b] = !0;
        }
      }
    }
    return h && h.constructor && h.constructor !== Object ? (g = f.a(h.constructor, e), a[b] = g) : a[b] = !1;
  };
  return f;
}().create({constructor:function(h) {
  for (var g in h) {
    this[g] = h[g];
  }
}, i:function() {
  console.log("Id: " + this.id);
}, e:function() {
  console.log("First Name: " + this.c);
}, j:function() {
  console.log("Last Name: " + this.q);
}}), t = s.extend({constructor:function(h) {
  this.b(arguments);
  this.c += " THE OBSERVER";
}, e:function() {
  this.b(arguments);
  console.log("ZOMG after logFirstName(): " + this.c);
}, r:function() {
  console.log("Observer name: ", this.t);
}}), w = s.extend({s:function() {
  console.log("Username: " + this.A);
}}), z = new t({id:1, c:"Bob", t:"Test Observer"}), A = new w({id:2, q:"Doe", A:"jdoe"});
z.i();
z.e();
z.j();
z.r();
A.i();
A.e();
A.j();
A.s();

