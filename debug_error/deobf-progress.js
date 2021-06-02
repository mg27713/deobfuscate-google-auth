// INSERT COMMON CODE HERE
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.pt = "StopIteration" in _.A ? _.A.StopIteration : {
    message: "StopIteration",
    stack: ""
};
_.qt = function() {};
_.qt.prototype.next = function() {
    throw _.pt;
};
_.qt.prototype.Ai = function() {
    return this
};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.rt = function(a, b) {
    this.Ha = {};
    this.Qb = [];
    this.Js = this.Wb = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2) throw Error("f");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else a && this.addAll(a)
};
_.h = _.rt.prototype;
_.h.Hb = function() {
    return this.Wb
};
_.h.Xc = function() {
    st(this);
    for (var a = [], b = 0; b < this.Qb.length; b++) a.push(this.Ha[this.Qb[b]]);
    return a
};
_.h.Ae = function() {
    st(this);
    return this.Qb.concat()
};
_.h.Ud = function(a) {
    return _.tt(this.Ha, a)
};
_.h.Sj = _.ja(9);
_.h.equals = function(a, b) {
    if (this === a) return !0;
    if (this.Wb != a.Hb()) return !1;
    b = b || ut;
    st(this);
    for (var c, d = 0; c = this.Qb[d]; d++)
        if (!b(this.get(c), a.get(c))) return !1;
    return !0
};
var ut = function(a, b) {
    return a === b
};
_.rt.prototype.isEmpty = function() {
    return 0 == this.Wb
};
_.rt.prototype.clear = function() {
    this.Ha = {};
    this.Js = this.Wb = this.Qb.length = 0
};
_.rt.prototype.remove = function(a) {
    return _.tt(this.Ha, a) ? (delete this.Ha[a], this.Wb--, this.Js++, this.Qb.length > 2 * this.Wb && st(this), !0) : !1
};
var st = function(a) {
    if (a.Wb != a.Qb.length) {
        for (var b = 0, c = 0; b < a.Qb.length;) {
            var d = a.Qb[b];
            _.tt(a.Ha, d) && (a.Qb[c++] = d);
            b++
        }
        a.Qb.length = c
    }
    if (a.Wb != a.Qb.length) {
        var e = {};
        for (c = b = 0; b < a.Qb.length;) d = a.Qb[b], _.tt(e, d) || (a.Qb[c++] = d, e[d] = 1), b++;
        a.Qb.length = c
    }
};
_.h = _.rt.prototype;
_.h.get = function(a, b) {
    return _.tt(this.Ha, a) ? this.Ha[a] : b
};
_.h.set = function(a, b) {
    _.tt(this.Ha, a) || (this.Wb++, this.Qb.push(a), this.Js++);
    this.Ha[a] = b
};
_.h.addAll = function(a) {
    if (a instanceof _.rt)
        for (var b = a.Ae(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
    else
        for (b in a) this.set(b, a[b])
};
_.h.forEach = function(a, b) {
    for (var c = this.Ae(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);
        a.call(b, f, e, this)
    }
};
_.h.clone = function() {
    return new _.rt(this)
};
_.h.Ai = function(a) {
    st(this);
    var b = 0,
        c = this.Js,
        d = this,
        e = new _.qt;
    e.next = function() {
        if (c != d.Js) throw Error("I");
        if (b >= d.Qb.length) throw _.pt;
        var f = d.Qb[b++];
        return a ? f : d.Ha[f]
    };
    return e
};
_.tt = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.vt = function(a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = a[d];
    return b
};
_.wt = function(a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = d;
    return b
};
_.xt = function(a) {
    if (a.Xc && "function" == typeof a.Xc) return a.Xc();
    if ("string" === typeof a) return a.split("");
    if (_.hb(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    return _.vt(a)
};
_.yt = function(a) {
    if (a.Ae && "function" == typeof a.Ae) return a.Ae();
    if (!a.Xc || "function" != typeof a.Xc) {
        if (_.hb(a) || "string" === typeof a) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b
        }
        return _.wt(a)
    }
};
_.zt = function(a, b, c) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
    else if (_.hb(a) || "string" === typeof a) _.ob(a, b, c);
    else
        for (var d = _.yt(a), e = _.xt(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var zx = function() {};
zx.prototype.DG = null;
zx.prototype.getOptions = function() {
    var a;
    (a = this.DG) || (a = {}, _.Ax(this) && (a[0] = !0, a[1] = !0), a = this.DG = a);
    return a
};
var Cx;
Cx = function() {};
_.K(Cx, zx);
_.Ax = function(a) {
    if (!a.JJ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.JJ = d
            } catch (e) {}
        }
        throw Error("ka");
    }
    return a.JJ
};
_.Bx = new Cx;

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.Dx = function(a, b) {
    var c = {},
        d;
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c
};
_.Ex = function(a, b) {
    var c = _.hb(b),
        d = c ? b : arguments;
    for (c = c ? 0 : 1; c < d.length; c++) {
        if (null == a) return;
        a = a[d[c]]
    }
    return a
};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Fx;
_.Gx = function(a) {
    return (new Fx).Pf(a)
};
Fx = function() {};
Fx.prototype.Pf = function(a) {
    var b = [];
    Hx(this, a, b);
    return b.join("")
};
var Hx = function(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), Hx(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Ix(d, c), c.push(":"), Hx(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    Ix(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("ma`" + typeof b);
            }
        }
    },
    Jx = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    },
    Kx = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
    Ix = function(a, b) {
        b.push('"', a.replace(Kx, function(c) {
            var d = Jx[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Jx[c] =
                d);
            return d
        }), '"')
    };

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.Lx = function(a, b, c) {
    if ("function" === typeof a) c && (a = (0, _.R)(a, c));
    else if (a && "function" == typeof a.handleEvent) a = (0, _.R)(a.handleEvent, a);
    else throw Error("na");
    return 2147483647 < Number(b) ? -1 : _.A.setTimeout(a, b || 0)
};
_.Mx = function(a) {
    _.A.clearTimeout(a)
};
_.Nx = function(a) {
    var b = null;
    return (new _.Gk(function(c, d) {
        b = _.Lx(function() {
            c(void 0)
        }, a); - 1 == b && d(Error("oa"))
    })).ys(function(c) {
        _.Mx(b);
        throw c;
    })
};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Qx, Ux, Vx, Xx, ay, cy;
_.Ox = function(a) {
    if (!Array.isArray(a))
        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0
};
_.Px = function(a) {
    return (a = _.Ax(a)) ? new ActiveXObject(a) : new XMLHttpRequest
};
Qx = function(a) {
    for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
    return c
};
_.Rx = function(a) {
    var b = 0,
        c;
    for (c in a) b++;
    return b
};
_.Sx = function(a, b) {
    return null !== a && b in a
};
_.Tx = function(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    var b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length),
        c;
    for (c in a) b[c] = _.Tx(a[c]);
    return b
};
Ux = function(a) {
    var b = /rv: *([\d\.]*)/.exec(a);
    if (b && b[1]) return b[1];
    b = "";
    var c = /MSIE +([\d\.]+)/.exec(a);
    if (c && c[1])
        if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
            if (a && a[1]) switch (a[1]) {
                case "4.0":
                    b = "8.0";
                    break;
                case "5.0":
                    b = "9.0";
                    break;
                case "6.0":
                    b = "10.0";
                    break;
                case "7.0":
                    b = "11.0"
            } else b = "7.0";
            else b = c[1];
    return b
};
Vx = function() {
    function a(e) {
        e = _.hi(e, d);
        return c[e] || ""
    }
    var b = _.xb;
    if (_.Hb()) return Ux(b);
    b = Qx(b);
    var c = {};
    _.ob(b, function(e) {
        c[e[0]] = e[1]
    });
    var d = _.ji(_.Sx, c);
    return _.Gb() ? a(["Version", "Opera"]) : _.Bb("Edge") ? a(["Edge"]) : _.Bb("Edg/") ? a(["Edg"]) : _.Jb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
};
_.Wx = function(a) {
    return 0 <= _.wb(Vx(), a)
};
Xx = function(a, b) {
    var c = [];
    for (b = b || 0; b < a.length; b += 2) _.ph(a[b], a[b + 1], c);
    return c.join("&")
};
_.Yx = function(a, b) {
    var c = 2 == arguments.length ? Xx(arguments[1], 0) : Xx(arguments, 1);
    return _.oh(a, c)
};
_.Zx = function(a, b, c) {
    c = null != c ? "=" + _.lh(c) : "";
    return _.oh(a, b + c)
};
_.$x = function(a, b) {
    _.Zi(a, "/") && (a = a.substr(0, a.length - 1));
    _.ed(b, "/") && (b = b.substr(1));
    return a + "/" + b
};
ay = {};
_.by = function(a) {
    if (ay[a]) return ay[a];
    a = String(a);
    if (!ay[a]) {
        var b = /function\s+([^\(]+)/m.exec(a);
        ay[a] = b ? b[1] : "[Anonymous]"
    }
    return ay[a]
};
cy = function(a, b) {
    var c = [];
    if (_.$a(b, a)) c.push("[...circular reference...]");
    else if (a && 50 > b.length) {
        c.push(_.by(a) + "(");
        for (var d = a.arguments, e = 0; d && e < d.length; e++) {
            0 < e && c.push(", ");
            var f = d[e];
            switch (typeof f) {
                case "object":
                    f = f ? "object" : "null";
                    break;
                case "string":
                    break;
                case "number":
                    f = String(f);
                    break;
                case "boolean":
                    f = f ? "true" : "false";
                    break;
                case "function":
                    f = (f = _.by(f)) ? f : "[fn]";
                    break;
                default:
                    f = typeof f
            }
            40 < f.length && (f = f.substr(0, 40) + "...");
            c.push(f)
        }
        b.push(a);
        c.push(")\n");
        try {
            c.push(cy(a.caller,
                b))
        } catch (g) {
            c.push("[exception trying to get caller]\n")
        }
    } else a ? c.push("[...long stack...]") : c.push("[end]");
    return c.join("")
};
_.dy = function(a) {
    var b = Error();
    if (Error.captureStackTrace) Error.captureStackTrace(b, a || _.dy), b = String(b.stack);
    else {
        try {
            throw b;
        } catch (c) {
            b = c
        }
        b = (b = b.stack) ? String(b) : null
    }
    b || (b = cy(a || arguments.callee.caller, []));
    return b
};
_.ey = function(a) {
    switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            return !0;
        default:
            return !1
    }
};
_.fy = function(a, b) {
    _.dj.call(this);
    this.Ak = a || 1;
    this.zs = b || _.A;
    this.zG = (0, _.R)(this.o1, this);
    this.wK = _.lb()
};
_.K(_.fy, _.dj);
_.h = _.fy.prototype;
_.h.enabled = !1;
_.h.uc = null;
_.h.setInterval = function(a) {
    this.Ak = a;
    this.uc && this.enabled ? (this.stop(), this.start()) : this.uc && this.stop()
};
_.h.o1 = function() {
    if (this.enabled) {
        var a = _.lb() - this.wK;
        0 < a && a < .8 * this.Ak ? this.uc = this.zs.setTimeout(this.zG, this.Ak - a) : (this.uc && (this.zs.clearTimeout(this.uc), this.uc = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
    }
};
_.h.start = function() {
    this.enabled = !0;
    this.uc || (this.uc = this.zs.setTimeout(this.zG, this.Ak), this.wK = _.lb())
};
_.h.stop = function() {
    this.enabled = !1;
    this.uc && (this.zs.clearTimeout(this.uc), this.uc = null)
};
_.h.va = function() {
    _.fy.T.va.call(this);
    this.stop();
    delete this.zs
};
var hy, iy, jy;
_.gy = function(a) {
    _.dj.call(this);
    this.headers = new _.rt;
    this.Ax = a || null;
    this.tf = !1;
    this.zx = this.Oa = null;
    this.Ev = "";
    this.Yn = 0;
    this.$l = this.BB = this.gv = this.Lz = !1;
    this.Jm = 0;
    this.kd = null;
    this.Mk = "";
    this.ME = this.sf = !1
};
_.K(_.gy, _.dj);
_.gy.prototype.Bb = null;
hy = /^https?$/i;
iy = ["POST", "PUT"];
jy = [];
_.ky = function(a, b, c, d, e, f, g) {
    var k = new _.gy;
    jy.push(k);
    b && k.V("complete", b);
    k.eo("ready", k.kS);
    f && k.bE(f);
    g && (k.sf = g);
    k.send(a, c, d, e)
};
_.gy.prototype.kS = function() {
    this.Da();
    _.oi(jy, this)
};
_.gy.prototype.bE = function(a) {
    this.Jm = Math.max(0, a)
};
_.gy.prototype.send = function(a, b, c, d) {
    if (this.Oa) throw Error("pa`" + this.Ev + "`" + a);
    b = b ? b.toUpperCase() : "GET";
    this.Ev = a;
    this.Yn = 0;
    this.Lz = !1;
    this.tf = !0;
    this.Oa = this.Ax ? _.Px(this.Ax) : _.Px(_.Bx);
    this.zx = this.Ax ? this.Ax.getOptions() : _.Bx.getOptions();
    this.Oa.onreadystatechange = (0, _.R)(this.mL, this);
    try {
        this.BB = !0, this.Oa.open(b, String(a), !0), this.BB = !1
    } catch (f) {
        this.ju(5, f);
        return
    }
    a = c || "";
    var e = this.headers.clone();
    d && _.zt(d, function(f, g) {
        e.set(g, f)
    });
    d = _.hi(e.Ae(), ly);
    c = _.A.FormData && a instanceof _.A.FormData;
    !_.$a(iy, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function(f, g) {
        this.Oa.setRequestHeader(g, f)
    }, this);
    this.Mk && (this.Oa.responseType = this.Mk);
    "withCredentials" in this.Oa && this.Oa.withCredentials !== this.sf && (this.Oa.withCredentials = this.sf);
    try {
        my(this), 0 < this.Jm && ((this.ME = ny(this.Oa)) ? (this.Oa.timeout = this.Jm, this.Oa.ontimeout = (0, _.R)(this.Bg, this)) : this.kd = _.Lx(this.Bg, this.Jm, this)), this.gv = !0, this.Oa.send(a), this.gv = !1
    } catch (f) {
        this.ju(5, f)
    }
};
var ny = function(a) {
        return _.sc && _.Pc(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
    },
    ly = function(a) {
        return "content-type" == a.toLowerCase()
    };
_.gy.prototype.Bg = function() {
    "undefined" != typeof _.Wa && this.Oa && (this.Yn = 8, this.dispatchEvent("timeout"), this.abort(8))
};
_.gy.prototype.ju = function(a) {
    this.tf = !1;
    this.Oa && (this.$l = !0, this.Oa.abort(), this.$l = !1);
    this.Yn = a;
    oy(this);
    py(this)
};
var oy = function(a) {
    a.Lz || (a.Lz = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
};
_.gy.prototype.abort = function(a) {
    this.Oa && this.tf && (this.tf = !1, this.$l = !0, this.Oa.abort(), this.$l = !1, this.Yn = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), py(this))
};
_.gy.prototype.va = function() {
    this.Oa && (this.tf && (this.tf = !1, this.$l = !0, this.Oa.abort(), this.$l = !1), py(this, !0));
    _.gy.T.va.call(this)
};
_.gy.prototype.mL = function() {
    this.Ob || (this.BB || this.gv || this.$l ? qy(this) : this.BC())
};
_.gy.prototype.BC = function() {
    qy(this)
};
var qy = function(a) {
        if (a.tf && "undefined" != typeof _.Wa && (!a.zx[1] || 4 != _.ry(a) || 2 != a.getStatus()))
            if (a.gv && 4 == _.ry(a)) _.Lx(a.mL, 0, a);
            else if (a.dispatchEvent("readystatechange"), 4 == _.ry(a)) {
            a.tf = !1;
            try {
                _.sy(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.Yn = 6, a.getStatus(), oy(a))
            } finally {
                py(a)
            }
        }
    },
    py = function(a, b) {
        if (a.Oa) {
            my(a);
            var c = a.Oa,
                d = a.zx[0] ? _.cb : null;
            a.Oa = null;
            a.zx = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    },
    my = function(a) {
        a.Oa && a.ME && (a.Oa.ontimeout =
            null);
        a.kd && (_.Mx(a.kd), a.kd = null)
    };
_.gy.prototype.$d = function() {
    return !!this.Oa
};
_.sy = function(a) {
    var b = a.getStatus(),
        c;
    if (!(c = _.ey(b))) {
        if (b = 0 === b) a = String(a.Ev).match(_.nh)[1] || null, !a && _.A.self && _.A.self.location && (a = _.A.self.location.protocol, a = a.substr(0, a.length - 1)), b = !hy.test(a ? a.toLowerCase() : "");
        c = b
    }
    return c
};
_.ry = function(a) {
    return a.Oa ? a.Oa.readyState : 0
};
_.gy.prototype.getStatus = function() {
    try {
        return 2 < _.ry(this) ? this.Oa.status : -1
    } catch (a) {
        return -1
    }
};
_.ty = function(a) {
    try {
        return a.Oa ? a.Oa.responseText : ""
    } catch (b) {
        return ""
    }
};
_.uy = function(a) {
    try {
        if (!a.Oa) return null;
        if ("response" in a.Oa) return a.Oa.response;
        switch (a.Mk) {
            case "":
            case "text":
                return a.Oa.responseText;
            case "arraybuffer":
                if ("mozResponseArrayBuffer" in a.Oa) return a.Oa.mozResponseArrayBuffer
        }
        return null
    } catch (b) {
        return null
    }
};
_.gy.prototype.getResponseHeader = function(a) {
    if (this.Oa && 4 == _.ry(this)) return a = this.Oa.getResponseHeader(a), null === a ? void 0 : a
};
_.gy.prototype.getAllResponseHeaders = function() {
    return this.Oa && 4 == _.ry(this) ? this.Oa.getAllResponseHeaders() || "" : ""
};
_.ni(function(a) {
    _.gy.prototype.BC = a(_.gy.prototype.BC)
});
    
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    ctx.QQ = function(a, b) {
        this.Jw = [];
        this.gL = a;
        this.lH = b || null;
        this.Jq = this.canceled = !1; // xn = canceled
        this.ij = void 0;
        this.notCalled = this.ZR = this.zy = !1; // false
        this.errorTimeout = 0; // QQ.nx = QQ.errorTimeout
        this.$a = null;
        this.By = 0
    };
    ctx.QQ.prototype.cancel = function(a) { // also not obfuscated
        if (this.canceled)
            this.ij instanceof ctx.QQ && this.ij.cancel(); // ij is some kind of next or parent pointer
        else {
            if (this.$a) {
                var b = this.$a;
                delete this.$a;
                a ? b.cancel(a) : (b.By--, 0 >= b.By && b.cancel())
            }
            this.gL ? this.gL.call(this.lH, this) : this.notCalled = !0;
            this.canceled || (a = new ctx.CanceledError(this), ctx.checkSingleCall(this), ctx.TQ(this, !1, a))
        }
    };
    ctx.QQ.prototype.dH = function(a, b) {
        this.zy = !1;
        ctx.TQ(this, a, b)
    };
    ctx.TQ = function(a, b, c) {
        a.canceled = !0; // true
        a.ij = c; // next pointer again
        a.Jq = !b;
        UQ(a)
    };
    ctx.checkSingleCall = function(what) { // ctx.SQ = ctx.checkSingleCall
        if (what.canceled) { // *.xn = *.canceled
            if (!what.notCalled) throw new AlreadyCalledError(what); // *.nE = *.notCalled
            what.notCalled = !1 // false
        }
    };
    ctx.QQ.prototype.callback = function(a) {
        ctx.checkSingleCall(this);
        ctx.TQ(this, !0, a)
    };
    ctx.QQ.prototype.Td = function(a, b) {
        return this.Zm(a, null, b)
    };
    ctx.QQ.prototype.Zm = function(a, b, c) {
        this.Jw.push([a, b, c]);
        this.canceled && UQ(this);
        return this
    };
    ctx.QQ.prototype.then = function(a, b, c) {
        var d, e, f = new ctx.Gk(function(g, k) {
            d = g;
            e = k
        });
        this.Zm(d, function(g) {
            g instanceof ctx.CanceledError ? f.cancel() : e(g)
        });
        return f.then(a, b, c)
    };
    ctx.pk(ctx.QQ);
    ctx.QQ.prototype.isError = function(a) {
        return a instanceof Error
    };
    var WQ = function(a) {
            return ctx.rb(a.Jw, function(b) {
                return "function" === typeof b[1]
            })
        },
        UQ = function(a) {
            if (a.errorTimeout && a.canceled && WQ(a)) { // gracefully clear timeout
                var timeout = a.errorTimeout, // QQ.nx = QQ.errorTimeout
                    asyncError = asyncByTimeout[timeout];
                asyncError && (ctx.A.clearTimeout(asyncError.timeout), delete asyncByTimeout[timeout]);
                a.errorTimeout = 0
            }
            a.$a && (a.$a.By--, delete a.$a);
            var b = a.ij,
                c;
            
            for (var d = c = !1; a.Jw.length && !a.zy;) {
                var e = a.Jw.shift(),
                    f = e[0],
                    g = e[1];
                e = e[2];
                if (f = a.Jq ? g : f) try {
                    var k = f.call(e || a.lH, b);
                    void 0 !== k && (a.Jq = a.Jq && (k == b || a.isError(k)), a.ij = b = k);
                    if (ctx.qk(b) || "function" === typeof ctx.A.Promise && b instanceof ctx.A.Promise) d = !0, a.zy = !0
                } catch (l) {
                    b = l, a.Jq = !0, WQ(a) ||
                        (c = !0)
                }
            }
            a.ij = b;
            d && (k = (0, ctx.R)(a.dH, a, !0), d = (0, ctx.R)(a.dH, a, !1), b instanceof ctx.QQ ? (b.Zm(k, d), b.ZR = !0) : b.then(k, d));
            c && (b = new AsyncError(b), asyncByTimeout[b.timeout] = b, a.errorTimeout = b.timeout)
        },
        AlreadyCalledError = function() { // VQ = AlreadyCalledError
            ctx.Vc.call(this)
        };
    ctx.K(AlreadyCalledError, ctx.Vc);
    AlreadyCalledError.prototype.message = "Deferred has already fired";
    AlreadyCalledError.prototype.name = "AlreadyCalledError"; // thank you :)
    ctx.CanceledError = function() { // ctx.RQ = ctx.CanceledError
        ctx.Vc.call(this)
    };
    ctx.K(ctx.CanceledError, ctx.Vc);
    ctx.CanceledError.prototype.message = "Deferred was canceled";
    ctx.CanceledError.prototype.name = "CanceledError"; // thanks again!
    
    var AsyncError = function(error) { // YQ = AsyncError
        this.timeout = ctx.A.setTimeout((0, ctx.R)(this.throwError, this), 0); // AsyncError.Ca = timeout
        this.error = error // AsyncError.ju = error
    };
    AsyncError.prototype.throwError = function() { // AsyncError.n1 = throwError
        delete asyncByTimeout[this.timeout];
        throw this.error;
    };
    
    // key: timeout for AsyncError
    // value: actual AsyncError
    var asyncByTimeout = {}; // XQ = asyncByTimeout

    var ZQ = function(a) {
            (0, eval)(a)
        },
        $Q = function(a) {
            var b = ctx.A.onerror,
                c = !1;
            ctx.wc && !ctx.Pc("535.3") && (c = !c);
            ctx.A.onerror = function(d, e, f, g, k) {
                b && b(d, e, f, g, k);
                a({
                    message: d,
                    fileName: e,
                    line: f,
                    lineNumber: f,
                    xaa: g,
                    error: k
                });
                return c
            }
        },
        aR = function(a) {
            var b = "";
            "function" === typeof a.toString && (b = "" + a);
            return b + a.stack
        },
        bR = function(a, b) {
            b || (b = {});
            b[aR(a)] = !0;
            var c = a.stack || "";
            (a = a.JG) && !b[aR(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += bR(a, b));
            return c
        },
        cR = function(a) {
            var b = ctx.pi("window.location.href");
            null == a && (a = 'Unknown Error of type "null/undefined"');
            if ("string" === typeof a) return {
                message: a,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: b,
                stack: "Not available"
            };
            var c = !1;
            try {
                var d = a.lineNumber || a.line || "Not available"
            } catch (f) {
                d = "Not available", c = !0
            }
            try {
                var e = a.fileName || a.filename || a.sourceURL || ctx.A.$googDebugFname || b
            } catch (f) {
                e = "Not available", c = !0
            }
            b = bR(a);
            if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) return c = a.message,
                null == c && (c = a.constructor && a.constructor instanceof Function ? 'Unknown Error of type "' + (a.constructor.name ? a.constructor.name : ctx.by(a.constructor)) + '"' : "Unknown Error of unknown type", "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())), {
                    message: c,
                    name: a.name || "UnknownError",
                    lineNumber: d,
                    fileName: e,
                    stack: b || "Not available"
                };
            a.stack = b;
            return a
        };
    var dR = function() {
        ctx.ri.call(this)
    };
    ctx.ii(dR, ctx.ri);
    dR.prototype.init = function() {
        this.zo = []
    };
    var gR = function(a) {
            var b = eR;
            b.xD = a;
            fR(b)
        },
        iR = function(a, b) {
            var c = eR;
            if (c.kca) {
                a = "Potentially sensitive message stripped for security reasons.";
                var d = Error("Ra");
                d.columnNumber = b.columnNumber;
                d.lineNumber = b.lineNumber;
                d.name = b.name;
                d.fileName = b.fileName;
                if (ctx.Jb() && ctx.Wx(28) || ctx.Ib() && ctx.Wx(14)) d.stack = b.stack;
                b = d
            }
            c.Ob || b instanceof ctx.CanceledError || (c.xD ? hR(c.xD, b, a) : c.zo && 10 > c.zo.length && c.zo.push([a, b]))
        },
        fR = function(a) {
            a.zo && (ctx.ob(a.zo, function(b) {
                hR(this.xD, b[1], b[0])
            }, a), a.zo = null)
        };
    dR.prototype.Bb = null;
    var eR = new dR;
    var jR = function() {
        var a = window;
        if (!a.location) try {
            ctx.Gx(a)
        } catch (c) {}
        var b = a.location && a.location.ancestorOrigins;
        if (void 0 !== b) return b && b.length ? b[b.length - 1] == a.location.origin : !0;
        try {
            return void 0 !== a.top.location.href
        } catch (c) {
            return !1
        }
    };
    var kR = {},
        lR = function() {
            var a = {};
            a.location = document.location.toString();
            if (jR()) try {
                a["top.location"] = top.location.toString()
            } catch (c) {
                a["top.location"] = "[external]"
            } else a["top.location"] = "[external]";
            for (var b in kR) try {
                a[b] = kR[b].call()
            } catch (c) {
                a[b] = "[error] " + c.message
            }
            return a
        };
    var mR = function(a) {
            this.XG = a;
            this.SJ = {};
            this.Nq = []
        },
        hR = function(a, b, c) {
            var d = lR();
            c && (d.message = c);
            a: {
                c = ctx.dy();d["call-stack"] = c;b = b instanceof Error ? b : b || "";
                for (c = 0; c < a.Nq.length; c++)
                    if (!1 === a.Nq[c](b, d)) break a;c = "";
                if (b) {
                    c = b.message || "unknown";
                    for (var e = 0, f = 0; f < c.length; ++f) e = 31 * e + c.charCodeAt(f) >>> 0;
                    c = e
                }
                e = "";
                for (g in d) e = e + g + ":" + d[g] + ":";
                var g = c + "::" + e;c = a.SJ[g];c || (c = {
                    time: 0,
                    count: 0
                }, a.SJ[g] = c);1E4 > ctx.lb() - c.time ? (c.count++, 1 == c.count && (d = lR(), d.message = "Throttling: " + g, a.XG.Ru(b, d))) : (c.count &&
                    (d["dropped-instances"] = c.count), c.time = ctx.lb(), c.count = 0, a.XG.Ru(b, d))
            }
        };
    /*
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var nR = function(a) {
        ctx.ri.call(this);
        this.bT = a
    };
    ctx.K(nR, ctx.ri);
    nR.prototype.wrap = function(a) {
        return oR(this, a)
    };
    var pR = function(a, b) {
            return (b ? "__wrapper_" : "__protected_") + ctx.cd(a) + "__"
        },
        oR = function(a, b) {
            var c = pR(a, !0);
            b[c] || ((b[c] = qR(a, b))[pR(a, !1)] = b);
            return b[c]
        },
        qR = function(a, b) {
            var c = function() {
                if (a.Ob) return b.apply(this, arguments);
                try {
                    return b.apply(this, arguments)
                } catch (d) {
                    a.mg(d)
                } finally {}
            };
            c[pR(a, !1)] = b;
            return c
        };
    nR.prototype.mg = function(a) {
        if (!(a && "object" === typeof a && "string" === typeof a.message && 0 == a.message.indexOf("Error in protected function: ") || "string" === typeof a && 0 == a.indexOf("Error in protected function: "))) throw this.bT(a), new rR(a);
    };
    var sR = function(a, b) {
        var c = ctx.A.window,
            d = c[b];
        c[b] = function(e, f) {
            "string" === typeof e && (e = ctx.ji(ZQ, e));
            arguments[0] = e = oR(a, e);
            if (d.apply) return d.apply(this, arguments);
            var g = e;
            if (2 < arguments.length) {
                var k = Array.prototype.slice.call(arguments, 2);
                g = function() {
                    e.apply(this, k)
                }
            }
            return d(g, f)
        };
        c[b][pR(a, !1)] = d
    };
    nR.prototype.va = function() {
        var a = ctx.A.window;
        var b = a.setTimeout;
        b = b[pR(this, !1)] || b;
        a.setTimeout = b;
        b = a.setInterval;
        b = b[pR(this, !1)] || b;
        a.setInterval = b;
        nR.T.va.call(this)
    };
    var rR = function(a) {
        ctx.Vc.call(this, "Error in protected function: " + (a && a.message ? String(a.message) : String(a)));
        (a = (this.JG = a) && a.stack) && "string" === typeof a && (this.stack = a)
    };
    ctx.K(rR, ctx.Vc);
    var uR = function(a, b, c) {
        ctx.dj.call(this);
        this.cH = b || null;
        this.fG = {};
        this.nO = tR;
        this.nW = a;
        if (!c)
            if (this.wn = null, ctx.sc && !ctx.Pc("10")) $Q((0, ctx.R)(this.Ru, this));
            else {
                this.wn = new nR((0, ctx.R)(this.Ru, this));
                sR(this.wn, "setTimeout");
                sR(this.wn, "setInterval");
                a = this.wn;
                b = ctx.A.window;
                c = ["requestAnimationFrame", "mozRequestAnimationFrame", "webkitAnimationFrame", "msRequestAnimationFrame"];
                for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    c[d] in b && sR(a, e)
                }
                a = this.wn;
                ctx.mi = !0;
                b = (0, ctx.R)(a.wrap, a);
                for (c = 0; c < ctx.ki.length; c++) ctx.ki[c](b);
                ctx.li.push(a)
            }
    };
    ctx.K(uR, ctx.dj);
    var vR = function(a, b) {
        ctx.vi.call(this, "a");
        this.error = a;
        this.context = b
    };
    ctx.K(vR, ctx.vi);
    var tR = function(a, b, c, d) {
            ctx.ky(a, null, b, c, d)
        },
        wR = function(a, b) {
            a.nO = b
        };
    uR.prototype.Ru = function(a, b) {
        a = a.error || a;
        b = b ? ctx.lk(b) : {};
        a instanceof Error && ctx.Fb(b, a.__closure__error__context__984382 || {});
        a = cR(a);
        if (this.cH) try {
            this.cH(a, b)
        } catch (k) {}
        var c = a.message.substring(0, 1900),
            d = a.stack;
        try {
            var e = ctx.Yx(this.nW, "script", a.fileName, "error", c, "line", a.lineNumber);
            ctx.$i(this.fG) || (e = ctx.rh(e, this.fG));
            c = {};
            c.trace = d;
            if (b)
                for (var f in b) c["context." + f] = b[f];
            var g = ctx.qh(c);
            this.nO(e, "POST", g, this.Oaa)
        } catch (k) {}
        try {
            this.dispatchEvent(new vR(a, b))
        } catch (k) {}
    };
    uR.prototype.va = function() {
        ctx.ti(this.wn);
        uR.T.va.call(this)
    };
    var xR = function() {
            var a = ctx.S("debug/host"),
                b = "withCredentials" in new XMLHttpRequest,
                c = !!window.XDomainRequest,
                d = document.location.origin;
            eR.init();
            var e = new uR("/_/jserror", void 0, !0);
            wR(e, function(f, g, k, l) {
                a === d ? ctx.ky(a + f, null, g, k, l) : c ? (l = new window.XDomainRequest, l.open(g, a + f), l.send(k)) : b && ctx.ky(a + f, null, g, k, l)
            });
            gR(new mR(e))
        },
        yR = !1;
    (window.___jsl = window.___jsl || {}).hefn = function(a, b) { // there's the jsl hefn that was uncracked in the loader!
        yR || (xR(), yR = !0);
        var c = ctx.S("debug/reportExceptionRate");
        ("number" === typeof c ? c : 0) >= Math.random() && (b ? iR(b, a) : iR(null, a));
        if (ctx.S("debug/rethrowException")) throw a;
    };

});
// Google Inc.
