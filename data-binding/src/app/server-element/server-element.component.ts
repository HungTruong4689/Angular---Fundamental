import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild("heading") header: ElementRef;
  @ContentChild("contentParagraph") paragraph: ElementRef;

  constructor() {
    console.log("Contructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnIt called");
    console.log("Text Content " + this.header.nativeElement.textContent);
    console.log(
      "Text Content of Paragraph: " + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called");
    console.log(
      "Text Content of Paragraph: " + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Called");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Called");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called");
    console.log("Text Content " + this.header.nativeElement.textContent);
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy Called");
  }
}
