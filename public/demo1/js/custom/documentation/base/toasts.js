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

/***/ "./resources/assets/core/js/custom/documentation/base/toasts.js":
/*!**********************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/base/toasts.js ***!
  \**********************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTBaseToastDemos = function () {\n  // Private functions\n  var exampleToggle = function exampleToggle() {\n    // Select elements\n    var button = document.getElementById('kt_docs_toast_toggle_button');\n    var toastElement = document.getElementById('kt_docs_toast_toggle');\n\n    // Get toast instance --- more info: https://getbootstrap.com/docs/5.1/components/toasts/#getinstance\n    var toast = bootstrap.Toast.getOrCreateInstance(toastElement);\n\n    // Handle button click\n    button.addEventListener('click', function (e) {\n      e.preventDefault();\n\n      // Toggle toast to show --- more info: https://getbootstrap.com/docs/5.1/components/toasts/#show\n      toast.show();\n    });\n  };\n  var exampleStack = function exampleStack() {\n    // Select elements\n    var button = document.getElementById('kt_docs_toast_stack_button');\n    var container = document.getElementById('kt_docs_toast_stack_container');\n    var targetElement = document.querySelector('[data-kt-docs-toast=\"stack\"]'); // Use CSS class or HTML attr to avoid duplicating ids\n\n    // Remove base element markup\n    targetElement.parentNode.removeChild(targetElement);\n\n    // Handle button click\n    button.addEventListener('click', function (e) {\n      e.preventDefault();\n\n      // Create new toast element\n      var newToast = targetElement.cloneNode(true);\n      container.append(newToast);\n\n      // Create new toast instance --- more info: https://getbootstrap.com/docs/5.1/components/toasts/#getorcreateinstance\n      var toast = bootstrap.Toast.getOrCreateInstance(newToast);\n\n      // Toggle toast to show --- more info: https://getbootstrap.com/docs/5.1/components/toasts/#show\n      toast.show();\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleToggle();\n      exampleStack();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTBaseToastDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vYmFzZS90b2FzdHMuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBRyxZQUFZO0VBQ2pDO0VBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhLEdBQVM7SUFDeEI7SUFDQSxJQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLDZCQUE2QixDQUFDO0lBQ3JFLElBQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDQyxjQUFjLENBQUMsc0JBQXNCLENBQUM7O0lBRXBFO0lBQ0EsSUFBTUUsS0FBSyxHQUFHQyxTQUFTLENBQUNDLEtBQUssQ0FBQ0MsbUJBQW1CLENBQUNKLFlBQVksQ0FBQzs7SUFFL0Q7SUFDQUgsTUFBTSxDQUFDUSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsQ0FBQyxFQUFJO01BQ2xDQSxDQUFDLENBQUNDLGNBQWMsRUFBRTs7TUFFbEI7TUFDQU4sS0FBSyxDQUFDTyxJQUFJLEVBQUU7SUFDaEIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZLEdBQVM7SUFDdkI7SUFDQSxJQUFNWixNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLDRCQUE0QixDQUFDO0lBQ3BFLElBQU1XLFNBQVMsR0FBR1osUUFBUSxDQUFDQyxjQUFjLENBQUMsK0JBQStCLENBQUM7SUFDMUUsSUFBTVksYUFBYSxHQUFHYixRQUFRLENBQUNjLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7O0lBRTlFO0lBQ0FELGFBQWEsQ0FBQ0UsVUFBVSxDQUFDQyxXQUFXLENBQUNILGFBQWEsQ0FBQzs7SUFFbkQ7SUFDQWQsTUFBTSxDQUFDUSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsQ0FBQyxFQUFJO01BQ2xDQSxDQUFDLENBQUNDLGNBQWMsRUFBRTs7TUFFbEI7TUFDQSxJQUFNUSxRQUFRLEdBQUdKLGFBQWEsQ0FBQ0ssU0FBUyxDQUFDLElBQUksQ0FBQztNQUM5Q04sU0FBUyxDQUFDTyxNQUFNLENBQUNGLFFBQVEsQ0FBQzs7TUFFMUI7TUFDQSxJQUFNZCxLQUFLLEdBQUdDLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxtQkFBbUIsQ0FBQ1csUUFBUSxDQUFDOztNQUUzRDtNQUNBZCxLQUFLLENBQUNPLElBQUksRUFBRTtJQUNoQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsT0FBTztJQUNIO0lBQ0FVLElBQUksRUFBRSxnQkFBWTtNQUNkdEIsYUFBYSxFQUFFO01BQ2ZhLFlBQVksRUFBRTtJQUNsQjtFQUNKLENBQUM7QUFDTCxDQUFDLEVBQUU7O0FBRUg7QUFDQVUsTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQyxZQUFZO0VBQ2xDekIsZ0JBQWdCLENBQUN1QixJQUFJLEVBQUU7QUFDM0IsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Jhc2UvdG9hc3RzLmpzPzM3OWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbmNvbnN0IEtUQmFzZVRvYXN0RGVtb3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgY29uc3QgZXhhbXBsZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgICAgICAvLyBTZWxlY3QgZWxlbWVudHNcclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZG9jc190b2FzdF90b2dnbGVfYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgdG9hc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2RvY3NfdG9hc3RfdG9nZ2xlJyk7XHJcblxyXG4gICAgICAgIC8vIEdldCB0b2FzdCBpbnN0YW5jZSAtLS0gbW9yZSBpbmZvOiBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjEvY29tcG9uZW50cy90b2FzdHMvI2dldGluc3RhbmNlXHJcbiAgICAgICAgY29uc3QgdG9hc3QgPSBib290c3RyYXAuVG9hc3QuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0b2FzdEVsZW1lbnQpO1xyXG5cclxuICAgICAgICAvLyBIYW5kbGUgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSB0b2FzdCB0byBzaG93IC0tLSBtb3JlIGluZm86IGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMS9jb21wb25lbnRzL3RvYXN0cy8jc2hvd1xyXG4gICAgICAgICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhhbXBsZVN0YWNrID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFNlbGVjdCBlbGVtZW50c1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9kb2NzX3RvYXN0X3N0YWNrX2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9kb2NzX3RvYXN0X3N0YWNrX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1kb2NzLXRvYXN0PVwic3RhY2tcIl0nKTsgLy8gVXNlIENTUyBjbGFzcyBvciBIVE1MIGF0dHIgdG8gYXZvaWQgZHVwbGljYXRpbmcgaWRzXHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBiYXNlIGVsZW1lbnQgbWFya3VwXHJcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhcmdldEVsZW1lbnQpO1xyXG5cclxuICAgICAgICAvLyBIYW5kbGUgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgdG9hc3QgZWxlbWVudFxyXG4gICAgICAgICAgICBjb25zdCBuZXdUb2FzdCA9IHRhcmdldEVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKG5ld1RvYXN0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgdG9hc3QgaW5zdGFuY2UgLS0tIG1vcmUgaW5mbzogaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4xL2NvbXBvbmVudHMvdG9hc3RzLyNnZXRvcmNyZWF0ZWluc3RhbmNlXHJcbiAgICAgICAgICAgIGNvbnN0IHRvYXN0ID0gYm9vdHN0cmFwLlRvYXN0LmdldE9yQ3JlYXRlSW5zdGFuY2UobmV3VG9hc3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIHRvYXN0IHRvIHNob3cgLS0tIG1vcmUgaW5mbzogaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4xL2NvbXBvbmVudHMvdG9hc3RzLyNzaG93XHJcbiAgICAgICAgICAgIHRvYXN0LnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGVUb2dnbGUoKTtcclxuICAgICAgICAgICAgZXhhbXBsZVN0YWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICBLVEJhc2VUb2FzdERlbW9zLmluaXQoKTtcclxufSk7Il0sIm5hbWVzIjpbIktUQmFzZVRvYXN0RGVtb3MiLCJleGFtcGxlVG9nZ2xlIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvYXN0RWxlbWVudCIsInRvYXN0IiwiYm9vdHN0cmFwIiwiVG9hc3QiLCJnZXRPckNyZWF0ZUluc3RhbmNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNob3ciLCJleGFtcGxlU3RhY2siLCJjb250YWluZXIiLCJ0YXJnZXRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIm5ld1RvYXN0IiwiY2xvbmVOb2RlIiwiYXBwZW5kIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/base/toasts.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/base/toasts.js"]();
/******/ 	
/******/ })()
;