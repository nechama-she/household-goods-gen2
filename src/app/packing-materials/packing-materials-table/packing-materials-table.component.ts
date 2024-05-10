import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-packing-materials-table',
  templateUrl: './packing-materials-table.component.html',
  styleUrl: './packing-materials-table.component.scss',
})
export class PackingMaterialsTableComponent {
  table: any;

  constructor(private titleService: Title, private meta: Meta) {
    this.getPackingMaterialPrices();
    this.titleService.setTitle(
      'Household Goods Moving And Storage | Essential Moving Supplies Checklist'
    );
    this.meta.updateTag({
      name: 'description',
      content: 'Essential Moving Supplies Checklist for an Easy Move',
    });
    this.meta.updateTag({
      name: 'og:description',
      content: 'Essential Moving Supplies Checklist for an Easy Move',
    });
  }
  getPackingMaterialPrices() {
    this.table = {
      headers: ['Moving Supply', 'Description', 'Prices'],
      rows: [
        {
          columns: [
            {
              product: 'https://amzn.to/4aGumzQ',
              productName: 'Moving Box',
            },

            'Ideal for a variety of household items.',
            '$3 - $10 per box',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/449xlhS',
              productName: 'Wardrobe Moving Box',
            },
            'Designed for hanging clothing items',
            '$10 - $30 per box',
          ],
        },
        {
          columns: [
            'Book Box',

            'Small, sturdy box for books and heavy items.',
            '$2 - $5 per box',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3JoTHlV',
              productName: 'Dish saver Glass Pack Box',
            },
            'Specifically designed for packing fragile glassware',
            '$15 - $26 per box',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3JvxL8C',
              productName: 'Corrugated Wine Shipper',
            },
            'Secure packaging for wine bottles',
            '$5 - $20 per box',
          ],
        },
        {
          columns: [
            'Travel / Luggage Box',
            'Durable box suitable for travel or packing clothing',
            '$3 - $8 per box',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/4d4pVAh',
              productName: 'Mirror & Picture Box',
            },

            'Specialized box for mirrors and framed pictures',
            '$30 - $35 per box',
          ],
        },
        {
          columns: [
            'Picture Shipper',
            'Protective box for artwork and pictures',
            '$5 - $12 per box',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3vU7EVR',
              productName: 'Heavy-Duty Expandable TV Moving Box',
            },

            'Sturdy box for flat-screen TVs',
            '$25 - $35 per box',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/4b6pDHu',
              productName: 'Lamp Moving Box',
            },
            'Box with padding for table lamps and fragile lampshades',
            '$60 - $70 per box',
          ],
        },
        {
          columns: [
            'Electronics Moving Box',
            'Secure box for electronics like portable speakers or gaming consoles',
            '$5 - $20 per box',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/4d7bICJ',
              productName: 'Dish Box - Heavy-Duty Dish Packing',
            },

            'Strong box with dividers for packing dishes and glassware',
            '$21 - $30 per box',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3vVjtep',
              productName: 'Heavy-Duty Double Wall Moving Box',
            },

            'Durable box for heavy items and kitchenware',
            '$10 - $20 per box',
          ],
        },
        {
          columns: [
            'Sport Utility Box',
            'Versatile box for various items',
            '$5 - $12 per box',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/4dhWdrw',
              productName: 'Sealable Mattress Bags for Moving',
            },

            'Sealable bag for protecting mattresses during transport',
            '$5 - $15 per bag',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3xOK5hB',
              productName:
                'Mattress Bag Sets with Handles for Moving and Storage',
            },

            'Set of bags with handles for mattresses',
            '$10 - $20 per bag',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3Wiy2Dg',
              productName: 'Pillow Top Mattress Bags',
            },

            'Protective bag specifically designed for pillow top mattresses',
            '$10 - $15 per bag',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/4b49mTi',
              productName: 'Plastic Couch Cover',
            },

            'Plastic cover for protecting couches and sofas',
            '$8 - $15 per cover',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3UtELJp',
              productName: 'Plastic Chair Cover',
            },

            'Plastic cover for protecting chairs and seating',
            '$5 - $10 per cover',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3UtpWX8',
              productName: 'Plastic Love Seat Cover',
            },

            'Plastic cover for protecting love seats',
            '$3 - $8 per cover',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3w4N30Z',
              productName: 'Rug Storage Bag',
            },

            'Bag for storing and protecting rugs',
            '$5 - $20 per bag',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3xOUZE2',
              productName: '45 Gallon Heavy Duty Bags',
            },

            'Heavy-duty bags for large, heavy items',
            '$50 - $60 per pack',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3QbZhf2',
              productName: 'Vacuum Seal Storage Bags for Clothes',
            },

            'Vacuum seal bags for compressing and storing clothes',
            '$2 - $18 per bag',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3JzhD65',
              productName: 'Hanging Vacuum Seal Storage Bag for Clothes',
            },

            'Vacuum seal bag with a hanger for hanging clothes',
            '$5 - $12 per bag',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3U3NUH2',
              productName: 'Surface Shields Shoe Covers',
            },

            'Disposable shoe covers for protecting floors and carpets',
            '$4 - $7 per pack',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3QdQ06h',
              productName: 'Floor Liner',
            },

            'Heavy-duty plastic liner for protecting floors from furniture and heavy items',
            '$35 - $45 per roll',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3UuF2ff',
              productName: 'Packing Paper',
            },

            'Clean paper for wrapping items and filling empty spaces in boxes',
            '$25 - $35 per pack',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3W7isdT',
              productName: 'Cushion Foam',
            },

            'Foam for cushioning and protecting delicate items',
            '$20 - $50 per roll',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/4b7GKIN',
              productName: 'Cushion Foam Pouches',
            },

            'Pouches filled with cushion foam for protecting small items',
            '$5 - $10 per pack',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/4aCZIHv',
              productName: 'bubble wrap',
            },

            'Bubble wrap for protecting fragile items',
            '$10 - $25 per roll',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3UuJavG',
              productName: 'Packing Peanuts',
            },

            'Biodegradable packing peanuts with anti-static properties for cushioning delicate items',
            '$10 - $15 per pack',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3Jzk1tz',
              productName: 'Bubble Corners',
            },

            'Pre-formed bubble corners for protecting edges and corners of items',
            '$10 - $15 per pack',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3W7kjzn',
              productName: 'Guitar Packing Kit for Electric Guitar',
            },

            'Specialized kit for safely packing and transporting electric guitars',
            '$15 - $20 per kit',
          ],
        },
        {
          columns: [
            {
              product: 'https://amzn.to/3UtWJLH',
              productName: 'Shoe Boxes',
            },
            'plastic shoe boxes for organizing and protecting shoes',
            '$3 - $8 per box',
          ],
        },
      ],
      caption: 'Moving Supplies Checklist',
    };
  }
}
