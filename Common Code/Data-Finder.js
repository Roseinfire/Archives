const DataTypes = ["image/png","image/jpeg"]
class DataFinder { 
    constructor() {
        this.SavedDataURLs = []
        this.take = function( text, types, sendErrors ) {
            const containers = ["'"," ",`"`,"`"]
            const cons = this
            var position = 0
            var Result = []
            var Errors = []
            for(var i = 0; i < text.length; i++) {
                var pie = ""
                var code = "data:"
                for(var e = 0; e < code.length; e++) { pie += text[i+e] }
                if(pie == code) {   position = i; define(i + code.length) }
                }
            function define(e) {
                var type = ""
                var i = e
                for(i = e; i < text.length; i++) {
                    if(text[i] == ";") { break }
                    else { type += text[i] }
                    }
                take(type, i) 
                }
            function take(t, e) {
                var lock = { type: false, key: false }
                for(var i = 0; i < types.length; i++) {
                    if(t == types[i]) { lock.type = true; break }
                    }
                var code = ";base64,"
                var res = ""
                for(var i = 0; i < code.length; i++) {
                    res += text[e+i]
                    }
                if(res == code) { lock.key = true }
                if(lock.key && lock.type) { 
                    Result.push({ type: t, pos: position, data: copy() }) 
                    }
                else {  /* check failed */
                    Errors.push({ pos: position, data: copy() })
                    }
                }
            function copy() {
                var res = ""
                for(var i = position; i < text.length; i++) {
                    for(var e = 0; e < containers.length; e++) {
                        if(text[i] == containers[e]) { return res }
                        }
                    res += text[i]
                    }
                return res
                }
            if(sendErrors) { return Errors }
            else { return Result }
            }
        this.hide = function(from, types)  {
            const cons = this
            cons.SavedDataURLs = []
            var urls = this.take(from, types)
            var result =  ""
            var pos = 0
            var i = 0; for(i = 0; i < from.length; i++) {
                if(urls.length && i == urls[arrPos].pos) { hide(urls[arrPos]); 
                    if(pos < urls.length-1) { pos++ } 
                    }
                else { result += from[i] }
                }
            function hide(data) {
                result += ("data:" + data.type + "_#" + pos + ":")
                cons.SavedDataURLs.push(data.data)
                i += (data.data.length-1)
                }
            return result
            }
        this.back = function(text, types) {
            const cons = this
            var datas = []
            var places = cons.take(text, types, true)
            for(var i = 0; i < places.length; i++) {
                var ans = define(places[i].pos)
                if(ans) { datas.push(ans) }
                }
            function define(e) {
                var type = ""
                var id = ""
                var code = false
                var i = e; for(i = i + "data:".length; i < text.length; i++) {
                    if(text[i] == "_") { break }
                    else { type += text[i] }
                    }
                for(var a = 0; a < types.length; a++) {
                    if(types[a] == type) { type = true }
                    }
                if(type != true) { type = false }
                if(text[i+1] == "#") { code = true } // Code
                for(i = i +2; i < text.length; i++) {
                    if(text[i] == ":") { break }
                    else { id += text[i] }
                    }
                if(!cons.SavedDataURLs[id]) { cons.SavedDataURLs[id] = "failed to load item #" + id }
                if(type && id && code) {
                    return { content: cons.SavedDataURLs[id], len: i - e, pos: e } }
                else { return false }
                } 
            var pos = 0
            var Result = ""
            for(var i = 0; i < text.length; i++) {
                if(datas.length && i == datas[pos].pos) { 
                    Result += datas[pos].content
                    i += datas[pos].len
                    if(pos < datas.length-1) { pos++ }
                    }
                else { Result += text[i] }
                }
            return Result
            }
        }
    };
