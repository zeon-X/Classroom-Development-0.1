const dsmenu = [
    {
        id: 1,
        title: "CSE 1201 DS Mondol Sir Class 1",
        link: "https://www.youtube.com/embed/5eghJHg7NwM",
    },
    {
        id: 2,
        title: "CSE 1201 DS Mondol Sir Class 2",
        link: "https://www.youtube.com/embed/UelizuWbFnc",
    },
    {
        id: 3,
        title: "CSE 1201 DS Mondol Sir Class 3",
        link: "https://www.youtube.com/embed/8IISemdH53w",
    },
    {
        id: 4,
        title: "CSE 1201 DS Mondol Sir Class 4",
        link: "https://www.youtube.com/embed/OSqN0LH4KsE",
    },
    {
        id: 5,
        title: "CSE 1201 DS Mondol Sir Class 5",
        link: "https://www.youtube.com/embed/vOtDqAOTUUo",
    },
    {
        id: 6,
        title: "CSE 1201 DS Mondol Sir Class 6",
        link: "https://www.youtube.com/embed/OkSlWjcOp_I",
    },
    {
        id: 7,
        title: "CSE 1201 DS Mondol Sir Class 7",
        link: "https://www.youtube.com/embed/K_hWn2mOfWc",
    },
    {
        id: 8,
        title: "CSE 1201 DS Mondol Sir Class 8",
        link: "https://www.youtube.com/embed/r_Ezpffj9Dw",
    },
    {
        id: 9,
        title: "CSE 1201 DS Mondol Sir Class 9",
        link: "https://www.youtube.com/embed/hVu3UcNwGCc",
    },
    {
        id: 10,
        title: "CSE 1201 DS Mondol Sir Class 10",
        link: "https://www.youtube.com/embed/gnMc7dEPxWA",
    },
    {
        id: 11,
        title: "CSE 1201 DS Mondol Sir Class 11",
        link: "https://www.youtube.com/embed/9_AuLbh3BMU",
    },
    {
        id: 12,
        title: "CSE 1201 DS Mondol Sir Class 12",
        link: "https://www.youtube.com/embed/D_mg0YEEY4c",
    },
    {
        id: 13,
        title: "CSE 1201 DS Mondol Sir Class 13",
        link: "https://www.youtube.com/embed/A6X_e_tR96I",
    },

];
const rtmenu = [
    {
        id: 1,
        title: "CSE 1201 DS RT Sir Class 1",
        link: "https://www.youtube.com/embed/IX_hfW5vffI",
    },
    {
        id: 2,
        title: "CSE 1201 DS RT Sir Class 2",
        link: "https://www.youtube.com/embed/c30sCkSG9lo",
    },
    {
        id: 3,
        title: "CSE 1201 DS RT Sir Class 3",
        link: "https://www.youtube.com/embed/8hgx7qQm6UM",
    },
    {
        id: 4,
        title: "CSE 1201 DS RT Sir Class 4",
        link: "https://www.youtube.com/embed/rBaWoKr7jrk",
    },
    {
        id: 5,
        title: "LAB CSE 1202 DS RT Sir Class 5",
        link: "https://www.youtube.com/embed/U31ePpvRn3s",
    },
    {
        id: 6,
        title: "CSE 1201 DS RT Sir Class 6",
        link: "https://www.youtube.com/embed/EUaMoH-lPz4",
    },
    {
        id: 7,
        title: "CSE 1201 DS RT Sir Class 7",
        link: "https://www.youtube.com/embed/5BIeEKHaZKQ",
    },
    {
        id: 8,
        title: "LAB CSE 1202 DS RT Sir Class 8",
        link: "https://www.youtube.com/embed/AG8ylmoOke0",
    },
    {
        id: 9,
        title: "CSE 1201 DS RT Sir Class 9",
        link: "https://www.youtube.com/embed/dr4tnPBkk4U",
    },
    {
        id: 10,
        title: "LAB CSE 1202 DS RT Sir Class 10",
        link: "https://www.youtube.com/embed/8ZG_IUhlN2U",
    },
    {
        id: 11,
        title: "CSE 1201 DS RT Sir Class 11",
        link: "https://www.youtube.com/embed/CFwFq3wzd-0",
    },
    {
        id: 12,
        title: "CSE 1201 DS RT Sir Class 12",
        link: "https://www.youtube.com/embed/3qU0TpJZvak",
    },
    {
        id: 13,
        title: "LAB CSE 1202 DS RT Sir Class 13",
        link: "https://www.youtube.com/embed/jYmKMG4hZeQ",
    },
    {
        id: 14,
        title: "CSE 1201 DS RT Sir Class 13",
        link: "https://www.youtube.com/embed/tObKkn2Cgc",
    },

];

console.log("listening..");

///*

const ds = document.querySelector(".mondol-sir");
const rt = document.querySelector(".rt-sir");


const go = document.querySelector(".heading-cng");
const videoload = document.querySelector(".load-video");

function DSvideoplaylist() {
    let displayMenu = dsmenu.map(function (item) {
        //console.log(item);

        return `<li><button id="${item.id}" class="ds-class-video" >${item.title}</button></li> `;
    });
    displayMenu = displayMenu.join("");
    //console.log(displayMenu);
    ds.innerHTML = displayMenu;
}
function RTvideoplaylist() {
    let displayMenu = rtmenu.map(function (item) {
        //console.log(item);

        return `<li><button  id="${item.id}"  class="rt-class-video" >${item.title}</button></li> `;
    });
    displayMenu = displayMenu.join("");
    //console.log(displayMenu);
    rt.innerHTML = displayMenu;
}



window.addEventListener("DOMContentLoaded", function () {
    DSvideoplaylist();
    RTvideoplaylist();

    const videolink1 = document.querySelectorAll(".ds-class-video");
    const videolink2 = document.querySelectorAll(".rt-class-video");
    videolink1.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            let id = parseInt(e.currentTarget.id); id = id - 1; // id = mane koto no element er doc pass lgbe

            go.innerHTML = dsmenu[id].title;
            videoload.setAttribute("src", `${dsmenu[id].link}`);

        });
    });

    videolink2.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            let id = parseInt(e.currentTarget.id); id = id - 1; // id = mane koto no element er doc pass lgbe

            go.innerHTML = rtmenu[id].title;
            videoload.setAttribute("src", `${rtmenu[id].link}`);

        });
    });

});


//*/



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





