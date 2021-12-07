Modal = {
    open(trem) {
        document
            .querySelector('.modal-overlay')
            .classList.add('active')
        function muda(obj) {
            obj.style.backgroundImage = getElementbyId;
            //obj.style.backgroundImage = "url('https://www.scriptbrasil.com.br/img/imgs_flash.gif')";
        }
    },
    close(){
        document
            .querySelector('.modal-overlay')
            .classList.remove('active')
    }
}