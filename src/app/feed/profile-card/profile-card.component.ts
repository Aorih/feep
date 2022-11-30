import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @ViewChild('textArea') textArea!: ElementRef;
  onEdit: boolean = false;
  descriptionText: string | null = "About me...";
  invalidText: string = "";
  isOverflow: boolean = false;
  currentLength: number = this.descriptionText!.length;
  placeholder: string | null = "About me..."

  constructor() { }

  ngOnInit(): void {
  }
  
  checkLength(){
    this.currentLength = this.textArea.nativeElement.value.length;
    this.isOverflow = this.currentLength > 200 ? true : false;  
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
