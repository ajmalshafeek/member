/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/core/js/custom/apps/chat/chat.js":
/*!***********************************************************!*\
  !*** ./resources/assets/core/js/custom/apps/chat/chat.js ***!
  \***********************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTAppChat = function () {\n  // Private functions\n  var handeSend = function handeSend(element) {\n    if (!element) {\n      return;\n    }\n\n    // Handle send\n    KTUtil.on(element, '[data-kt-element=\"input\"]', 'keydown', function (e) {\n      if (e.keyCode == 13) {\n        handeMessaging(element);\n        e.preventDefault();\n        return false;\n      }\n    });\n    KTUtil.on(element, '[data-kt-element=\"send\"]', 'click', function (e) {\n      handeMessaging(element);\n    });\n  };\n  var handeMessaging = function handeMessaging(element) {\n    var messages = element.querySelector('[data-kt-element=\"messages\"]');\n    var input = element.querySelector('[data-kt-element=\"input\"]');\n    if (input.value.length === 0) {\n      return;\n    }\n    var messageOutTemplate = messages.querySelector('[data-kt-element=\"template-out\"]');\n    var messageInTemplate = messages.querySelector('[data-kt-element=\"template-in\"]');\n    var message;\n\n    // Show example outgoing message\n    message = messageOutTemplate.cloneNode(true);\n    message.classList.remove('d-none');\n    message.querySelector('[data-kt-element=\"message-text\"]').innerText = input.value;\n    input.value = '';\n    messages.appendChild(message);\n    messages.scrollTop = messages.scrollHeight;\n    setTimeout(function () {\n      // Show example incoming message\n      message = messageInTemplate.cloneNode(true);\n      message.classList.remove('d-none');\n      message.querySelector('[data-kt-element=\"message-text\"]').innerText = 'Thank you for your awesome support!';\n      messages.appendChild(message);\n      messages.scrollTop = messages.scrollHeight;\n    }, 2000);\n  };\n\n  // Public methods\n  return {\n    init: function init(element) {\n      handeSend(element);\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  // Init inline chat messenger\n  KTAppChat.init(document.querySelector('#kt_chat_messenger'));\n\n  // Init drawer chat messenger\n  KTAppChat.init(document.querySelector('#kt_drawer_chat_messenger'));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2FwcHMvY2hhdC9jaGF0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsSUFBSUEsU0FBUyxHQUFHLFlBQVk7RUFDM0I7RUFDQSxJQUFJQyxTQUFTLEdBQUcsU0FBWkEsU0FBUyxDQUFhQyxPQUFPLEVBQUU7SUFDbEMsSUFBSSxDQUFDQSxPQUFPLEVBQUU7TUFDYjtJQUNEOztJQUVBO0lBQ0FDLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsU0FBUyxFQUFFLFVBQVNHLENBQUMsRUFBRTtNQUN0RSxJQUFJQSxDQUFDLENBQUNDLE9BQU8sSUFBSSxFQUFFLEVBQUU7UUFDcEJDLGNBQWMsQ0FBQ0wsT0FBTyxDQUFDO1FBQ3ZCRyxDQUFDLENBQUNHLGNBQWMsRUFBRTtRQUVsQixPQUFPLEtBQUs7TUFDYjtJQUNELENBQUMsQ0FBQztJQUVGTCxNQUFNLENBQUNDLEVBQUUsQ0FBQ0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE9BQU8sRUFBRSxVQUFTRyxDQUFDLEVBQUU7TUFDbkVFLGNBQWMsQ0FBQ0wsT0FBTyxDQUFDO0lBQ3hCLENBQUMsQ0FBQztFQUNILENBQUM7RUFFRCxJQUFJSyxjQUFjLEdBQUcsU0FBakJBLGNBQWMsQ0FBWUwsT0FBTyxFQUFFO0lBQ3RDLElBQUlPLFFBQVEsR0FBR1AsT0FBTyxDQUFDUSxhQUFhLENBQUMsOEJBQThCLENBQUM7SUFDcEUsSUFBSUMsS0FBSyxHQUFHVCxPQUFPLENBQUNRLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQztJQUV4RCxJQUFJQyxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxLQUFLLENBQUMsRUFBRztNQUMzQjtJQUNKO0lBRU4sSUFBSUMsa0JBQWtCLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtDQUFrQyxDQUFDO0lBQ25GLElBQUlLLGlCQUFpQixHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQ0FBaUMsQ0FBQztJQUNqRixJQUFJTSxPQUFPOztJQUVYO0lBQ0FBLE9BQU8sR0FBR0Ysa0JBQWtCLENBQUNHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDNUNELE9BQU8sQ0FBQ0UsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2xDSCxPQUFPLENBQUNOLGFBQWEsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDVSxTQUFTLEdBQUdULEtBQUssQ0FBQ0MsS0FBSztJQUNqRkQsS0FBSyxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNoQkgsUUFBUSxDQUFDWSxXQUFXLENBQUNMLE9BQU8sQ0FBQztJQUM3QlAsUUFBUSxDQUFDYSxTQUFTLEdBQUdiLFFBQVEsQ0FBQ2MsWUFBWTtJQUcxQ0MsVUFBVSxDQUFDLFlBQVc7TUFDckI7TUFDQVIsT0FBTyxHQUFHRCxpQkFBaUIsQ0FBQ0UsU0FBUyxDQUFDLElBQUksQ0FBQztNQUMzQ0QsT0FBTyxDQUFDRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDbENILE9BQU8sQ0FBQ04sYUFBYSxDQUFDLGtDQUFrQyxDQUFDLENBQUNVLFNBQVMsR0FBRyxxQ0FBcUM7TUFDM0dYLFFBQVEsQ0FBQ1ksV0FBVyxDQUFDTCxPQUFPLENBQUM7TUFDN0JQLFFBQVEsQ0FBQ2EsU0FBUyxHQUFHYixRQUFRLENBQUNjLFlBQVk7SUFDM0MsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNULENBQUM7O0VBRUQ7RUFDQSxPQUFPO0lBQ05FLElBQUksRUFBRSxjQUFTdkIsT0FBTyxFQUFFO01BQ3ZCRCxTQUFTLENBQUNDLE9BQU8sQ0FBQztJQUNiO0VBQ1AsQ0FBQztBQUNGLENBQUMsRUFBRTs7QUFFSDtBQUNBQyxNQUFNLENBQUN1QixrQkFBa0IsQ0FBQyxZQUFZO0VBQ3JDO0VBQ0cxQixTQUFTLENBQUN5QixJQUFJLENBQUNFLFFBQVEsQ0FBQ2pCLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOztFQUUvRDtFQUNBVixTQUFTLENBQUN5QixJQUFJLENBQUNFLFFBQVEsQ0FBQ2pCLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQ3BFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvY29yZS9qcy9jdXN0b20vYXBwcy9jaGF0L2NoYXQuanM/YjU3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUQXBwQ2hhdCA9IGZ1bmN0aW9uICgpIHtcclxuXHQvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG5cdHZhciBoYW5kZVNlbmQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG5cdFx0aWYgKCFlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBIYW5kbGUgc2VuZFxyXG5cdFx0S1RVdGlsLm9uKGVsZW1lbnQsICdbZGF0YS1rdC1lbGVtZW50PVwiaW5wdXRcIl0nLCAna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0aWYgKGUua2V5Q29kZSA9PSAxMykge1xyXG5cdFx0XHRcdGhhbmRlTWVzc2FnaW5nKGVsZW1lbnQpO1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRLVFV0aWwub24oZWxlbWVudCwgJ1tkYXRhLWt0LWVsZW1lbnQ9XCJzZW5kXCJdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRoYW5kZU1lc3NhZ2luZyhlbGVtZW50KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dmFyIGhhbmRlTWVzc2FnaW5nID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0dmFyIG1lc3NhZ2VzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1lbGVtZW50PVwibWVzc2FnZXNcIl0nKTtcclxuXHRcdHZhciBpbnB1dCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cImlucHV0XCJdJyk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPT09IDAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cdFx0dmFyIG1lc3NhZ2VPdXRUZW1wbGF0ZSA9IG1lc3NhZ2VzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWVsZW1lbnQ9XCJ0ZW1wbGF0ZS1vdXRcIl0nKTtcclxuXHRcdHZhciBtZXNzYWdlSW5UZW1wbGF0ZSA9IG1lc3NhZ2VzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWVsZW1lbnQ9XCJ0ZW1wbGF0ZS1pblwiXScpO1xyXG5cdFx0dmFyIG1lc3NhZ2U7XHJcblx0XHRcclxuXHRcdC8vIFNob3cgZXhhbXBsZSBvdXRnb2luZyBtZXNzYWdlXHJcblx0XHRtZXNzYWdlID0gbWVzc2FnZU91dFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuXHRcdG1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcblx0XHRtZXNzYWdlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWVsZW1lbnQ9XCJtZXNzYWdlLXRleHRcIl0nKS5pbm5lclRleHQgPSBpbnB1dC52YWx1ZTtcdFx0XHJcblx0XHRpbnB1dC52YWx1ZSA9ICcnO1xyXG5cdFx0bWVzc2FnZXMuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XHJcblx0XHRtZXNzYWdlcy5zY3JvbGxUb3AgPSBtZXNzYWdlcy5zY3JvbGxIZWlnaHQ7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcdFx0XHRcclxuXHRcdFx0Ly8gU2hvdyBleGFtcGxlIGluY29taW5nIG1lc3NhZ2VcclxuXHRcdFx0bWVzc2FnZSA9IG1lc3NhZ2VJblRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcdFx0XHRcclxuXHRcdFx0bWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuXHRcdFx0bWVzc2FnZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1lbGVtZW50PVwibWVzc2FnZS10ZXh0XCJdJykuaW5uZXJUZXh0ID0gJ1RoYW5rIHlvdSBmb3IgeW91ciBhd2Vzb21lIHN1cHBvcnQhJztcclxuXHRcdFx0bWVzc2FnZXMuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XHJcblx0XHRcdG1lc3NhZ2VzLnNjcm9sbFRvcCA9IG1lc3NhZ2VzLnNjcm9sbEhlaWdodDtcclxuXHRcdH0sIDIwMDApO1xyXG5cdH1cclxuXHJcblx0Ly8gUHVibGljIG1ldGhvZHNcclxuXHRyZXR1cm4ge1xyXG5cdFx0aW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRoYW5kZVNlbmQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cdH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG5cdC8vIEluaXQgaW5saW5lIGNoYXQgbWVzc2VuZ2VyXHJcbiAgICBLVEFwcENoYXQuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfY2hhdF9tZXNzZW5nZXInKSk7XHJcblxyXG5cdC8vIEluaXQgZHJhd2VyIGNoYXQgbWVzc2VuZ2VyXHJcblx0S1RBcHBDaGF0LmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2RyYXdlcl9jaGF0X21lc3NlbmdlcicpKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEFwcENoYXQiLCJoYW5kZVNlbmQiLCJlbGVtZW50IiwiS1RVdGlsIiwib24iLCJlIiwia2V5Q29kZSIsImhhbmRlTWVzc2FnaW5nIiwicHJldmVudERlZmF1bHQiLCJtZXNzYWdlcyIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dCIsInZhbHVlIiwibGVuZ3RoIiwibWVzc2FnZU91dFRlbXBsYXRlIiwibWVzc2FnZUluVGVtcGxhdGUiLCJtZXNzYWdlIiwiY2xvbmVOb2RlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJzZXRUaW1lb3V0IiwiaW5pdCIsIm9uRE9NQ29udGVudExvYWRlZCIsImRvY3VtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/apps/chat/chat.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/apps/chat/chat.js"]();
/******/ 	
/******/ })()
;