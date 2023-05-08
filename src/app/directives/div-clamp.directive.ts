import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: '[clamp]'
})
export class DivClampDirective implements AfterViewInit {
    @Output() overload = new EventEmitter<void>()
    constructor(
        private _elementRef: ElementRef
    ) {}
    ngAfterViewInit(): void {
        if (this._elementRef.nativeElement) {
            let counter = 0;
            let totalWidth = 0;
            const els = this._elementRef.nativeElement.getElementsByTagName('div');
            for (let index = 0; index < els.length; index++) {
                const tempWidth = totalWidth + els[index].clientWidth;
                if (this._elementRef.nativeElement.offsetWidth <= tempWidth) {
                    this.overload.emit();
                } else {
                    totalWidth = tempWidth;
                    counter++;
                }
            }
        }
    }
}