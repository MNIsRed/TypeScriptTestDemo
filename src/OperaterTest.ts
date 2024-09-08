// 可选属性 ?:
function logNotNil(ags?: any) {
    if (ags) {
        console.log(ags);
    }
}

console.log("if 输出");
//不会输出
logNotNil();
logNotNil(null);
logNotNil(undefined);
logNotNil(false);
logNotNil(0);
logNotNil("");
//会输出
logNotNil("0");
logNotNil(true);
logNotNil({});
logNotNil([]);

console.log("可选链操作符 ?. 输出");
// 可选链操作符 ?.
function logNotNil2(ags?: any) {
    ags?.toString() && console.log(ags);
}

//不会输出
logNotNil2();
logNotNil2(null);
logNotNil2(undefined);
logNotNil2([]);
logNotNil("");
//会输出
logNotNil2(false);
logNotNil2(0);
logNotNil2("0");
logNotNil2(true);
logNotNil2({});

console.log("?? 空值合并操作符 输出");
//  ?? 空值合并操作符
function logNotNil3(ags?: any) {
    ags ?? console.log(ags);
}

//会输出
logNotNil3();
logNotNil3(null);
logNotNil3(undefined);

//不会输出
logNotNil("");
logNotNil3(false);
logNotNil3(0);
logNotNil3("0");
logNotNil3(true);
logNotNil3({});
logNotNil3([]);

// 交叉类型
type PointX = { x: number; };
type PointY = { y: number; };
type Point = PointX & PointY;
const point: Point = { x: 1, y: 2 };
console.log(point);

// 数字分隔符
const numberDivider = 1_2_3;
console.log(numberDivider);
