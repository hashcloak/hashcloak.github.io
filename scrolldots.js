// throttle function

let dotsThrottle = (func, wait) => {
    var context, args, result;
    let timeout = null;
    let previous = 0;
    let later = () => {
        previous = Date.now();
        timeout = 1000;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    }
    return () => {
        let now = Date.now();
        if (!previous) previous = now;
        let remaining = wait - (now - previous);
        context = this;

        // once done, reset vars
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;

        } else if (!timeout) {
            timeout = setTimeout(later, remaining)
        }
        return result;
    }
}

let scrollCtrl = () => {
    let d = document,
        dots = d.querySelectorAll('.scroll-indicator');

    if (dots.length) {
        const scrollDotTemplate = '<div class="scroll-indicator-controller"><span></span></div>';
        d.querySelector('body').lastElementChild.insertAdjacentHTML('afterend', scrollDotTemplate);

        // select ctrller we just made above.
        const scrollDotController = d.querySelector('.scroll-indicator-controller');

        // separate styles for mobile
        if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile' !== -1))) {
            scrollDotController.classList.add('scrollDotMobileView');
        }

        const scrollDotArray = Array.prototype.slice.call(dots);

        // for each dot, create a controller for it.
        scrollDotArray.forEach((dot, i) => {
            const dotId = dot.getAttribute('dot-id');

            let firstActiveClass = '';
            let markup = `<div class="${firstActiveClass}" 
                    data-dot-id="${dotId}" onclick="handleDotClick('${dotId}');">
                    <div></div>
                </div>`
            scrollDotController.lastElementChild.insertAdjacentHTML('afterend', markup)
        })


        let handleScroll = dotsThrottle(() => {
            // object holding the dotId and its scroll top value
            let dotScrollTops = {};


            // get the scroll top of each dot and save it to an object
            scrollDotArray.forEach(e => {
                const dotId = e.getAttribute('data-dot-id');
                const dotScrollTop = e.getBoundingClientRect().top;
                dotScrollTops[dotId] = dotScrollTop;
            });

            // get all the values in an array
            const dotOffsetValues = Object.keys(dotScrollTops).map(item => dotScrollTops[item])

            // get the minimum scroll top
            const dotOffsetMin = () => {
                const removeMinuses = dotOffsetValues.filter(x => x > -150);
                return Math.min.apply(null, removeMinuses);
            };

            // keys = dotId
            Object.keys(dotScrollTops).forEach(dot => {
                // if first dot 
                if (dotScrollTops[dot] > (dotOffsetMin() - 200)) {
                    d.querySelector(`[data-dot-id="${dot}"]`).classList.toggle('active');
                }
            });
        }, 750)

        window.onscroll = function () {
            handleScroll();
        }
    }
}


scrollCtrl();