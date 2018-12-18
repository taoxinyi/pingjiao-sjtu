// ==UserScript==
// @name         SJTU Pingjiao checkbox autoclick
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  auto click the last checkbox from each question. You have to type the suggestions(longer than 3 after trimming) manually.
// @match        http://pingjiao.sjtu.edu.cn/
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    let previousHash = undefined
    setInterval(function() {
        let currentHash = location.hash
        if (currentHash !== previousHash) {
            previousHash = currentHash;
            if (currentHash.startsWith('#/answer-paper/'))
                setTimeout(
                    function() {
                        $('.option-container').each(function() {
                            $(this).click()
                        })
                    }, 1500);
        }
    }, 1000);
})();