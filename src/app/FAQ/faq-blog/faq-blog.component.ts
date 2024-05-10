import { Component, Input } from '@angular/core';
import { JsonLdService } from '../../services/jsonld.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-faq-blog',
  templateUrl: './faq-blog.component.html',
  styleUrl: './faq-blog.component.scss',
})
export class FaqBlogComponent {
  blogPosts: any;
  scriptId: string = 'blog';
  jsonLdData: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private jsonLdService: JsonLdService
  ) {
    this.titleService.setTitle(
      'Moving and Packing Tips, Moving Blog | Household Goods Movers'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Discover the latest moving tips and tricks on our blog for a stress-free move. Save money and ensure a smooth experience with our expert advice.',
    });
    this.meta.updateTag({
      name: 'og:description',
      content:
        'Discover the latest moving tips and tricks on our blog for a stress-free move. Save money and ensure a smooth experience with our expert advice.',
    });

    this.getBlogPosts();
    this.addJsonLdScript();
  }
  ngOnDestroy(): void {
    if (this.jsonLdData) {
      this.jsonLdService.removeJsonLdScript(this.jsonLdData, this.scriptId);
    }
    this.meta.removeTag("name='og:description'");
  }
  addJsonLdScript() {
    this.jsonLdData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Household Goods Moving And Storage',
          item: 'https://www.household-goods-moving-and-storage.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
        },
      ],
    };

    this.jsonLdService.addJsonLdScript(this.jsonLdData, this.scriptId);
  }
  getBlogPosts() {
    this.blogPosts = [
      {
        h2: 'What services are included in the standard household moving package?',
        keyword: 'Household Movers Services',
        lastUpdated: '2024-03-13',
        textLastUpdate: 'March, 13 2024',
        minuteRead: '4',
        p: "Moving to a new home is a significant life event that often comes with its share of stress and excitement. Thankfully, with the help of professional household movers and their comprehensive moving services, the process can be much smoother. In this article, we'll explore the range of services included in standard household moving packages, providing insights into what you can expect when hiring expert household movers for your relocation needs.",
        linkToPost: 'household-moving-services',
        linkToPostText: 'Learn more about household moving services',
      },
      {
        h2: 'Professional Packing Services And Packing Materials',
        keyword: 'Household Movers Services',
        lastUpdated: '2024-03-15',
        textLastUpdate: 'March, 15 2024',
        minuteRead: '4',
        p: "Moving to a new home can be an overwhelming process, but hiring professional household movers in the United States can make the transition smoother. One common question that arises during the moving process is whether household movers provide packing services and materials. Let's delve into this topic to understand what to expect when hiring professional movers for your relocation needs in the United States.",
        linkToPost: 'household-moving-packing-services-and-packing-materials',
        linkToPostText: 'Learn more about packing services and materials',
      },
      {
        h2: 'How do household movers handle high value items during the move?',
        keyword: 'Household Movers Services',
        lastUpdated: '2024-03-18',
        textLastUpdate: 'March, 18 2024',
        minuteRead: '4',
        p: "When it comes to moving delicate or valuable items, such as antiques, artwork, or fragile collectibles, entrusting them to professional household movers in the United States can provide peace of mind. These movers, located throughout the United States, have the expertise and specialized equipment to handle such items with the utmost care. Let's explore how they ensure the safe transport of your most precious possessions.",
        linkToPost: 'household-movers-with-high-value-items',
        linkToPostText:
          'Learn more about handle high value items during the move',
      },
    ];
  }
}
