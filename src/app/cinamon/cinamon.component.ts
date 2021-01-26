import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinamon',
  templateUrl: './cinamon.component.html',
  styleUrls: ['./cinamon.component.css']
})
export class CinamonComponent implements OnInit {
 

  imageObject: Array<object> = [{
    image: '/assets/images/Cinnamon/cin1.jpg',
    thumbImage: '/assets/images/Cinnamon/cin1.jpg'
}, {
    image: '/assets/images/Cinnamon/cin2.jpg', // Support base64 image
    thumbImage: '/assets/images/Cinnamon/cin2.jpg', // Support base64 image
    
},{
  image: '/assets/images/Cinnamon/cin3.jpg', // Support base64 image
  thumbImage: '/assets/images/Cinnamon/cin3.jpg', // Support base64 image

},{
  image: '/assets/images/Cinnamon/cin1.jpg',
  thumbImage: '/assets/images/Cinnamon/cin1.jpg'
}, {
  image: '/assets/images/Cinnamon/cin2.jpg', // Support base64 image
  thumbImage: '/assets/images/Cinnamon/cin2.jpg', // Support base64 image
  
},{
image: '/assets/images/Cinnamon/cin3.jpg', // Support base64 image
thumbImage: '/assets/images/Cinnamon/cin3.jpg', // Support base64 image

},{
  image: '/assets/images/Cinnamon/cin1.jpg',
  thumbImage: '/assets/images/Cinnamon/cin1.jpg'
}, {
  image: '/assets/images/Cinnamon/cin2.jpg', // Support base64 image
  thumbImage: '/assets/images/Cinnamon/cin2.jpg', // Support base64 image
  
},{
image: '/assets/images/Cinnamon/cin3.jpg', // Support base64 image
thumbImage: '/assets/images/Cinnamon/cin3.jpg', // Support base64 image

}
];
 
  constructor() {


   }

  ngOnInit(): void {
  }

}
