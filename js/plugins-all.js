// Check mobiles
function is_mobile() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}
// Check OSX
function is_OSX() {
    return navigator.platform.match(/(Mac|iPhone|iPod|iPad|Android)/i) ? true : false;
}
// Plural
function si_plural(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
// SI False
$('.si-false').click(function() {
    return false;
});

// Preload
$.fn.preload = function() {
    this.each(function() {
        $('<img/>')[0].src = this;
    });
};
// Reverse
$.fn.reverse = [].reverse;


// Ion.Sound
// version 1.3.0 Build: 20
// https://github.com/IonDen/ion.sound
(function(c) {
    if (!c.ionSound) {
        var e = {},
            f, g, k, b, d = {},
            l = !1,
            m = function(h) {
                var a, b; - 1 !== h.indexOf(":") ? (a = h.split(":")[0], b = h.split(":")[1]) : a = h;
                d[a] = new Audio;
                g = d[a].canPlayType("audio/mp3");
                k = "probably" === g || "maybe" === g ? e.path + a + ".mp3" : e.path + a + ".ogg";
                c(d[a]).prop("src", k);
                d[a].load();
                d[a].preload = "auto";
                d[a].volume = b || e.volume
            },
            n = function(b) {
                var a, c, f, g; - 1 !== b.indexOf(":") ? (c = b.split(":")[0], f = b.split(":")[1]) : c = b;
                a = d[c];
                if ("object" === typeof a && null !== a)
                    if (f && (a.volume = f), !e.multiPlay && !l) a.play(), l = !0, g = setInterval(function() {
                        a.ended && (clearInterval(g), l = !1)
                    }, 250);
                    else if (e.multiPlay) {
                    if (!a.ended) try {
                        a.currentTime = 0
                    } catch (k) {}
                    a.play()
                }
            };
        c.ionSound = function(g) {
            e = c.extend({
                sounds: ["water_droplet"],
                path: "static/sounds/",
                multiPlay: !0,
                volume: "0.5"
            }, g);
            f = e.sounds.length;
            if ("function" === typeof Audio || "object" === typeof Audio)
                for (b = 0; b < f; b += 1) m(e.sounds[b]);
            c.ionSound.play = function(a) {
                n(a)
            };
            c.ionSound.stop = function(a) {
                a = d[a];
                if ("object" === typeof a && null !== a) {
                    a.pause();
                    try {
                        a.currentTime = 0
                    } catch (b) {}
                }
            };
            c.ionSound.kill = function(a) {
                var b = d[a];
                if ("object" === typeof b && null !== b) {
                    try {
                        d[a].src = ""
                    } catch (c) {}
                    d[a] = null
                }
            }
        };
        c.ionSound.destroy = function() {
            for (b = 0; b < f; b += 1) d[e.sounds[b]] = null;
            f = 0;
            c.ionSound.play = function() {};
            c.ionSound.stop = function() {};
            c.ionSound.kill = function() {}
        }
    }
})(jQuery);

/*
 * Placeholder plugin for jQuery
 * ---
 * Copyright 2010, Daniel Stocks (http://webcloud.se)
 * Released under the MIT, BSD, and GPL Licenses.
 */

(function(b) {
    function d(a) {
        this.input = a;
        a.attr("type") == "password" && this.handlePassword();
        b(a[0].form).submit(function() {
            if (a.hasClass("placeholder") && a[0].value == a.attr("placeholder")) a[0].value = ""
        })
    }
    d.prototype = {
        show: function(a) {
            if (this.input[0].value === "" || a && this.valueIsPlaceholder()) {
                if (this.isPassword) try {
                    this.input[0].setAttribute("type", "text")
                } catch (b) {
                    this.input.before(this.fakePassword.show()).hide()
                }
                this.input.addClass("placeholder");
                this.input[0].value = this.input.attr("placeholder")
            }
        },
        hide: function() {
            if (this.valueIsPlaceholder() && this.input.hasClass("placeholder") && (this.input.removeClass("placeholder"), this.input[0].value = "", this.isPassword)) {
                try {
                    this.input[0].setAttribute("type", "password")
                } catch (a) {}
                this.input.show();
                this.input[0].focus()
            }
        },
        valueIsPlaceholder: function() {
            return this.input[0].value == this.input.attr("placeholder")
        },
        handlePassword: function() {
            var a = this.input;
            a.attr("realType", "password");
            this.isPassword = !0;
            if (b.browser.msie && a[0].outerHTML) {
                var c = b(a[0].outerHTML.replace(/type=(['"])?password\1/gi,
                    "type=$1text$1"));
                this.fakePassword = c.val(a.attr("placeholder")).addClass("placeholder").focus(function() {
                    a.trigger("focus");
                    b(this).hide()
                });
                b(a[0].form).submit(function() {
                    c.remove();
                    a.show()
                })
            }
        }
    };
    var e = !!("placeholder" in document.createElement("input"));
    b.fn.placeholder = function() {
        return e ? this : this.each(function() {
            var a = b(this),
                c = new d(a);
            c.show(!0);
            a.focus(function() {
                c.hide()
            });
            a.blur(function() {
                c.show(!1)
            });
            b.browser.msie && (b(window).load(function() {
                    a.val() && a.removeClass("placeholder");
                    c.show(!0)
                }),
                a.focus(function() {
                    if (this.value == "") {
                        var a = this.createTextRange();
                        a.collapse(!0);
                        a.moveStart("character", 0);
                        a.select()
                    }
                }))
        })
    }
})(jQuery);


/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function(e) {
    "use strict";

    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target,
            a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length) return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type)
            if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
            var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
        } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function() {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function() {
        if (!i) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function(t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"),
                o = i.length,
                s = [];
            for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: u || "POST"
            });
            t.uploadProgress && (s.xhr = function() {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function(e) {
                    var r = 0,
                        a = e.loaded || e.position,
                        n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function(e, r) {
                r.data = t.formData ? t.formData : n, c && c.call(this, e, r)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
                    }
                }
                var r = f.attr2("target"),
                    i = f.attr2("action"),
                    o = "multipart/form-data",
                    c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (j = setTimeout(function() {
                    T = !0, s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData)
                        for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout");
                    if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T) throw "timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function(e) {
                                var t = {
                                    "content-type": m.dataType
                                };
                                return t[e.toLowerCase()]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(),
                                l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;
                                else if (l) {
                                    var p = M.getElementsByTagName("pre")[0],
                                        h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror", x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y), i = "error", x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function() {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }
            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0],
                S = e.Deferred();
            if (S.abort = function(e) {
                    x.abort(e)
                }, r)
                for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), g = v[0], x = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function() {},
                    getResponseHeader: function() {},
                    setRequestHeader: function() {},
                    abort: function(t) {
                        var r = "timeout" === t ? "timeout" : "aborted";
                        a("aborting upload... " + r), this.aborted = 1;
                        try {
                            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                        } catch (n) {}
                        v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                    }
                }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;
            if (x.aborted) return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
            var D = 1,
                k = 2,
                A = e("meta[name=csrf-token]").attr("content"),
                L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50,
                X = e.parseXML || function(e, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                },
                C = e.parseJSON || function(e) {
                    return window.eval("(" + e + ")")
                },
                _ = function(t, r, a) {
                    var n = t.getResponseHeader("content-type") || "",
                        i = "xml" === r || !r && n.indexOf("xml") >= 0,
                        o = i ? t.responseXML : t.responseText;
                    return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
                };
            return S
        }
        if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {
            success: t
        } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [],
            v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function() {
                f.resetForm()
            }), t.clearForm && x.push(function() {
                f.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var y = t.success || function() {};
            x.push(function(r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else t.success && x.push(t.success);
        if (t.success = function(e, r, a) {
                for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f])
            }, t.error) {
            var b = t.error;
            t.error = function(e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function(e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function() {
                return "" !== e(this).val()
            }),
            w = j.length > 0,
            S = "multipart/form-data",
            D = f.attr("enctype") == S || f.attr("encoding") == S,
            k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
            A = s(v)
        }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++) h[E] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function(n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function() {
                e(i.s, i.c).ajaxForm(n)
            }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function(t, r) {
        var a = [];
        if (0 === this.length) return a;
        var i, o = this[0],
            s = this.attr("id"),
            u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a;
        var c, l, f, m, d, p, h;
        for (c = 0, p = u.length; p > c; c++)
            if (d = u[c], f = d.name, f && !d.disabled)
                if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
                    name: f,
                    value: e(d).val(),
                    type: d.type
                }), a.push({
                    name: f + ".x",
                    value: o.clk_x
                }, {
                    name: f + ".y",
                    value: o.clk_y
                }));
                else if (m = e.fieldValue(d, !0), m && m.constructor == Array)
            for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({
                name: f,
                value: m[l]
            });
        else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length)
                for (l = 0; l < v.length; l++) a.push({
                    name: f,
                    value: v[l],
                    type: d.type
                });
            else a.push({
                name: f,
                value: "",
                type: d.type
            })
        } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
            name: f,
            value: m,
            type: d.type,
            required: d.required
        }));
        if (!t && o.clk) {
            var g = e(o.clk),
                x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({
                name: f,
                value: g.val()
            }), a.push({
                name: f + ".x",
                value: o.clk_x
            }, {
                name: f + ".y",
                value: o.clk_y
            }))
        }
        return a
    }, e.fn.formSerialize = function(t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function(t) {
        var r = [];
        return this.each(function() {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)
                    for (var i = 0, o = n.length; o > i; i++) r.push({
                        name: a,
                        value: n[i]
                    });
                else null !== n && "undefined" != typeof n && r.push({
                    name: this.name,
                    value: n
                })
            }
        }), e.param(r)
    }, e.fn.fieldValue = function(t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a],
                o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function(t, r) {
        var a = t.name,
            n = t.type,
            i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o) return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function(t) {
        return this.each(function() {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function(t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var a = this.type,
                n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function(e) {
        return void 0 === e && (e = !0), this.each(function() {
            this.disabled = !e
        })
    }, e.fn.selected = function(t) {
        return void 0 === t && (t = !0), this.each(function() {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
});


/* jQuery Form Styler v1.4.7 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
(function(c) {
    c.fn.styler = function(h) {
        h = c.extend({
            wrapper: "form",
            idSuffix: "-styler",
            filePlaceholder: "\u0424\u0430\u0439\u043b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",
            fileBrowse: "\u041e\u0431\u0437\u043e\u0440...",
            selectSearch: !0,
            selectSearchLimit: 10,
            selectSearchNotFound: "\u0421\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",
            selectSearchPlaceholder: "\u041f\u043e\u0438\u0441\u043a...",
            selectVisibleOptions: 0,
            singleSelectzIndex: "100",
            selectSmartPositioning: !0
        }, h);
        return this.each(function() {
            function s() {
                var c = "",
                    q = "",
                    b = "",
                    u = "";
                void 0 !== a.attr("id") && "" != a.attr("id") && (c = ' id="' + a.attr("id") + h.idSuffix + '"');
                void 0 !== a.attr("title") && "" != a.attr("title") && (q = ' title="' + a.attr("title") + '"');
                void 0 !== a.attr("class") && "" != a.attr("class") && (b = " " + a.attr("class"));
                var s = a.data(),
                    g;
                for (g in s) "" != s[g] && (u += " data-" + g + '="' + s[g] + '"');
                this.id = c + u;
                this.title = q;
                this.classes = b
            }
            var a = c(this);
            a.is(":checkbox") ? a.each(function() {
                if (1 > a.parent("div.jq-checkbox").length) {
                    var h =
                        function() {
                            var h = new s,
                                b = c("<div" + h.id + ' class="jq-checkbox' + h.classes + '"' + h.title + '><div class="jq-checkbox__div"></div></div>');
                            a.css({
                                position: "absolute",
                                zIndex: "-1",
                                opacity: 0,
                                margin: 0,
                                padding: 0
                            }).after(b).prependTo(b);
                            b.attr("unselectable", "on").css({
                                "-webkit-user-select": "none",
                                "-moz-user-select": "none",
                                "-ms-user-select": "none",
                                "-o-user-select": "none",
                                "user-select": "none",
                                display: "inline-block",
                                position: "relative",
                                overflow: "hidden"
                            });
                            a.is(":checked") && b.addClass("checked");
                            a.is(":disabled") &&
                                b.addClass("disabled");
                            b.click(function() {
                                b.is(".disabled") || (a.is(":checked") ? (a.prop("checked", !1), b.removeClass("checked")) : (a.prop("checked", !0), b.addClass("checked")), a.change());
                                return !1
                            });
                            a.closest("label").add('label[for="' + a.attr("id") + '"]').click(function(a) {
                                b.click();
                                a.preventDefault()
                            });
                            a.change(function() {
                                a.is(":checked") ? b.addClass("checked") : b.removeClass("checked")
                            }).keydown(function(a) {
                                13 != a.which && 32 != a.which || b.click()
                            }).focus(function() {
                                b.is(".disabled") || b.addClass("focused")
                            }).blur(function() {
                                b.removeClass("focused")
                            })
                        };
                    h();
                    a.on("refresh", function() {
                        a.parent().before(a).remove();
                        h()
                    })
                }
            }) : a.is(":radio") ? a.each(function() {
                if (1 > a.parent("div.jq-radio").length) {
                    var p = function() {
                        var q = new s,
                            b = c("<div" + q.id + ' class="jq-radio' + q.classes + '"' + q.title + '><div class="jq-radio__div"></div></div>');
                        a.css({
                            position: "absolute",
                            zIndex: "-1",
                            opacity: 0,
                            margin: 0,
                            padding: 0
                        }).after(b).prependTo(b);
                        b.attr("unselectable", "on").css({
                            "-webkit-user-select": "none",
                            "-moz-user-select": "none",
                            "-ms-user-select": "none",
                            "-o-user-select": "none",
                            "user-select": "none",
                            display: "inline-block",
                            position: "relative"
                        });
                        a.is(":checked") && b.addClass("checked");
                        a.is(":disabled") && b.addClass("disabled");
                        b.click(function() {
                            b.is(".disabled") || (b.closest(h.wrapper).find('input[name="' + a.attr("name") + '"]').prop("checked", !1).parent().removeClass("checked"), a.prop("checked", !0).parent().addClass("checked"), a.change());
                            return !1
                        });
                        a.closest("label").add('label[for="' + a.attr("id") + '"]').click(function(a) {
                            b.click();
                            a.preventDefault()
                        });
                        a.change(function() {
                            a.parent().addClass("checked")
                        }).focus(function() {
                            b.is(".disabled") ||
                                b.addClass("focused")
                        }).blur(function() {
                            b.removeClass("focused")
                        })
                    };
                    p();
                    a.on("refresh", function() {
                        a.parent().before(a).remove();
                        p()
                    })
                }
            }) : a.is(":file") ? a.css({
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                margin: 0,
                padding: 0
            }).each(function() {
                if (1 > a.parent("div.jq-file").length) {
                    var p = function() {
                        var q = new s,
                            b = c("<div" + q.id + ' class="jq-file' + q.classes + '"' + q.title + ' style="display: inline-block; position: relative; overflow: hidden"></div>'),
                            p = c('<div class="jq-file__name">' +
                                h.filePlaceholder + "</div>").appendTo(b);
                        c('<div class="jq-file__browse">' + h.fileBrowse + "</div>").appendTo(b);
                        a.after(b);
                        b.append(a);
                        a.is(":disabled") && b.addClass("disabled");
                        a.change(function() {
                            p.text(a.val().replace(/.+[\\\/]/, ""))
                        }).focus(function() {
                            b.addClass("focused")
                        }).blur(function() {
                            b.removeClass("focused")
                        }).click(function() {
                            b.removeClass("focused")
                        })
                    };
                    p();
                    a.on("refresh", function() {
                        a.parent().before(a).remove();
                        p()
                    })
                }
            }) : a.is("select") ? a.each(function() {
                if (1 > a.next("div.jqselect").length) {
                    var p =
                        function() {
                            function q(a) {
                                a.unbind("mousewheel DOMMouseScroll").bind("mousewheel DOMMouseScroll", function(a) {
                                    var b = null;
                                    "mousewheel" == a.type ? b = -1 * a.originalEvent.wheelDelta : "DOMMouseScroll" == a.type && (b = 40 * a.originalEvent.detail);
                                    b && (a.stopPropagation(), a.preventDefault(), c(this).scrollTop(b + c(this).scrollTop()))
                                })
                            }

                            function b() {
                                i = 0;
                                for (len = g.length; i < len; i++) {
                                    var a = "",
                                        c = "",
                                        b = a = "",
                                        h = "",
                                        m = "";
                                    g.eq(i).prop("selected") && (c = "selected sel");
                                    g.eq(i).is(":disabled") && (c = "disabled");
                                    g.eq(i).is(":selected:disabled") &&
                                        (c = "selected sel disabled");
                                    void 0 !== g.eq(i).attr("class") && (b = " " + g.eq(i).attr("class"), m = ' data-jqfs-class="' + g.eq(i).attr("class") + '"');
                                    var e = g.eq(i).data(),
                                        n;
                                    for (n in e) "" != e[n] && (a += " data-" + n + '="' + e[n] + '"');
                                    a = "<li" + m + a + ' class="' + c + b + '">' + g.eq(i).text() + "</li>";
                                    g.eq(i).parent().is("optgroup") && (void 0 !== g.eq(i).parent().attr("class") && (h = " " + g.eq(i).parent().attr("class")), a = "<li" + m + ' class="' + c + b + " option" + h + '">' + g.eq(i).text() + "</li>", g.eq(i).is(":first-child") && (a = '<li class="optgroup' + h +
                                        '">' + g.eq(i).parent().attr("label") + "</li>" + a));
                                    v += a
                                }
                            }

                            function p() {
                                var k = new s,
                                    d = c("<div" + k.id + ' class="jq-selectbox jqselect' + k.classes + '" style="display: inline-block; position: relative; z-index:' + h.singleSelectzIndex + '"><div class="jq-selectbox__select"' + k.title + '><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>');
                                a.css({
                                    margin: 0,
                                    padding: 0
                                }).wrap('<div class="jq-selectbox-wrapper" style="display: inline-block; position: relative;"></div>').after(d);
                                var k = a.clone().appendTo("body"),
                                    r = k.width();
                                k.remove();
                                r != a.width() && a.parent().css("display", "block");
                                var k = c("div.jq-selectbox__select", d),
                                    l = c("div.jq-selectbox__select-text", d),
                                    r = g.filter(":selected");
                                r.length ? l.text(r.text()) : l.text(g.first().text());
                                b();
                                var m = "";
                                h.selectSearch && (m = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + h.selectSearchPlaceholder + '"></div><div class="jq-selectbox__not-found">' + h.selectSearchNotFound + "</div>");
                                var e = c('<div class="jq-selectbox__dropdown" style="position: absolute">' +
                                    m + '<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">' + v + "</ul></div>");
                                d.append(e);
                                var n = c("ul", e),
                                    f = c("li", e),
                                    t = c("input", e),
                                    w = c("div.jq-selectbox__not-found", e).hide();
                                f.length < h.selectSearchLimit && t.parent().hide();
                                var x = 0;
                                f.each(function() {
                                    c(this).css({
                                        display: "inline-block",
                                        "white-space": "nowrap"
                                    });
                                    c(this).width() > x && (x = c(this).width());
                                    c(this).css({
                                        display: "block",
                                        "white-space": "normal"
                                    })
                                });
                                d.width(a.outerWidth());
                                x > e.width() && e.width(x + e.width() - f.width());
                                a.css({
                                    position: "absolute",
                                    opacity: 0,
                                    height: d.outerHeight()
                                });
                                var z = d.outerHeight(),
                                    u = t.outerHeight(),
                                    y = n.css("max-height"),
                                    m = f.filter(".selected");
                                1 > m.length && f.first().addClass("selected sel");
                                void 0 === f.data("li-height") && f.data("li-height", f.outerHeight());
                                var A = e.css("top");
                                "auto" == e.css("left") && e.css({
                                    left: 0
                                });
                                "auto" == e.css("top") && e.css({
                                    top: z
                                });
                                e.hide();
                                m.length && (g.first().text() != r.text() && d.addClass("changed"), d.data("jqfs-class", m.data("jqfs-class")), d.addClass(m.data("jqfs-class")));
                                if (a.is(":disabled")) return d.addClass("disabled"), !1;
                                k.click(function() {
                                    a.focus();
                                    if (!navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
                                        if (h.selectSmartPositioning) {
                                            var b = c(window),
                                                g = d.offset().top,
                                                m = b.height() - z - (g - b.scrollTop()),
                                                k = h.selectVisibleOptions,
                                                l = f.data("li-height"),
                                                p = 5 * l,
                                                r = l * k;
                                            0 < k && 6 > k && (p = r);
                                            0 == k && (r = "auto");
                                            m > p + u + 20 ? (e.height("auto").css({
                                                    bottom: "auto",
                                                    top: A
                                                }), k = function() {
                                                    n.css("max-height", Math.floor((m - 20 - u) / l) * l)
                                                }, k(), n.css("max-height", r), "none" != y && n.css("max-height", y), m < e.outerHeight() +
                                                20 && k()) : (e.height("auto").css({
                                                top: "auto",
                                                bottom: A
                                            }), k = function() {
                                                n.css("max-height", Math.floor((g - b.scrollTop() - 20 - u) / l) * l)
                                            }, k(), n.css("max-height", r), "none" != y && n.css("max-height", y), g - b.scrollTop() - 20 < e.outerHeight() + 20 && k())
                                        }
                                        c("div.jqselect").css({
                                            zIndex: h.singleSelectzIndex - 1
                                        }).removeClass("opened focused");
                                        d.css({
                                            zIndex: h.singleSelectzIndex
                                        });
                                        e.is(":hidden") ? (c("div.jq-selectbox__dropdown:visible").hide(), e.show(), d.addClass("opened")) : (e.hide(), d.removeClass("opened"));
                                        f.filter(".selected").length &&
                                            (0 != n.innerHeight() / l % 2 && (l /= 2), n.scrollTop(n.scrollTop() + f.filter(".selected").position().top - n.innerHeight() / 2 + l));
                                        t.length && (t.val("").keyup(), w.hide(), t.focus().keyup(function() {
                                            var a = c(this).val();
                                            f.each(function() {
                                                c(this).html().match(RegExp(".*?" + a + ".*?", "i")) ? c(this).show() : c(this).hide()
                                            });
                                            1 > f.filter(":visible").length ? w.show() : w.hide()
                                        }));
                                        q(n);
                                        return !1
                                    }
                                });
                                f.hover(function() {
                                    c(this).siblings().removeClass("selected")
                                });
                                var B = f.filter(".selected").text();
                                f.filter(".selected").text();
                                f.filter(":not(.disabled):not(.optgroup)").click(function() {
                                    var b =
                                        c(this),
                                        n = b.text();
                                    if (B != n) {
                                        var f = b.index();
                                        b.is(".option") && (f -= b.prevAll(".optgroup").length);
                                        b.addClass("selected sel").siblings().removeClass("selected sel");
                                        g.prop("selected", !1).eq(f).prop("selected", !0);
                                        B = n;
                                        l.text(n);
                                        g.first().text() != n ? d.addClass("changed") : d.removeClass("changed");
                                        d.data("jqfs-class") && d.removeClass(d.data("jqfs-class"));
                                        d.data("jqfs-class", b.data("jqfs-class"));
                                        d.addClass(b.data("jqfs-class"));
                                        a.change()
                                    }
                                    t.length && (t.val("").keyup(), w.hide());
                                    e.hide();
                                    d.removeClass("opened")
                                });
                                e.mouseout(function() {
                                    c("li.sel", e).addClass("selected")
                                });
                                a.change(function() {
                                    l.text(g.filter(":selected").text());
                                    f.removeClass("selected sel").not(".optgroup").eq(a[0].selectedIndex).addClass("selected sel")
                                }).focus(function() {
                                    d.addClass("focused")
                                }).blur(function() {
                                    d.removeClass("focused")
                                }).bind("keydown keyup", function(b) {
                                    l.text(g.filter(":selected").text());
                                    f.removeClass("selected sel").not(".optgroup").eq(a[0].selectedIndex).addClass("selected sel");
                                    38 != b.which && 37 != b.which && 33 != b.which ||
                                        e.scrollTop(e.scrollTop() + f.filter(".selected").position().top);
                                    40 != b.which && 39 != b.which && 34 != b.which || e.scrollTop(e.scrollTop() + f.filter(".selected").position().top - e.innerHeight() + liHeight);
                                    13 == b.which && e.hide()
                                });
                                c(document).on("click", function(a) {
                                    c(a.target).parents().hasClass("jq-selectbox") || "OPTION" == a.target.nodeName || (t.length && t.val("").keyup(), e.hide().find("li.sel").addClass("selected"), d.removeClass("focused opened"))
                                })
                            }

                            function C() {
                                var k = new s,
                                    d = c("<div" + k.id + ' class="jq-select-multiple jqselect' +
                                        k.classes + '"' + k.title + ' style="display: inline-block; position: relative"></div>');
                                a.css({
                                    margin: 0,
                                    padding: 0
                                }).wrap('<div class="jq-selectbox-wrapper" style="display: inline-block; position: relative;"></div>').after(d);
                                var k = a.clone().appendTo("body"),
                                    h = k.width();
                                k.remove();
                                h != a.width() && a.parent().css("display", "block");
                                b();
                                d.append("<ul>" + v + "</ul>");
                                var l = c("ul", d).css({
                                        position: "relative",
                                        "overflow-x": "hidden",
                                        "-webkit-overflow-scrolling": "touch"
                                    }),
                                    m = c("li", d).attr("unselectable", "on").css({
                                        "-webkit-user-select": "none",
                                        "-moz-user-select": "none",
                                        "-ms-user-select": "none",
                                        "-o-user-select": "none",
                                        "user-select": "none",
                                        "white-space": "nowrap"
                                    }),
                                    k = a.attr("size"),
                                    h = l.outerHeight(),
                                    e = m.outerHeight();
                                void 0 !== k && 0 < k ? l.css({
                                    height: e * k
                                }) : l.css({
                                    height: 4 * e
                                });
                                h > d.height() && (l.css("overflowY", "scroll"), q(l), m.filter(".selected").length && l.scrollTop(l.scrollTop() + m.filter(".selected").position().top));
                                a.is(":disabled") ? (d.addClass("disabled"), g.each(function() {
                                        c(this).is(":selected") && m.eq(c(this).index()).addClass("selected")
                                    }),
                                    d.width(a.outerWidth()), d.width(d.width() - (d.outerWidth() - d.width())), a.css({
                                        position: "absolute",
                                        opacity: 0,
                                        height: d.outerHeight()
                                    })) : (d.width(a.outerWidth()), d.width(d.width() - (d.outerWidth() - d.width())), a.css({
                                    position: "absolute",
                                    opacity: 0,
                                    height: d.outerHeight()
                                }), m.filter(":not(.disabled):not(.optgroup)").click(function(b) {
                                    a.focus();
                                    d.removeClass("focused");
                                    var f = c(this);
                                    b.ctrlKey || b.metaKey || f.addClass("selected");
                                    b.shiftKey || f.addClass("first");
                                    b.ctrlKey || (b.metaKey || b.shiftKey) || f.siblings().removeClass("selected first");
                                    if (b.ctrlKey || b.metaKey) f.is(".selected") ? f.removeClass("selected first") : f.addClass("selected first"), f.siblings().removeClass("first");
                                    if (b.shiftKey) {
                                        var e = !1,
                                            h = !1;
                                        f.siblings().removeClass("selected").siblings(".first").addClass("selected");
                                        f.prevAll().each(function() {
                                            c(this).is(".first") && (e = !0)
                                        });
                                        f.nextAll().each(function() {
                                            c(this).is(".first") && (h = !0)
                                        });
                                        e && f.prevAll().each(function() {
                                            if (c(this).is(".selected")) return !1;
                                            c(this).not(".disabled, .optgroup").addClass("selected")
                                        });
                                        h && f.nextAll().each(function() {
                                            if (c(this).is(".selected")) return !1;
                                            c(this).not(".disabled, .optgroup").addClass("selected")
                                        });
                                        1 == m.filter(".selected").length && f.addClass("first")
                                    }
                                    g.prop("selected", !1);
                                    m.filter(".selected").each(function() {
                                        var a = c(this),
                                            b = a.index();
                                        a.is(".option") && (b -= a.prevAll(".optgroup").length);
                                        g.eq(b).prop("selected", !0)
                                    });
                                    a.change()
                                }), g.each(function(a) {
                                    c(this).data("optionIndex", a)
                                }), a.change(function() {
                                    m.removeClass("selected");
                                    var a = [];
                                    g.filter(":selected").each(function() {
                                        a.push(c(this).data("optionIndex"))
                                    });
                                    m.not(".optgroup").filter(function(b) {
                                        return -1 <
                                            c.inArray(b, a)
                                    }).addClass("selected")
                                }).focus(function() {
                                    d.addClass("focused")
                                }).blur(function() {
                                    d.removeClass("focused")
                                }), h > d.height() && a.keydown(function(a) {
                                    38 != a.which && 37 != a.which && 33 != a.which || l.scrollTop(l.scrollTop() + m.filter(".selected").position().top - e);
                                    40 != a.which && 39 != a.which && 34 != a.which || l.scrollTop(l.scrollTop() + m.filter(".selected:last").position().top - l.innerHeight() + 2 * e)
                                }))
                            }
                            var g = c("option", a),
                                v = "";
                            a.is("[multiple]") ? C() : p()
                        };
                    p();
                    a.on("refresh", function() {
                        a.parent().before(a).remove();
                        p()
                    });
                    a.on("adaptiveWidth", function() {
                        a.css({
                            position: "static"
                        });
                        a.next().width(a.outerWidth());
                        a.css({
                            position: "absolute"
                        })
                    });
                    c(window).on("resize", function() {
                        a.trigger("adaptiveWidth")
                    })
                }
            }) : a.is(":reset") && a.click(function() {
                setTimeout(function() {
                    a.closest(h.wrapper).find("input, select").trigger("refresh")
                }, 1)
            })
        })
    }
})(jQuery);



/* Owl Carousel */
! function(t, e, i, s) {
    function n(e, i) {
        this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this.drag = t.extend({}, p), this.state = t.extend({}, u), this.e = t.extend({}, g), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(n.Plugins, t.proxy(function(t, e) {
            this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(n.Pipe, t.proxy(function(e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function o(t) {
        if (t.touches !== s) return {
            x: t.touches[0].pageX,
            y: t.touches[0].pageY
        };
        if (t.touches === s) {
            if (t.pageX !== s) return {
                x: t.pageX,
                y: t.pageY
            };
            if (t.pageX === s) return {
                x: t.clientX,
                y: t.clientY
            }
        }
    }

    function r(t) {
        var e, s, n = i.createElement("div"),
            o = t;
        for (e in o)
            if (s = o[e], "undefined" != typeof n.style[s]) return n = null, [s, e];
        return [!1]
    }

    function a() {
        return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function h() {
        return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function l() {
        return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function c() {
        return "ontouchstart" in e || !!navigator.msMaxTouchPoints
    }

    function d() {
        return e.navigator.msPointerEnabled
    }
    var p, u, g;
    p = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, u = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, g = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, n.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, n.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, n.Plugins = {}, n.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = this._clones,
                e = this.$stage.children(".cloned");
            (e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t, e, i = this._clones,
                s = this._items,
                n = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
            for (t = 0, e = Math.abs(n / 2); e > t; t++) n > 0 ? (this.$stage.children().eq(s.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(s[i[i.length - 1]].clone().addClass("cloned")), i.push(s.length - 1 - (i.length - 1) / 2), this.$stage.prepend(s[i[i.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t, e, i, s = this.settings.rtl ? 1 : -1,
                n = (this.width() / this.settings.items).toFixed(3),
                o = 0;
            for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : n * t) * s, this._coordinates.push(o)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var e, i, s = (this.width() / this.settings.items).toFixed(3),
                n = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(n), n = {
                    width: this.settings.autoWidth ? "auto" : s - this.settings.margin
                }, n[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) {
                    return t > 1
                }).length > 0)
                for (e = 0, i = this._coordinates.length; i > e; e++) n.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(n);
            else this.$stage.children().css(n)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current && this.reset(this.$stage.children().index(t.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, s, n = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o,
                a = r + this.width() * n,
                h = [];
            for (i = 0, s = this._coordinates.length; s > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], n.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var e, i, n;
            if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(i).width(), e.length && 0 >= n) return this.preloadAutoWidthImages(e), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, n.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            s = -1,
            n = null;
        i ? (t.each(i, function(t) {
            e >= t && t > s && (s = Number(t))
        }), n = t.extend({}, this.options, i[s]), delete n.responsive, n.responsiveClass && this.$element.attr("class", function(t, e) {
            return e.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + s)) : n = t.extend({}, this.options), (null === this.settings || this._breakpoint !== s) && (this.trigger("change", {
            property: {
                name: "settings",
                value: n
            }
        }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, n.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, n.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, n.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, s = t.proxy(function(t) {
                return this[t]
            }, this._invalidated), n = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
        this._invalidated = {}
    }, n.prototype.width = function(t) {
        switch (t = t || n.Width.Default) {
            case n.Width.Inner:
            case n.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, n.prototype.refresh = function() {
        if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, n.prototype.eventsCall = function() {
        this.e._onDragStart = t.proxy(function(t) {
            this.onDragStart(t)
        }, this), this.e._onDragMove = t.proxy(function(t) {
            this.onDragMove(t)
        }, this), this.e._onDragEnd = t.proxy(function(t) {
            this.onDragEnd(t)
        }, this), this.e._onResize = t.proxy(function(t) {
            this.onResize(t)
        }, this), this.e._transitionEnd = t.proxy(function(t) {
            this.transitionEnd(t)
        }, this), this.e._preventClick = t.proxy(function(t) {
            this.preventClick(t)
        }, this)
    }, n.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, n.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, n.prototype.eventsRouter = function(t) {
        var e = t.type;
        "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
    }, n.prototype.internalEvents = function() {
        var i = (c(), d());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
    }, n.prototype.onDragStart = function(s) {
        var n, r, a, h;
        if (n = s.originalEvent || s || e.event, 3 === n.which || this.state.isTouch) return !1;
        if ("mousedown" === n.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = o(n).x, a = o(n).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) h = this.getTransformProperty(), this.drag.offsetX = h, this.animate(h), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = n.target || n.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this))
    }, n.prototype.onDragMove = function(t) {
        var i, n, r, a, h, l;
        this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, n = o(i).x, r = o(i).y, this.drag.currentX = n - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), h = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), l = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + l), h + l)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== s ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, n.prototype.onDragEnd = function(e) {
        var s, n, o;
        if (this.state.isTouch) {
            if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), s = this.drag.endTime - this.drag.startTime, n = Math.abs(this.drag.distance), (n > 3 || s > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
        }
    }, n.prototype.removeClick = function(i) {
        this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() {
            t(i).off("click.preventClick")
        }, 300)
    }, n.prototype.preventClick = function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
    }, n.prototype.getTransformProperty = function() {
        var t, i;
        return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12]
    }, n.prototype.closest = function(e) {
        var i = -1,
            s = 30,
            n = this.width(),
            o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function(t, r) {
            return e > r - s && r + s > e ? i = t : this.op(e, "<", r) && this.op(e, ">", o[t + 1] || r - n) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
        }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
    }, n.prototype.animate = function(e) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            "-webkit-transform": "translate3d(" + e + "px,0px, 0px)",
            "-moz-transform": "translate3d(" + e + "px,0px, 0px)",
            "-o-transform": "translate3d(" + e + "px,0px, 0px)",
            "-ms-transform": "translate3d(" + e + "px,0px, 0px)",
            transform: "translate3d(" + e + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: e + "px"
        }) : this.$stage.animate({
            left: e
        }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, n.prototype.current = function(t) {
        if (t === s) return this._current;
        if (0 === this._items.length) return s;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, n.prototype.invalidate = function(t) {
        this._invalidated[t] = !0
    }, n.prototype.reset = function(t) {
        t = this.normalize(t), t !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, n.prototype.normalize = function(e, i) {
        var n = i ? this._items.length : this._items.length + this._clones.length;
        return !t.isNumeric(e) || 1 > n ? s : e = this._clones.length ? (e % n + n) % n : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
    }, n.prototype.relative = function(t) {
        return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
    }, n.prototype.maximum = function(t) {
        var e, i, s, n = 0,
            o = this.settings;
        if (t) return this._items.length - 1;
        if (!o.loop && o.center) e = this._items.length - 1;
        else if (o.loop || o.center)
            if (o.loop || o.center) e = this._items.length + o.items;
            else {
                if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";
                for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                    (s = this.coordinates(n)) && !(s * revert >= i);) e = ++n
            }
        else e = this._items.length - o.items;
        return e
    }, n.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, n.prototype.items = function(t) {
        return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, n.prototype.mergers = function(t) {
        return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, n.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            n = i + this._items.length,
            o = function(t) {
                return t % 2 === 0 ? n + t / 2 : i - (t + 1) / 2
            };
        return e === s ? t.map(this._clones, function(t, e) {
            return o(e)
        }) : t.map(this._clones, function(t, i) {
            return t === e ? o(i) : null
        })
    }, n.prototype.speed = function(t) {
        return t !== s && (this._speed = t), this._speed
    }, n.prototype.coordinates = function(e) {
        var i = null;
        return e === s ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
    }, n.prototype.duration = function(t, e, i) {
        return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, n.prototype.to = function(i, s) {
        if (this.settings.loop) {
            var n = i - this.relative(this.current()),
                o = this.current(),
                r = this.current(),
                a = this.current() + n,
                h = 0 > r - a ? !0 : !1,
                l = this._clones.length + this._items.length;
            a < this.settings.items && h === !1 ? (o = r + this._items.length, this.reset(o)) : a >= l - this.settings.items && h === !0 && (o = r - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() {
                this.speed(this.duration(this.current(), o + n, s)), this.current(o + n), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), i, s)), this.current(i), this.update()
    }, n.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, n.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, n.prototype.transitionEnd = function(t) {
        return t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, n.prototype.viewport = function() {
        var s;
        if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth) s = e.innerWidth;
        else {
            if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
            s = i.documentElement.clientWidth
        }
        return s
    }, n.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, n.prototype.add = function(t, e) {
        e = e === s ? this._items.length : this.normalize(e, !0), this.trigger("add", {
            content: t,
            position: e
        }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, n.prototype.remove = function(t) {
        t = this.normalize(t, !0), t !== s && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, n.prototype.addTriggerableEvents = function() {
        var e = t.proxy(function(e, i) {
            return t.proxy(function(t) {
                t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
            }, this)
        }, this);
        t.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, t.proxy(function(t, i) {
            this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
        }, this))
    }, n.prototype.watchVisibility = function() {
        function i(t) {
            return t.offsetWidth > 0 && t.offsetHeight > 0
        }

        function s() {
            i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
        }
        i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(s, this), 500))
    }, n.prototype.preloadAutoWidthImages = function(e) {
        var i, s, n, o;
        i = 0, s = this, e.each(function(r, a) {
            n = t(a), o = new Image, o.onload = function() {
                i++, n.attr("src", o.src), n.css("opacity", 1), i >= e.length && (s.state.imagesLoaded = !0, s.initialize())
            }, o.src = n.attr("src") || n.attr("data-src") || n.attr("data-src-retina")
        })
    }, n.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var s in this._plugins) this._plugins[s].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, n.prototype.op = function(t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
            case "<":
                return s ? t > i : i > t;
            case ">":
                return s ? i > t : t > i;
            case ">=":
                return s ? i >= t : t >= i;
            case "<=":
                return s ? t >= i : i >= t
        }
    }, n.prototype.on = function(t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, n.prototype.off = function(t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, n.prototype.trigger = function(e, i, s) {
        var n = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            o = t.camelCase(t.grep(["on", e, s], function(t) {
                return t
            }).join("-").toLowerCase()),
            r = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, n, i));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(r)
        }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, r)), r
    }, n.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, n.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, n.prototype.browserSupport = function() {
        if (this.support3d = l(), this.support3d) {
            this.transformVendor = h();
            var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = e.orientation
    }, t.fn.owlCarousel = function(e) {
        return this.each(function() {
            t(this).data("owlCarousel") || t(this).data("owlCarousel", new n(this, e))
        })
    }, t.fn.owlCarousel.Constructor = n
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
    var i = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && -1 * s || 0, o = (e.property && e.property.value || this._core.current()) + n, r = this._core.clones().length, a = t.proxy(function(t, e) {
                            this.load(e)
                        }, this); n++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o++)), a)
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        lazyLoad: !1
    }, i.prototype.load = function(i) {
        var s = this._core.$stage.children().eq(i),
            n = s && s.find(".owl-lazy");
        !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function(i, s) {
            var n, o = t(s),
                r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
            this._core.trigger("load", {
                element: o,
                url: r
            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                o.css("opacity", 1), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this)).attr("src", r) : (n = new Image, n.onload = t.proxy(function() {
                o.css({
                    "background-image": "url(" + r + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this), n.src = r)
        }, this)), this._loaded.push(s.get(0)))
    }, i.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document),
function(t) {
    var e = function(i) {
        this._core = i, this._handlers = {
            "initialized.owl.carousel": t.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(t, e, i) {
    var s = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": t.proxy(function(t) {
                this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": t.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                var i = t(e.content).find(".owl-video");
                i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    s.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, s.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
            s = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
            n = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (s = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), s[3].indexOf("youtu") > -1) i = "youtube";
        else {
            if (!(s[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            i = "vimeo"
        }
        s = s[6], this._videos[r] = {
            type: i,
            id: s,
            width: n,
            height: o
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, s.prototype.thumbnail = function(e, i) {
        var s, n, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            a = e.find("img"),
            h = "src",
            l = "",
            c = this._core.settings,
            d = function(t) {
                n = '<div class="owl-video-play-icon"></div>', s = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + h + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after(n)
            };
        return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (h = "data-src", l = "owl-lazy"), a.length ? (d(a.attr(h)), a.remove(), !1) : void("youtube" === i.type ? (o = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(o)) : "vimeo" === i.type && t.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                o = t[0].thumbnail_large, d(o)
            }
        }))
    }, s.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, s.prototype.play = function(e) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var i, s, n = t(e.target || e.srcElement),
            o = n.closest("." + this._core.settings.itemClass),
            r = this._videos[o.attr("data-video")],
            a = r.width || "100%",
            h = r.height || this._core.$stage.height();
        "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + h + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, s = t('<div style="height:' + h + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), n.after(s)
    }, s.prototype.isInFullScreen = function() {
        var s = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return s && t(s).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), s && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== e.orientation ? (this._core.state.orientation = e.orientation, !1) : !0
    }, s.prototype.destroy = function() {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                this.swapping = "translated" == t.type
            }, this),
            "translate.owl.carousel": t.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    n.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, n.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                s = this.core.$stage.children().eq(this.previous),
                n = this.core.$stage.children().eq(this.next),
                o = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), o && n.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
        }
    }, n.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i) {
    var s = function(e) {
        this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, i) {
                this.play(e, i)
            }, this),
            "stop.owl.autoplay": t.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    s.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, s.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
    }, s.prototype.play = function() {
        return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, s.prototype.stop = function() {
        e.clearInterval(this.interval)
    }, s.prototype.pause = function() {
        e.clearInterval(this.interval)
    }, s.prototype.destroy = function() {
        var t, i;
        e.clearInterval(this.interval);
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
}(window.Zepto || window.jQuery, window, document),
function(t) {
    "use strict";
    var e = function(i) {
        this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": t.proxy(function(e) {
                this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) {
                this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "change.owl.carousel": t.proxy(function(t) {
                if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var e = this._core.current(),
                        i = this._core.maximum(),
                        s = this._core.minimum();
                    t.data = t.property.value > i ? e >= i ? s : i : t.property.value < s ? i : t.property.value
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": t.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, e.prototype.initialize = function() {
        var e, i, s = this._core.settings;
        s.dotsData || (this._templates = [t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]), s.navContainer && s.dotsContainer || (this._controls.$container = t("<div>").addClass(s.controlsClass).appendTo(this.$element)), this._controls.$indicators = s.dotsContainer ? t(s.dotsContainer) : t("<div>").hide().addClass(s.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
            var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(i, s.dotsSpeed)
        }, this)), e = s.navContainer ? t(s.navContainer) : t("<div>").addClass(s.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + s.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).hide().prependTo(e).on("click", t.proxy(function() {
            this.prev(s.navSpeed)
        }, this)), this._controls.$next.addClass(s.navClass[1]).html(s.navText[1]).hide().appendTo(e).on("click", t.proxy(function() {
            this.next(s.navSpeed)
        }, this));
        for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
    }, e.prototype.destroy = function() {
        var t, e, i, s;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.prototype.update = function() {
        var t, e, i, s = this._core.settings,
            n = this._core.clones().length / 2,
            o = n + this._core.items().length,
            r = s.center || s.autoWidth || s.dotData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
            for (this._pages = [], t = n, e = 0, i = 0; o > t; t++)(e >= r || 0 === e) && (this._pages.push({
                start: t - n,
                end: t - n + r - 1
            }), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
    }, e.prototype.draw = function() {
        var e, i, s = "",
            n = this._core.settings,
            o = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!n.nav || n.loop || n.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(n.nav), this._controls.$next.toggle(n.nav), n.dots) {
            if (e = this._pages.length - this._controls.$indicators.children().length, n.dotData && 0 !== e) {
                for (i = 0; i < this._controls.$indicators.children().length; i++) s += this._templates[this._core.relative(i)];
                this._controls.$indicators.html(s)
            } else e > 0 ? (s = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(s)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(n.dots)
    }, e.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
        }
    }, e.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, function(t) {
            return t.start <= e && t.end >= e
        }).pop()
    }, e.prototype.getPosition = function(e) {
        var i, s, n = this._core.settings;
        return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
    }, e.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, e.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, e.prototype.to = function(e, i, s) {
        var n;
        s ? t.proxy(this._overrides.to, this._core)(e, i) : (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i))
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
    "use strict";
    var i = function(s) {
        this._core = s, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function() {
                "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[i] = e.content
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
            var t = e.location.hash.substring(1),
                i = this._core.$stage.children(),
                s = this._hashes[t] && i.index(this._hashes[t]) || 0;
            return t ? void this._core.to(s, !1, !0) : !1
        }, this))
    };
    i.Defaults = {
        URLhashListener: !1
    }, i.prototype.destroy = function() {
        var i, s;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document);


/*! fancyBox v3 fancyapps.com | fancyapps.com/fancybox/#license */
! function(e, t, i, n) {
    "use strict";
    var o = i(e),
        a = i(t),
        r = i("html"),
        s = i.fancybox = function() {
            s.open.apply(this, arguments)
        },
        l = s.isTouch = t.createTouch !== n || e.ontouchstart !== n,
        c = function(e) {
            return e && e.hasOwnProperty && e instanceof i
        },
        d = function(e) {
            return e && "string" === i.type(e)
        },
        p = function(e) {
            return d(e) && e.indexOf("%") > 0
        },
        h = function(e, t) {
            var i = parseFloat(e, 10) || 0;
            return t && p(e) && (i = s.getViewport()[t] / 100 * i), Math.ceil(i)
        },
        f = function(e, t) {
            return h(e, t) + "px"
        },
        u = Date.now || function() {
            return +new Date
        },
        g = function(e) {
            var t = d(e) ? i(e) : e;
            if (t && t.length) {
                t.removeClass("fancybox-wrap").stop(!0).trigger("onReset").hide().unbind();
                try {
                    t.find("iframe").unbind().attr("src", l ? "" : "//about:blank"), setTimeout(function() {
                        if (t.empty().remove(), s.lock && !s.coming && !s.current) {
                            var e, n;
                            i(".fancybox-margin").removeClass("fancybox-margin"), e = o.scrollTop(), n = o.scrollLeft(), r.removeClass("fancybox-lock"), s.lock.remove(), s.lock = null, o.scrollTop(e).scrollLeft(n)
                        }
                    }, 150)
                } catch (n) {}
            }
        };
    i.extend(s, {
        version: "3.0.0",
        defaults: {
            theme: "default",
            padding: 15,
            margin: [30, 55, 30, 55],
            loop: !0,
            arrows: !0,
            closeBtn: !0,
            expander: !l,
            caption: {
                type: "outside"
            },
            overlay: {
                closeClick: !0,
                speedIn: 0,
                speedOut: 250,
                showEarly: !0,
                css: {}
            },
            helpers: {},
            width: 800,
            height: 450,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 99999,
            maxHeight: 99999,
            aspectRatio: !1,
            fitToView: !0,
            autoHeight: !0,
            autoWidth: !0,
            autoResize: !0,
            autoCenter: !l,
            topRatio: .5,
            leftRatio: .5,
            openEffect: "elastic",
            openSpeed: 350,
            openEasing: "easeOutQuad",
            closeEffect: "elastic",
            closeSpeed: 350,
            closeEasing: "easeOutQuad",
            nextEffect: "elastic",
            nextSpeed: 350,
            nextEasing: "easeOutQuad",
            prevEffect: "elastic",
            prevSpeed: 350,
            prevEasing: "easeOutQuad",
            autoPlay: !1,
            playSpeed: 3e3,
            onCancel: i.noop,
            beforeLoad: i.noop,
            afterLoad: i.noop,
            beforeShow: i.noop,
            afterShow: i.noop,
            beforeClose: i.noop,
            afterClose: i.noop,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-inner"></div></div>',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true"></iframe>',
                error: '<p class="fancybox-error">{{ERROR}}</p>',
                closeBtn: '<a title="{{CLOSE}}" class="fancybox-close" href="javascript:;"></a>',
                next: '<a title="{{NEXT}}" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="{{PREV}}" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            locale: "en",
            locales: {
                en: {
                    CLOSE: "Close",
                    NEXT: "Next",
                    PREV: "Previous",
                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                    EXPAND: "Display actual size",
                    SHRINK: "Fit to the viewport",
                    PLAY_START: "Start slideshow",
                    PLAY_STOP: "Pause slideshow"
                },
                de: {
                    CLOSE: "Schliessen",
                    NEXT: "Vorwärts",
                    PREV: "Zurück",
                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                    EXPAND: "",
                    SHRINK: "",
                    PLAY_START: "",
                    PLAY_STOP: ""
                }
            },
            index: 0,
            content: null,
            href: null,
            wrapCSS: "",
            modal: !1,
            locked: !0,
            preload: 3,
            mouseWheel: !0,
            scrolling: "auto",
            scrollOutside: !0
        },
        current: null,
        coming: null,
        group: [],
        index: 0,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        isMaximized: !1,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        helpers: {},
        open: function(e, t) {
            e && !1 !== s.close(!0) && (i.isPlainObject(t) || (t = {}), s.opts = i.extend(!0, {}, s.defaults, t), s.populate(e), s.group.length && s._start(s.opts.index))
        },
        populate: function(e) {
            var t = [];
            i.isArray(e) || (e = [e]), i.each(e, function(o, a) {
                var r, p, h, f, u, g = i.extend(!0, {}, s.opts);
                if (i.isPlainObject(a)) r = a;
                else if (d(a)) r = {
                    href: a
                };
                else {
                    if (!(c(a) || "object" === i.type(a) && a.nodeType)) return;
                    p = i(a), r = i(p).get(0), r.href || (r = {
                        href: a
                    }), r = i.extend({
                        href: p.data("fancybox-href") || p.attr("href") || r.href,
                        title: p.data("fancybox-title") || p.attr("title") || r.title,
                        type: p.data("fancybox-type"),
                        element: p
                    }, p.data("fancybox-options"))
                }
                r.type || !r.content && !r.href || (r.type = r.content ? "html" : s.guessType(p, r.href)), h = r.type || s.opts.type, ("image" === h || "swf" === h) && (g.autoWidth = g.autoHeight = !1, g.scrolling = "visible"), "image" === h && (g.aspectRatio = !0), "iframe" === h && (g.autoWidth = !1, g.scrolling = l ? "scroll" : "visible"), e.length < 2 && (g.margin = 30), r = i.extend(!0, {}, g, r), f = r.margin, u = r.padding, "number" === i.type(f) && (r.margin = [f, f, f, f]), "number" === i.type(u) && (r.padding = [u, u, u, u]), r.modal && i.extend(!0, r, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    overlay: {
                        closeClick: !1
                    }
                }), r.autoSize !== n && (r.autoWidth = r.autoHeight = !!r.autoSize), "auto" === r.width && (r.autoWidth = !0), "auto" === r.height && (r.autoHeight = !0), t.push(r)
            }), s.group = s.group.concat(t)
        },
        cancel: function() {
            var e = s.coming;
            e && !1 !== s.trigger("onCancel") && (s.hideLoading(), s.ajaxLoad && s.ajaxLoad.abort(), s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), e.wrap && g(e.wrap), s.ajaxLoad = s.imgPreload = s.coming = null, s.current || s._afterZoomOut(e))
        },
        close: function(e) {
            e && "object" === i.type(e) && e.preventDefault(), s.cancel(), s.isActive && !s.coming && !1 !== s.trigger("beforeClose") && (s.unbind(), s.isClosing = !0, s.lock && s.lock.css("overflow", "hidden"), s.isOpen && e !== !0 ? (s.isOpen = s.isOpened = !1, s.transitions.close()) : s._afterZoomOut())
        },
        prev: function(e) {
            var t = s.current;
            t && s.jumpto(t.index - 1, d(e) ? e : t.direction.prev)
        },
        next: function(e) {
            var t = s.current;
            t && s.jumpto(t.index + 1, d(e) ? e : t.direction.next)
        },
        jumpto: function(e, t) {
            var i = s.current;
            s.coming && s.coming.index === e || (s.cancel(), i.index == e ? t = null : t || (t = i.direction[e > i.index ? "next" : "prev"]), s.direction = t, s._start(e))
        }
    }), i.extend(s, {
        guessType: function(e, t) {
            var i = e && e.prop("class") ? e.prop("class").match(/fancybox\.(\w+)/) : 0,
                n = !1;
            return i ? i[1] : (d(t) ? t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i) ? n = "image" : t.match(/\.(swf)((\?|#).*)?$/i) ? n = "swf" : "#" === t.charAt(0) && (n = "inline") : d(e) && (n = "html"), n)
        },
        trigger: function(e, t) {
            var n, o = t || s.coming || s.current;
            if (o) {
                if (i.isFunction(o[e]) && (n = o[e].apply(o, Array.prototype.slice.call(arguments, 1))), n === !1 || "afterClose" === e && s.isActive) return !1;
                o.helpers && i.each(o.helpers, function(t, n) {
                    var a, r = s.helpers[t];
                    n && r && i.isFunction(r[e]) && (a = i.extend(!0, {}, r.defaults, n), r.opts = a, r[e](a, o))
                }), i.event.trigger(e)
            }
        },
        reposition: function(e, t) {
            var i, n = t || s.current,
                o = n && n.wrap;
            s.isOpen && o && (i = s._getPosition(n), e === !1 || e && "scroll" === e.type ? o.stop(!0).animate(i, 200).css("overflow", "visible") : o.css(i))
        },
        update: function(e) {
            var t, n = e && e.type,
                o = (u(), s.current);
            if (o && s.isOpen) {
                if ("scroll" === n) {
                    if (s.wrap.outerHeight(!0) > s.getViewport().h) return;
                    return s.didUpdate && clearTimeout(s.didUpdate), void(s.didUpdate = setTimeout(function() {
                        s.reposition(e), s.didUpdate = null
                    }, 50))
                }
                s.lock && s.lock.css("overflow", "hidden"), s._setDimension(), s.reposition(e), s.lock && s.lock.css("overflow", "auto"), "float" === o.caption.type && (t = s.getViewport().w - (s.wrap.outerWidth(!0) - s.inner.width()), o.caption.wrap.css("width", t).css("marginLeft", -1 * (.5 * t - .5 * s.inner.width()))), o.expander && (o.canShrink ? i(".fancybox-expand").show().attr("title", o.locales[o.locale].SHRINK) : o.canExpand ? i(".fancybox-expand").show().attr("title", o.locales[o.locale].EXPAND) : i(".fancybox-expand").hide()), s.trigger("onUpdate")
            }
        },
        toggle: function(e) {
            var t = s.current;
            t && s.isOpen && (s.current.fitToView = "boolean" === i.type(e) ? e : !s.current.fitToView, s.update(!0))
        },
        hideLoading: function() {
            i("#fancybox-loading").remove()
        },
        showLoading: function() {
            var e, t;
            s.hideLoading(), e = i('<div id="fancybox-loading"></div>').click(s.cancel).appendTo("body"), s.defaults.fixed || (t = s.getViewport(), e.css({
                position: "absolute",
                top: .5 * t.h + t.y,
                left: .5 * t.w + t.x
            }))
        },
        getViewport: function() {
            var t;
            return t = s.lock ? {
                x: s.lock.scrollLeft(),
                y: s.lock.scrollTop(),
                w: s.lock[0].clientWidth,
                h: s.lock[0].clientHeight
            } : {
                x: o.scrollLeft(),
                y: o.scrollTop(),
                w: l && e.innerWidth ? e.innerWidth : o.width(),
                h: l && e.innerHeight ? e.innerHeight : o.height()
            }
        },
        unbind: function() {
            c(s.wrap) && s.wrap.unbind(".fb"), c(s.inner) && s.inner.unbind(".fb"), a.unbind(".fb"), o.unbind(".fb")
        },
        rebind: function() {
            var e, t = s.current;
            s.unbind(), t && s.isOpen && (o.bind("orientationchange.fb" + (l ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), s.update), e = t.keys, e && a.bind("keydown.fb", function(o) {
                var a = o.which || o.keyCode,
                    r = o.target || o.srcElement;
                return 27 === a && s.coming ? !1 : void(o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || r && (r.type || i(r).is("[contenteditable]")) || i.each(e, function(e, r) {
                    return r[a] !== n ? (o.preventDefault(), t.group.length > 1 && s[e](r[a]), !1) : i.inArray(a, r) > -1 ? (o.preventDefault(), "play" === e ? s.slideshow.toggle() : s[e](), !1) : void 0
                }))
            }), s.lastScroll = u(), t.mouseWheel && s.group.length > 1 && s.wrap.bind("DOMMouseScroll.fb mousewheel.fb MozMousePixelScroll.fb", function(e) {
                var t = e.originalEvent,
                    i = t.target || 0,
                    n = t.wheelDelta || t.detail || 0,
                    o = t.wheelDeltaX || 0,
                    a = t.wheelDeltaY || 0,
                    r = u();
                if ((!i || !i.style || i.style.overflow && "hidden" === i.style.overflow || !(i.clientWidth && i.scrollWidth > i.clientWidth || i.clientHeight && i.scrollHeight > i.clientHeight)) && !(0 === n || s.current && s.current.canShrink)) {
                    if (t.stopPropagation(), s.lastScroll && r - s.lastScroll < 80) return void(s.lastScroll = r);
                    s.lastScroll = r, t.axis && (t.axis === t.HORIZONTAL_AXIS ? o = -1 * n : t.axis === t.VERTICAL_AXIS && (a = -1 * n)), 0 === o ? a > 0 ? s.prev("down") : s.next("up") : o > 0 ? s.prev("right") : s.next("left")
                }
            }), s.touch.init())
        },
        rebuild: function() {
            var e = s.current;
            e.wrap.find(".fancybox-nav, .fancybox-close, .fancybox-expand").remove(), e.arrows && s.group.length > 1 && ((e.loop || e.index > 0) && i(s._translate(e.tpl.prev)).appendTo(s.inner).bind("click.fb", s.prev), (e.loop || e.index < s.group.length - 1) && i(s._translate(e.tpl.next)).appendTo(s.inner).bind("click.fb", s.next)), e.closeBtn && i(s._translate(e.tpl.closeBtn)).appendTo(s.wrap).bind("click.fb", s.close), e.expander && "image" === e.type && (i('<a title="Expand image" class="fancybox-expand" href="javascript:;"></a>').appendTo(s.inner).bind("click.fb", s.toggle), !e.canShrink && !e.canExpand)
        },
        _start: function(e) {
            var t, n;
            return s.opts.loop && (0 > e && (e = s.group.length + e % s.group.length), e %= s.group.length), (t = s.group[e]) ? (t = i.extend(!0, {}, s.opts, t), t.group = s.group, t.index = e, s.coming = t, !1 === s.trigger("beforeLoad") ? void(s.coming = null) : (s.isActive = !0, s._build(), a.bind("keydown.loading", function(e) {
                27 === (e.which || e.keyCode) && (a.unbind(".loading"), e.preventDefault(), s.cancel())
            }), t.overlay && t.overlay.showEarly && s.overlay.open(t.overlay), n = t.type, void("image" === n ? s._loadImage() : "ajax" === n ? s._loadAjax() : "iframe" === n ? s._loadIframe() : "inline" === n ? s._loadInline() : "html" === n || "swf" === n ? s._afterLoad() : s._error()))) : !1
        },
        _build: function() {
            var e, t, n, l, c = s.coming,
                d = c.caption.type;
            c.wrap = e = i('<div class="fancybox-wrap"></div>').appendTo(c.parent || "body").addClass("fancybox-" + c.theme), c.inner = t = i('<div class="fancybox-inner"></div>').appendTo(e), c["outside" === d || "float" === d ? "inner" : "wrap"].addClass("fancybox-skin fancybox-" + c.theme + "-skin"), c.locked && c.overlay && s.defaults.fixed && (s.lock || (s.lock = i('<div id="fancybox-lock"></div>').appendTo(e.parent())), s.lock.unbind().append(e), c.overlay.closeClick && s.lock.click(function(e) {
                i(e.target).is(s.lock) && s.close()
            }), (a.height() > o.height() || "scroll" === r.css("overflow-y")) && (i("*:visible").filter(function() {
                return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && "fancybox-lock" !== i(this).attr("id")
            }).addClass("fancybox-margin"), r.addClass("fancybox-margin")), n = o.scrollTop(), l = o.scrollLeft(), r.addClass("fancybox-lock"), o.scrollTop(n).scrollLeft(l)), s.trigger("onReady")
        },
        _error: function(e) {
            s.coming && (i.extend(s.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                closeBtn: !0,
                minWidth: 0,
                minHeight: 0,
                padding: [15, 15, 15, 15],
                scrolling: "visible",
                hasError: e,
                content: s._translate(s.coming.tpl.error)
            }), s._afterLoad())
        },
        _loadImage: function() {
            var e = s.imgPreload = new Image;
            e.onload = function() {
                this.onload = this.onerror = null, i.extend(s.coming, {
                    width: this.width,
                    height: this.height,
                    content: i(this).addClass("fancybox-image")
                }), s._afterLoad()
            }, e.onerror = function() {
                this.onload = this.onerror = null, s._error("image")
            }, e.src = s.coming.href, (e.complete !== !0 || e.width < 1) && s.showLoading()
        },
        _loadAjax: function() {
            var e, t, n = s.coming,
                o = n.href;
            e = o.split(/\s+/, 2), o = e.shift(), t = e.shift(), s.showLoading(), s.ajaxLoad = i.ajax(i.extend({}, n.ajax, {
                url: n.href,
                error: function(e, t) {
                    s.coming && "abort" !== t ? s._error("ajax", e) : s.hideLoading()
                },
                success: function(e, o) {
                    "success" === o && (t && (e = i("<div>").html(e).find(t)), n.content = e, s._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var e, t = s.coming;
            t.content = e = i(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", l ? "auto" : t.iframe.scrolling), t.iframe.preload && (s.showLoading(), s._setDimension(t), t.wrap.addClass("fancybox-tmp"), e.one("load.fb", function() {
                t.iframe.preload && (i(this).data("ready", 1), i(this).bind("load.fb", s.update), s._afterLoad())
            })), e.attr("src", t.href).appendTo(t.inner), t.iframe.preload ? 1 !== e.data("ready") && s.showLoading() : s._afterLoad()
        },
        _loadInline: function() {
            var e = s.coming,
                t = e.href;
            e.content = i(d(t) ? t.replace(/.*(?=#[^\s]+$)/, "") : t), e.content.length ? s._afterLoad() : s._error()
        },
        _preloadImages: function() {
            var e, t, i = s.group,
                n = s.current,
                o = i.length,
                a = n.preload ? Math.min(n.preload, o - 1) : 0;
            for (t = 1; a >= t; t += 1) e = i[(n.index + t) % o], e && "image" === e.type && e.href && ((new Image).src = e.href)
        },
        _afterLoad: function() {
            var e = s.coming,
                t = s.current;
            return a.unbind(".loading"), e && s.isActive !== !1 && !1 !== s.trigger("afterLoad", e, t) ? (i.extend(s, {
                wrap: e.wrap.addClass("fancybox-type-" + e.type + " fancybox-" + (l ? "mobile" : "desktop") + " fancybox-" + e.theme + "-" + (l ? "mobile" : "desktop") + " " + e.wrapCSS),
                inner: e.inner,
                current: e,
                previous: t
            }), s._prepare(), s.trigger("beforeShow", e, t), s.isOpen = !1, s.coming = null, s._setDimension(), s.hideLoading(), e.overlay && !s.overlay.el && s.overlay.open(e.overlay), void s.transitions.open()) : (s.hideLoading(), e && e.wrap && g(e.wrap), t || s._afterZoomOut(e), void(s.coming = null))
        },
        _prepare: function() {
            var e, t = s.current,
                n = t.content || "",
                o = t.wrap,
                a = t.inner,
                r = t.margin,
                l = t.padding,
                p = t.href,
                h = t.type,
                u = (t.scrolling, t.caption),
                g = t.title,
                m = u.type,
                y = "fancybox-placeholder",
                v = "fancybox-display";
            "iframe" !== h && c(n) && n.length && (n.data(y) || n.data(v, n.css("display")).data(y, i('<div class="' + y + '"></div>').insertAfter(n).hide()), n = n.show().detach(), t.wrap.bind("onReset", function() {
                i(this).find(n).length && n.css("display", n.data(v)).replaceAll(n.data(y)).data(y, !1).data(v, !1)
            })), "swf" === h && (n = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + p + '"></param>', e = "", i.each(t.swf, function(t, i) {
                n += '<param name="' + t + '" value="' + i + '"></param>', e += " " + t + '="' + i + '"'
            }), n += '<embed src="' + p + '" type="application/x-shockwave-flash" width="100%" height="100%"' + e + "></embed></object>"), c(n) && n.parent().is(t.inner) || (t.inner.append(n), t.content = t.inner.children(":last")), i.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                r[e] && o.css("margin" + t, f(r[e])), l[e] && (("Bottom" !== t || "outside" !== m) && o.css("padding" + t, f(l[e])), ("outside" === m || "float" === m) && (a.css("border" + t + "Width", f(l[e])), ("Top" === t || "Left" === t) && a.css("margin" + t, f(-1 * l[e]))))
            }), i.isFunction(g) && (g = g.call(t.element, t)), d(g) && "" !== i.trim(g) && (t.caption.wrap = i('<div class="fancybox-title fancybox-title-' + m + '-wrap">' + g + "</div>").appendTo(t["over" === m ? "inner" : "wrap"]), "float" === m && t.caption.wrap.width(s.getViewport().w - (s.wrap.outerWidth(!0) - s.inner.width())).wrapInner("<div></div>"))
        },
        _setDimension: function(e) {
            var t, i, n, o, a, r, l, d, u, g, m, y, v, w, x, b = s.getViewport(),
                _ = e || s.current,
                k = _.wrap,
                T = _.inner,
                C = _.width,
                O = _.height,
                W = _.minWidth,
                L = _.minHeight,
                E = _.maxWidth,
                S = _.maxHeight,
                H = _.margin,
                M = _.scrollOutside ? _.scrollbarWidth : 0,
                H = _.margin,
                A = _.padding,
                R = _.scrolling,
                P = 1;
            if (R = R.split(","), t = R[0], i = R[1] || t, _.inner.css("overflow-x", "yes" === t ? "scroll" : "no" === t ? "hidden" : t).css("overflow-y", "yes" === i ? "scroll" : "no" === i ? "hidden" : i), o = H[1] + H[3] + A[1] + A[3], n = H[0] + H[2] + A[0] + A[2], W = h(p(W) ? h(W, "w") - o : W), E = h(p(E) ? h(E, "w") - o : E), L = h(p(L) ? h(L, "h") - n : L), S = h(p(S) ? h(S, "h") - n : S), a = h(p(C) ? h(C, "w") - o : C), r = h(p(O) ? h(O, "h") - n : O), _.fitToView && (E = Math.min(E, h("100%", "w") - o), S = Math.min(S, h("100%", "h") - n)), g = b.w, m = b.h, "iframe" === _.type) {
                if (d = _.content, k.removeClass("fancybox-tmp"), (_.autoWidth || _.autoHeight) && d && 1 === d.data("ready")) try {
                    d[0].contentWindow && d[0].contentWindow.document.location && (u = d.contents().find("body"), T.addClass("fancybox-tmp"), T.width(screen.width - o).height(99999), M && u.css("overflow-x", "hidden"), _.autoWidth && (a = u.outerWidth(!0)), _.autoHeight && (r = u.outerHeight(!0)), T.removeClass("fancybox-tmp"))
                } catch (I) {}
            } else(_.autoWidth || _.autoHeight) && "image" !== _.type && "swf" !== _.type && (T.addClass("fancybox-tmp"), T.width(_.autoWidth ? "auto" : E), T.height(_.autoHeight ? "auto" : S), _.autoWidth && (a = T[0].scrollWidth || T.width()), _.autoHeight && (r = T[0].scrollHeight || T.height()), T.removeClass("fancybox-tmp"));
            if (C = a, O = r, l = a / r, !_.autoResize) return k.css({
                width: f(C),
                height: "auto"
            }), void T.css({
                width: f(C),
                height: f(O)
            });
            if (_.aspectRatio ? (C > E && (C = E, O = C / l), O > S && (O = S, C = O * l), W > C && (C = W, O = C / l), L > O && (O = L, C = O * l)) : (C = Math.max(W, Math.min(C, E)), _.autoHeight && "iframe" !== _.type && (T.width(C), r = O = T[0].scrollHeight), O = Math.max(L, Math.min(O, S))), k.css({
                    width: f(C),
                    height: "auto"
                }), T.css({
                    width: f(C),
                    height: f(O)
                }), y = h(k.outerWidth(!0)), v = h(k.outerHeight(!0)), _.fitToView)
                if (_.aspectRatio)
                    for (;
                        (y > g || v > m) && C > W && O > L && !(P++ > 30);) O = Math.max(L, Math.min(S, O - 10)), C = h(O * l), W > C && (C = W, O = h(C / l)), C > E && (C = E, O = h(C / l)), k.css({
                        width: f(C)
                    }), T.css({
                        width: f(C),
                        height: f(O)
                    }), y = h(k.outerWidth(!0)), v = h(k.outerHeight(!0));
                else C = Math.max(W, Math.min(C, C - (y - g))), O = Math.max(L, Math.min(O, O - (v - m)));
            M && "auto" === t && (O < T[0].scrollHeight || c(_.content) && _.content[0] && O < _.content[0].offsetHeight) && E > C + o + M && (C += M), k.css({
                width: C
            }), T.css({
                width: f(C),
                height: f(O)
            }), y = h(k.outerWidth(!0)), v = h(k.outerHeight(!0)), w = (y > g || v > m) && C > W && O > L, x = (g > y || m > v) && (_.aspectRatio ? E > C && S > O && a > C && r > O : (E > C || S > O) && (a > C || r > O)), _.canShrink = w, _.canExpand = x, !d && _.autoHeight && O > L && S > O && !x && T.height("auto")
        },
        _getPosition: function(e) {
            var t = e || s.current,
                i = t.wrap,
                n = s.getViewport(),
                o = {},
                a = n.y,
                r = n.x;
            return o = {
                top: f(Math.max(a, a + (n.h - i.outerHeight(!0)) * t.topRatio)),
                left: f(Math.max(r, r + (n.w - i.outerWidth(!0)) * t.leftRatio)),
                width: f(i.width()),
                height: f(i.height())
            }
        },
        _afterZoomIn: function() {
            var e = s.current;
            e && (s.lock && s.lock.css("overflow", "auto"), s.isOpen = s.isOpened = !0, s.rebuild(), s.rebind(), e.caption && e.caption.wrap && e.caption.wrap.show().css({
                visibility: "visible",
                opacity: 0,
                left: 0
            }).animate({
                opacity: 1
            }, "fast"), s.update(), s.wrap.css("overflow", "visible").addClass("fancybox-open").focus(), s[s.wrap.hasClass("fancybox-skin") ? "wrap" : "inner"].addClass("fancybox-" + e.theme + "-skin-open"), e.caption && e.caption.wrap && e.caption.wrap.show().css("left", 0).animate({
                opacity: 1
            }, "fast"), e.margin[2] > 0 && i('<div class="fancybox-spacer"></div>').css("height", f(e.margin[2] - 2)).appendTo(s.wrap), s.trigger("afterShow"), s._preloadImages(), e.autoPlay && !s.slideshow.isActive && s.slideshow.start())
        },
        _afterZoomOut: function(e) {
            var t = function() {
                g(".fancybox-wrap")
            };
            s.hideLoading(), e = e || s.current, e && e.wrap && e.wrap.hide(), i.extend(s, {
                group: [],
                opts: {},
                coming: null,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                inner: null
            }), s.trigger("afterClose", e), s.coming || s.current || (e.overlay ? s.overlay.close(e.overlay, t) : t())
        },
        _translate: function(e) {
            var t = s.coming || s.current,
                i = t.locales[t.locale];
            return e.replace(/\{\{(\w+)\}\}/g, function(e, t) {
                var o = i[t];
                return o === n ? e : o
            })
        }
    }), s.transitions = {
        _getOrig: function(e) {
            var t = e || s.current,
                i = t.wrap,
                n = t.element,
                a = t.orig,
                r = s.getViewport(),
                l = {},
                d = 50,
                p = 50;
            return !a && n && n.is(":visible") && (a = n.find("img:first:visible"), a.length || (a = n)), !a && t.group[0].element && (a = t.group[0].element.find("img:visible:first")), c(a) && a.is(":visible") ? (l = a.offset(), a.is("img") && (d = a.outerWidth(), p = a.outerHeight()), s.lock && (l.top -= o.scrollTop(), l.left -= o.scrollLeft())) : (l.top = r.y + (r.h - p) * t.topRatio, l.left = r.x + (r.w - d) * t.leftRatio), l = {
                top: f(l.top - .5 * (i.outerHeight(!0) - i.height())),
                left: f(l.left - .5 * (i.outerWidth(!0) - i.width())),
                width: f(d),
                height: f(p)
            }
        },
        _getCenter: function(e) {
            var t = e || s.current,
                i = t.wrap,
                n = s.getViewport(),
                o = {},
                a = n.y,
                r = n.x;
            return o = {
                top: f(Math.max(a, a + (n.h - i.outerHeight(!0)) * t.topRatio)),
                left: f(Math.max(r, r + (n.w - i.outerWidth(!0)) * t.leftRatio)),
                width: f(i.width()),
                height: f(i.height())
            }
        },
        _prepare: function(e, t) {
            var i = e || s.current,
                n = i.wrap,
                o = i.inner;
            n.height(n.height()), o.css({
                width: 100 * o.width() / n.width() + "%",
                height: Math.floor(100 * o.height() / n.height() * 100) / 100 + "%"
            }), t === !0 && n.find(".fancybox-title, .fancybox-spacer, .fancybox-close, .fancybox-nav").remove(), o.css("overflow", "hidden")
        },
        fade: function(e, t) {
            var n = this._getCenter(e),
                o = {
                    opacity: 0
                };
            return "open" === t || "changeIn" === t ? [i.extend(n, o), {
                opacity: 1
            }] : [{}, o]
        },
        drop: function(e, t) {
            var n = i.extend(this._getCenter(e), {
                    opacity: 1
                }),
                o = i.extend({}, n, {
                    opacity: 0,
                    top: f(Math.max(s.getViewport().y - e.margin[0], h(n.top) - 200))
                });
            return "open" === t || "changeIn" === t ? [o, n] : [{}, o]
        },
        elastic: function(e, t) {
            var n, o, a, r = e.wrap,
                l = e.margin,
                c = s.getViewport(),
                d = s.direction,
                p = this._getCenter(e),
                f = i.extend({}, p),
                u = i.extend({}, p);
            return "open" === t ? f = this._getOrig(e) : "close" === t ? (f = {}, u = this._getOrig(e)) : d && (n = "up" === d || "down" === d ? "top" : "left", o = "up" === d || "left" === d ? 200 : -200, "changeIn" === t ? (a = h(f[n]) + o, a = "left" === d ? Math.min(a, c.x + c.w - l[3] - r.outerWidth() - 1) : "right" === d ? Math.max(a, c.x - l[1]) : "up" === d ? Math.min(a, c.y + c.h - l[0] - r.outerHeight() - 1) : Math.max(a, c.y - l[2]), f[n] = a) : (a = h(r.css(n)) - o, f = {}, a = "left" === d ? Math.max(a, c.x - l[3]) : "right" === d ? Math.min(a, c.x + c.w - l[1] - r.outerWidth() - 1) : "up" === d ? Math.max(a, c.y - l[0]) : Math.min(a, c.y + c.h - l[2] - r.outerHeight() - 1), u[n] = a)), "open" === t || "changeIn" === t ? (f.opacity = 0, u.opacity = 1) : u.opacity = 0, [f, u]
        },
        open: function() {
            {
                var e, t, n, o, a, r = s.current,
                    l = s.previous;
                s.direction
            }
            l && l.wrap.stop(!0).removeClass("fancybox-opened"), s.isOpened ? (e = r.nextEffect, n = r.nextSpeed, o = r.nextEasing, a = "changeIn") : (e = r.openEffect, n = r.openSpeed, o = r.openEasing, a = "open"), "none" === e ? s._afterZoomIn() : (t = this[e](r, a), "elastic" === e && this._prepare(r), r.wrap.css(t[0]), r.wrap.animate(t[1], n, o, s._afterZoomIn)), l && (s.isOpened && "none" !== l.prevEffect ? (l.wrap.stop(!0).removeClass("fancybox-opened"), t = this[l.prevEffect](l, "changeOut"), this._prepare(l, !0), l.wrap.animate(t[1], l.prevSpeed, l.prevEasing, function() {
                g(l.wrap)
            })) : g(i(".fancybox-wrap").not(r.wrap)))
        },
        close: function() {
            var e, t = s.current,
                i = t.wrap.stop(!0).removeClass("fancybox-opened"),
                n = t.closeEffect;
            return "none" === n ? s._afterZoomOut() : (this._prepare(t, !0), e = this[n](t, "close"), void i.addClass("fancybox-animating").animate(e[1], t.closeSpeed, t.closeEasing, s._afterZoomOut))
        }
    }, s.slideshow = {
        _clear: function() {
            this._timer && clearTimeout(this._timer)
        },
        _set: function() {
            this._clear(), s.current && this.isActive && (this._timer = setTimeout(s.next, this._speed))
        },
        _timer: null,
        _speed: null,
        isActive: !1,
        start: function(e) {
            var t = s.current;
            t && (t.loop || t.index < t.group.length - 1) && (this.stop(), this.isActive = !0, this._speed = e || t.playSpeed, a.bind({
                "beforeLoad.player": i.proxy(this._clear, this),
                "onUpdate.player": i.proxy(this._set, this),
                "onCancel.player beforeClose.player": i.proxy(this.stop, this)
            }), this._set(), s.trigger("onPlayStart"))
        },
        stop: function() {
            this._clear(), a.unbind(".player"), this.isActive = !1, this._timer = this._speed = null, s.trigger("onPlayEnd")
        },
        toggle: function() {
            this.isActive ? this.stop() : this.start.apply(this, arguments)
        }
    }, s.overlay = {
        el: null,
        theme: "",
        open: function(e) {
            var t, n, a = this,
                r = this.el,
                l = s.defaults.fixed;
            e = i.extend({}, s.defaults.overlay, e), r ? r.stop(!0).removeAttr("style").unbind(".overlay") : r = i('<div class="fancybox-overlay' + (l ? " fancybox-overlay-fixed" : "") + '"></div>').appendTo(e.parent || "body"), e.closeClick && r.bind("click.overlay", function() {
                return s.lastTouch && u() - s.lastTouch < 300 ? !1 : (s.isActive ? s.close() : a.close(), !1)
            }), n = e.theme || (s.coming ? s.coming.theme : "default"), n !== this.theme && r.removeClass("fancybox-" + this.theme + "-overlay"), this.theme = n, r.addClass("fancybox-" + n + "-overlay").css(e.css), t = r.css("opacity"), !this.el && 1 > t && e.speedIn && r.css({
                opacity: 0,
                filter: "alpha(opacity=0)"
            }).fadeTo(e.speedIn, t), this.el = r, l || (o.bind("resize.overlay", i.proxy(this.update, this)), this.update())
        },
        close: function(e, t) {
            e = i.extend({}, s.defaults.overlay, e), this.el && this.el.stop(!0).fadeOut(e.speedOut, function() {
                o.unbind("resize.overlay"), i(".fancybox-overlay").remove(), s.overlay.el = null, i.isFunction(t) && t()
            })
        },
        update: function() {
            this.el.css({
                width: "100%",
                height: "100%"
            }), this.el.width(a.width()).height(a.height())
        }
    }, s.touch = {
        startX: 0,
        wrapX: 0,
        dx: 0,
        isMoving: !1,
        _start: function(e) {
            var t = (s.current, e.originalEvent.touches ? e.originalEvent.touches[0] : e),
                n = u();
            if (s.isOpen && !s.wrap.is(":animated") && (i(e.target).is(s.inner) || i(e.target).parent().is(s.inner))) {
                if (s.lastTouch && n - s.lastTouch < 300) return e.preventDefault(), s.lastTouch = n, this._cancel(!0), s.toggle(), !1;
                s.lastTouch = n, s.wrap && s.wrap.outerWidth() > s.getViewport().w || (e.preventDefault(), t && s.wrap && s.wrap.outerWidth() < s.getViewport().w && (this.startX = t.pageX, this.wrapX = s.wrap.position().left, this.isMoving = !0, s.inner.bind("touchmove.fb", i.proxy(this._move, this)).one("touchend.fb touchcancel.fb", i.proxy(this._cancel, this))))
            }
        },
        _move: function(t) {
            var i = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
                n = this.startX - i.pageX;
            this.isMoving && s.isOpen && (this.dx = n, s.current.wrap.outerWidth(!0) <= e.innerWidth && (Math.abs(n) >= 50 ? (t.preventDefault(), this.last = 0, this._cancel(!0), n > 0 ? s.next("left") : s.prev("right")) : Math.abs(n) > 3 && (t.preventDefault(), this.last = 0, s.wrap.css("left", this.wrapX - n))))
        },
        _clear: function() {
            this.startX = this.wrapX = this.dx = 0, this.isMoving = !1
        },
        _cancel: function() {
            s.inner && s.inner.unbind("touchmove.fb"), s.isOpen && Math.abs(this.dx) > 3 && s.reposition(!1), this._clear()
        },
        init: function() {
            s.inner && s.touch && (this._cancel(!0), s.inner.bind("touchstart.fb", i.proxy(this._start, this)))
        }
    }, i.easing.easeOutQuad || (i.easing.easeOutQuad = function(e, t, i, n, o) {
        return -n * (t /= o) * (t - 2) + i
    }), a.ready(function() {
        var t, a, l, c;
        i.scrollbarWidth === n && (i.scrollbarWidth = function() {
            var e = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                t = e.children(),
                n = t.innerWidth() - t.height(99).innerWidth();
            return e.remove(), n
        }), i.support.fixedPosition === n && (i.support.fixedPosition = function() {
            var e = i('<div style="position:fixed;top:20px;padding:0;margin:0;border:0;"></div>').appendTo("body"),
                t = "fixed" === e.css("position") && (e[0].offsetTop > 18 && e[0].offsetTop < 22 || 15 === e[0].offsetTop);
            return e.remove(), t
        }()), i.extend(s.defaults, {
            scrollbarWidth: i.scrollbarWidth(),
            fixed: i.support.fixedPosition,
            parent: i("body")
        }), l = o.scrollTop(), c = o.scrollLeft(), t = i(e).width(), r.addClass("fancybox-lock-test"), a = i(e).width(), r.removeClass("fancybox-lock-test"), o.scrollTop(l).scrollLeft(c), s.lockMargin = a - t, i("<style type='text/css'>.fancybox-margin{margin-right:" + s.lockMargin + "px;}</style>").appendTo("head")
    }), i.fn.fancybox = function(e) {
        var t = this,
            n = this.length ? this.selector : !1,
            o = n && n.indexOf("()") < 0 && !(e && e.live === !1),
            r = function(a) {
                var r = o ? i(n) : t,
                    l = i(this).blur(),
                    c = e.groupAttr || "data-fancybox-group",
                    d = l.attr(c),
                    p = this.rel;
                !d && p && "nofollow" !== p && (c = "rel", d = p), d && (l = r.filter("[" + c + '="' + d + '"]'), e.index = l.index(this)), l.length && (a.preventDefault(), s.open(l.get(), e))
            };
        return e = e || {}, o ? a.undelegate(n, "click.fb-start").delegate(n + ":not('.fancybox-close,.fancybox-nav,.fancybox-wrap')", "click.fb-start", r) : t.unbind("click.fb-start").bind("click.fb-start", r), this
    }
}(window, document, jQuery);
! function(t) {
    var i = t.fancybox;
    i.helpers.thumbs = {
        defaults: {
            width: 75,
            height: 50,
            position: "bottom",
            source: function() {}
        },
        list: null,
        items: null,
        count: 0,
        _create: function(i) {
            var e, s, h = this.opts;
            e = "", t.each(i.group, function(t) {
                e += '<li><a data-index="' + t + '" href="javascript:jQuery.fancybox.jumpto(' + t + ');"></a></li>'
            }), this.list = s = t("<ul>" + e + "</ul>"), this.items = s.children(), this.count = this.items.length, this.wrap = t('<div id="fancybox-thumbs" class="' + h.position + '"></div>').append(s).wrapInner('<div class="inner" />').wrapInner('<div class="outer" />').appendTo("body"), t('<a class="fancybox-thumb-prev" href="javascript:;"><span></span></a>').click(t.proxy(this.prev, this)).prependTo(this.wrap), t('<a class="fancybox-thumb-next" href="javascript:;"><span></span></a>').click(t.proxy(this.next, this)).appendTo(this.wrap), s.find("a").width(h.width).height(h.height), this.width = this.items.outerWidth(!0), this.height = this.items.outerHeight(!0), s.width(this.width * this.count).height(this.height)
        },
        _loadPage: function() {
            var e, s, h = this,
                a = function(t) {
                    h._setThumb(e, t)
                };
            this.list && (e = this.list.find("a").slice(this.start, this.end + 1).not(".ready").first(), e && e.length && (e.addClass("ready"), s = i.group[e.data("index")], href = this._getThumb(s, a), "string" === t.type(href) ? a(href) : href || this._loadPage()))
        },
        _getThumb: function(i, e) {
            var s, h;
            return s = this.opts.source(i, e), !s && i.element && (s = t(i.element).find("img").attr("src")), !s && (h = i.href.match(/(youtube\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i)) && (s = "http://img.youtube.com/vi/" + h[3] + "/mqdefault.jpg"), !s && (h = i.href.match(/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/)) ? (t.getJSON("http://www.vimeo.com/api/v2/video/" + h[1] + ".json?callback=?", {
                format: "json"
            }, function(t) {
                e(t[0].thumbnail_small)
            }), !0) : (!s && "image" === i.type && i.href && (s = i.href), s)
        },
        _setThumb: function(i, e) {
            var s = this,
                h = function() {
                    s._loadPage()
                };
            this.list && t("<img />").load(function() {
                var e, a, n = this.width,
                    o = this.height,
                    r = i.width(),
                    l = i.height();
                return s.wrap && n && o ? (e = n / r, a = o / l, e >= 1 && a >= 1 && (e > a ? (n /= a, o = l) : (n = r, o /= e)), t(this).css({
                    width: Math.floor(n),
                    height: Math.floor(o),
                    "margin-top": Math.floor(.3 * l - .3 * o),
                    "margin-left": Math.floor(.5 * r - .5 * n)
                }).appendTo(i), void h()) : void h()
            }).error(h).attr("src", e)
        },
        _move: function(e) {
            var s, h, a, n = 0,
                o = 400;
            if (this.wrap) {
                if (s = Math.ceil(this.count / this.itemsMin), void 0 === e && (e = Math.floor(i.current.index / this.itemsMin) + 1), t(".fancybox-thumb-prev, .fancybox-thumb-next").hide(), 2 > s) return t.extend(this, {
                    pages: s,
                    page: 1,
                    start: 0,
                    end: this.count
                }), this.list.stop(!0).css({
                    "margin-left": "auto",
                    "margin-right": "auto",
                    left: 0
                }), void this._loadPage();
                1 >= e ? e = 1 : t(".fancybox-thumb-prev").show(), e >= s ? e = s : t(".fancybox-thumb-next").show(), h = (e - 1) * this.itemsMin, a = h + this.itemsMax - 1, n = this.width * this.itemsMin * (e - 1) * -1, this.left !== n && (t.extend(this, {
                    pages: s,
                    page: e,
                    start: h,
                    end: a,
                    left: n
                }), this._loadPage(), this.list.stop(!0).animate({
                    "margin-left": n + "px"
                }, o))
            }
        },
        prev: function() {
            this._move(this.page - 1)
        },
        next: function() {
            this._move(this.page + 1)
        },
        afterLoad: function(t, i) {
            var e = "bottom" === t.position ? 2 : 0;
            return i.group.length < 2 ? void(i.helpers.thumbs = !1) : (this.wrap || this._create(i), void(t.margin !== !1 && (i.margin[e] = Math.max(this.height + 40, i.margin[e]))))
        },
        beforeShow: function(t, i) {
            this.items && (this.items.removeClass("fancybox-thumb-active"), this.current = this.list.find("a[data-index='" + i.index + "']").parent().addClass("fancybox-thumb-active"))
        },
        onUpdate: function() {
            this.wrap && (this.wrap.width(i.getViewport().w), this.view = this.list.parent().innerWidth(), this.itemsMin = Math.floor(this.view / this.width), this.itemsMax = Math.ceil(this.view / this.width), this._move())
        },
        beforeClose: function() {
            this.wrap && this.wrap.stop(!0).remove(), t.extend(this, {
                pages: 0,
                page: 0,
                start: 0,
                end: 0,
                count: 0,
                items: null,
                left: null,
                wrap: null,
                list: null
            })
        }
    }
}(jQuery);

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2014 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.0
*/
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    var b, c = navigator.userAgent,
        d = /iphone/i.test(c),
        e = /chrome/i.test(c),
        f = /android/i.test(c);
    a.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, a.fn.extend({
        caret: function(a, b) {
            var c;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select())
            })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
                begin: a,
                end: b
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(c, g) {
            var h, i, j, k, l, m, n, o;
            if (!c && this.length > 0) {
                h = a(this[0]);
                var p = h.data(a.mask.dataName);
                return p ? p() : void 0
            }
            return g = a.extend({
                autoclear: a.mask.autoclear,
                placeholder: a.mask.placeholder,
                completed: null
            }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function(a, b) {
                "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null)
            }), this.trigger("unmask").each(function() {
                function h() {
                    if (g.completed) {
                        for (var a = l; m >= a; a++)
                            if (j[a] && C[a] === p(a)) return;
                        g.completed.call(B)
                    }
                }

                function p(a) {
                    return g.placeholder.charAt(a < g.placeholder.length ? a : 0)
                }

                function q(a) {
                    for (; ++a < n && !j[a];);
                    return a
                }

                function r(a) {
                    for (; --a >= 0 && !j[a];);
                    return a
                }

                function s(a, b) {
                    var c, d;
                    if (!(0 > a)) {
                        for (c = a, d = q(b); n > c; c++)
                            if (j[c]) {
                                if (!(n > d && j[c].test(C[d]))) break;
                                C[c] = C[d], C[d] = p(d), d = q(d)
                            }
                        z(), B.caret(Math.max(l, a))
                    }
                }

                function t(a) {
                    var b, c, d, e;
                    for (b = a, c = p(a); n > b; b++)
                        if (j[b]) {
                            if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
                            c = e
                        }
                }

                function u() {
                    var a = B.val(),
                        b = B.caret();
                    if (a.length < o.length) {
                        for (A(!0); b.begin > 0 && !j[b.begin - 1];) b.begin--;
                        if (0 === b.begin)
                            for (; b.begin < l && !j[b.begin];) b.begin++;
                        B.caret(b.begin, b.begin)
                    } else {
                        for (A(!0); b.begin < n && !j[b.begin];) b.begin++;
                        B.caret(b.begin, b.begin)
                    }
                    h()
                }

                function v() {
                    A(), B.val() != E && B.change()
                }

                function w(a) {
                    if (!B.prop("readonly")) {
                        var b, c, e, f = a.which || a.keyCode;
                        o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault())
                    }
                }

                function x(b) {
                    if (!B.prop("readonly")) {
                        var c, d, e, g = b.which || b.keyCode,
                            i = B.caret();
                        if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                            if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                                if (t(c), C[c] = d, z(), e = q(c), f) {
                                    var k = function() {
                                        a.proxy(a.fn.caret, B, e)()
                                    };
                                    setTimeout(k, 0)
                                } else B.caret(e);
                                i.begin <= m && h()
                            }
                            b.preventDefault()
                        }
                    }
                }

                function y(a, b) {
                    var c;
                    for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c))
                }

                function z() {
                    B.val(C.join(""))
                }

                function A(a) {
                    var b, c, d, e = B.val(),
                        f = -1;
                    for (b = 0, d = 0; n > b; b++)
                        if (j[b]) {
                            for (C[b] = p(b); d++ < e.length;)
                                if (c = e.charAt(d - 1), j[b].test(c)) {
                                    C[b] = c, f = b;
                                    break
                                }
                            if (d > e.length) {
                                y(b + 1, n);
                                break
                            }
                        } else C[b] === e.charAt(d) && d++, k > b && (f = b);
                    return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l
                }
                var B = a(this),
                    C = a.map(c.split(""), function(a, b) {
                        return "?" != a ? i[a] ? p(b) : a : void 0
                    }),
                    D = C.join(""),
                    E = B.val();
                B.data(a.mask.dataName, function() {
                    return a.map(C, function(a, b) {
                        return j[b] && a != p(b) ? a : null
                    }).join("")
                }), B.one("unmask", function() {
                    B.off(".mask").removeData(a.mask.dataName)
                }).on("focus.mask", function() {
                    if (!B.prop("readonly")) {
                        clearTimeout(b);
                        var a;
                        E = B.val(), a = A(), b = setTimeout(function() {
                            z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a)
                        }, 10)
                    }
                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function() {
                    B.prop("readonly") || setTimeout(function() {
                        var a = A(!0);
                        B.caret(a), h()
                    }, 0)
                }), e && f && B.off("input.mask").on("input.mask", u), A()
            })
        }
    })
});


/* ------------------------------------------------------------------------
	SeaInside Screen Control
	Author: SeaInside (Mopuc) (https://fl.ru/users/MopuC/)
	Version: 1.0
------------------------------------------------------------------------- */
function isVisibleOnPage(elem) {
    var docViewTop = $(window).scrollTop();
    var elemTop = $(elem).offset().top;
    var windowHeight = $(window).height();
    return (elemTop <= docViewTop + 100);
}
$.fn.seainside_screen_control = function(offset2) {
    if (!offset2) offset2 = 0;
    return this.each(function() {
        var $si_this = $(this);
        $(this).data("offset-top", $(this).offset().top);
        $(this).data("animation-finish", 0);
        $(window).bind("scroll load", function() {
            if (($(window).scrollTop() + $(window).height() - offset2 > $si_this.data("offset-top")) && $si_this.data("animation-finish") == 0) {
                $si_this.trigger("start-animation");
                $si_this.data("animation-finish", 1)
            }
        })
    })
};


/* ------------------------------------------------------------------------
	SeaInside Jump Links
	Author: SeaInside (Mopuc) (https://fl.ru/users/MopuC/)
	Version: 1.0
	Date: 19/07/15
------------------------------------------------------------------------- */
$.fn.SIJump = function(e) {
    var t = $.extend({
        offset: 0,
        speed: 1e3,
        beforeScroll: $.noop,
        afterScroll: $.noop
    }, e);
    return this.each(function() {
        var e = $(this);
        e.click(function() {
            t.beforeScroll(e);
            var o, r = e.attr("href"),
                f = e.closest("section, article, header, footer");
            switch (r) {
                case "#":
                case "/":
                    o = 0;
                    break;
                case "#prev":
                    o = f.prev().offset().top;
                    break;
                case "#next":
                    o = f.next().offset().top;
                    break;
                default:
                    o = $(r).offset().top
            }
            return e.data("offset") && (o += e.data("offset")), $("body, html").animate({
                scrollTop: o
            }, t.speed), setTimeout(function() {
                t.afterScroll(e)
            }, t.speed), !1
        })
    })
};


/* ------------------------------------------------------------------------
	SeaInside Modals
	Author: SeaInside (Mopuc) (https://fl.ru/users/MopuC/)
	Version: 1.5
	Date: 19/07/15
------------------------------------------------------------------------- */
var SIModals = {
    settings: {
        escClose: !0,
        overlayClose: !0,
        fadeSpeed: 500,
        switchSpeed: 500
    },
    activeModals: 0,
    beforeOpen: $.noop,
    afterOpen: $.noop,
    beforeClose: $.noop,
    afterClose: $.noop,
    init: function() {
        if (!is_mobile()) {
            var s = /MSIE [6-8]/i.test(navigator.userAgent) ? $(window).width() + 17 : window.innerWidth;
            $(SIModals.settings.resizeElements).width(s), $(window).on("resize", function() {
                s = /MSIE [6-8]/i.test(navigator.userAgent) ? $(window).width() + 17 : window.innerWidth, $(SIModals.settings.resizeElements).width(s)
            })
        }
        this.settings.overlayClose && $(".si-modals-wrapper, .si-modals-wrapper-2").click(function(s) {
            return s.target == this ? (SIModals.closeModal(), !1) : void 0
        }), this.settings.escClose && $(document).keyup(function(s) {
            27 == s.keyCode && SIModals.activeModals > 0 && SIModals.closeModal()
        })
    },
    attachModal: function(s, e, a, o, i, d) {
        $(document).on("click", s, function() {
            if (SIModals.beforeOpen(), void 0 != i && 0 != i && i.call($(this)), void 0 != o && 0 != o && (e = o.call($(this))), $(window).trigger("SIModals.modalOpen"), 0 == SIModals.activeModals) {
                if ($("html").addClass("si-lock"), $(".si-overlay, .si-modals-wrapper, .si-modals-wrapper " + e).fadeIn(SIModals.settings.fadeSpeed), $(".si-modals-wrapper " + e).addClass("si-visible"), "undefined" != a && 0 != a)
                    for (var s in a) $(e + " " + s).val($(this).data(a[s]));
                $(window).trigger("SIModals.modalsOpen")
            } else {
                var d = $(e).clone();
                if ($(".si-modals-wrapper-2").append(d), "undefined" != a && 0 != a)
                    for (var s in a) d.find(s).val($(this).data(a[s]));
                $.fn.SIInit(), $(".si-overlay-2, .si-modals-wrapper-2, .si-modals-wrapper-2 " + e).fadeIn(SIModals.settings.fadeSpeed), $(".si-modals-wrapper-2 " + e).addClass("si-visible")
            }
            return SIModals.afterOpen(), SIModals.activeModals++, !1
        })
    },
    attachClose: function(s) {
        $(document).on("click", s, function() {
            return SIModals.closeModal(), !1
        })
    },
    closeModal: function() {
        return SIModals.beforeClose(), this.activeModals > 1 ? ($(".si-modals-wrapper-2 .si-modal").removeClass("si-visible"), $(".si-overlay-2, .si-modals-wrapper-2, .si-modals-wrapper-2 .si-modal").fadeOut(this.settings.fadeSpeed), setTimeout(function() {
            $(".si-modals-wrapper-2").empty()
        }, this.settings.fadeSpeed), setTimeout(function() {
            $(window).trigger("SIModals.modalClose")
        }, SIModals.settings.fadeSpeed)) : ($(".si-modals-wrapper .si-modal, .si-modals-wrapper .si-success-modal").removeClass("si-visible"), $(".si-overlay, .si-modals-wrapper, .si-modals-wrapper .si-modal, .si-modals-wrapper .si-success-modal").fadeOut(this.settings.fadeSpeed), setTimeout(function() {
            $("html").removeClass("si-lock"), $(".si-modal").css({
                opacity: 1,
                left: "auto",
                right: "auto"
            })
        }, this.settings.fadeSpeed), setTimeout(function() {
            $(window).trigger("SIModals.modalClose"), $(window).trigger("SIModals.modalsClose")
        }, SIModals.settings.fadeSpeed)), this.activeModals--, this.activeModals < 0 && (this.activeModals = 0), SIModals.afterClose(), !1
    }
};


/* ------------------------------------------------------------------------
	SeaInside Forms
	Author: SeaInside (Mopuc) (https://fl.ru/users/MopuC/)
	Version: 2.1
	Date: 19/07/15
------------------------------------------------------------------------- */
! function(e) {
    e.fn.SIForms = function(s) {
        function a(s, a, i, d) {
            e(d).data("success-modal") ? success_modal = e(d).data("success-modal") : success_modal = ".si-success-modal-1";
            var l = jQuery.parseJSON(s);
            if (e(d).data("replace-success")) return window[e(d).data("replace-success")](l, d), !1;
            if (1 == l.success) {
                if (SIModals.activeModals > 1) {
                    e(".si-modals-wrapper-2 .si-modal").removeClass("si-visible"), e(".si-modals-wrapper-2 .si-modal").fadeOut(SIModals.settings.fadeSpeed);
                    var o = e(success_modal).clone();
                    e(".si-modals-wrapper-2").append(o), setTimeout(function() {
                        e(".si-modals-wrapper-2 " + success_modal).fadeIn(SIModals.settings.fadeSpeed).addClass("si-visible")
                    }, SIModals.settings.fadeSpeed + 10)
                } else e(".si-modal").fadeOut(SIModals.settings.fadeSpeed).removeClass("si-visible"), setTimeout(function() {
                    e(".si-modals-wrapper, .si-overlay, " + success_modal).fadeIn(SIModals.settings.fadeSpeed), e(success_modal).addClass("si-visible")
                }, SIModals.settings.fadeSpeed + 10);
                d.clearForm(), e(d).find(".submit").removeClass("disabled"), t.sendSuccess ? t.sendSuccess(l, d) : t.sendExtra(l, d)
            } else e(d).find(".submit").removeClass("disabled"), console.log(l.text), SIPageMessages.show(l.text);
            return !1
        }
        var t = e.extend({
            validateFields: {
                client_name: "Укажите Ваше имя",
                client_phone: "Укажите Ваш телефон",
                client_mail: "Укажите Ваш e-mail",
                client_message: "Укажите Ваш вопрос или комментарий"
            },
            placeholderFocus: !1,
            upload: !1,
            sendSuccess: !1,
            formExtra: e.noop,
            checkExtra: e.noop,
            sendExtra: e.noop
        }, s);
        return e(".client-phone").mask("+375 (99) 999-99-99", {
            placeholder: "_"
        }).dblclick(function() {
            return e(this).focus(), !1
        }), e("input[placeholder], textarea[placeholder]").placeholder(), t.placeholderFocus && !/MSIE [6-9]/i.test(navigator.userAgent) && e("input, textarea").each(function() {
            e(this).data("placeholder", e(this).attr("placeholder")).focus(function() {
                e(this).attr("placeholder", "")
            }).blur(function() {
                e(this).attr("placeholder", e(this).data("placeholder"))
            })
        }), e("label").click(function() {
            var s = e(this).data("for");
            return "form" == e(this).parent()[0].tagName.toLowerCase() ? e(this).parent("form").find('[name="' + s + '"]').focus() : e(this).parentsUntil("form").find('[name="' + s + '"]').focus(), !1
        }), t.formExtra(), this.each(function() {
            var s = e(this),
                i = s.find(".submit"),
                d = t.validateFields;
            s.submit(function() {
                var e = !0;
                for (key in d)
                    if (d.hasOwnProperty(key)) {
                        var l = s.find('[name="' + key + '"]');
                        l.size() > 0 && "" == l.val() && (l.si_show_message(d[key]), e = !1)
                    }
                return my_send = t.checkExtra(s), 0 == e || 0 == my_send || i.hasClass("disabled") ? !1 : (i.addClass("disabled"), s.ajaxSubmit({
                    success: a
                }),document.location.href = 'http://oknoff.by/index_otpr.html', !1);
			
		   e(".si-modals-wrapper-2 .si-modal").removeClass("si-visible"), e(".si-modals-wrapper-2 .si-modal").fadeOut(SIModals.settings.fadeSpeed);
            })
        })
		
    }
}(jQuery);


/* ------------------------------------------------------------------------

/* ------------------------------------------------------------------------
	SeaInside Input Messages
	Author: SeaInside (Mopuc) (https://fl.ru/users/MopuC/)
	Version: 1.0
------------------------------------------------------------------------- */
$(document).on('click focus', '.si-error', function() {
    $(this).removeClass('si-error');
    $(this).prop('placeholder', $(this).data('old-placeholder'));
});
$.fn.si_show_message = function(text) {
    return this.each(function() {
        var old_placeholder = ($(this).data('old-placeholder') && $(this).data('old-placeholder') != '') ? $(this).data('old-placeholder') : $(this).prop('placeholder');
        $(this).addClass('si-error');
        $(this).data('old-placeholder', old_placeholder);
        $(this).prop('placeholder', text);
    })
};


/* ------------------------------------------------------------------------
	SeaInside Page Message
	Author: SeaInside (Mopuc) (https://fl.ru/users/MopuC/)
	Version: 1.0
	Date: 02/09/15
------------------------------------------------------------------------- */

var SIPageMessages = {
    close_timeout: "",
    init: function() {
        0 == $(".si-page-message").size() && ($("body").append('<div class="si-page-message-overlay"></div>'), $("body").append('<div class="si-page-message"><div class="si-page-message-inner"><div class="centered"><div class="si-page-message-text"></div></div></div></div>')), $(".si-page-message-overlay").click(function() {
            SIPageMessages.close()
        })
    },
    show: function(e, s) {
        $(".si-page-message").removeClass("hidden"), $(".si-page-message-text").html(e), $(".si-page-message, .si-page-message-inner, .si-page-message-overlay").addClass("show"), (void 0 == s || 0 == s) && (s = 3e3), SIPageMessages.close(s)
    },
    close: function(e) {
        return (void 0 == e || 0 == e) && (e = 0), $(".si-page-message").hasClass("hidden") ? !1 : (clearInterval(SIPageMessages.close_timeout), void(SIPageMessages.close_timeout = setTimeout(function() {
            $(".si-page-message-inner").removeClass("show"), setTimeout(function() {
                $(".si-page-message, .si-page-message-overlay").removeClass("show"), $(".si-page-message").addClass("hidden")
            }, 500)
        }, e)))
    }
};