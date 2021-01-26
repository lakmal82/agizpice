import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    imageObject: Array<object> = [{
    image: '/assets/images/HomeImageSlider/home1.jpg',
    thumbImage: '/assets/images/HomeImageSlider/home1.jpg'
    },
    {
    image: '/assets/images/HomeImageSlider/home2.HEIC',
    thumbImage: '/assets/images/HomeImageSlider/home2.HEIC'
    },{
      image: '/assets/images/HomeImageSlider/home1.HEIC',
      thumbImage: '/assets/images/HomeImageSlider/home1.HEIC'
      }

  
];


  constructor() { 
    
   }

  ngOnInit(): void {

    
  }

}
