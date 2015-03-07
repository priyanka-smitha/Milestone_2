var a
var x=y=z="example";
var regex = /^unclosed$;
var ViewMyModel=function(first,last,email)
{
if (first=="Priyanka"){
this.firstName=ko.observable(first);
}
else {
this.firstName=ko.observable(first);
}
if (last == "Shankaran") {
this.lastName=ko.observable(last);
}
else {
this.lastName=ko.observable(last);
}
this.email_id=ko.observable(email);
this.fullName=ko.computed(function(){return this.firstName() + " " + this.lastName(); },this);
};

