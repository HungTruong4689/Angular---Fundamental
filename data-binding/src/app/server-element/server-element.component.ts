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
  constructor() {
    console.log("Contructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnIt called");
  }

  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Called");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Called");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy Called");
  }
}
