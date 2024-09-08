enum Platforms {
    mi,
    huawei,
    oppo,
    vivo
}

// 枚举类型的值都是数字类型
console.log(Platforms.mi)

// 枚举通过数值获取枚举名称，或者通过字符获取枚举的值
console.log("枚举中 mi 的值:", Platforms["mi"])
console.log("枚举中 0 的值:", Platforms[0])

//手动为枚举赋值，递增枚举值
enum Grade {
    firstGrade = 1,
    secondGrade,
    thirdGrade,
    fourthGrade
}
console.log("secondGrade的值:", Grade["secondGrade"])

// 字符串枚举
enum Terminal {
    shell = "shell",
    cmd = "cmd",
    zsh = "zsh"
}
console.log("Terminal.cmd的值: ", Terminal.cmd)

// 常量枚举,将被内联
const enum Color {
    yellow,
    red,
    green,
    blue,
    pink,
    black,
    white
}
const color = Color.red
console.log("color的值: ", color)


// 静态方法
namespace PrimaryColor {
    export function isPrimaryColor(colorIndex: number) {
        switch (colorIndex) {
            case Color.red:
            case Color.green:
            case Color.blue:
                return true;
            default: return false;
        }
    }
}

console.log("PrimaryColor.isPrimaryColor(Color.red): ", PrimaryColor.isPrimaryColor(Color.red));
console.log("PrimaryColor.isPrimaryColor(Color.yellow): ", PrimaryColor.isPrimaryColor(Color.yellow));

