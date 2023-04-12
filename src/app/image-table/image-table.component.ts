import { Component } from '@angular/core';

export interface Image {
  id: number;
  name: string;
  description: string;
  image: string;
  isHovered: boolean;
}

@Component({
  selector: 'app-image-table',
  templateUrl: './image-table.component.html',
  styleUrls: ['./image-table.component.scss']
})
export class ImageTableComponent { 

  images: Image[] = []

  defaultElevation = 2;
  raisedElevation = 8;

  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum lectus leo. Ut dictum dapibus est, quis cursus tortor pretium non. Aenean dictum mauris augue, vitae lacinia tortor ultrices a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Cras sit amet mattis ex. Nulla fringilla tortor consequat, egestas ipsum a, eleifend sapien. Fusce vehicula commodo diam, at lobortis sem viverra ut. Sed placerat nibh sit amet tellus facilisis commodo. Suspendisse eget felis vel ex iaculis congue eget a elit. Fusce pulvinar dolor eget risus porta mollis.";

  constructor() {

    for (let i = 0; i < 10; i++) {

      this.images.push({id: i, name: "test" + i, description: this.desc, image: "", isHovered: false})

    }

  }


}
