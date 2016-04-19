{ function vector(m){
    return [m.offset, m.line,m.column]}
  function token(meta, tag, value){
    return {meta:[vector(meta.start),vector(meta.end)], tag:tag, value:value}}
  function notnull(x){
  	return x != null}}

Start = Form+

Form = seq:(Collection/Atom/__) 											{return seq}

Collection = List/Vector/Map/Set/Lambda/IllegalExp

Atom = String/Char/Number/NS/Special/IllegalAtom/Symbol/QualifiedKey/Keyword/Comment

IllegalExp = val:(("{" _ (Collection/Atom/_) _ "}") / 
	("(" Form*)/("[" Form*)/("{" seq:Form*))						{return token(location(), "illegal", text())}

IllegalAtom= val:((Symbol "/" _) / (_ "/" Symbol))		{return token(location(), "illegal", text())}

Pair = val:(_ Form _ Form _) 													{return val}

List = "(" seq:Form* ")" 															{return token(location(), "list", seq)}
Vector = "[" seq:Form* "]" 														{return token(location(), "vector", seq)}
Map = "{" seq:Pair* "}" 															{return token(location(), "map", seq)}
Set = "#{" seq:Form* "}" 															{return token(location(), "set", seq)}
Lambda = "#(" seq:Form* ")" 													{return token(location(), "lambda", seq)}


Special = Ignore/Quote/Backtick/Tilde/Deref/Instance/TaggedLiteral/VarQuote/Meta/Regex/Variadic

Quote = "'" val:(Form / "/") 													{return token(location(), "quote", val)}
Backtick = "`" val:Form 															{return token(location(), "backtick", val)}
Tilde = "~" val:Form 																	{return token(location(), "tilde", val)}
Deref = "@" val:Form																	{return token(location(), "deref", val)}
Variadic = "&" val:(_ Form)														{return token(location(), "variadic", val)}
VarQuote = "#'" val:Form 															{return token(location(), "var-quote", val)}
TaggedLiteral = "#" val:(Symbol _ Form)								{return token(location(), "#" + val[0].value, val)}
Instance = "#<" val:(Symbol _ Symbol _ Form _) ">"		{return token(location(), "instance", val)}
Meta = "^" v:(Keyword/Map/NS/Symbol)									{return token(location(), "meta", v)}
Ignore = "#_" val:(_ Form)														{return token(location(), "ignore", val)}
Regex = "#" val:String  															{return token(location(), "regex", val.value)}


Keyword  = ":" val:(NS / Symbol) 											{return token(location(), "keyword", val.value)}
QualifiedKey  = "::" val:Symbol  											{return token(location(), "qualified-kw", val.value)}

String = "\"" str:("\\\"" / [^\"]  )* "\""  					{return token(location(), "string", str.join(""))}
Comment = ";" str:[^\n\r]*  													{return token(location(), "comment", str.join(""))}

NS = ns:Symbol "/" sym:Symbol  												{return token(location(), "ns", [ns, "/", sym])}
Symbol = f:(ReadChar / "/") r:(ReadChar/NoLead)*   		{return token(location(), "symbol", f + r.join(""))}
Char = "\\" char:[^ \t\n\r]  													{return token(location(), "char", char)}

Number = Ratio/Float/Integer

Ratio = f:Integer "/" l:Integer 											{return token(location(), "ratio", [f, "/", l])}
Float = first:[0-9]+ "." rest:[0-9]+ 									{return token(location(), "float", parseFloat(text(),10))}
Integer = first:[0-9]rest:[0-9]* 											{return token(location(), "int", parseInt(text(),10))}


__ "whitespace" = val:[ \t\n\r,]+ 											{return token(location(), "_", val.join(""))}
_ "whitespace" = val:[ \t\n\r,]* 											{return token(location(), "_", val.join(""))}


NoLead  = "'"/[\#\%\:0-9]
ReadChar = [^\(\)\[\]\{\}\;\^\~\`\'\"\@\ \n\r\t\:\/\#\\]