/* 
ให้เขียน Function ที่ชื่อว่า reverseText ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ text
        1. text เป็น String ที่บรรจุข้อความ
    - Function นี้จะนำ text มาสลับตัวอักษรจากหลังไปหน้า แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
/* 1. แยก text แต่ละตัวออกจากกัน .split
2. ใช้คำสั่ง .reverse
3. เอา text กลับมารวมกัน ใช้ .join */

function reverseText(text){
    const splitText = text.split("");
    // console.log(splitText)
    const reverseTexts = splitText.reverse();
    // console.log(reverseTexts)
    const joinReverse = reverseTexts.join("");
    return joinReverse
}

let text1 = "Techup";
console.log(reverseText(text1)); // puhcet

let text2 = "Hello World!!";
console.log(reverseText(text2)); // !!dlrow olleh
