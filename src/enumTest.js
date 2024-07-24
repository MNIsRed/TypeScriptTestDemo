"use strict";
var Platforms;
(function (Platforms) {
    Platforms[Platforms["mi"] = 0] = "mi";
    Platforms[Platforms["huawei"] = 1] = "huawei";
    Platforms[Platforms["oppo"] = 2] = "oppo";
    Platforms[Platforms["vivo"] = 3] = "vivo";
})(Platforms || (Platforms = {}));
// 枚举通过数值获取枚举名称，或者通过字符获取枚举的值
console.log("枚举中 mi 的值:", Platforms["mi"]);
console.log("枚举中 0 的值:", Platforms[0]);
//手动为枚举赋值，递增枚举值
var Grade;
(function (Grade) {
    Grade[Grade["firstGrade"] = 1] = "firstGrade";
    Grade[Grade["secondGrade"] = 2] = "secondGrade";
    Grade[Grade["thirdGrade"] = 3] = "thirdGrade";
    Grade[Grade["fourthGrade"] = 4] = "fourthGrade";
})(Grade || (Grade = {}));
console.log("secondGrade的值:", Grade["secondGrade"]);
