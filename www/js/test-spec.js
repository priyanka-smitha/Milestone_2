describe("Person Name", function() {
  it("Computes correct fullName based on firstName and lastName", function() {
    var target = new ViewMyModel("Ada","Lovelace", "abc@xyz.com");
    expect(target.fullName()).toBe("Ada Lovelace");
  });
  
  it("Computes wrongName based on firstName", function() {
    var target = new ViewMyModel("Priyanka","Lovelace");
    expect(target.fullName()).toBe("Priyanka Lovelace");
  });
	it("Computes wrongName based on lastName", function() {
    var target = new ViewMyModel("Ada","Shankaran");
    expect(target.fullName()).toBe("Ada Shankaran");
  });
 });
 
//Random testing or Fuzz testing

describe("Random Name", function() {
	var abc = Math.random().toString(36).substring(7);
	var def = Math.random().toString(36).substring(7);
	it("Computes random fullName based on firstName and lastName", function() {
    var target = new ViewMyModel(abc, def);
    expect(target.fullName()).toBe(abc + " " + def);
  });
});

//Reversing the input

describe("Reversing Name", function() {
	it("Computes random fullName based on firstName and lastName", function() {
	var first = "Priyanka";
	var revfirst = first.split("").reverse().join("");
	var last = "Shankaran";
	var revlast =  last.split("").reverse().join("");
    var target = new ViewMyModel(revfirst, revlast);
    expect(target.fullName()).toBe("Priyanka Shankaran");
  });
});