let main__content = document.querySelector(".main__content")
let main = document.querySelector(".main")
if (window.innerWidth <= 1050){
 main.classList.add("mobile__main")
}

if (window.innerHeight > window.innerWidth * 1.3){
    document.querySelector("main").style.maxHeight = "70vh";
}


let menu_Init = document.querySelector("#menu-Init")
let menu_Event = document.querySelector("#menu-Event")
let menu_Btn = document.querySelector("#header_btn")
let main__dekor = document.querySelector(".main__dekor")
let logo = document.querySelector("nav .logo")
let top_btn = document.querySelector(".top")
let footer_logo = document.querySelector(".footer__top .logo")
let footer_Init = document.querySelector("#footer-Init")
let footer_Event = document.querySelector("#footer-Event")

menu_Init.addEventListener("click", ()=>{
    document.querySelector(".Initiatives").scrollIntoView()
})

menu_Btn.addEventListener("click", ()=>{
    document.querySelector(".Initiatives").scrollIntoView()
})

main__dekor.addEventListener("click", ()=>{
    document.querySelector(".Initiatives").scrollIntoView()
})
footer_Init.addEventListener("click", ()=>{
    document.querySelector(".Initiatives").scrollIntoView()
})


logo.addEventListener("click", ()=>{
    document.querySelector("main").scrollIntoView()
})

top_btn.addEventListener("click", ()=>{
    document.querySelector("main").scrollIntoView()
})

footer_logo.addEventListener("click", ()=>{
    document.querySelector("main").scrollIntoView()
})


footer_Event.addEventListener("click", ()=>{
    document.querySelector(".events").scrollIntoView()
})
menu_Event.addEventListener("click", ()=>{
    document.querySelector(".events").scrollIntoView()
})



let modal_more = document.querySelector(".modal__more")
let modal_title = document.querySelector("#modal-more-title")
let modal_text = document.querySelector("#modal-more-text")
let close_modal = document.querySelector(".modal-close")
let modal_sub= document.querySelector(".modal-sub")
let more_btns = document.querySelectorAll(".more")

titles = {
    "more1": '<img src="img/h3-dekor.svg" alt="">Пособия и выплаты',
    "more2": '<img src="img/h3-dekor.svg" alt="">Досрочная пенсия',
    "more3": '<img src="img/h3-dekor.svg" alt="">Поддержка в трудовых отношениях ',
    "more4": '<img src="img/h3-dekor.svg" alt="">Дополнительное образование',
    "more5": '<img src="img/h3-dekor.svg" alt="">Бесплатное посещение мест культуры',
    "more6": '<img src="img/h3-dekor.svg" alt="">Памятный знак',
}

texts = {
    "more1": 'Пособие при рождении ребенка в 2024 году — разовая выплата, предоставляемая одному из родителей. При рождении двух и более детей данное пособие выплачивается на каждого ребенка. Размер пособия при рождении ребенка составляет с 1 февраля 2024 года 24 604 рублей 30 копеек.',
    "more2": 'Многодетные мамы могут выйти на пенсию досрочно. Возраст возможного выхода на пенсию зависит от количества детей: мамы троих детей могут выйти раньше установленного пенсион ного возраста на три года (в 57 лет); мамы четверых детей — раньше на четыре года (в 56 лет); мамы пяти и более детей выходят на пенсию в 50 лет без учета повышения пенсионного возраста.',
    "more3": 'Многодетные родители в России обладают рядом льгот в сфере трудовых правоотношений. Им предоставляются сокращенный рабочий день, дополнительные оплачиваемые отпуска и гибкий график работы. Работодатели обязаны предлагать возможность удаленной работы или неполного рабочего времени. Кроме того, многодетные родители защищены от увольнения по инициативе работодателя без серьезных оснований.',
    "more4": 'Многодетные семьи в России получают значительные льготы в сфере образования. Детям из таких семей предоставляется приоритетное право на зачисление в детские сады и школы, а также бесплатное питание в образовательных учреждениях. Кроме того, они могут рассчитывать на льготное или бесплатное обучение в высших учебных заведениях.',
    "more5": 'Многодетные семьи в России пользуются особыми привилегиями при посещении культурных учреждений. Им предоставляются значительные скидки или бесплатный вход в музеи, театры, галереи и на различные выставки. Это позволяет детям приобщаться к культурным и историческим ценностям страны без значительных финансовых затрат.',
    "more6": 'Памятная медаль "Родительская слава" учреждена в России для награждения родителей, воспитывающих семь и более детей. Обладатели медали получают не только моральное поощрение, но и дополнительные льготы, включая единовременные выплаты и другие социальные преимущества.',
}

for (elem of more_btns){
    elem.addEventListener("click", (e)=>{
        modal_title.innerHTML = titles[e.target.id]
        modal_text.textContent = texts[e.target.id]
        modal_more.style.display = 'block'
        modal_sub.style.display = "block"
        document.querySelector("html").style.overflowY = "hidden"
    })
}

close_modal.addEventListener("click", ()=>{
    modal_sub.style.display = "none";
    document.querySelector("html").style.overflowY = "auto"
    modal_more.style.display = "none"
})

modal_sub.addEventListener("click", ()=>{
    modal_sub.style.display = "none";
    document.querySelector("html").style.overflowY = "auto"
    modal_more.style.display = "none"
})


let demo = new CountUp('#dk1', 7945);
if (!demo.error) {
  demo.start();
} else {
  console.error(demo.error);
}
