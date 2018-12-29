import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[tcpHighlight]'
})
export class HighlightDirective {

    constructor(private el: ElementRef) {
    }

    @Input() defaultColor: string;

    @Input('tcpHighlight') color: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.color || this.defaultColor || 'cyan');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
