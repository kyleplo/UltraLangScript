function UltraObject(o){
this.objectified = true;
this.content = o;
this.type = typeof o;
this.dumpConsole = function (padding){
if(!padding){var padding = ""};
var k = Object.keys(this.content);
for(var i = 0;i < k.length;i++){
if(typeof this.content === "function"){
console.log(padding + "-" + k[i] + ": Function");
}else{
if(typeof this.content === "object"){
console.log(padding + "-" + k[i] + ": Object(" + Object.keys(this.content[k[i]]).length + ")");
var u = new UltraObject(this.content[k[i]]);
u.dumpConsole(padding + "-");
}else{
if(Array.isArray(this.content)){
console.log(padding + "-" + k[i] + ": Array(" + this.content[k[i]].length + ")");
var u = new UltraObject(this.content[k[i]]);
u.dumpConsole(padding + "-");
}else{
console.log(padding + "-" + k[i] + ": " + this.content[k[i]]);
};
};
};
};
};
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
this.divisibleBy = function (n){return this.content / n === Math.round(this.content / n)};
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
this.contains = function (s) {
return (this.content.indexOf(s) > -1)
}
this.reverse = function (){
var s = "";
for(var i = this.content.length;i > -1;i--){
s += this.content.charAt(i);
};
return s;
}
// Add more string methods here
};
if(typeof o === "array"){
this.contains = function (s) {
return (this.content.indexOf(s) > -1)
}
this.anyContains = function (s) {
for(var i = 0;i < this.content.length;i++){
if(this.content[i].indexOf(s) > -1){return true};
};
return false;
}
this.whichContains = function (s) {
for(var i = 0;i < this.content.length;i++){
if(this.content[i].indexOf(s) > -1){return i};
};
return -1;
}
// Add more array methods here
};
// Add more types here

}
function uo(selector){return new UltraObject(selector)}
if(!window.UltraLang){window.UltraLang = {};console.warn("UltraLangScript main not loaded. Make sure you load both main.js and objects.js for best results.")};
UltraLang.isObjectified = function (o){
if(o.objectified){return true}else{return false};
}
