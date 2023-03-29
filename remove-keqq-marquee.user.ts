// ==UserScript==
// @name         remove-keqq-marquee
// @namespace    http://hurrieam.github.io/
// @version      1.0
// @description  移除腾讯课堂视频画面中观看者信息跑马灯的油猴脚本
// @author       hurrieam
// @match        https://ke.qq.com/course/*
// @match        https://ke.qq.com/webcourse/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=qq.com
// @grant        none
// @require      https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js
// ==/UserScript==

(() => {
    setInterval(() => {
        $('.loki-container>div').remove();
        console.log('remove-keqq-marquee activated! \nby hurrieam on march 30 2023');
    });
})();
