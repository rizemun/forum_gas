
module.exports = {
    init() {
        const request = new XMLHttpRequest();
        let url = this.settings.adress;
        request.open('GET', url, true);

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                document.querySelector('span').innerHTML =  request.responseText;
            }
        });
        request.send();

    },

    settings: {
        adress:"https://script.google.com/macros/s/AKfycbzDuxkR1ym4l7aTJ1V9IG_nSw-kN2ISb7QU8WvffjTheT_IWu80/exec"
    },


};
