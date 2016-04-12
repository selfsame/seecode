window.locals = function(o){var _o = new Array();for(k in o){if(o.hasOwnProperty(k)){_o.push(k);}}return _o;}

function src_dims(s){
	var lines = s.split("\n")
	var max_width = 0
	lines.map(function(line){
		if (line.length > max_width){
			max_width = line.length;}})
	return [max_width, lines.length * 2]}

function new_canvas(w, h){
	var canvas = document.createElement("canvas");
	canvas.width = w
	canvas.height = h
	return canvas}

function canvas_png(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image}

function draw_src(s) {
	var dims = src_dims(s);
	var canvas = new_canvas(dims[0], dims[1]);
	var ctx = canvas.getContext("2d")
	ctx.fillStyle = "rgba(0,0,0,1.0)"
	var lines = s.split("\n")
	for (var i = 0; i < lines.length; i++) {
		var line = lines[i]
		for (var j = 0; j < line.length; j++) {
			var char = line[j]
			if (char !== " "){
				ctx.fillRect( j, i, 1, 1 )}}}
	return canvas}

function request(url, fn){
  var httpRequest = new XMLHttpRequest()
  var callback = function(){
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        fn(httpRequest.responseText);} 
      else {console.error("Request failure: "+ url)}}}
  httpRequest.onreadystatechange = callback
  httpRequest.open('GET', url)
  httpRequest.send()}

function gen_theme(s){
	theme = JSON.parse(s);
	var css = ""
	locals(theme).map(function(k){
		css += "\n  ."+k+" {color:"+theme[k]+";}";})
	document.querySelector("#theme").innerText = css;}

record = {
	"list": {
		"open": {"char": "(", "tag": "<exp class='list'>"},
		"shut": {"char": ")", "tag": "</exp>"}},
	"vector": {
		"open": {"char": "[", "tag": "<exp class='vector'>"},
		"shut": {"char": "]", "tag": "</exp>"}},
	"map": {
		"open": {"char": "{", "tag": "<exp class='map'>"},
		"shut": {"char": "}", "tag": "</exp>"}},
	"set": {
		"open": {"char": "#{", "tag": "<exp class='set'>"},
		"shut": {"char": "}", "tag": "</exp>"}},
	"lambda": {
		"open": {"char": "#(", "tag": "<exp class='lambda'>"},
		"shut": {"char": ")", "tag": "</exp>"}},
	"string": {
		"open": {"char": "\"", "tag": "<atom class='string'>"},
		"shut": {"char": "\"", "tag": "</atom>"}},

	"keyword": {
		"open": {"char": ":", "tag": "<atom class='keyword'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"symbol": {
		"open": {"char": "", "tag": "<atom class='symbol'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"int": {
		"open": {"char": "", "tag": "<atom class='int'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"float": {
		"open": {"char": "", "tag": "<atom class='float'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"illegal": {
		"open": {"char": "", "tag": "<atom class='illegal'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"qualified-kw": {
		"open": {"char": "::", "tag": "<atom class='qualified-kw'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"comment": {
		"open": {"char": "", "tag": "<atom class='comment'>"},
		"shut": {"char": "", "tag": "</atom>"}}}

function wrap(type, content){
	return ""+record[type]["open"]["tag"]+record[type]["open"]["char"]+
		content+record[type]["shut"]["char"]+record[type]["shut"]["tag"]}

function is(col, x){return (col.indexOf(x) != -1)}

wrapped = ["list", "vector", "map", "set", "lambda", "keyword", "string",
	"symbol", "int", "float", "illegal", "qualified-kw", "comment"];

form = ["list", "vector", "map", "set", "lambda", "string"]

atom = ["keyword", "symbol", "int", "float", "illegal", "qualified-kw", "comment"]

function draw_token(o){
	if (is(form, o["tag"])){
		x1 = o["meta"][0][2];
		y1 = o["meta"][0][1];
		x2 = o["meta"][1][2];
		y2 = o["meta"][1][1];
		ctx.fillStyle = theme[o["tag"]] || "rgba(0,0,0,1.0)";
		ctx.fillRect(x1, y1*2, 1, 1);
		ctx.fillRect(x2, y2*2, 1, 1);
	} else if (is(atom, o["tag"])){
		x1 = o["meta"][0][2];
		y1 = o["meta"][0][1];
		x2 = o["meta"][1][2];
		y2 = o["meta"][1][1];
		ctx.fillStyle = (theme[o["tag"]] || "rgba(0,0,0,1.0)");
		ctx.fillRect(x1, y1*2, x2 - x1, 1);
	} else {
		
	}

}

function walk(o, fn){
	if (o instanceof Array){
		return o.map(function(m){return walk(m, fn)}).join("");
	} else if (typeof(o) == "object"){
		if (o["meta"]) {draw_token(o);}
		if (is(wrapped, o["tag"])){
			return wrap(o["tag"] , walk(o["value"]));
		} else {
			var res = null;
			switch (o["tag"]){
				default: res = walk(o["value"]);
			}
			return res;
		}
	} else {
		return "" + o;
	}}

function mount(s, target){
	dims = src_dims(s);
	canvas = new_canvas(dims[0], dims[1]);
	ctx = canvas.getContext("2d")
	target.innerHTML = walk(peg.parse(s));
	target.parentElement.appendChild(canvas);
	return target;}

