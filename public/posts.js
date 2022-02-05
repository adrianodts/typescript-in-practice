var EventManager = /** @class */ (function () {
    function EventManager() {
        this.listeners = {};
    }
    EventManager.prototype.addListener = function (event, callable) {
        if (this.listeners[event] instanceof Array) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callable);
    };
    EventManager.prototype.execute = function (event) {
        for (var _i = 0, _a = this.listeners[event]; _i < _a.length; _i++) {
            var callable = _a[_i];
        }
    };
    return EventManager;
}());
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
            _this.showBox();
        });
    };
    BoxPostList.prototype.hideBox = function () {
        var boxList = document.getElementById(BoxPostList.boxListId);
        boxList.style.display = 'none';
    };
    BoxPostList.prototype.showBox = function () {
        var boxForm = document.getElementById(BoxPostForm.boxFormId);
        boxForm.removeAttribute('style');
    };
    BoxPostList.boxListId = "box-post-list";
    return BoxPostList;
}());
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
            _this.showBox();
        });
    };
    BoxPostForm.prototype.hideBox = function () {
        var boxForm = document.getElementById(BoxPostForm.boxFormId);
        boxForm.style.display = 'none';
    };
    BoxPostForm.prototype.showBox = function () {
        var boxList = document.getElementById(BoxPostList.boxListId);
        boxList.removeAttribute('style');
    };
    BoxPostForm.boxFormId = "box-post-form";
    return BoxPostForm;
}());
var eventManager = new EventManager();
new BoxPostList(eventManager);
new BoxPostForm(eventManager);
// const buttonForm = document.querySelector('#box-post-form>button[type=button]')
// buttonForm.addEventListener('click', () => {
//     const box = document.getElementById('box-post-form')
//     box.style.display = 'none'
//     const boxList = document.getElementById('box-post-list')
//     boxList.removeAttribute('style')
// })
// const buttonList = document.querySelector('#box-post-form>button[type=button]')
// buttonList.addEventListener('click', () => {
//     const boxList = document.getElementById('box-post-list')
//     boxList.style.display = 'none'
//     const box = document.getElementById('box-post-form')
//     box.removeAttribute('style')
// })
//# sourceMappingURL=posts.js.map