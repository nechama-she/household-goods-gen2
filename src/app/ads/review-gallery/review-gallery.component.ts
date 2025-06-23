import { Component } from '@angular/core';

@Component({
  selector: 'app-review-gallery',
  templateUrl: './review-gallery.component.html',
  styleUrls: ['./review-gallery.component.scss'],
})
export class ReviewGalleryComponent {
  googleCardUrl = 'https://maps.app.goo.gl/qVh5ce4zW8b3G5447';
  reviewImages: string[] = Array.from(
    { length: 10 },
    (_, i) => `assets/reviews/r${i + 1}.png`
  );

  openGoogleCard(): void {
    window.open(this.googleCardUrl, '_blank');
  }

  scroll(container: HTMLElement, direction: 'left' | 'right'): void {
    const scrollAmount = 400;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
}
