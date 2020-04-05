const d = document;
const win = window;

const ProgressOnScroll = () => {
    win.addEventListener('scroll', () => {
        const scroll = d.querySelector(".progbar"),
            w = d.documentElement.scrollTop,
            h = d.body.scrollHeight,
            height = Math.ceil((w / (h - win.innerHeight)) * 100);
        scroll.style.height = `${height}%`;
    });
}

ProgressOnScroll();

const icon = d.querySelector('.icon')

icon.addEventListener('click', () => {
    icon.classList.toggle('active');
})
