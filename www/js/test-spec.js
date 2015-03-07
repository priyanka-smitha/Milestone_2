describe("Person Name", function() {
  // it("Computes fullName based on firstName and lastName", function() {
    // var target = new ViewMyModel("Ada","Lovelace", "abc@xyz.com");
    // expect(target.fullName()).toBe("Ada Lovelace");
  // });
  
  // it("Computes wrongName based on firstName and lastName", function() {
    // var target = new ViewMyModel("Priyanka","Lovelace");
    // expect(target.fullName()).toBe("Priyanka Lovelace");
  // });
  
  it("Computes wrongName based on firstName and lastName", function() {
    var target = new ViewMyModel("Ada","Shankaran");
    expect(target.fullName()).toBe("Ada Shankaran");
  });
});