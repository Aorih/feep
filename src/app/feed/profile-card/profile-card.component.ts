import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @ViewChild('textArea') textArea!: ElementRef;
  static MAX_CHAR: number = 160;

  onEdit: boolean = false;
  descriptionText: string | null = "About me...";
  invalidText: string = "";
  isOverflow: boolean = false;
  currentLength: number = this.descriptionText!.length;
  placeholder: string | null = "About me..."

  constructor() { }

  get MAX_CHAR(){
    return ProfileCardComponent.MAX_CHAR;
  }

  ngOnInit(): void {
  }
  
  checkLength(){
    this.currentLength = this.textArea.nativeElement.value.length;
    this.isOverflow = this.currentLength > this.MAX_CHAR ? true : false;  
  }

  editDescription(){
    this.onEdit = true;
    setTimeout(() => {
      this.textArea.nativeElement.focus();
    }, 50);
  }

  setDescription(){
    if(this.isOverflow){
      Swal.fire({
        icon: 'error',
        title: "We know you're so interesting but...",
        text: `You must rewrite your description under to ${this.MAX_CHAR} characters to save it`
      })
      return;
    }
    const txtArea = this.textArea.nativeElement;
    const text = txtArea.value !== "" ? txtArea.value : "About me..."
    this.descriptionText = text;
    this.placeholder = text;
    this.onEdit = false;
  }

}
