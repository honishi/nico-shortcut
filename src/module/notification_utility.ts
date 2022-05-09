import Notiflix from "notiflix";

export const showNotification = (text: string, width: number = 380, duration: number = 1000) => {
    // https://github.com/notiflix/Notiflix
    Notiflix.Notify.info(
        text,
        {
            width: `${width}px`,
            position: 'center-center',
            cssAnimationDuration: 300,
            timeout: duration,
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