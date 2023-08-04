import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header {
  @Input()
  text5: string = 'Who We Are'
  @Input()
  text4: string = 'About'
  @Input()
  text2: string = 'Text'
  @Input()
  text1: string = 'Text'
  @Input()
  text3: string = 'Text'
  @Input()
  rootClassName: string = ''
  @Input()
  heading: string = 'P2PCS'
  @Input()
  text6: string = 'Contact Us'
  @Input()
  text: string = 'Text'
  constructor() {}
}
