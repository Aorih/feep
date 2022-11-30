import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  onEdit: boolean = false;
  descriptionText: string | null = "About me...";
  placeholder: string | null = "About me..."
  @ViewChild('textArea') textArea!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  
  
  editDescription(){
    this.onEdit = true;
    setTimeout(() => {
      this.textArea.nativeElement.focus();
    }, 50);
  }

  setDescription(){
    const txtArea = this.textArea.nativeElement;
    const text = txtArea.value !== "" ? txtArea.value : "About me..."

    this.descriptionText = text;
    this.placeholder = text;
    this.onEdit = false;
  }

}
