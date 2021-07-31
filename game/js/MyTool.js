(function (w) {
    w.myTool = {
        $: function (id) {
            return typeof id === 'string' ? document.getElementById(id) : null;
        },
        scroll: function () {
            if (window.pageYOffset !== null) { // 最新的浏览器
                return {
                    "top": window.pageYOffset,
                    "left": window.pageXOffset
                }
            } else if (document.compatMode === 'CSS1Compat') { // W3C
                return {
                    "top": document.documentElement.scrollTop,
                    "left": document.documentElement.scrollLeft
                }
            }
            return {
                "top": document.body.scrollTop,
                "left": document.body.scrollLeft
            }
        },
        client: function () {
            if (window.innerWidth) { // ie9+ 最新的浏览器
                return {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            } else if (document.compatMode === "CSS1Compat") { // W3C
                return {
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight
                }
            }
            return {
                width: document.body.clientWidth,
                height: document.body.clientHeight
            }
        }
    };
})(window);

