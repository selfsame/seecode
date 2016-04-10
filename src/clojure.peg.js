{ function vector(m){
    return [m.offset, m.line,m.column]}
  function token(meta, tag, value){
    return {meta:[vector(meta.start),vector(meta.end)], tag:tag, value:value}}
  function notnull(x){
  	return x != null}}


Start = Form+


Form = seq:(Collection/Atom/__/Illegal) 			{return seq}

Collection = Illegal/List/Vector/Map/Set/Lambda

Atom = String/Char/Number/NS/Symbol/QualifiedKey/Keyword/Special/Comment 

Illegal = val:(("{" _ (Collection/Atom) _ "}")/
	"/" / (Symbol "/") / ("/" Symbol ))
			{return token(location(), "illegal", val)}

Pair = k:Form _ v:Form 						{return [k, v]}

List = "(" seq:Form* ")" 					{return token(location(), "list", seq)}
Vector = "[" seq:Form* "]" 					{return token(location(), "vector", seq)}
Map = "{" _ seq:Pair* _ "}" 				{return token(location(), "map", seq)}
Set = "#{" seq:Form* "}" 					{return token(location(), "set", seq)}
Lambda = "#(" seq:Form* ")" 				{return token(location(), "lambda", seq)}


Special = Ignore/Quote/Backtick/Tilde/Deref/TaggedLiteral/VarQuote/Meta/Regex

Quote = "'" val:(Form / "/") _ 						{return token(location(), "quote", val)}
Backtick = "`" val:Form 					{return token(location(), "backtick", val)}
Tilde = "~" val:Form 						{return token(location(), "tilde", val)}
Deref = "@" val:Form						{return token(location(), "deref", val)}
Variadic = "&" _ val:(NS/Symbol) 			{return token(location(), "variadic", val)}
VarQuote = "#'" val:Form 					{return token(location(), "var-quote", val)}
TaggedLiteral = "#" tag:Symbol _ val:Form {return token(location(), "#" + tag.value, val)}
Meta = "^" v:(Keyword/Map/NS/Symbol)		{return token(location(), "meta", v)}
Ignore = "#_" _ val:Form 					{return token(location(), "ignore", val)}
Regex = "#" val:String  					{return token(location(), "regex", "#"+val.value)}


Keyword  = ":" val:(NS / Symbol) 				{return token(location(), "keyword", val.value)}
QualifiedKey  = "::" val:Symbol  			{return token(location(), "qualified-kw", val.value)}

String = "\"" str:("\\\"" / [^\"]  )* "\""  {return token(location(), "string", str.join(""))}
Comment = ";" str:[^\n\r]*  				{return token(location(), "comment", str.join(""))}

NS = ns:Symbol "\/" sym:Symbol  			{return token(location(), "ns", [ns.value, sym.value])}
Symbol = f:ReadChar r:(ReadChar/NoLead)*   	{return token(location(), "symbol", f + r.join(""))}
Char = "\\" char:[^ \t\n\r]  				{return token(location(), "char", char)}


Number = Ratio/Float/Integer

Ratio = f:Integer "/" l:Integer 			{return token(location(), "ratio", [f.value, l.value])}
Float = first:[0-9]+ "." rest:[0-9]+ 		{return token(location(), "float", parseFloat(text(),10))}
Integer = first:[0-9]rest:[0-9]* 			{return token(location(), "int", parseInt(text(),10))}


__ "whitespace" = val:[ \t\n\r]+ 			{return token(location(), "_", val.join(""))}
_ "whitespace" = val:[ \t\n\r]* 			{return token(location(), "_", val.join(""))}


NoLead  = "'"/[\#\%\:0-9]
ReadChar = [^\(\)\[\]\{\}\;\^\~\`\'\"\@\ \n\r\t\:\/\#\\]