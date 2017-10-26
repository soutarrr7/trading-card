import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class CardPage {

  constructor(public navCtrl: NavController, public params: NavParams) {
  }
  cardId = this.params.get('id');

  cards = [
    {
      img: 'card1.jpg',
      title: 'テラ・フォーミング'
    },
    {
      img: 'card2.jpg',
      title: '召喚獣メルカバー'
    },
    {
      img: 'card3.jpg',
      title: 'エクシーズモンスター'
    },
    {
      img: 'card4.jpg',
      title: '素早いビーバー'
    },
    {
      img: 'card5.jpg',
      title: '拮抗勝負【シク】'
    },
    {
      img: 'card6.jpg',
      title: 'ライトロード・セイント ミネルバ【ノー】'
    },
    {
      img: 'card7.jpg',
      title: '不知火の隠者【レア】'
    },
    {
      img: 'card8.jpg',
      title: 'SPYRAL-ザ・ダブルヘリックス【シク】'
    },
    {
      img: 'card9.jpg',
      title: 'デューテリオン【スー】'
    },
    {
      img: 'card10.jpg',
      title: 'リベンデットストレイヤー'
    },
  ];

  card = this.cards[this.cardId];

}
