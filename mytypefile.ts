let blahblah: string = "blahblah";
let blah2: boolean = true;
let smt: any = "smt";
smt = 5;
let uni: boolean|number;
function myfunc(username: string|number){
    if(typeof username === "number")
      return username.toString();
    else{
        return  username;
    }
}
let mytuple: [string, boolean, number];
mytuple = ["tuple", true, 6];
mytuple.push(777);

