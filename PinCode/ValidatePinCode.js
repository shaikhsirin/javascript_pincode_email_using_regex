//Pincode Validation 
let pincodeCheck = RegExp('^[1-9]{1}[0-9]{5}$');
let pincodeCheck1 = RegExp('^[1-9]{1}[0-9]{2}[\\s][0-9]{3}$');

//UC1 Pincode
let sampleCheck1 = pincodeCheck.test(400088);
console.log(sampleCheck1);

//UC2 Pincode
let sampleCheck2 = pincodeCheck.test("A400088");
console.log(sampleCheck2);

//UC3 Pincode
let sampleCheck3 = pincodeCheck.test("400088B");
console.log(sampleCheck3);

//UC4 Pincode
let sampleCheck4 = pincodeCheck1.test("400 088");
console.log(sampleCheck4);