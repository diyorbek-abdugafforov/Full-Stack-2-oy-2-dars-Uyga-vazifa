// 1. Boshlang‘ich masalalar


// 1. 1 dan 20 gacha sonlarni chiqarish. for sikli yordamida barcha sonlarni konsolga
// chiqaring.

// let n=20;
// for(let i=1; i<=n;i++){
//     console.log(i);
    
// }



// 2. 20 dan 1 gacha sonlarni chiqarish. Sonlarni kamayish tartibida chiqaring.

// let n=20;
// for(let i=n;i>=1;i--){
//     console.log(i);
    
// }



// 3. 1 dan 50 gacha 5 ga karrali sonlarni chiqarish. Faqat 5 ga qoldiqsiz bo‘linadigan sonlarni
// chiqaring.

// let n=50;
// for(let i=1; i<=n;i++){
//     if(i%5==0){
//         console.log(i);
        
//     }
// }



// 4. 1 dan 30 gacha 3 ga karrali sonlarni chiqarish. Faqat 3 ga qoldiqsiz bo‘linadigan sonlarni
// chiqaring.

// let n=30;
// for(let i=1;i<=n;i++){
//     if(i%3==0){
//         console.log(i);
        
//     }
// }



// 5. 1 dan 100 gacha 10 ga karrali sonlarni chiqarish. 10, 20, 30 va shu kabi sonlarni
// chiqaring.

// let n=100;
// for(let i=1;i<=n;i++){
//     if(i%10==0){
//         console.log(i);
        
//     }
// }






// 2. Yig‘indi hisoblash


// 6. 1 dan 20 gacha bo‘lgan sonlar yig‘indisini toping.

// let n=20;
// let yigindi=0;
// for(let i=1;i<=n;i++){
//     yigindi+=i;
// }
// console.log(yigindi);



// 7. 1 dan 50 gacha bo‘lgan 5 ga karrali sonlar yig‘indisini toping.

// let n=50;
// let yigindi=0;
// for(let i=1;i<=n;i++){
//     if(i%5==0){
//         yigindi+=i;
//     }
// }
// console.log(yigindi);



// 8. 1 dan 100 gacha bo‘lgan 3 ga karrali sonlar yig‘indisini toping.

// let n=100;
// let yigindi=0;
// for(let i=1;i<=n;i++){
//     if(i%3==0){
//         yigindi+=i;
//     }
// }
// console.log(yigindi);



// 9. 1 dan 20 gacha bo‘lgan juft sonlar yig‘indisini toping.

// let n=20;
// let yigindi=0;
// for(let i=1;i<=n;i++){
//     if(i%2==0){
//         yigindi+=i;

//     }
// }
// console.log(yigindi);



// 10. 1 dan 30 gacha bo‘lgan toq sonlar yig‘indisini toping.

// let n=30;
// let yigindi=0;
// for(let i=1;i<=n;i++){
//     if(i%2!=0){
//         yigindi+=i;
        
//     }
// }
// console.log(yigindi);






// 3. Sonlarni sanash


// 11. 1 dan 200 gacha nechta son 5 ga qoldiqsiz bo‘linishini aniqlang.

// let n=200;
// let count=0;
// for(let i=1;i<=n;i++){
//     if(i%5==0){
//         count+=1;
        
//     }
// }
// console.log(`${count} ta`);



// 12. 1 dan 100 gacha nechta son 3 ga ham, 5 ga ham qoldiqsiz bo‘linishini aniqlang.

// let n=100;
// let count=0;
// for(let i=1;i<=n;i++){
//     if(i%15==0){
//         count+=1;
        
//     }
// }
// console.log(`${count} ta`);



// 13. 1 dan 100 gacha nechta son 7 ga qoldiqsiz bo‘linishini aniqlang.

// let n=100;
// let count=0;
// for(let i=1;i<=n;i++){
//     if(i%7==0){
//         count+=1;
        
//     }
// }
// console.log(count);



// 14. 1 dan 100 gacha juft va toq sonlar yig‘indisi orasidagi farqni toping. Ikkala yig‘indini
// alohida hisoblang, so‘ng farqini chiqaring.

// let n=100;
// let juft_y=0;
// let toq_y=0;
// for(let i=1;i<=n;i++){
//     if(i%2==0){
//         juft_y+=i;
        
//     }else{
//         toq_y+=i;
//     }
// }
// let farqi = juft_y - toq_y
// console.log(farqi);



// 15. 1 dan 100 gacha 3 ga bo‘linadigan va bo‘linmaydigan sonlarni sanang. Ikkala guruhni
// alohida hisoblang.

// let n=100;
// let bulinadi_count=0;
// let bulinmaydi_count=0;
// for(let i=1;i<=n;i++){
//     if(i%3==0){
//         bulinadi_count+=1;
//     }else{
//         bulinmaydi_count+=1;
//     }
// }
// console.log(`3 ga bo'linadigan soni: ${bulinadi_count} ta`);
// console.log(`3 ga bo'linmaydigan soni: ${bulinmaydi_count} ta`);





// 4. Foydalanuvchi kiritgan son bilan ishlash


// 16. Foydalanuvchi son kiritadi. Shu sondan 1 gacha bo‘lgan barcha sonlarni kamayish
// tartibida chiqaring

// let son=+prompt("Son kiriting: ")
// console.log(`${son} dan 1 gacha kamayish tartibida:`);

// for(let i=son;i>=1;i--){
//     console.log(i);
    
// }



// 17. Foydalanuvchi son kiritadi. 1 dan shu songacha bo‘lgan barcha juft sonlarni chiqaring.

// let son=+prompt("Son kiriting:")
// console.log(`1 dan ${son} gacha juft sonlar ro'yxati:`);
// for(let i=1;i<=son;i++){
//     if(i%2==0){
//         console.log(i);
        
//     }
// }



// 18. Foydalanuvchi son kiritadi. 1 dan shu songacha bo‘lgan barcha toq sonlar yig‘indisini
// hisoblang.

// let son=+prompt("Son kiriting: ")
// let toq_y=0;
// for(let i=1;i<=son;i++){
//     if(i%2!=0){
//         toq_y+=i;
//     }
// }
// console.log(`1 dan ${son} gacha toq sonlar yig'indisi: ${toq_y}`);



// 19. Foydalanuvchi son kiritadi. Shu sonning ko‘paytirish jadvalini 1 dan 10 gacha
// chiqaring. Masalan, 5 kiritilsa, 5 × 1 = 5 dan 5 × 10 = 50 gacha.

// let son=+prompt("Son kiriting: ")
// console.log(`${son} ning karra jadvali`);
// for(let i=1;i<=10;i++){
//     console.log(`${son}*${i}=${son*i}`);
// }



// 20. Foydalanuvchi son kiritadi. Shu son tub yoki tub emasligini aniqlang. Tub son faqat 1
// ga va o‘ziga qoldiqsiz bo‘linadi. Masalan, 7 — tub, 8 — tub emas. 1 tub son hisoblanmaydi.

// let son=+prompt("Son kiriting: ")
// let count=0;
// for(let i=1;i<=son;i++){
//     if(son%i==0){
//         count+=1;
//     }
// }
// if(count==2){
//     console.log(`${son} - tub`);
    
// }else{
//     console.log(`${son} - tub emas`);
    
// }










