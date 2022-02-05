import EventManager from './event-manager'
import { BoxPostForm } from './box-post-form'

export class BoxPostList {
    static EVENT_CLICK_HIDDEN_BOX_LIST = 'box-post-list-click-hidden'
    static boxListId = "box-post-list"
    private buttonListSelector = `#${BoxPostList.boxListId}>button[type=button]`

    constructor(private eventManager: EventManager) {
        this.init()
    }
    
    init() {
        const buttonList = document.querySelector(this.buttonListSelector)
        buttonList.addEventListener('click', () => {
            this.hideBox()
            this.eventManager.execute(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST)
        })
        this.eventManager.addListener(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM, () => {
            this.showBox()
        })

    }
    
    hideBox() {
        const boxList = document.getElementById(BoxPostList.boxListId)
        boxList.style.display = 'none'
    }
    
    showBox() {
        const boxList = document.getElementById(BoxPostList.boxListId)
        boxList.removeAttribute('style')
    }
}