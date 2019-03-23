import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "input[numbersOnly]"
})
export class NumberOnlyDirective {
  constructor(private _el: ElementRef) {}

  @HostListener("input", ["$event"]) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    // console.log(initalValue);
    //^[1-9][0-9]*
    if (initalValue == 0) {
      this._el.nativeElement.value = "";
    } else {
      this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, "");
      if (initalValue !== this._el.nativeElement.value) {
        event.stopPropagation();
      }
    }
  }
}
