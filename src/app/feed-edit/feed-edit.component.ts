import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-feed-edit',
  templateUrl: './feed-edit.component.html',
  styleUrls: ['./feed-edit.component.css']
})
export class FeedEditComponent implements OnInit {

  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) { 
  	overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
  }

  onClick() {
    this.modal.confirm()
      .size('lg')
      .showClose(true)
      .title('This action cannot be reverted')
      .body(`
          <h4>Are you sure you want to cancel without saving the change?</h4>
         `)
      .open();
  }

}
