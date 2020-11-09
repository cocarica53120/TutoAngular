import { Router } from "@angular/router";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { from, fromEvent, interval } from "rxjs";
import { auditTime, map } from "rxjs/operators";

interface Person {
  name: string;
  age: number;
}

@Component({
  selector: "app-template-favorite-color",
  templateUrl: "./app/my-experiment/my-experiment.component.html",
})
export class MyExperimentComponent implements OnInit {
  favoriteColor = "red";

  private TIME_BEFORE_SWITCH = 3;
  @Input() color: string;
  @Input() person: Person;
  @Output() countdown = new EventEmitter();

  private fullPerson: string;

  constructor(private router: Router) {
  }

  testObservable() {
    // subscribe on a basic array
    const arrayNumber = from<any>([1, 2]);
    arrayNumber.subscribe((val) => console.log(val));

    // subscribe on click in anywhere in document
    const source = fromEvent(document, "click");
    const example1 = source.pipe(
      auditTime(1000),
      map((event) => event)
    );
    const subscribe1 = example1.subscribe((event) =>
      console.log(event.timeStamp)
    );
    const example = source.pipe(
      map((event) => ` Mid: ${new Date()} Event time: ${event.timeStamp}`)
    );
    const subscribe = (id: number) =>
      example.subscribe((event) => console.log(`id=${id}: ${event}`));

    for (const id of [1, 2, 3, 4]) subscribe(id);
  }
  

  ngOnInit() {
    console.log(`ngOnInit`, this);
    this.testObservable();

    this.person = {
      name: "toto",
      age: 40,
    };
    this.fullPerson = `name: ${this.person.name}, age: ${this.person.age}`;

    // subscribe on interval every second. 
    // display messages in console.
    // updates countdown output
    // switch app to pokemons list view at 3rd interval.
    // unsubscribed at 5th interval.
    const source = interval(1000);
    const mySubscribe = source.subscribe((nb) => {
      this.favoriteColor = `${nb}`;
      this.person.age = nb + 10;
      this.fullPerson = `name: ${this.person.name}, age: ${
        this.person.age * 20
      }`;
      console.log("color=", this.color, this.person);
      this.countdown.emit(this.TIME_BEFORE_SWITCH - nb);
      if (nb === 2) {
        // window.alert("unsuscribed!!!");
      }
      if (nb === this.TIME_BEFORE_SWITCH) {
        this.router.navigate(["/pokemons"]);
      }
      if (nb === 5) {
        console.log(`Unsuscribe when ${nb} === 5`);
        mySubscribe.unsubscribe();
      }
    });
  }
}
