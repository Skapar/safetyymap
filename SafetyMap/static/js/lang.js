window.addEventListener('DOMContentLoaded', function() {
    const referringPage = document.referrer;

    let language = 'en'; // Default language is English

    if (referringPage.includes(ruPageUrl)) {
        language = 'ru'; // Russian
    } else if (referringPage.includes(kzPageUrl)) {
        language = 'kz'; // Kazakh
    }

    const roomName = document.querySelector('.firstroom h5');
    const roomsecond = document.querySelector('.secondroom h5');
    const roomthird = document.querySelector('.thirdroom h5');
    const roomfourth = document.querySelector('.fourthroom h5');
    const roomfifth = document.querySelector('.fifthroom h5');
    const roomsixth = document.querySelector('.sixthroom h5');
    const roomseventh = document.querySelector('.seventhroom h5');

    const roomfirst_four = document.querySelector('.firstroom_fourthfloor h5');
    const roomsecond_four = document.querySelector('.secondroom_fourthfloor h5');
    const roomthird_four = document.querySelector('.thirdroom_fourthfloor h5');
    const roomfourth_four = document.querySelector('.fourthroom_fourthfloor h5');
    const roomfifth_four = document.querySelector('.fifthroom_fourthfloor h5');
    const roomsixth_four = document.querySelector('.sixthroom_fourthfloor h5');
    const roomseventh_four = document.querySelector('.seventhroom_fourthfloor h5');
    const roomeightth_four = document.querySelector('.eigththroom_fourthfloor h5');
    const roomninth_four = document.querySelector('.ninthroom_fourthfloor h5');

    const roomtole = document.querySelectorAll('.tolebix')

    const roompanfilfour = document.querySelectorAll('.panfilovfour')
    const roomkazybekfour = document.querySelectorAll('.kazybekfour')
    const roomabylkfour = document.querySelectorAll('.abfour')
    const roomtolebifour = document.querySelectorAll('.tolebifour')

    const roomtolebithree = document.querySelectorAll('.tolebithree')
    const roomtbpanfthree = document.querySelectorAll('.tolebipanfilovthree')
    const roompanfilthree = document.querySelectorAll('.panfilovthree')

    const roomfirst_thirdfl = document.querySelectorAll('.first_thirdfloor h5')
    const roomsecond_thirdfl = document.querySelectorAll('.second_thirdfloor h5')
    const roomthird_thirdfl = document.querySelectorAll('.third_thirdfloor h5')
    const roomfourth_thirdfl = document.querySelectorAll('.fourth_thirdfloor h5')
    const roomfifth_thirdfl = document.querySelectorAll('.fifth_thirdfloor h5')


    

    const roomtolebitwo = document.querySelectorAll('.tolebitwo')
    const roompanfitwo = document.querySelectorAll('.panfilovtwo')
    const roomkazybektwo = document.querySelectorAll('.kazybektwo')
    const roomabylktwo = document.querySelectorAll('.abtwo')

    const roomfirst_firstfl = document.querySelectorAll('.first_secondfloor h5')
    const roomsecond_secondfl = document.querySelectorAll('.second_secondfloor h5')
    const roomthird_secondfl = document.querySelectorAll('.third_secondfloor h5')
    const roomfourth_fourthfl = document.querySelectorAll('.fourth_secondfloor h5')
    const roomfifth_fifthfl = document.querySelectorAll('.fifth_secondfloor h5')

    const roomtolebione = document.querySelectorAll('.tolebione')
    const roompanfione = document.querySelectorAll('.panfilovone')
    const roomkazybekone = document.querySelectorAll('.kazybekone')
    const roomabylkone = document.querySelectorAll('.abone')

    const roomtolebizero = document.querySelectorAll('.tolebizero')
    if (language === 'ru') {
        roomtole.forEach((element) => {
            element.textContent = 'Толе би, 5-й этаж';
        });
        roomName.textContent = 'Отдел Учета, Отчетности и Финансов';
        roomsecond.textContent = 'Кассовый аппарат';
        roomthird.textContent = 'Отдел Договоров и Закупок';
        roomfourth.textContent = 'Офис';
        roomfifth.textContent = 'Отдел развития персонала';
        roomsixth.textContent = 'Юридический отдел';
        roomseventh.textContent = 'Финансовый директор';


        roompanfilfour.forEach((element) => {
            element.textContent = 'Панфилова, 4-й этаж';
        });
        roomkazybekfour.forEach((element) => {
            element.textContent = 'Казыбек Би, 4-й этаж';
        });
        roomabylkfour.forEach((element) => {
            element.textContent = 'Абылай Хана, 4-й этаж';
        });
        roomtolebifour.forEach((element) => {
            element.textContent = 'Толе Би, 4-й этаж';
        });
        roomfirst_four.textContent = 'Международная школа экономики';
        roomsecond_four.textContent = 'Департамент международизации';
        roomthird_four.textContent = 'Школа бизнеса';
        roomfourth_four.textContent = 'Вице-ректор по инфраструктуре';
        roomfifth_four.textContent = 'Вице-ректор по науке и инновациям';
        roomsixth_four.textContent = 'Вице-ректор по академическим вопросам';
        roomseventh_four.textContent = 'Вице-ректор по социальным и образовательным вопросам';
        roomeightth_four.textContent = 'Ректор';
        roomninth_four.textContent = 'Зал Аль-Фараби';




        roomtolebithree.forEach((element) => {
            element.textContent = 'Толе Би, 3-й этаж';
        });
        roomtbpanfthree.forEach((element) => {
            element.textContent = 'Толе Би, 3-й этаж Панфилова, 3-й этаж';
        });
        roompanfilthree.forEach((element) => {
            element.textContent = 'Панфилова, 3-й этаж';
        });
        roomfirst_thirdfl.textContent = 'ШКОЛА ЭНЕРГЕТИКИ И НЕФТЕГАЗОВОЙ ПРОМЫШЛЕННОСТИ';
        roomsecond_thirdfl.textContent = 'ШКОЛА ГЕОЛОГИИ';
        roomthird_thirdfl.textContent = 'ШКОЛА ЕСТЕСТВЕННЫХ И СОЦИАЛЬНЫХ НАУК';
        roomfourth_thirdfl.textContent = 'ШКОЛА ПРИМЕНЕННОЙ МАТЕМАТИКИ';
        roomfifth_thirdfl.textContent = 'МЕДИЦИНСКАЯ СЛУЖБА';


        roomtolebitwo.forEach((element) => {
            element.textContent = 'Толе Би, 2-й этаж';
        });
        roompanfitwo.forEach((element) => {
            element.textContent = 'Панфилова, 2-й этаж';
        });
        roomkazybektwo.forEach((element) => {
            element.textContent = 'Казыбек Би, 2-й этаж';
        });
        roomabylktwo.forEach((element) => {
            element.textContent = 'Абылай хана, 2-й этаж';
        });
        
        roomtolebione.forEach((element) => {
            element.textContent = 'Толе Би, 1-й этаж';
        });
        roompanfione.forEach((element) => {
            element.textContent = 'Панфилова, 1-й этаж';
        });
        roomkazybekone.forEach((element) => {
            element.textContent = 'Казыбек Би, 1-й этаж';
        });
        roomabylkone.forEach((element) => {
            element.textContent = 'Абылай хана, 1-й этаж';
        });

        roomtolebizero.forEach((element) => {
            element.textContent = 'Толе Би, 0-й этаж';
        });





    } 
    else if (language === 'kz') {
        roomName.textContent = 'Отдел 667'
        roomtole.forEach((element) => {
            element.textContent = 'Толе би, 5-й этаж';
        });
        
        // Adjust content for Kazakh
    } else {
    }
});
