import { Component } from '@angular/core';
import { ServiceArea } from '../../model/interface/service-area';
import { ArticlePage } from '../../model/interface/article-page';

import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Table } from '../../model/interface/table';

import { JsonLdService } from '../../services/jsonld.service';

@Component({
  selector: 'app-article-video',
  templateUrl: './article-video.component.html',
  styleUrl: './article-video.component.scss',
})
export class ArticleVideoComponent {
  jsonLdData: any;
  videoId: string = 'o4wf-eNnVwU';
  phoneLink = '12405707987';
  phone = '(240)-570-7987';
  isListVisible = true;
  toggleText = 'hide';
  serviceArea: ServiceArea[];
  article: ArticlePage;
  currentPage: string;
  currentPageLink: string;
  lastUpdate = '2024-03-06';
  textLastUpdate = 'March, 6 2024';
  prices: Table;
  pricesPickSeason: Table;
  scriptId: string = 'interstate_video';
  constructor(
    private titleService: Title,
    private meta: Meta,
    private router: Router,
    private jsonLdService: JsonLdService
  ) {
    if (router.url.includes('how-to-find-an-interstate-mover')) {
      this.currentPage = 'Interstate Movers';
      this.currentPageLink = 'interstate-movers';
      this.titleService.setTitle(
        'Tips for Choosing the Right Interstate Movers | Household Goods Movers'
      );
      this.meta.updateTag({
        name: 'description',
        content:
          '&lrm;1. Start Early · &lrm;2. Research and Gather Quotes · &lrm;3. Check Licensing and Insurance · &lrm;4. Read Reviews and Testimonials · &lrm;5. Ask About Services Offered...',
      });
      this.meta.updateTag({
        name: 'og:description',
        content:
          'Here are some tips to help you navigate the process and choose the best movers for your long-distance move',
      });
      this.getArticle_InterstateMovers();
    }
    this.addJsonLdScript();
  }
  ngOnInit(): void {
    this.serviceArea = [
      {
        key: 'midwest',
        name: 'Midwest',
        states: [
          { key: 'illinois', name: 'Illinois', cities: [] },
          { key: 'wisconsin', name: 'Wisconsin', cities: [] },
          { key: 'minnesota', name: 'Minnesota', cities: [] },
          { key: 'iowa', name: 'Iowa', cities: [] },
          { key: 'ohio', name: 'Ohio', cities: [] },
          { key: 'michigan', name: 'Michigan', cities: [] },
          { key: 'indiana', name: 'Indiana', cities: [] },
          { key: 'missouri', name: 'Missouri', cities: [] },
        ],
      },
      {
        key: 'dmv',
        name: 'DMV',
        states: [
          { key: 'dc', name: 'D.C.', cities: [] },
          { key: 'maryland', name: 'Maryland', cities: [] },
          { key: 'virginia', name: 'Virginia', cities: [] },
        ],
      },
      { key: 'southern-california', name: 'Southern California', states: [] },
    ];
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
      '@type': 'VideoObject',
      contentUrl: 'https://www.youtube.com/embed/o4wf-eNnVwU',
      thumbnailUrl:
        'https://www.household-goods-moving-and-storage.com/assets/images/interstate-movers-thumbnail.png',
      name: 'How to Find an Interstate Mover: Tips for Choosing the Right Interstate Movers',
      description:
        'In this video, we explore some tips to help you navigate the process and choose the best movers for your long-distance move',
      uploadDate: '2024-02-26T15:30:00-05:00',
      duration: 'PT4M55S',
    };
    this.jsonLdService.addJsonLdScript(this.jsonLdData, this.scriptId);
  }

  getArticle_InterstateMovers() {
    this.article = {
      id: 'interstate-movers',
      title:
        'How to Find an Interstate Mover: Tips for Choosing the Right Interstate Movers',
      mainParagraph:
        "Moving to a new state is an exciting adventure, but it comes with its share of challenges, particularly when it comes to finding the right interstate movers for your long-distance move. Whether you're relocating for a job, family, or simply a change of scenery, selecting reputable and reliable interstate movers is essential for a smooth transition. Here are some tips to help you navigate the process and choose the best movers for your long-distance move:",
      h2Paragraph:
        'Interstate movers are professional moving companies that specialize in providing relocation services across state lines. These movers are licensed and equipped to handle long-distance moves, offering a range of services to help individuals and families transition smoothly to their new homes in different states.',
      conclusion:
        'selecting the right interstate movers is a crucial step in ensuring a successful and stress-free long-distance relocation. By following these tips and conducting thorough research, you can choose reputable movers that meet your needs and safeguard your belongings during the journey to your new home. A well-planned move with reliable movers can turn a daunting long-distance relocation into a smooth and enjoyable experience.',
      h3List: [
        {
          id: '1_Start_Early',
          title: '1. Start Early:',
          paragraph:
            'Planning ahead is crucial when it comes to long-distance moves. Begin your search for moving companies at least 8-12 weeks before your moving date. This allows ample time to research, obtain quotes, and make informed decisions.',
        },
        {
          id: '2_Research_and_Gather_Quotes',
          title: '2. Research and Gather Quotes:',
          paragraph:
            "Don't settle for the first moving company you come across. Take the time to research multiple movers and gather quotes. Websites like Moving.com, Yelp, and the Better Business Bureau (BBB) can provide valuable insights and reviews from previous customers. Request quotes from at least three different companies to compare prices and services offered.",
        },
        {
          id: '3_Check_Licensing_and_Insurance',
          title: '3. Check Licensing and Insurance:',
          paragraph:
            "Interstate movers must be registered with the Federal Motor Carrier Safety Administration (FMCSA) and have a valid USDOT number. Verify the company's credentials by checking their USDOT number on the FMCSA's website. Additionally, ensure they have proper insurance coverage to protect your belongings during the move.",
        },
        {
          id: '4_Read_Reviews_and_Testimonials',
          title: '4. Read Reviews and Testimonials:',
          paragraph:
            "Customer reviews and testimonials can provide valuable information about the quality of service offered by a moving company. Look for reviews on reputable platforms like Google, Yelp, and Angie's List. Pay attention to any patterns of complaints or recurring issues mentioned by customers.",
        },
        {
          id: '5_Ask_About_Services_Offered',
          title: '5. Ask About Services Offered:',
          paragraph:
            'Different moving companies offer varying levels of services. Some may provide full-service packing, loading, and unpacking, while others offer a more basic package. Determine your needs and inquire about the specific services offered by each company. If you have valuable or fragile items, make sure the company has experience handling such items.',
        },
        {
          id: '6_Get_a_Written_Estimate',
          title: '6. Get a Written Estimate:',
          paragraph:
            ' Avoid verbal agreements when it comes to pricing. Request a written estimate from each moving company, detailing the services included, rates, and any additional fees or charges. This will help prevent surprises and ensure transparency in the pricing.',
        },
        {
          id: '7_Inquire_About_Additional_Fees',
          title: '7. Inquire About Additional Fees:',
          paragraph:
            'Ask about any potential additional fees that may apply. Long-distance moves may incur extra charges such as long carry fees, shuttle fees for inaccessible locations, storage fees, or fees for bulky items. Clarify these upfront to avoid unexpected costs.',
        },
        {
          id: '8_Consider_Seasonal_Pricing',
          title: '8. Consider Seasonal Pricing:',
          paragraph:
            ' Keep in mind that summer is typically a more expensive time to move due to high demand. If possible, consider booking your move during the winter months when demand is lower. This can often result in lower prices and more availability from movers.',
        },
        {
          id: '9_Understand_the_Moving_Process',
          title: '9. Understand the Moving Process:',
          paragraph:
            'A reputable moving company will explain the moving process clearly and address any questions or concerns you may have. Understand the timeline, logistics, and procedures involved in your long-distance move.',
        },
        {
          id: '10_Payment_Structure',
          title: '10. Payment Structure:',
          paragraph:
            " For long-distance moves, companies often charge based on either the cubic feet of your belongings or their weight. It's essential to understand the payment structure and how it applies to your specific move. Some companies may offer a binding estimate, which provides a guaranteed price based on the items to be moved. However, this is typically for full semi-truck loads. For smaller moves, understanding the weight or cubic feet pricing can help you estimate your final cost.",
        },
        {
          id: '11_Check_for_Red_Flags',
          title: '11. Check for Red Flags:',
          paragraph:
            'Be wary of any red flags such as unprofessional behavior, lack of transparency, or refusal to provide written documentation. Trust your instincts and choose a moving company that makes you feel comfortable and confident in their abilities.',
        },
      ],
    };
  }
  toggleVisibility() {
    this.isListVisible = !this.isListVisible;
    this.toggleText = this.toggleText == 'hide' ? 'show' : 'hide';
  }
}
