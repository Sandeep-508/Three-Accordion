let accord_items = document.querySelectorAll(".boxes");

let text = document.querySelector(".just_text");
let another_text = document.querySelector(".another_ac");
let another_svg = document.querySelector(".svg");
another_svg.style.transform = "rotate(180deg)";
another_text.style.display = "block";

let svg = document.querySelector(".svg_icon");
text.style.display = "block";
svg.style.transform = "rotate(180deg)";


accord_items.forEach(element => {
    let disp_text = element.querySelector(".just_text");
    let svg = element.querySelector(".svg_icon");

    element.addEventListener("click", () => {
        accord_items.forEach(otherelement => {
            if (otherelement !== element) {
                let disp = otherelement.querySelector(".just_text");
                let svg = otherelement.querySelector(".svg_icon");
                disp.style.display = "none";
                svg.style.transform = "rotate(0deg)";
            }
        });

        let displayStyle = window.getComputedStyle(disp_text).display;
        if (displayStyle === "none") {
            disp_text.style.display = "block";
            svg.style.transform = "rotate(180deg)";
        } else {
            disp_text.style.display = "none";
            svg.style.transform = "rotate(0deg)";
        }
    });
});

let accordion = document.querySelectorAll(".ac_item");
let text_an = document.querySelector(".typo");
let fir_svg = document.querySelector(".svg_dif");
fir_svg.innerHTML = `<svg width="7" height="3" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.6 2.576V0.344H6.84V2.576H0.6Z" fill="black"/>
            </svg>`;
text_an.style.display = "block";
accordion.forEach(element => {
    let icon = element.querySelector(".svg_dif");
    let text_disp = element.querySelector(".typo");

    element.addEventListener("click", () => {

        accordion.forEach(otherelement => {
            if (otherelement !== element) {
                let otherIcon = otherelement.querySelector(".svg_dif");
                let disp = otherelement.querySelector(".typo");
                disp.style.display = "none";
                otherIcon.innerHTML = `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.88 10.568V6.224H0.56V4.616H4.88V0.271999H6.512V4.616H10.856V6.224H6.512V10.568H4.88Z"
                                fill="black" />
                        </svg>`;
            }
        });

        let styledisp = window.getComputedStyle(text_disp).display;
        if (styledisp === "none") {
            text_disp.style.display = "block";
            icon.innerHTML = `<svg width="7" height="3" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.6 2.576V0.344H6.84V2.576H0.6Z" fill="black"/>
            </svg>`;
        } else {
            text_disp.style.display = "none";
            icon.innerHTML = `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.88 10.568V6.224H0.56V4.616H4.88V0.271999H6.512V4.616H10.856V6.224H6.512V10.568H4.88Z" fill="black"/>
            </svg>`;
        }
    });
});

