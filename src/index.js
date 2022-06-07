/**
 * NitePagination
 * v1.0.1 2022/06/07
 * https://github.com/nite1984/nite-pagination
 * 
 * Released under the MIT License
 */
const NitePagination = (function () {
    'use strict';

    /**/
    const Constructor = function (options) {

        const defaults = {
            containerSelector: null,
            pageSelectCallback: null,
            maxPages: 0,
            alwaysShow: true,
            prevPages: 3,
            nextPages: 3,
        };

        const settings = Object.assign({}, defaults, options);
        let curPage = 1;
        let paginationUl;

        /**/
        const renderPagination = function () {

            paginationUl.innerHTML = '';

            if (!settings.maxPages) {
                return;
            }

            const firstPageLink = makePageElement('&#8592;', 1);
            const prevLink = makePageElement('&laquo;', curPage - 1);
            const nextLink = makePageElement('&raquo;', curPage + 1);
            const lastPageLink = makePageElement('&#8594;', settings.maxPages);

            let prevPages = [];
            for (let i = curPage - 1; i > 0 && prevPages.length + 1 <= settings.prevPages; i--) {
                prevPages.push(makePageElement(i, i));
            }

            let nextPages = [];
            for (let i = curPage + 1; i <= settings.maxPages && nextPages.length + 1 <= settings.nextPages; i++) {
                nextPages.push(makePageElement(i, i));
            }

            paginationUl.appendChild(firstPageLink);
            paginationUl.appendChild(prevLink);

            prevPages = prevPages.reverse();
            for (let i = 0; i < prevPages.length; i++) {
                paginationUl.appendChild(prevPages[i]);
            }

            paginationUl.appendChild(makePageElement(curPage, curPage));

            for (let i = 0; i < nextPages.length; i++) {
                paginationUl.appendChild(nextPages[i]);
            }

            paginationUl.appendChild(nextLink);
            paginationUl.appendChild(lastPageLink);
        }

        /**/
        const makePageElement = function (label, page) {

            let li = document.createElement('li');
            li.classList.add('page-item');

            if (page === curPage && parseInt(label)) {
                li.classList.add('active');
            }

            if (page < 1 || page > settings.maxPages || (!parseInt(label) && curPage === page)) {
                li.classList.add('disabled');
            }

            let a = document.createElement('a');
            a.classList.add('page-link');
            a.href = '#';
            a.dataset.page = page;
            a.innerHTML = label;

            li.appendChild(a);

            return li;
        }

        /**/
        const setCurrentPage = function (page) {
            curPage = parseInt(page);

            if (settings.pageSelectCallback !== null && typeof settings.pageSelectCallback === 'function') {
                settings.pageSelectCallback(curPage);
            }
        }

        /**
         * INIT
         */
        const paginationContainer = document.querySelector(settings.containerSelector);

        if (!paginationContainer) {
            throw new Error('Invalid container element');
        }

        paginationUl = document.createElement('ul');
        paginationUl.classList.add('pagination');

        paginationContainer.appendChild(paginationUl);
        renderPagination();

        //Selezione pagina
        paginationContainer.addEventListener('click', function (e) {
            e.preventDefault();

            let pageItem = e.target.closest('.page-link');
            if (pageItem) {
                setCurrentPage(parseInt(pageItem.dataset.page));
                renderPagination();
            }
        }, false);

        /**
         * Public Interface
         */
        const publicAPIs = {};

        /**/
        publicAPIs.getCurrentPage = function () {
            return curPage;
        }

        /**/
        publicAPIs.setMaxPages = function (maxPages) {
            settings.maxPages = parseInt(maxPages);
            setCurrentPage(1);
            renderPagination();
        }

        return publicAPIs;
    };

    return Constructor;
})();

module.exports = NitePagination;