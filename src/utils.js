;(function () {
    var utils = {
        cookie: {
            getCookie: function (key) {
                var cookie = document.cookie,
                    reg = new RegExp('(?:^|;\\s*)' + key + '=([^;]+)(?:$|;\\s*)', 'g'),
                    match = reg.exec(cookie);

                return match === null ? '' : match[1];
            }
        },
        url: {
            getParam: function (key) {
                var url = decodeURIComponent(location.href),
                    reg = new RegExp('(?:[&\\?])(?:' + key + ')=([^#&]+)', 'g'),
                    match = reg.exec(url);

                return match === null ? '' : match[1];
            }
        },
        text: {
            getStrLen: function (str) {
                return String(str).replace(/[^\x00-\xff]/g,"ci").length;
            },
            truncateText: function (str, width) {
                var len = this.getStrLen(str),
                    ret = '',
                    i = 0,
                    l = str.length,
                    w = 0,
                    code, c;

                if (len <= width) {
                    return str;
                }

                for (; i < l; i++) {
                    c = str.charAt(i);
                    code = str.charCodeAt(i);

                    if (code > 255) {
                        w += 2;
                    } else {
                        w += 1;
                    }

                    if (w < width - 2) {
                        ret += c;
                    }
                }

                return ret + '...';
            }
        },
        array: {
            shuffle: function (array) {
                var len = array.length,
                    temp, i;

                while (len) {
                    i = Math.floor(Math.random() * len--);

                    temp = array[len];
                    array[len] = array[i];
                    array[i] = temp;
                }

                return array;
            }
        }
    };

    window.utils = window.utils || utils;
})();
