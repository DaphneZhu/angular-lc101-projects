import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = 'Love Fresh Air';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-628667258.jpg';
  image3 = 'https://image.shutterstock.com/image-photo/famous-cameo-island-one-most-260nw-1474694477.jpg';

  constructor() { }

  ngOnInit() {
  }

}
