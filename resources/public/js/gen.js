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

function obj_to_css(k, o){
	var res = "";
	locals(o).map(function(g){
		res += "\t"+g+": "+o[g]+";\n";})
	return "\n  ."+k+" {\n" + res + "}";}

function gen_theme(s){
	theme = JSON.parse(s);
	theme_matches = {};
	var css = ""
	locals(theme).map(function(k){
		if (typeof(theme[k]) == "object") {
			if (theme[k]["cascade"] == true) {
				var idx = 0
				theme[k]["stack"].map(function(v){
					var s = Array(idx+2).join(theme[k]["selector"]+" ");
					css += "\n"+s+"{color:"+theme[k]["stack"][idx]+";}";
					idx += 1;})}
			else if (theme[k]["matches"]) {
				theme_matches[k] = theme[k]["matches"];
				css += obj_to_css(k + " .symbol", theme[k]["style"])}
			else {
				css += obj_to_css(k, theme[k])}}
		else {
			css += "\n  ."+k+" {color:"+theme[k]+";}";}})
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
	"char": {
		"open": {"char": "\\", "tag": "<atom class='char'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"string": {
		"open": {"char": "\"", "tag": "<atom class='string'>"},
		"shut": {"char": "\"", "tag": "</atom>"}},
	"keyword": {
		"open": {"char": ":", "tag": "<atom class='keyword'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"ns": {
		"open": {"char": "", "tag": "<atom class='ns'>"},
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
		"open": {"char": ";", "tag": "<atom class='comment'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"quote": {
		"open": {"char": "'", "tag": "<atom class='quote'>"},
		"shut": {"char": "", "tag": "</atom>"}}, 
	"backtick": {
		"open": {"char": "`", "tag": "<atom class='backtick'>"},
		"shut": {"char": "", "tag": "</atom>"}}, 
	"tilde": {
		"open": {"char": "~", "tag": "<atom class='tilde'>"},
		"shut": {"char": "", "tag": "</atom>"}}, 
	"deref": {
		"open": {"char": "@", "tag": "<atom class='deref'>"},
		"shut": {"char": "", "tag": "</atom>"}}, 
	"variadic": {
		"open": {"char": "&", "tag": "<atom class='variadic'>"},
		"shut": {"char": "", "tag": "</atom>"}}, 
	"var-quote": {
		"open": {"char": "#'", "tag": "<atom class='var-quote'>"},
		"shut": {"char": "", "tag": "</atom>"}}, 
	"meta": {
		"open": {"char": "^", "tag": "<atom class='meta'>"},
		"shut": {"char": "", "tag": "</atom>"}}, 
	"ignore": {
		"open": {"char": "#_", "tag": "<atom class='ignore'>"},
		"shut": {"char": "", "tag": "</atom>"}}, 
	"regex": {
		"open": {"char": "#\"", "tag": "<atom class='regex'>"},
		"shut": {"char": "\"", "tag": "</atom>"}},
	"instance": {
		"open": {"char": "#<", "tag": "<atom class='instance'>"},
		"shut": {"char": ">", "tag": "</atom>"}}}

function wrap(type, content){
	return ""+record[type]["open"]["tag"]+record[type]["open"]["char"]+
		content+record[type]["shut"]["char"]+record[type]["shut"]["tag"]}

function is(col, x){return (col.indexOf(x) != -1)}

wrapped = ["list", "vector", "map", "set", "lambda", "keyword", "string", "ns", "symbol", "int", "float", 
	"illegal", "qualified-kw", "comment", "char", "quote", "backtick", "tilde", "deref", "variadic", "var-quote", 
	"meta", "ignore", "regex", "instance"];

form = ["list", "vector", "map", "set", "lambda"]

atom = ["keyword", "symbol", "int", "float", "illegal", "qualified-kw", "comment", "illegal", "string", "regex"]

function draw_token(o, color){
	if (color) {
		fill = color}
	else {
		var rule = theme[o["tag"]];
		var fill = rule || "silver";
		if (typeof(rule) == "object") {fill = rule["color"] || fill};
		if (is(form, o["tag"])) {fill = theme["rainbows"]["stack"][stack.length-1] || fill;}}
	ctx.fillStyle = fill;
	if (is(form, o["tag"])){
		x1 = o["meta"][0][2];
		y1 = o["meta"][0][1];
		x2 = o["meta"][1][2];
		y2 = o["meta"][1][1];
		ctx.fillRect(x1, y1*2, 1, 1);
		ctx.fillRect(x2-1, y2*2, 1, 1);} 
	else if (is(atom, o["tag"])){
		x1 = o["meta"][0][2];
		y1 = o["meta"][0][1];
		x2 = o["meta"][1][2];
		y2 = o["meta"][1][1];
		ctx.fillRect(x1, y1*2, x2 - x1, (y2 - y1) * 2 + 1);} 
	else {}}

stackpush = function(o){if (is(form, o["tag"])) {stack.push(o["tag"])}}
stackpop 	= function(o){if (is(form, o["tag"])) {stack.pop()}}

function walk(o, fn){
	if (o instanceof Array) {
		return o.map(function(m){return walk(m, fn)}).join("");} 
	else if (typeof(o) == "object") {
		stackpush(o);
		ns_match = is(theme_matches["core"], o["value"]);
		if (o["meta"]) {draw_token(o, ns_match ? "#FF8600" : false);}
		if (is(wrapped, o["tag"])) {
			if (o["tag"] == "symbol") {
				if (ns_match){
					var res = "<span class='core'>"+wrap(o["tag"] , walk(o["value"]))+"</span>";
					stackpop(o);
					return res;}}
			var res = wrap(o["tag"] , walk(o["value"]));
			stackpop(o);
			return res;}
		else {
			var res = null;
			switch (o["tag"]) {
				default: res = walk(o["value"]);}
			return res;}} 
	else {return "" + o;}}

function mount(s, target){
	dims = src_dims(s);
	canvas = new_canvas(dims[0], dims[1]);
	ctx = canvas.getContext("2d")
	stack = [];
	target.innerHTML = walk(peg.parse(s));
	target.parentElement.appendChild(canvas);
	return target;}

