/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/module/slider.js":
/*!*****************************!*\
  !*** ./js/module/slider.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function slider ({container,slide, nextArrow, prevArrow, totalCounter, currentCounter,wrapper, field}){
    // Slider

    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        btnNext = document.querySelector(nextArrow),
        btnPrev = document.querySelector(prevArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1,
        offset = 0;

    if(slides.length < 10){
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    }else{
        total.textContent = `${slides.length}`;
        current.textContent = `${slideIndex.length}`;
    }


    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide =>{
    slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];

    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for(let i = 0; i<slides.length; i++ ){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to',i+1);
        dot.classList.add('dot');

        if(i == 0){
        dot.style.opacity = 1;
        }

        dots.push(dot);
        indicators.append(dot);

    }

    function dotsOpacity(slideIndex){
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1; 
    }

    function currentValue(slideIndex){
        if (slides.length <10){
            current.textContent = `0${slideIndex}`;
        }else{
            current.textContent = `${slideIndex}`;
        }
    }

    function deleteNotDigits(string){
        return +string.replace(/\D/g,'');
    }

    btnNext.addEventListener('click', ()=>{
        if (offset == deleteNotDigits(width)*(slides.length - 1)){
            offset = 0;
        }else {
            offset += deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length){
            slideIndex = 1;
        }else{
            slideIndex++;
        }

        currentValue(slideIndex);
        dotsOpacity(slideIndex);      
    });

    btnPrev.addEventListener('click', ()=>{
        if (offset == 0){
            offset = deleteNotDigits(width)*(slides.length - 1);
        }else {
            offset -= deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1){
            slideIndex = slides.length;
        }else{
            slideIndex--;
        }

        currentValue(slideIndex);
        dotsOpacity(slideIndex);    
    });

    dots.forEach(dot=>{
        dot.addEventListener('click',(e)=>{
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width)*(slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            currentValue(slideIndex);
            dotsOpacity(slideIndex);   
        });
    });
}
console.log('hi');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/slider */ "./js/module/slider.js");
;

(0,_module_slider__WEBPACK_IMPORTED_MODULE_0__.default)({
    container:'.offer__slider',
    slide: '.offer__slide',
    nextArrow : '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter : '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'

});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map