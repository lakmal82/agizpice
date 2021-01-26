import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pepper',
  templateUrl: './pepper.component.html',
  styleUrls: ['./pepper.component.css']
})
export class PepperComponent implements OnInit {

  imageObject: Array<object> = [{
    image: '/assets/images/Pepper/Pepper.jpg',
    thumbImage: '/assets/images/Pepper/Pepper.jpg'
},{
  image: '/assets/images/Pepper/pepper1.jpg',
  thumbImage: '/assets/images/Pepper/pepper1.jpg'
},
{
  image: '/assets/images/Pepper/pepper2.jpg',
  thumbImage: '/assets/images/Pepper/pepper2.jpg'
},{
  image: '/assets/images/Pepper/pepper3.jpg',
  thumbImage: '/assets/images/Pepper/pepper3.jpg'
},{
  image: '/assets/images/Pepper/pepper4.jpg',
  thumbImage: '/assets/images/Pepper/pepper4.jpg'
},{
  image: '/assets/images/Pepper/pepper5.jpg',
  thumbImage: '/assets/images/Pepper/pepper5.jpg'
},{
  image: '/assets/images/Pepper/pepper6.jpg',
  thumbImage: '/assets/images/Pepper/pepper6.jpg'
},{
  image: '/assets/images/Pepper/pepper7.jpg',
  thumbImage: '/assets/images/Pepper/pepper7.jpg'
},{
  image: '/assets/images/Pepper/pepper8.jpg',
  thumbImage: '/assets/images/Pepper/pepper8.jpg'
},{
  image: '/assets/images/Pepper/pepper9.jpg',
  thumbImage: '/assets/images/Pepper/pepper9.jpg'
},{
  image: '/assets/images/Pepper/pepper10.jpg',
  thumbImage: '/assets/images/Pepper/pepper10.jpg'
} 
];
  constructor() { }

  ngOnInit(): void {
  }

}
