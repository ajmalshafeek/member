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

/***/ "./resources/assets/core/js/custom/documentation/forms/clipboard.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/forms/clipboard.js ***!
  \**************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTFormsClipboard = function () {\n  // Shared variables\n  var clipboard;\n\n  // Private functions\n  var example1 = function example1() {\n    // Select elements\n    var target = document.getElementById('kt_clipboard_1');\n    var button = target.nextElementSibling;\n\n    // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/\n    clipboard = new ClipboardJS(button, {\n      target: target,\n      text: function text() {\n        return target.value;\n      }\n    });\n\n    // Success action handler\n    clipboard.on('success', function (e) {\n      var currentLabel = button.innerHTML;\n\n      // Exit label update when already in progress\n      if (button.innerHTML === 'Copied!') {\n        return;\n      }\n\n      // Update button label\n      button.innerHTML = \"Copied!\";\n\n      // Revert button label after 3 seconds\n      setTimeout(function () {\n        button.innerHTML = currentLabel;\n      }, 3000);\n    });\n  };\n  var example2 = function example2() {\n    // Select elements\n    var target = document.getElementById('kt_clipboard_2');\n    var button = target.nextElementSibling;\n\n    // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/\n    clipboard = new ClipboardJS(button, {\n      target: target,\n      text: function text() {\n        return target.innerText;\n      }\n    });\n\n    // Success action handler\n    clipboard.on('success', function (e) {\n      var currentLabel = button.innerHTML;\n\n      // Exit label update when already in progress\n      if (button.innerHTML === 'Copied!') {\n        return;\n      }\n\n      // Update button label\n      button.innerHTML = \"Copied!\";\n\n      // Revert button label after 3 seconds\n      setTimeout(function () {\n        button.innerHTML = currentLabel;\n      }, 3000);\n    });\n  };\n  var example3 = function example3() {\n    // Select element\n    var target = document.getElementById('kt_clipboard_3');\n\n    // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/\n    clipboard = new ClipboardJS(target);\n\n    // Success action handler\n    clipboard.on('success', function (e) {\n      var currentLabel = target.innerHTML;\n\n      // Exit label update when already in progress\n      if (target.innerHTML === 'Copied!') {\n        return;\n      }\n\n      // Update button label\n      target.innerHTML = \"Copied!\";\n\n      // Revert button label after 3 seconds\n      setTimeout(function () {\n        target.innerHTML = currentLabel;\n      }, 3000);\n    });\n  };\n  var example4 = function example4() {\n    // Select elements\n    var target = document.getElementById('kt_clipboard_4');\n    var button = target.nextElementSibling;\n\n    // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/\n    clipboard = new ClipboardJS(button, {\n      target: target,\n      text: function text() {\n        return target.innerHTML;\n      }\n    });\n\n    // Success action handler\n    clipboard.on('success', function (e) {\n      var _target$classList;\n      var checkIcon = button.querySelector('.bi.bi-check');\n      var svgIcon = button.querySelector('.svg-icon');\n\n      // Exit check icon when already showing\n      if (checkIcon) {\n        return;\n      }\n\n      // Create check icon\n      checkIcon = document.createElement('i');\n      checkIcon.classList.add('bi');\n      checkIcon.classList.add('bi-check');\n      checkIcon.classList.add('fs-2x');\n\n      // Append check icon\n      button.appendChild(checkIcon);\n\n      // Highlight target\n      var classes = ['text-success', 'fw-boldest'];\n      (_target$classList = target.classList).add.apply(_target$classList, classes);\n\n      // Highlight button\n      button.classList.add('btn-success');\n\n      // Hide copy icon\n      svgIcon.classList.add('d-none');\n\n      // Revert button label after 3 seconds\n      setTimeout(function () {\n        var _target$classList2;\n        // Remove check icon\n        svgIcon.classList.remove('d-none');\n\n        // Revert icon\n        button.removeChild(checkIcon);\n\n        // Remove target highlight\n        (_target$classList2 = target.classList).remove.apply(_target$classList2, classes);\n\n        // Remove button highlight\n        button.classList.remove('btn-success');\n      }, 3000);\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      example1();\n      example2();\n      example3();\n      example4();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsClipboard.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZm9ybXMvY2xpcGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsSUFBSUEsZ0JBQWdCLEdBQUcsWUFBWTtFQUMvQjtFQUNBLElBQUlDLFNBQVM7O0VBRWI7RUFDQSxJQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBUSxHQUFlO0lBQ3ZCO0lBQ0EsSUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN4RCxJQUFNQyxNQUFNLEdBQUdILE1BQU0sQ0FBQ0ksa0JBQWtCOztJQUV4QztJQUNBTixTQUFTLEdBQUcsSUFBSU8sV0FBVyxDQUFDRixNQUFNLEVBQUU7TUFDaENILE1BQU0sRUFBRUEsTUFBTTtNQUNkTSxJQUFJLEVBQUUsZ0JBQVk7UUFDZCxPQUFPTixNQUFNLENBQUNPLEtBQUs7TUFDdkI7SUFDSixDQUFDLENBQUM7O0lBRUY7SUFDQVQsU0FBUyxDQUFDVSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVVDLENBQUMsRUFBRTtNQUNqQyxJQUFNQyxZQUFZLEdBQUdQLE1BQU0sQ0FBQ1EsU0FBUzs7TUFFckM7TUFDQSxJQUFJUixNQUFNLENBQUNRLFNBQVMsS0FBSyxTQUFTLEVBQUU7UUFDaEM7TUFDSjs7TUFFQTtNQUNBUixNQUFNLENBQUNRLFNBQVMsR0FBRyxTQUFTOztNQUU1QjtNQUNBQyxVQUFVLENBQUMsWUFBWTtRQUNuQlQsTUFBTSxDQUFDUSxTQUFTLEdBQUdELFlBQVk7TUFDbkMsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNaLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxJQUFJRyxRQUFRLEdBQUcsU0FBWEEsUUFBUSxHQUFlO0lBQ3ZCO0lBQ0EsSUFBTWIsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN4RCxJQUFNQyxNQUFNLEdBQUdILE1BQU0sQ0FBQ0ksa0JBQWtC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QUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDOztNQUVuQztNQUNBSCxPQUFPLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQzs7TUFFL0I7TUFDQVYsVUFBVSxDQUFDLFlBQVk7UUFBQTtRQUNuQjtRQUNBTyxPQUFPLENBQUNFLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQzs7UUFFbEM7UUFDQXRCLE1BQU0sQ0FBQ3VCLFdBQVcsQ0FBQ1QsU0FBUyxDQUFDOztRQUU3QjtRQUNBLHNCQUFBakIsTUFBTSxDQUFDcUIsU0FBUyxFQUFDSSxNQUFNLDJCQUFJRCxPQUFPLENBQUM7O1FBRW5DO1FBQ0FyQixNQUFNLENBQUNrQixTQUFTLENBQUNJLE1BQU0sQ0FBQyxhQUFhLENBQUM7TUFDMUMsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNaLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxPQUFPO0lBQ0g7SUFDQUUsSUFBSSxFQUFFLGdCQUFZO01BQ2Q1QixRQUFRLEVBQUU7TUFDVmMsUUFBUSxFQUFFO01BQ1ZFLFFBQVEsRUFBRTtNQUNWQyxRQUFRLEVBQUU7SUFDZDtFQUNKLENBQUM7QUFDTCxDQUFDLEVBQUU7O0FBRUg7QUFDQVksTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQyxZQUFZO0VBQ2xDaEMsZ0JBQWdCLENBQUM4QixJQUFJLEVBQUU7QUFDM0IsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2NsaXBib2FyZC5qcz8xMjVjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RGb3Jtc0NsaXBib2FyZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFNoYXJlZCB2YXJpYWJsZXNcclxuICAgIHZhciBjbGlwYm9hcmQ7XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlMSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBTZWxlY3QgZWxlbWVudHNcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfY2xpcGJvYXJkXzEnKTtcclxuICAgICAgICBjb25zdCBidXR0b24gPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgICAgICAvLyBJbml0IGNsaXBib2FyZCAtLSBmb3IgbW9yZSBpbmZvLCBwbGVhc2UgcmVhZCB0aGUgb2ZmaWNhbCBkb2N1bWVudGF0aW9uOiBodHRwczovL2NsaXBib2FyZGpzLmNvbS9cclxuICAgICAgICBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkSlMoYnV0dG9uLCB7XHJcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICB0ZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFN1Y2Nlc3MgYWN0aW9uIGhhbmRsZXJcclxuICAgICAgICBjbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TGFiZWwgPSBidXR0b24uaW5uZXJIVE1MO1xyXG5cclxuICAgICAgICAgICAgLy8gRXhpdCBsYWJlbCB1cGRhdGUgd2hlbiBhbHJlYWR5IGluIHByb2dyZXNzXHJcbiAgICAgICAgICAgIGlmIChidXR0b24uaW5uZXJIVE1MID09PSAnQ29waWVkIScpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIGJ1dHRvbiBsYWJlbFxyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gXCJDb3BpZWQhXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXZlcnQgYnV0dG9uIGxhYmVsIGFmdGVyIDMgc2Vjb25kc1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBjdXJyZW50TGFiZWw7XHJcbiAgICAgICAgICAgIH0sIDMwMDApXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGV4YW1wbGUyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFNlbGVjdCBlbGVtZW50c1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9jbGlwYm9hcmRfMicpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG4gICAgICAgIC8vIEluaXQgY2xpcGJvYXJkIC0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSByZWFkIHRoZSBvZmZpY2FsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vY2xpcGJvYXJkanMuY29tL1xyXG4gICAgICAgIGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmRKUyhidXR0b24sIHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgIHRleHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFN1Y2Nlc3MgYWN0aW9uIGhhbmRsZXJcclxuICAgICAgICBjbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TGFiZWwgPSBidXR0b24uaW5uZXJIVE1MO1xyXG5cclxuICAgICAgICAgICAgLy8gRXhpdCBsYWJlbCB1cGRhdGUgd2hlbiBhbHJlYWR5IGluIHByb2dyZXNzXHJcbiAgICAgICAgICAgIGlmIChidXR0b24uaW5uZXJIVE1MID09PSAnQ29waWVkIScpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIGJ1dHRvbiBsYWJlbFxyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gXCJDb3BpZWQhXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXZlcnQgYnV0dG9uIGxhYmVsIGFmdGVyIDMgc2Vjb25kc1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBjdXJyZW50TGFiZWw7XHJcbiAgICAgICAgICAgIH0sIDMwMDApXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGV4YW1wbGUzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFNlbGVjdCBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2NsaXBib2FyZF8zJyk7XHJcblxyXG4gICAgICAgIC8vIEluaXQgY2xpcGJvYXJkIC0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSByZWFkIHRoZSBvZmZpY2FsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vY2xpcGJvYXJkanMuY29tL1xyXG4gICAgICAgIGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmRKUyh0YXJnZXQpO1xyXG5cclxuICAgICAgICAvLyBTdWNjZXNzIGFjdGlvbiBoYW5kbGVyXHJcbiAgICAgICAgY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudExhYmVsID0gdGFyZ2V0LmlubmVySFRNTDtcclxuXHJcbiAgICAgICAgICAgIC8vIEV4aXQgbGFiZWwgdXBkYXRlIHdoZW4gYWxyZWFkeSBpbiBwcm9ncmVzc1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmlubmVySFRNTCA9PT0gJ0NvcGllZCEnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBidXR0b24gbGFiZWxcclxuICAgICAgICAgICAgdGFyZ2V0LmlubmVySFRNTCA9IFwiQ29waWVkIVwiO1xyXG5cclxuICAgICAgICAgICAgLy8gUmV2ZXJ0IGJ1dHRvbiBsYWJlbCBhZnRlciAzIHNlY29uZHNcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuaW5uZXJIVE1MID0gY3VycmVudExhYmVsO1xyXG4gICAgICAgICAgICB9LCAzMDAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBleGFtcGxlNCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBTZWxlY3QgZWxlbWVudHNcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfY2xpcGJvYXJkXzQnKTtcclxuICAgICAgICBjb25zdCBidXR0b24gPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgICAgICAvLyBJbml0IGNsaXBib2FyZCAtLSBmb3IgbW9yZSBpbmZvLCBwbGVhc2UgcmVhZCB0aGUgb2ZmaWNhbCBkb2N1bWVudGF0aW9uOiBodHRwczovL2NsaXBib2FyZGpzLmNvbS9cclxuICAgICAgICBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkSlMoYnV0dG9uLCB7XHJcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICB0ZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmlubmVySFRNTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTdWNjZXNzIGFjdGlvbiBoYW5kbGVyXHJcbiAgICAgICAgY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIGNoZWNrSWNvbiA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuYmkuYmktY2hlY2snKTtcclxuICAgICAgICAgICAgdmFyIHN2Z0ljb24gPSBidXR0b24ucXVlcnlTZWxlY3RvcignLnN2Zy1pY29uJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBFeGl0IGNoZWNrIGljb24gd2hlbiBhbHJlYWR5IHNob3dpbmdcclxuICAgICAgICAgICAgaWYgKGNoZWNrSWNvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgY2hlY2sgaWNvblxyXG4gICAgICAgICAgICBjaGVja0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgICAgIGNoZWNrSWNvbi5jbGFzc0xpc3QuYWRkKCdiaScpO1xyXG4gICAgICAgICAgICBjaGVja0ljb24uY2xhc3NMaXN0LmFkZCgnYmktY2hlY2snKTtcclxuICAgICAgICAgICAgY2hlY2tJY29uLmNsYXNzTGlzdC5hZGQoJ2ZzLTJ4Jyk7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgY2hlY2sgaWNvblxyXG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoY2hlY2tJY29uKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhpZ2hsaWdodCB0YXJnZXRcclxuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IFsndGV4dC1zdWNjZXNzJywgJ2Z3LWJvbGRlc3QnXTtcclxuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgYnV0dG9uXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tc3VjY2VzcycpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGlkZSBjb3B5IGljb25cclxuICAgICAgICAgICAgc3ZnSWNvbi5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJldmVydCBidXR0b24gbGFiZWwgYWZ0ZXIgMyBzZWNvbmRzXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGNoZWNrIGljb25cclxuICAgICAgICAgICAgICAgIHN2Z0ljb24uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmV2ZXJ0IGljb25cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVDaGlsZChjaGVja0ljb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0YXJnZXQgaGlnaGxpZ2h0XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc2VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYnV0dG9uIGhpZ2hsaWdodFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1zdWNjZXNzJyk7XHJcbiAgICAgICAgICAgIH0sIDMwMDApXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlMSgpO1xyXG4gICAgICAgICAgICBleGFtcGxlMigpO1xyXG4gICAgICAgICAgICBleGFtcGxlMygpO1xyXG4gICAgICAgICAgICBleGFtcGxlNCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RGb3Jtc0NsaXBib2FyZC5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RGb3Jtc0NsaXBib2FyZCIsImNsaXBib2FyZCIsImV4YW1wbGUxIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJ1dHRvbiIsIm5leHRFbGVtZW50U2libGluZyIsIkNsaXBib2FyZEpTIiwidGV4dCIsInZhbHVlIiwib24iLCJlIiwiY3VycmVudExhYmVsIiwiaW5uZXJIVE1MIiwic2V0VGltZW91dCIsImV4YW1wbGUyIiwiaW5uZXJUZXh0IiwiZXhhbXBsZTMiLCJleGFtcGxlNCIsImNoZWNrSWNvbiIsInF1ZXJ5U2VsZWN0b3IiLCJzdmdJY29uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiY2xhc3NlcyIsInJlbW92ZSIsInJlbW92ZUNoaWxkIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/forms/clipboard.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/forms/clipboard.js"]();
/******/ 	
/******/ })()
;