import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      // tslint:disable-next-line:max-line-length
      'http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/06/main/creole-shrimp-creamed-corn-1708p110.jpg?itok=VRNFsss0'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      // tslint:disable-next-line:max-line-length
      'http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/06/main/creole-shrimp-creamed-corn-1708p110.jpg?itok=VRNFsss0'
    )
  ];
  constructor() {}

  ngOnInit() {}
}
