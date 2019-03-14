export default class Icon {
    constructor() {
        this.loadIcons();
    }

    loadIcons(){
        let iconHouse = document.querySelector('.hidden-svg-document');
        if ( iconHouse ) {
            let url = iconHouse.dataset.iconspath;
            let ajax = new XMLHttpRequest();

            ajax.open('GET', url, true);
            ajax.send();
            ajax.onload = function (e) {
                iconHouse.innerHTML = ajax.responseText;
            };
        }
    }
}