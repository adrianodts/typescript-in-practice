import EventManager from './event-manager'

import { BoxPostList } from './box-post-list'
import { BoxPostForm } from './box-post-form'
class PostsPage {
    constructor(private eventManager: EventManager) {
        this.init()
    }

    private init() {
        new BoxPostList(this.eventManager)
        new BoxPostForm(this.eventManager)
    }
}

new PostsPage(new EventManager())

