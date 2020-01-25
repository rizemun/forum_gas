
module.exports = {
    init() {
        const request = new XMLHttpRequest();
        let url = this.settings.adress;
        request.open('GET', url, true);

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                    const res = JSON.parse(request.responseText);

                for (let i = 0; i < res.length; i++) {
                    setData(res.titles[i], res.articles[i]);
                }


                setData()
            }
        });
        request.send();

    },

    settings: {
        adress:"https://script.google.com/macros/s/AKfycbzDuxkR1ym4l7aTJ1V9IG_nSw-kN2ISb7QU8WvffjTheT_IWu80/exec"
    },


};


function setData(title, content) {
    const article = document.querySelector('#loading-article');
    let titleElem = article.content.querySelector('[data-title]');
    let contentElem = article.content.querySelector('[data-content]');

    titleElem.innerHTML = title;
    contentElem.innerHTML = content;

    const list = document.querySelector("[data-loaded-text-list]");
    const clone = document.importNode(article.content, true);
    list.appendChild(clone);
}
