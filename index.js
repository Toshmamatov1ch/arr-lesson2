// 1. (5/10) Ismlar ro'yxatini tartibga solish
// Sizga foydalanuvchilar ismlari yozilgan massiv berilgan. Massivning oxiriga yangi ism qo'shing (push), birinchi ismni o'chiring (shift) va massivda "Ali" ismi bor-yo'qligini tekshiring (includes).
// // Metodlar: push, shift, includes

// const manageUsers = (users) => {
//   users.push("Bekzod");
//   console.log("Push dan keyin:", users);

//   users.shift();
//   console.log("Shift dan keyin:", users);

//   let hasAli = users.includes("Ali");
//   console.log("Ali bormi?", hasAli);
// };

// manageUsers(["Diyorbek", "Umidjon", "Ali", "Asadbek"]);

// >======================================================================

// 2. (5/10) Telegram guruhidagi navbat
// Guruhga 3 ta yangi a'zo qo'shildi (unshift). Keyin oxirgi qo'shilgan a'zo guruhdan chiqib ketdi (pop). Qolgan a'zolarni vergul bilan ajratilgan bitta qator (string) ko'rinishida chiqaring.
// Metodlar: unshift, pop, join

// const manageGroup = (members) => {
//   members.unshift("Bekzod", "Jasur", "Sardor");
//   console.log("Unshift dan keyin:", members);

//   members.pop();
//   console.log("Pop dan keyin:", members);

//   let result = members.join(", ");
//   console.log("Natija:", result);
// };

// manageGroup(["Diyorbek", "Umidjon", "Ali"]);

// >===================================================================================

// 3. (6/10) Qidiruv tizimi
// Mahsulotlar ro'yxati berilgan: ['Apple', 'Banana', 'Orange', 'Apple', 'Kiwi']. Foydalanuvchi "Apple" mahsulotini qidirmoqda. "Apple" birinchi va oxirgi marta nechanchi indeksda turganini aniqlang.
// Metodlar: indexOf, lastIndexOf

// const Search = (meva) => {
//   let birinchi = meva.indexOf("Apple");
//   let oxirgi = meva.lastIndexOf("Apple");

//   return [birinchi, oxirgi];
// };
// console.log(Search(["Apple", "Banana", "Orange", "Apple", "Kiwi"]));

// >==============================================================================

// 4. (6/10) Ma'lumotlarni qismlarga ajratish
// Sizda 10 ta elementdan iborat massiv bor. Undan faqat o'rtadagi 4 ta elementni ajratib olib, yangi massivga saqlang (asl massiv o'zgarmasin).
// Metodlar: slice

// const ajratish = (massiv) => {
//   return massiv.slice(3, 7);
// };

// const massiv = [12, 15, 34, 56, 89, 45, 67, 88, 20, 25];

// console.log(ajratish(massiv));
// console.log(massiv);

// >=====================================================================

// 5. (7/10) URL manzillar bilan ishlash
// Foydalanuvchi kiritgan string: "toshkent-samarqand-buxoro". Ushbu stringni chiziqchalar bo'yicha bo'lib massivga o'giring. Massivning 2-elementini (at) konsolga chiqaring.
// Metodlar: split, at

// const url = (shahar) => {
//   const massiv = shahar.split("-");
//   return massiv.at(1);
// };

// console.log(url("toshkent-samarqand-buxoro"));

// >=========================================================================

// 6. (7/10) Bazalarni birlashtirish
// Ikkita turli do'kondagi mahsulotlar massivini bitta massivga birlashtiring. Hosil bo'lgan massivda "Non" mahsuloti borligini tekshiring va uning indeksini toping.
// Metodlar: concat, includes, indexOf

// let dokon1 = ["Olma", "Non", "Sut"];
// let dokon2 = ["Gruch", "Shrlink", "Shakar"];

// const birlashtirish = (arr1, arr2, mahsulot) => {
//   const umumiy = arr1.concat(arr2);
//   const tekshirish = umumiy.includes(mahsulot);
//   const index = umumiy.indexOf(mahsulot);

//   return [umumiy, tekshirish, index];
// };

// console.log(birlashtirish(dokon1, dokon2, "Non"));

// >=====================================================

// 7. (8/10) "Trash" (Savat) tizimi
// Sizda mahsulotlar savatchasi bor. Foydalanuvchi 3-indeksdagi mahsulotni o'chirib, o'rniga "Monitor" va "Klaviatura" qo'shmoqchi. Bunda massivning tarkibi o'zgarishi kerak.
// Metodlar: splice

// const savatcha = ["Telefon", "Noutbuk", "Planshet", "Kamera", "Printer"];

// const trashTizimi = (massiv) => {
//   massiv.splice(3, 1, "Monitor", "Klaviatura");
//   return massiv;
// };

// console.log(trashTizimi(savatcha));
// console.log(savatcha);

// >===========================================================

// 8. (8/10) Stringni teskari tartibda yozish
// Foydalanuvchi bitta so'z kiritadi (masalan: "Javascript"). Siz ushbu so'zning harflarini teskari tartibda chiqarishingiz kerak (Buning uchun avval massivga bo'lib, keyin birlashtirish kerak bo'ladi).
// Metodlar: split, join

// const Teskarisoz = (soz) => {
//   return soz.split("").reverse().join("");
// };

// console.log(Teskarisoz("Javascript"));

// >==========================================================

// 9. (9/10) Foydalanuvchi ID boshqaruvi
// Sizda ID raqamlardan iborat massiv bor. Foydalanuvchi yangi ID kiritadi. Agar bu ID massivda bo'lsa, "Bu ID allaqachon mavjud" deb chiqaring, agar yo'q bo'lsa, uni massiv oxiriga qo'shing.
// Metodlar: includes, push

// const user = (ID, yangiId) => {
//   if (ID.includes(yangiId)) {
//     return "Bu ID allaqachon mavjud";
//   } else {
//     ID.push(yangiId);
//     return ID;
//   }
// };

// console.log(user([400, 456, 123, 345], 123));
// console.log(user([400, 456, 123, 345], 999));

// >==================================================================

// 10. (10/10) Murakkab tahrirlash
// Sizda quyidagi massiv bor: ['Yanvar', 'Fevral', 'Mart', 'Aprel'].

// Massiv o'rtasiga "Bahor" so'zini qo'shing.

// Massivning boshidan 2 ta elementni qirqib oling va yangi massivga oling.

// Yangi massivni eskisi bilan birlashtiring.

// Oxirgi natijani string ko'rinishida chiqaring.
// Metodlar: splice, slice, concat, join

// const Tahrirlash = (oylar) => {

//   oylar.splice(2, 0, "Bahor"); // ['Yanvar', 'Fevral', 'Bahor', 'Mart', 'Aprel']

//   const yangi = oylar.slice(0, 2); // ['Yanvar', 'Fevral']

//   const natija = yangi.concat(oylar);

//   return natija.join(", ");
// };

// console.log(Tahrirlash(["Yanvar", "Fevral", "Mart", "Aprel"]));

// >= Tugadi vazifa
