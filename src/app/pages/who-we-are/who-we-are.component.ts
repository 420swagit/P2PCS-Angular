import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'who-we-are',
  templateUrl: 'who-we-are.component.html',
  styleUrls: ['who-we-are.component.css'],
})
export class WhoWeAre {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Who-We-Are - P2PCS')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Who-We-Are - P2PCS',
      },
    ])
  }
}
