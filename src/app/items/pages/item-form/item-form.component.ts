// item-form.component.ts
import { JsonPipe, Location } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ItemService } from '../../item.service';
import { ItemStatus } from '../../models/item';
@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})
export class ItemFormComponent {
  @Input()
  id: number | null = null;

  location = inject(Location);
  fb = inject(NonNullableFormBuilder);
  itemService = inject(ItemService);
  // formControls
  title = this.fb.control<string>('', { validators: Validators.required });
  amount = this.fb.control<number>(null!, { validators: [Validators.required, Validators.min(1)] });
  quantity = this.fb.control<number>(null!, {
    validators: [Validators.required, Validators.min(1)]
  });
  isEditMode: boolean = false;

  // formGroup
  fg = new FormGroup({
    title: this.title,
    amount: this.amount,
    quantity: this.quantity
  });
  ngOnInit() {
    console.log('id', this.id);
    this.isEditMode = !!this.id;
    if (this.id) {
      this.itemService.get(this.id).subscribe((v) => this.fg.patchValue(v));
    }
  }

  onBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    const item = { ...this.fg.getRawValue(), status: ItemStatus.PENDING };
    console.log(item);
    if (this.id) {
      this.itemService.edit(this.id, item).subscribe(() => this.onBack());
    } else {
      this.itemService.add(item).subscribe(() => this.onBack());
    }
  }
}
