import { bindable } from "aurelia-framework";
import "time-line.css";

export class TimeLineCustomElement {
	@bindable header;

  @bindable items = [];
}
