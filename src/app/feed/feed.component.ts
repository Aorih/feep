import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @ViewChild('banner') banner!: ElementRef;
  url: any = "default";
  constructor() { }

  ngOnInit(): void {
  }

  changeBanner(event:any){

    console.log("entro al metodo")
    if(!event.target.files[0] || event.target.files[0].length == 0){
      console.log("entro al primer if")
      return;
    }

    let mimeType = event.target.files[0].type;
    if(mimeType.match(/image\/*/) == null){
      console.log("entro al segundo if")
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
      console.log(this.url);
      this.banner.nativeElement.style.backgroundImage='url(' + this.url + ')';
    }
    
  }

}
