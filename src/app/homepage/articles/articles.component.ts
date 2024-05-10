import { Component, Input } from '@angular/core';
import { Article } from '../../model/interface/homepage-article';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  @Input() phoneLink: string;
  @Input() phone: string;
  articles: Article[] = [];
  ngOnInit(): void {
    this.getArticle_InterstateMovers();
    this.getArticle_LongDistanceMover();
    this.getArticle_ResidentialMover();
  }
  getArticle_InterstateMovers(){
    this.articles.push({
      id:'how-to-find-an-interstate-mover',
      header:'How to Find an Interstate Mover: Tips for Choosing the Right Interstate Movers',
      paragraph:'Moving to a new state is an exciting adventure, but it comes with its share of challenges, particularly when it comes to finding the right interstate movers for your long-distance move. Whether you\'re relocating for a job, family, or simply a change of scenery, selecting reputable and reliable interstate movers is essential for a smooth transition. Here are some tips to help you navigate the process and choose the best movers for your long-distance move.',
      keyword: 'an interstate mover'
    });
  }
  getArticle_LongDistanceMover(){
    this.articles.push({
      id:'long-distance-moving',
      header:'Your Trusted Long Distance Movers for Safe and Secure Household Goods Transportation',
      paragraph:'Moving to a new state can be a daunting task, filled with excitement and anticipation, but also stress and uncertainty. Whether it\'s for a new job opportunity, a change in scenery, or any other reason, the process of relocating across state lines requires careful planning and execution. That\'s where long-distance movers come in - your reliable partners in turning the challenges of a move into a seamless, stress-free experience.',
      keyword: 'a long distance mover'
    });
  }
  getArticle_ResidentialMover(){
    this.articles.push({
      id:'residential-movers',
      header:'Guiding You Home: The Crucial Role of Residential Movers in Safeguarding Your Household Goods',
      paragraph:'Moving to a new residence is a significant milestone that brings with it a mix of excitement, anticipation, and the inevitable challenge of packing up and settling into a new home. In this intricate dance of transition, residential movers play a crucial role, offering expertise, efficiency, and support to ensure a smooth and stress-free relocation experience while safeguarding your cherished household goods.',
      keyword: 'a residential mover'
    });
  }


}
