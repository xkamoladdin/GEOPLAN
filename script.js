const body = document.querySelector("body"),
        nav = document.querySelector("nav"),
        modeToggle = document.querySelector(".dark-light"),
        sidebarOpen = document.querySelector(".sidebarOpen"),
        siderbarClose = document.querySelector(".siderbarClose");

        let getMode = localStorage.getItem("mode");
            if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
            }

// js code to toggle dark and light mode
        modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
        });

//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});




// const translations = {
//     uz: {
//         title : "GEOPLAN",
//         footerTitle : "GEOPLAN",
//         parag : "Kadastr va Arxitektura xizmati",
//         footerParag : "Kadastr va Arxitektura xizmati",
//         nav1 : "Menyu",
//         footerNav1 : "Menyu",
//         nav2 : "Xizmatlar",
//         nav21 : "Xizmatlar",
//         nav11 : "Xizmatlar",
//         footerNav2 : "Xizmatlar",
//         nav3 : "Biz haqimizda",
//         nav31 : "Biz haqimizda",
//         footerNav3 : "Biz haqimizda",
//         nav4 : "Aloqa",  
//         nav41 : "Aloqa",  
//         footerNav4 : "Aloqa",  
//         title1 : "Xizmatlar",
//         titleNav1 : "Xizmatlar",
//         title2 : "Biz haqimizda",
//         titleNav2 : "Biz haqimizda",
//         title3 : "Foto lavhalar",
//         titleNav3 : "Foto lavhalar",
//         title4 : "Aloqa",
//         titleNav4 : "Aloqa",
//         workOrder : "Ish tartibi",
//         lunch : "Tushlik",
//         contact : "Bog'lanish",
//         week : "Dushanba-Shanba",
//         weekTime : "9:00 dan 18:00 gacha",
//         lunchTime : "13:00 dan 14:00 gacha",
//         headerTitle : "BOG'OT GEOPLAN",
//         headerParag : "Kadastr va Arxitektura xizmati",
//         headerItalic : "Sifatli kadastr va arxitektura xizmati bilan ta'minlaymiz.",
//         service1 : "Topografiya",
//         service2 : "Tekislikni aniqlash",
//         service3 : "Kadastr hujjat tayyorlash",
        
        
//     },
//     ru: {
//         title : "ГЕОПЛАН",
//         footerTitle : "ГЕОПЛАН",
//         parag : "Кадастр ва Архитектура хизмати",
//         footerParag : "Кадастр ва Архитектура хизмати",
//         nav1 : "Меню",
//         footerNav1 : "Меню",
//         nav2 : "Хизматлар",
//         nav21 : "Хизматлар",
//         nav11 : "Хизматлар",
//         footerNav2 : "Хизматлар",
//         nav3 : "Биз ҳақимизда",
//         nav31 : "Биз ҳақимизда",
//         footerNav3 : "Биз ҳақимизда",
//         nav4 : "Алоқа",
//         nav41 : "Алоқа",
//         footerNav4 : "Алоқа",
//         title1 : "Хизматлар",
//         titleNav1 : "Хизматлар",
//         title2 : "Биз ҳақимизда",
//         titleNav2 : "Биз ҳақимизда",
//         title3 : "Фото лавҳалар",
//         titleNav3 : "Фото лавҳалар",
//         title4 : "Алоқа",
//         titleNav4 : "Алоқа",
//         workOrder : "Иш тартиби",
//         lunch : "Тушлик",
//         contact : "Боғланиш",
//         week : "Душанба-Шанба",
//         weekTime : "9:00 дан 18:00 гача",
//         lunchTime : "13:00 дан 14:00 гача",
//         headerTitle : "БОҒОТ ГЕОПЛАН",
//         headerParag : "Кадастр ва Архитектура хизмати",
//         headerItalic : "Сифатли кадастр ва архитектура хизмати билан таъминлаймиз.",
//         service1 : "Топография",
//         service2 : "Текисликни аниқлаш",
//         service3 : "Кадастр ҳужжат тайёрлаш",

//     }
// }

// const languageSelectop = document.querySelector("select");
// let title = document.getElementById("title");

// languageSelectop.addEventListener("change", (event) => {
//     setLanguage(event.target.value)
// })

// const setLanguage = (language) => {
//     if(language == "ru"){
//         title.innerText = translations.ru.title;        
//         footerTitle.innerText = translations.ru.footerTitle;        
//         footerParag.innerText = translations.ru.footerParag;        
//         parag.innerText = translations.ru.parag;        
//         nav1.innerText = translations.ru.nav1;        
//         nav2.innerText = translations.ru.nav2;        
//         nav21.innerText = translations.ru.nav21;        
//         nav11.innerText = translations.ru.nav11;        
//         nav3.innerText = translations.ru.nav3;        
//         nav31.innerText = translations.ru.nav31;        
//         nav4.innerText = translations.ru.nav4;
//         nav41.innerText = translations.ru.nav41;
//         title1.innerText = translations.ru.title1;        
//         title2.innerText = translations.ru.title2;        
//         title3.innerText = translations.ru.title3;        
//         title4.innerText = translations.ru.title4;
//         footerNav1.innerText = translations.ru.footerNav1;
//         footerNav2.innerText = translations.ru.footerNav2;
//         footerNav3.innerText = translations.ru.footerNav3;
//         footerNav4.innerText = translations.ru.footerNav4;
//         titleNav1.innerText = translations.ru.titleNav1;
//         titleNav2.innerText = translations.ru.titleNav2;
//         titleNav3.innerText = translations.ru.titleNav3;
//         titleNav4.innerText = translations.ru.titleNav4;
//         workOrder.innerText = translations.ru.workOrder;
//         lunch.innerText = translations.ru.lunch;
//         contact.innerText = translations.ru.contact;
//         week.innerText = translations.ru.week;
//         weekTime.innerText = translations.ru.weekTime;
//         lunchTime.innerText = translations.ru.lunchTime;
//         headerTitle.innerText = translations.ru.headerTitle;
//         headerParag.innerText = translations.ru.headerParag;
//         headerItalic.innerText = translations.ru.headerItalic;
//         service1.innerText = translations.ru.service1;
//         service2.innerText = translations.ru.service2;
//         service3.innerText = translations.ru.service3;

//     }else if(language == "uz"){
//         title.innerText = translations.uz.title;
//         footerTitle.innerText = translations.uz.footerTitle;
//         footerParag.innerText = translations.uz.footerParag;
//         parag.innerText = translations.uz.parag;
//         nav1.innerText = translations.uz.nav1;        
//         nav2.innerText = translations.uz.nav2;        
//         nav21.innerText = translations.uz.nav21;        
//         nav11.innerText = translations.uz.nav11;        
//         nav3.innerText = translations.uz.nav3;        
//         nav31.innerText = translations.uz.nav31;        
//         nav4.innerText = translations.uz.nav4; 
//         nav41.innerText = translations.uz.nav41; 
//         title1.innerText = translations.uz.title1;        
//         title2.innerText = translations.uz.title2;        
//         title3.innerText = translations.uz.title3;        
//         title4.innerText = translations.uz.title4;
//         footerNav1.innerText = translations.uz.footerNav1;
//         footerNav2.innerText = translations.uz.footerNav2;
//         footerNav3.innerText = translations.uz.footerNav3;
//         footerNav4.innerText = translations.uz.footerNav4;
//         titleNav1.innerText = translations.uz.titleNav1;
//         titleNav2.innerText = translations.uz.titleNav2;
//         titleNav3.innerText = translations.uz.titleNav3;
//         titleNav4.innerText = translations.uz.titleNav4;
//         workOrder.innerText = translations.uz.workOrder;
//         lunch.innerText = translations.uz.lunch;
//         contact.innerText = translations.uz.contact;
//         week.innerText = translations.uz.week;
//         weekTime.innerText = translations.uz.weekTime;
//         lunchTime.innerText = translations.uz.lunchTime;
//         headerTitle.innerText = translations.uz.headerTitle;
//         headerParag.innerText = translations.uz.headerParag;
//         headerItalic.innerText = translations.uz.headerItalic;
//         service1.innerText = translations.uz.service1;
//         service2.innerText = translations.uz.service2;
//         service3.innerText = translations.uz.service3;

//     }
// }



 