define(["require", "exports", "./box-post-form"], function (require, exports, box_post_form_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BoxPostList = void 0;
    var BoxPostList = /** @class */ (function () {
        function BoxPostList(eventManager) {
            this.eventManager = eventManager;
            this.buttonListSelector = "#".concat(BoxPostList.boxListId, ">button[type=button]");
            this.init();
        }
        BoxPostList.prototype.init = function () {
            var _this = this;
            var buttonList = document.querySelector(this.buttonListSelector);
            buttonList.addEventListener('click', function () {
                _this.hideBox();
                _this.eventManager.execute(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST);
            });
            this.eventManager.addListener(box_post_form_1.BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM, function () {
                _this.showBox();
            });
        };
        BoxPostList.prototype.hideBox = function () {
            var boxList = document.getElementById(BoxPostList.boxListId);
            boxList.style.display = 'none';
        };
        BoxPostList.prototype.showBox = function () {
            var boxList = document.getElementById(BoxPostList.boxListId);
            boxList.removeAttribute('style');
        };
        BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST = 'box-post-list-click-hidden';
        BoxPostList.boxListId = "box-post-list";
        return BoxPostList;
    }());
    exports.BoxPostList = BoxPostList;
});
//# sourceMappingURL=box-post-list.js.map