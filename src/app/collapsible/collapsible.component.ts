import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss'],
})
export class CollapsibleComponent {
  @Input() title: string = ''; // Input for dynamic text

  isCollapsed = true;
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowSize();
  }

  ngOnInit() {
    this.checkWindowSize();
  }

  checkWindowSize() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 767;
      this.isCollapsed = this.isMobile;
    }
  }

  toggleCollapse() {
    if (this.isMobile) {
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
