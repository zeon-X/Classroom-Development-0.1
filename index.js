const pomenu = [
    {
        id: 1,
        title: "Abdul Hadi Sir Class 1",
        link: "https://youtu.be/FX4XQzeuESw",
    },
    {
        id: 2,
        title: "Abdul Hadi Sir Class 2",
        link: "https://youtu.be/tISV-Ebqgy8",
    },
    {
        id: 3,
        title: "Abdul Hadi Sir Class 3",
        link: "https://youtu.be/rHO4QjVcAQ4",
    },
    {
        id: 4,
        title: "Abdul Hadi Sir Class 4",
        link: "https://youtu.be/GazGpSLRdds",
    },
    {
        id: 5,
        title: "Abdul Hadi Sir Class 5",
        link: "https://youtu.be/5zJq70G4RDo",
    },
    {
        id: 6,
        title: "Abdul Hadi Sir Class 6",
        link: "https://youtu.be/eVEVbZj7y3I",
    },
    {
        id: 7,
        title: "Abdul Hadi Sir Class 7",
        link: "https://youtu.be/kuAldQW1rb8",
    },
    {
        id: 8,
        title: "Abdul Hadi Sir Class 8",
        link: "https://youtu.be/gWZwelXK01M",
    },
    {
        id: 9,
        title: "Abdul Hadi Sir Class 9",
        link: "https://youtu.be/knrUylRWojI",
    },
    {
        id: 10,
        title: "Abdul Hadi Sir Class 10",
        link: "https://youtu.be/rQ062TTeop8",
    },

];

const sommenu = [
    {
        id: 1,
        title: "Tanveer Sir Class 1",
        link: "https://youtu.be/d37xEgeGOtc",
    },
    {
        id: 2,
        title: "Tanveer Sir Class 2",
        link: "https://youtu.be/czad_4YaG7s",
    },
    {
        id: 3,
        title: "Tanveer Sir Class 3",
        link: "https://youtu.be/hvEPeaJ9Uzg",
    },
    {
        id: 4,
        title: "Tanveer Sir Class 4",
        link: "https://youtu.be/bsz0PuUIyVA",
    },
    {
        id: 5,
        title: "Tanveer Sir Class 5",
        link: "https://youtu.be/X86bHe5XwHM",
    },

];

const apmenu = [
    {
        id: 1,
        title: "Tanveer Sir Class 1",
        link: "https://youtu.be/K6bo5Ue1Du0",
    },
    {
        id: 2,
        title: "Tanveer Sir Class 2",
        link: "https://youtu.be/zrTC2ZmPIXc",
    },
    {
        id: 3,
        title: "Tanveer Sir Class 3",
        link: "https://youtu.be/VVnE_XqmOtg",
    },
    {
        id: 4,
        title: "Tanveer Sir Class 4",
        link: "https://youtu.be/T9y12my8Tdk",
    },
    {
        id: 5,
        title: "Tanveer Sir Class 5",
        link: "https://youtu.be/JR9mKjBUg_U",
    },
    {
        id: 6,
        title: "Tanveer Sir Class 6",
        link: "https://youtu.be/EpxEN0NMT70",
    },

];

const waomenu = [{
    id: 1,
    title: "Tanveer Sir Class 1",
    link: "https://youtu.be/tGXmeE01FAc",
}

];


const sectionSOM = document.querySelector(".som-video-list");
const sectionAP = document.querySelector(".ap-video-list");
const sectionWAO = document.querySelector(".wao-video-list");
const sectionPO = document.querySelector(".po-video-list");
const go = document.querySelector(".video-name");

function SOMvideoplaylist() {
    let displayMenu = sommenu.map(function (item) {
        //console.log(item);

        return `<li><button id="${item.id}" class="som-class-video listen">${item.title}</button></li> `;
    });
    displayMenu = displayMenu.join("");
    //console.log(displayMenu);
    sectionSOM.innerHTML = displayMenu;
}

function APvideoplaylist() {
    let displayMenu = apmenu.map(function (item) {
        //console.log(item);

        return `<li><button  id="${item.id}" class="ap-class-video  listen">${item.title}</button></li> `;
    });
    displayMenu = displayMenu.join("");
    //console.log(displayMenu);
    sectionAP.innerHTML = displayMenu;
}

function WAOvideoplaylist() {
    let displayMenu = waomenu.map(function (item) {
        //console.log(item);

        return `<li><button  id="${item.id}" class="wao-class-video  listen">${item.title}</button></li> `;
    });
    displayMenu = displayMenu.join("");
    //console.log(displayMenu);
    sectionWAO.innerHTML = displayMenu;
}

function POvideoplaylist() {
    let displayMenu = pomenu.map(function (item) {
        //console.log(item);

        return `<li><button  id="${item.id}" class="po-class-video  listen">${item.title}</button></li> `;
    });
    displayMenu = displayMenu.join("");
    //console.log(displayMenu);
    sectionPO.innerHTML = displayMenu;
}


//const sectionCenter = document.querySelector(#videosection);

window.addEventListener("DOMContentLoaded", function () {
    SOMvideoplaylist();
    APvideoplaylist();
    WAOvideoplaylist();
    POvideoplaylist();

    const videolink = document.querySelectorAll(".som-class-video");
    //console.log(videolink);
    videolink.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            let id = parseInt(e.currentTarget.id); id = id - 1; // id = mane koto no element er doc pass lgbe
            const a = sommenu[id];
            const objA = Object.entries(a);
            console.log(objA[1]);


            let displayMenu = objA.map(function (item) {
                return `<h1>${item[1]}</h1>
                <ul class="nav__links">
                    <li><button>Previous</button></li>
                    <li><button>Next</button></li>

                </ul>`;
            });
            displayMenu = displayMenu.join("");
            go.innerHTML = displayMenu;




        });
    });

});





// traversing the dom
const plusbtns = document.querySelectorAll(".plus");
plusbtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.currentTarget.classList.add("hide");

        const ter_minus = e.currentTarget.parentElement.children[2];
        ter_minus.classList.remove("hide");

        const ter_ul_list = e.currentTarget.parentElement.parentElement.children[1].children[0];
        ter_ul_list.classList.remove("hide");
        //console.log(ter_ul_list.classList);
    });
});

const minusbtns = document.querySelectorAll(".minus");
minusbtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.currentTarget.classList.add("hide");

        const ter_plus = e.currentTarget.parentElement.children[1];
        ter_plus.classList.remove("hide");

        const ter_ul_list = e.currentTarget.parentElement.parentElement.children[1].children[0];
        ter_ul_list.classList.add("hide");
        //console.log(ter_ul_list.classList);
    });
});





