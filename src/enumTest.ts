import 'tsx'
enum Platforms{
    mi,
    huawei,
    oppo,
    vivo
}
// 枚举通过数值获取枚举名称，或者通过字符获取枚举的值
console.log("枚举中 mi 的值:",Platforms["mi"])
console.log("枚举中 0 的值:",Platforms[0])

//手动为枚举赋值，递增枚举值
enum Grade{
    firstGrade=1,
    secondGrade,
    thirdGrade,
    fourthGrade
}
console.log("secondGrade的值:",Grade["secondGrade"])