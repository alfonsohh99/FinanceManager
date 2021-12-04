import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tag } from 'src/app/model/tag.model';
import * as TagsActions from '../store/tags.actions';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.css'],
})
export class TagComponent implements OnInit {
    constructor(private store: Store) {}

    @Input('inputTag')
    tag!: Tag;

    ngOnInit(): void {}

    deleteTag() {
        this.store.dispatch(TagsActions.deleteTag({ deleteId: this.tag.ID }));
    }

    editTag() {
        this.store.dispatch(TagsActions.editTag({ editId: this.tag.ID }));
    }
}
