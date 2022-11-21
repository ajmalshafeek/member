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

/***/ "./resources/assets/core/js/custom/documentation/general/cropper.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/general/cropper.js ***!
  \**************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTCropperDemo = function () {\n  // Private functions\n  var initCropperDemo = function initCropperDemo() {\n    var image = document.getElementById('image');\n    var options = {\n      crop: function crop(event) {\n        document.getElementById('dataX').value = Math.round(event.detail.x);\n        document.getElementById('dataY').value = Math.round(event.detail.y);\n        document.getElementById('dataWidth').value = Math.round(event.detail.width);\n        document.getElementById('dataHeight').value = Math.round(event.detail.height);\n        document.getElementById('dataRotate').value = event.detail.rotate;\n        document.getElementById('dataScaleX').value = event.detail.scaleX;\n        document.getElementById('dataScaleY').value = event.detail.scaleY;\n        var lg = document.getElementById('cropper-preview-lg');\n        lg.innerHTML = '';\n        lg.appendChild(cropper.getCroppedCanvas({\n          width: 256,\n          height: 160\n        }));\n        var md = document.getElementById('cropper-preview-md');\n        md.innerHTML = '';\n        md.appendChild(cropper.getCroppedCanvas({\n          width: 128,\n          height: 80\n        }));\n        var sm = document.getElementById('cropper-preview-sm');\n        sm.innerHTML = '';\n        sm.appendChild(cropper.getCroppedCanvas({\n          width: 64,\n          height: 40\n        }));\n        var xs = document.getElementById('cropper-preview-xs');\n        xs.innerHTML = '';\n        xs.appendChild(cropper.getCroppedCanvas({\n          width: 32,\n          height: 20\n        }));\n      }\n    };\n    var cropper = new Cropper(image, options);\n    var buttons = document.getElementById('cropper-buttons');\n    var methods = buttons.querySelectorAll('[data-method]');\n    methods.forEach(function (button) {\n      button.addEventListener('click', function (e) {\n        var method = button.getAttribute('data-method');\n        var option = button.getAttribute('data-option');\n        var option2 = button.getAttribute('data-second-option');\n        try {\n          option = JSON.parse(option);\n        } catch (e) {}\n        var result;\n        if (!option2) {\n          result = cropper[method](option, option2);\n        } else if (option) {\n          result = cropper[method](option);\n        } else {\n          result = cropper[method]();\n        }\n        if (method === 'getCroppedCanvas') {\n          var modal = document.getElementById('getCroppedCanvasModal');\n          var modalBody = modal.querySelector('.modal-body');\n          modalBody.innerHTML = '';\n          modalBody.appendChild(result);\n        }\n        var input = document.querySelector('#putData');\n        try {\n          input.value = JSON.stringify(result);\n        } catch (e) {\n          if (!result) {\n            input.value = result;\n          }\n        }\n      });\n    });\n\n    // set aspect ratio option buttons\n    var radioOptions = document.getElementById('setAspectRatio').querySelectorAll('[name=\"aspectRatio\"]');\n    radioOptions.forEach(function (button) {\n      button.addEventListener('click', function (e) {\n        cropper.setAspectRatio(e.target.value);\n      });\n    });\n\n    // set view mode\n    var viewModeOptions = document.getElementById('viewMode').querySelectorAll('[name=\"viewMode\"]');\n    viewModeOptions.forEach(function (button) {\n      button.addEventListener('click', function (e) {\n        cropper.destroy();\n        cropper = new Cropper(image, Object.assign({}, options, {\n          viewMode: e.target.value\n        }));\n      });\n    });\n    var toggleoptions = document.getElementById('toggleOptionButtons').querySelectorAll('[type=\"checkbox\"]');\n    toggleoptions.forEach(function (checkbox) {\n      checkbox.addEventListener('click', function (e) {\n        var appendOption = {};\n        appendOption[e.target.getAttribute('name')] = e.target.checked;\n        options = Object.assign({}, options, appendOption);\n        cropper.destroy();\n        cropper = new Cropper(image, options);\n      });\n    });\n  };\n  return {\n    // public functions\n    init: function init() {\n      initCropperDemo();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTCropperDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9jcm9wcGVyLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsSUFBSUEsYUFBYSxHQUFHLFlBQVk7RUFFL0I7RUFDQSxJQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWUsR0FBZTtJQUNqQyxJQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUU1QyxJQUFJQyxPQUFPLEdBQUc7TUFDYkMsSUFBSSxFQUFFLGNBQVVDLEtBQUssRUFBRTtRQUN0QkosUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUNJLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILEtBQUssQ0FBQ0ksTUFBTSxDQUFDQyxDQUFDLENBQUM7UUFDbkVULFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDSSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxLQUFLLENBQUNJLE1BQU0sQ0FBQ0UsQ0FBQyxDQUFDO1FBQ25FVixRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQ0ksS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsS0FBSyxDQUFDSSxNQUFNLENBQUNHLEtBQUssQ0FBQztRQUMzRVgsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUNJLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILEtBQUssQ0FBQ0ksTUFBTSxDQUFDSSxNQUFNLENBQUM7UUFDN0VaLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDSSxLQUFLLEdBQUdELEtBQUssQ0FBQ0ksTUFBTSxDQUFDSyxNQUFNO1FBQ2pFYixRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQ0ksS0FBSyxHQUFHRCxLQUFLLENBQUNJLE1BQU0sQ0FBQ00sTUFBTTtRQUNqRWQs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cGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvY29yZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2Nyb3BwZXIuanM/YjkwNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVENyb3BwZXJEZW1vID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHQvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG5cdHZhciBpbml0Q3JvcHBlckRlbW8gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2UnKTtcclxuXHJcblx0XHR2YXIgb3B0aW9ucyA9IHtcclxuXHRcdFx0Y3JvcDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFYJykudmFsdWUgPSBNYXRoLnJvdW5kKGV2ZW50LmRldGFpbC54KTtcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YVknKS52YWx1ZSA9IE1hdGgucm91bmQoZXZlbnQuZGV0YWlsLnkpO1xyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhV2lkdGgnKS52YWx1ZSA9IE1hdGgucm91bmQoZXZlbnQuZGV0YWlsLndpZHRoKTtcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YUhlaWdodCcpLnZhbHVlID0gTWF0aC5yb3VuZChldmVudC5kZXRhaWwuaGVpZ2h0KTtcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YVJvdGF0ZScpLnZhbHVlID0gZXZlbnQuZGV0YWlsLnJvdGF0ZTtcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YVNjYWxlWCcpLnZhbHVlID0gZXZlbnQuZGV0YWlsLnNjYWxlWDtcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YVNjYWxlWScpLnZhbHVlID0gZXZlbnQuZGV0YWlsLnNjYWxlWTtcclxuXHJcblx0XHRcdFx0dmFyIGxnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nyb3BwZXItcHJldmlldy1sZycpO1xyXG5cdFx0XHRcdGxnLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRcdGxnLmFwcGVuZENoaWxkKGNyb3BwZXIuZ2V0Q3JvcHBlZENhbnZhcyh7IHdpZHRoOiAyNTYsIGhlaWdodDogMTYwIH0pKTtcclxuXHJcblx0XHRcdFx0dmFyIG1kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nyb3BwZXItcHJldmlldy1tZCcpO1xyXG5cdFx0XHRcdG1kLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRcdG1kLmFwcGVuZENoaWxkKGNyb3BwZXIuZ2V0Q3JvcHBlZENhbnZhcyh7IHdpZHRoOiAxMjgsIGhlaWdodDogODAgfSkpO1xyXG5cclxuXHRcdFx0XHR2YXIgc20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JvcHBlci1wcmV2aWV3LXNtJyk7XHJcblx0XHRcdFx0c20uaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdFx0c20uYXBwZW5kQ2hpbGQoY3JvcHBlci5nZXRDcm9wcGVkQ2FudmFzKHsgd2lkdGg6IDY0LCBoZWlnaHQ6IDQwIH0pKTtcclxuXHJcblx0XHRcdFx0dmFyIHhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nyb3BwZXItcHJldmlldy14cycpO1xyXG5cdFx0XHRcdHhzLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRcdHhzLmFwcGVuZENoaWxkKGNyb3BwZXIuZ2V0Q3JvcHBlZENhbnZhcyh7IHdpZHRoOiAzMiwgaGVpZ2h0OiAyMCB9KSk7XHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBjcm9wcGVyID0gbmV3IENyb3BwZXIoaW1hZ2UsIG9wdGlvbnMpO1xyXG5cclxuXHRcdHZhciBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nyb3BwZXItYnV0dG9ucycpO1xyXG5cdFx0dmFyIG1ldGhvZHMgPSBidXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1ldGhvZF0nKTtcclxuXHRcdG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dmFyIG1ldGhvZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWV0aG9kJyk7XHJcblx0XHRcdFx0dmFyIG9wdGlvbiA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uJyk7XHJcblx0XHRcdFx0dmFyIG9wdGlvbjIgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXNlY29uZC1vcHRpb24nKTtcclxuXHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdG9wdGlvbiA9IEpTT04ucGFyc2Uob3B0aW9uKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciByZXN1bHQ7XHJcblx0XHRcdFx0aWYgKCFvcHRpb24yKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSBjcm9wcGVyW21ldGhvZF0ob3B0aW9uLCBvcHRpb24yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAob3B0aW9uKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSBjcm9wcGVyW21ldGhvZF0ob3B0aW9uKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSBjcm9wcGVyW21ldGhvZF0oKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChtZXRob2QgPT09ICdnZXRDcm9wcGVkQ2FudmFzJykge1xyXG5cdFx0XHRcdFx0dmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldENyb3BwZWRDYW52YXNNb2RhbCcpO1xyXG5cdFx0XHRcdFx0dmFyIG1vZGFsQm9keSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1ib2R5Jyk7XHJcblx0XHRcdFx0XHRtb2RhbEJvZHkuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdFx0XHRtb2RhbEJvZHkuYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwdXREYXRhJyk7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdGlmICghcmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdGlucHV0LnZhbHVlID0gcmVzdWx0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBzZXQgYXNwZWN0IHJhdGlvIG9wdGlvbiBidXR0b25zXHJcblx0XHR2YXIgcmFkaW9PcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldEFzcGVjdFJhdGlvJykucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJhc3BlY3RSYXRpb1wiXScpO1xyXG5cdFx0cmFkaW9PcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xyXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdGNyb3BwZXIuc2V0QXNwZWN0UmF0aW8oZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIHNldCB2aWV3IG1vZGVcclxuXHRcdHZhciB2aWV3TW9kZU9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld01vZGUnKS5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInZpZXdNb2RlXCJdJyk7XHJcblx0XHR2aWV3TW9kZU9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0Y3JvcHBlci5kZXN0cm95KCk7XHJcblx0XHRcdFx0Y3JvcHBlciA9IG5ldyBDcm9wcGVyKGltYWdlLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IHZpZXdNb2RlOiBlLnRhcmdldC52YWx1ZSB9KSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dmFyIHRvZ2dsZW9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlT3B0aW9uQnV0dG9ucycpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKTtcclxuXHRcdHRvZ2dsZW9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoY2hlY2tib3gpIHtcclxuXHRcdFx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHZhciBhcHBlbmRPcHRpb24gPSB7fTtcclxuXHRcdFx0XHRhcHBlbmRPcHRpb25bZS50YXJnZXQuZ2V0QXR0cmlidXRlKCduYW1lJyldID0gZS50YXJnZXQuY2hlY2tlZDtcclxuXHRcdFx0XHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgYXBwZW5kT3B0aW9uKTtcclxuXHRcdFx0XHRjcm9wcGVyLmRlc3Ryb3koKTtcclxuXHRcdFx0XHRjcm9wcGVyID0gbmV3IENyb3BwZXIoaW1hZ2UsIG9wdGlvbnMpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdC8vIHB1YmxpYyBmdW5jdGlvbnNcclxuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aW5pdENyb3BwZXJEZW1vKCk7XHJcblx0XHR9LFxyXG5cdH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG5cdEtUQ3JvcHBlckRlbW8uaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUQ3JvcHBlckRlbW8iLCJpbml0Q3JvcHBlckRlbW8iLCJpbWFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvcHRpb25zIiwiY3JvcCIsImV2ZW50IiwidmFsdWUiLCJNYXRoIiwicm91bmQiLCJkZXRhaWwiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Iiwicm90YXRlIiwic2NhbGVYIiwic2NhbGVZIiwibGciLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImNyb3BwZXIiLCJnZXRDcm9wcGVkQ2FudmFzIiwibWQiLCJzbSIsInhzIiwiQ3JvcHBlciIsImJ1dHRvbnMiLCJtZXRob2RzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm1ldGhvZCIsImdldEF0dHJpYnV0ZSIsIm9wdGlvbiIsIm9wdGlvbjIiLCJKU09OIiwicGFyc2UiLCJyZXN1bHQiLCJtb2RhbCIsIm1vZGFsQm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dCIsInN0cmluZ2lmeSIsInJhZGlvT3B0aW9ucyIsInNldEFzcGVjdFJhdGlvIiwidGFyZ2V0Iiwidmlld01vZGVPcHRpb25zIiwiZGVzdHJveSIsIk9iamVjdCIsImFzc2lnbiIsInZpZXdNb2RlIiwidG9nZ2xlb3B0aW9ucyIsImNoZWNrYm94IiwiYXBwZW5kT3B0aW9uIiwiY2hlY2tlZCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/general/cropper.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/general/cropper.js"]();
/******/ 	
/******/ })()
;