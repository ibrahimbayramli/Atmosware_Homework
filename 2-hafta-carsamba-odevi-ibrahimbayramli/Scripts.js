//** Kelime girisi
var myWord=prompt("Bir kelime girin")




//** S-1) Kaç karakterlidir ? 
document.write("<br><br>"+"Girilen cumlenin uzunlugu: "+myWord.length)

//** S-2) boşluklar alınarak Kaç karakterlidir ? 
document.write("<br><br>"+"Girilen cumlenin bosluklar dusuldugunde ki uzunlugu: "+myWord.replace(" ","").length)

//** S-3) bütün kelimeyi küçük harfle göstermek ?  
document.write("<br><br>"+"Girilen cumlenin butun harflerini kucuk harfle gosterme: "+myWord.toLowerCase())

//** S-4) bütün kelimeyi büyük harfle göstermek ?   
document.write("<br><br>"+"Girilen cumlenin butun harflerini buyuk harfle gosterme: "+myWord.toUpperCase())

//** S-5) ilk harf nedir ?  
document.write("<br><br>"+"Girilen cumlenin ilk harfi: "+myWord[0])

//** S-6) girdiğiniz kelime java ile başlıyor mu ?  
document.write("<br><br>"+"Girilen cumle 'java' ile basliyor mu?: "+myWord.startsWith("java"))

//** S-7) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" ?  
document.write("<br><br>"+"Girilen cumlenin sonuna '-ben js öğreniyorum' ekleme: "+myWord.concat("-ben js öğreniyorum"))

//** S-8) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin ?   
document.write("<br><br>"+"Girilen cumlecumlenin 0-4 indexini gosterme: "+myWord.substring(0,4))

//** S-9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek ? 

//* Ikinci kelime girisi
var newWord=prompt("Yeni bir kelime girin")


var myArr=myWord.split(" ")
myArr[0]=newWord
myWord=myArr.join(" ") 

document.write("<br><br>"+"Girilen cumlecumlenin birinci kelimesini girilen ikinci bir kelime ile degistirme: "+myWord)

