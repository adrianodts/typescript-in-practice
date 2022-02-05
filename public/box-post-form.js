define(["require", "exports", "./box-post-list"], function (require, exports, box_post_list_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BoxPostForm = void 0;
    var BoxPostForm = /** @class */ (function () {
        function BoxPostForm(eventManager) {
            this.eventManager = eventManager;
            this.buttonFormSelector = "#".concat(BoxPostForm.boxFormId, ">button[type=button]");
            this.init();
        }
        BoxPostForm.prototype.init = function () {
            var _this = this;
            var buttonForm = document.querySelector(this.buttonFormSelector);
            buttonForm.addEventListener('click', function () {
                _this.hideBox();
                _this.eventManager.execute(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM);
            });
            this.eventManager.addListener(box_post_list_1.BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST, function () {
                _this.showBox();
            });
        };
        BoxPostForm.prototype.hideBox = function () {
            var boxForm = document.getElementById(BoxPostForm.boxFormId);
            boxForm.style.display = 'none';
        };
        BoxPostForm.prototype.showBox = function () {
            var boxForm = document.getElementById(BoxPostForm.boxFormId);
            boxForm.removeAttribute('style');
        };
        BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM = 'box-post-form-click-hidden';
        BoxPostForm.boxFormId = "box-post-form";
        return BoxPostForm;
    }());
    exports.BoxPostForm = BoxPostForm;
});
//# sourceMappingURL=box-post-form.js.map