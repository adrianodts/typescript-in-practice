import EventManager from './event-manager'
import { BoxPostList } from './box-post-list'

export class BoxPostForm {
    static EVENT_CLICK_HIDDEN_BOX_FORM = 'box-post-form-click-hidden'
    static boxFormId = "box-post-form"
    private buttonFormSelector = `#${BoxPostForm.boxFormId}>button[type=button]`

    constructor(private eventManager: EventManager) {
        this.init()
    }

    private init() {
        const buttonForm = document.querySelector(this.buttonFormSelector)
        buttonForm.addEventListener('click', () => {
            this.hideBox()
            this.eventManager.execute(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM)
        })
        this.eventManager.addListener(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST, () => {
            this.showBox()
        })
    }

    hideBox() {
        const boxForm = document.getElementById(BoxPostForm.boxFormId)
        boxForm.style.display = 'none'
    }

    showBox() {
        const boxForm = document.getElementById(BoxPostForm.boxFormId)
        boxForm.removeAttribute('style')
    }
}