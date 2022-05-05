import Notiflix from "notiflix";

export const showPopup = (text: string) => {
    // https://github.com/notiflix/Notiflix
    Notiflix.Notify.info(
        text,
        {
            width: '380px',
            position: 'center-center',
            zindex: 100000,
            timeout: 500,
            useIcon: false,
            distance: '50px',
            fontSize: '36px',
            showOnlyTheLastOne: true,
            className: 'notiflix-nico-shortcut',
            info: {
                background: '#fff',
                textColor: '#333',
            }
        },
    )
}