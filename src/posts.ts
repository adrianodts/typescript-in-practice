class EventManager {

    private listeners = {}
    
    public addListener(event, callable) {
        if (this.listeners[event] instanceof Array) {
            this.listeners[event] = []
        }
        this.listeners[event].push(callable)
    }

    public execute(event) {
        for (let callable of this.listeners[event]) {
            
        }
    }
}

class BoxPostList {
    static boxListId = "box-post-list"
    private buttonListSelector = `#${BoxPostList.boxListId}>button[type=button]`

    constructor(private eventManager: EventManager) {
        this.init()
    }
    
    init() {
        const buttonList = document.querySelector(this.buttonListSelector)
        buttonList.addEventListener('click', () => {
            this.hideBox()
            this.showBox()
        })

    }
    
    hideBox() {
        const boxList = document.getElementById(BoxPostList.boxListId)
        boxList.style.display = 'none'
    }
    
    showBox() {
        const boxForm = document.getElementById(BoxPostForm.boxFormId)
        boxForm.removeAttribute('style')
    }
}

class BoxPostForm {
    static boxFormId = "box-post-form"
    private buttonFormSelector = `#${BoxPostForm.boxFormId}>button[type=button]`

    constructor(private eventManager: EventManager) {
        this.init()
    }

    private init() {
        const buttonForm = document.querySelector(this.buttonFormSelector)
        buttonForm.addEventListener('click', () => {
            this.hideBox()
            this.showBox()
        })
    }

    hideBox() {
        const boxForm = document.getElementById(BoxPostForm.boxFormId)
        boxForm.style.display = 'none'
    }

    showBox() {
        const boxList = document.getElementById(BoxPostList.boxListId)
        boxList.removeAttribute('style')
    }
}

const eventManager = new EventManager()
new BoxPostList(eventManager)
new BoxPostForm(eventManager)



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

