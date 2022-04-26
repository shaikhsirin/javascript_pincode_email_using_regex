//Email Validation
//UC1 Email
let emailCheck1 = RegExp('^[a-z]{3,}$');
let sampleCheck5 = emailCheck1.test("abc");
console.log(sampleCheck5);
//UC2 Email
let emailCheck2 = RegExp('^[a-z]{3,}?(@[a-z]{2,})$');
let sampleCheck6 = emailCheck2.test("abc@bridgelabz");
console.log(sampleCheck6);

//UC3 Email
let emailCheck3 = RegExp('^[a-z]{3,}(.)?(@[a-z]{2,})(.([a-z]{2,}))$');
let sampleCheck7 = emailCheck3.test("abc.@bridgelabz.co");
console.log(sampleCheck7);

//UC4 Email
let emailCheck4 = RegExp('^[a-z]{3,}(.)([a-z_+-.]{3,})?(@[a-z]{2,})(.([a-z]{2,}))$');
let sampleCheck8 = emailCheck4.test("abc.x_yz@bridgelabz.co");
console.log(sampleCheck8);

//UC5 Email
let emailCheck5 = RegExp('^(abc)+(((\\.[0-9])|(\\+[0-9])|(\\-[0-9])|[0-9]){0,})@[a-z0-9]{1,}(.)(([a-z]{2,}(.))|([a-z]{2,}(,)))[a-z]{0,}');
let sampleCheck9 = emailCheck5.test("abc+100@1.com");
console.log(sampleCheck9);
