// ax2+bx+c=0
var a = 0;
var b = 3;
var c = 6;
var x3 =-c/b; 
var d = b*b-4*a*c;
var s = Math.sqrt(d);
var x1 = (-b-s)/(2*a);
var x2 = (-b+s)/(2*a);

if (a==0 && b==0 && c==00) {console.log ('корень - любое число');}
else if (a==0 && b!=0 && c!=0) { console.log ('x=', x3); }
else if(d<0) { console.log ('нет корней');}
else if (d==0) {console.log ('x1=x2=', x1)}
  else {console.log ('x1=', x1); console.log ('x2=', x2) }

