function UltraObject(o){
this.objectified = true;
this.content = o;
this.type = typeof o;
if(typeof o === "number"){
this.toObject = function() {
var a = new UltraObject();
a.type = "number";
a.objectified = true;
a.value = this.content;
return a;
}
this.sin = function() {return Math.sin(this.content);}
this.cos = function() {return Math.cos(this.content);}
this.tan = function() {return Math.tan(this.content);}
this.abs = function() {return Math.abs(this.content);}
this.toPowerOf = function(exponent) {return Math.pow(this.content,exponent);}
this.toText = function() {return String.fromCharCode(this.content);}
// Add more number methods here
};
if(typeof o === "string"){
this.splitBrackets=function(open,close) {
var a = [""];
var brackets = 0;
for(var i=0; i<this.content.length; i++) {
  if (this.content[i]===open) {
  brackets += 1;
    if(brackets === 1){
    a.push("");
    } else {a[a.length-1] += this.content[i];}
  } else if (this.content[i]===close) {
  brackets -= 1;if(brackets!==0){a[a.length-1] += this.content[i];}
  } else {
  a[a.length-1] += this.content[i];
  }
}
  return a;
}
this.toObject = function() {
var a = new UltraObject();
a.type = "string";
a.objectified = true;
a.value = this.content;
return a;
}
this.toNumberMap = function() {
var arr = [];
  for(var i=0; i<this.content.length; i++) {
arr.push(this.content.charCodeAt(i));
}
  return arr;
}
// Add more string methods here
};
if(o.constructor === RegExp){
this.getAll = function() {
if(this.content.ignoreCase===true) {
var bin = 1;
        var arr = [];

for (var i=-1; i<Math.factorial(this.content.source.length)+1; i++) {
bin=Math.toBinary(i+1);
    var str = "";
    for (var a=this.content.source.length-1; a>-1; a--) {
        if(bin[a] == 1) {
        str = String(this.content.source[a]).toUpperCase()+str;
        } else {
                str = String(this.content.source[a]).toLowerCase()+str;
        }
    }
    arr.push(str);
}
    return arr;
} else {
console.error("Can't find all of anything but /(text)/i");
return undefined;
}
};
// Add more RegExp methods here
};
// Add more types here

}
function uo(selector){return new UltraObject(selector)}
if(!window.UltraLang){window.UltraLang = {};console.warn("UltraLangScript main not loaded. Make sure you load both main.js and objects.js for best results.")};
UltraLang.isObjectified = function (o){
if(o.objectified){return true}else{return false};
}
if(!UltraLang.i){UltraLang.i = {}};
UltraLang.i.factorial = function(arg) {
    if (arg === 0)
      { return 1; }
    else
      { return arg * Math.factorial( arg - 1 ); }
}
UltraLang.i.toBinary = function(arg) {
    return (arg >>> 0).toString(2);
}
