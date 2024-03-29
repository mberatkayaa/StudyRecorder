// import { List } from "../Utility/List.js";
// import { NotifyPropertyChanged } from "../Utility/NotifyPropertyChanged.js";

// export default class Session extends NotifyPropertyChanged {
//   #name;
//   #startDate;
//   #endDate;
//   #finished;
//   #running;
//   #elapsedTime;
//   #lessons;

//   constructor(name, startDate, endDate, finished = false) {
//     super();
//     this.#name = name;
//     this.#startDate = startDate;
//     this.#endDate = endDate;
//     this.#finished = finished;
//     this.#elapsedTime = new ElapsedTime();
//     this.#lessons = new List();

//     this.#lessons.itemAddedEvent.subscribe(this._onPropertyChanged.bind(this, "lessons"));
//     this.#lessons.itemRemovedEvent.subscribe(this._onPropertyChanged.bind(this, "lessons"));
//   }

//   //#region Property get-set
//   get name() {
//     return this.#name;
//   }

//   set name(value) {
//     const changed = this._isChanged("name", value);
//     this.#name = value;
//     if (changed) {
//       this._onPropertyChanged("name");
//     }
//   }

//   get startDate() {
//     let earliest = new Date();
//     this.subSessions.items.forEach((value) => {
//       if (value.startDate.getTime() < earliest.getTime()) {
//         earliest = value.startDate;
//       }
//     });

//     this.#lessons.items.forEach((value) => {
//       if (value.startDate.getTime() < earliest.getTime()) {
//         earliest = value.startDate;
//       }
//     });
//     return earliest;
//   }

//   get endDate() {
//     let latest = new Date();
//     this.subSessions.items.forEach((value) => {
//       if (value.startDate.getTime() < latest.getTime()) {
//         latest = value.startDate;
//       }
//     });

//     this.#lessons.items.forEach((value) => {
//       if (value.startDate.getTime() < latest.getTime()) {
//         latest = value.startDate;
//       }
//     });
//     return latest;
//   }
//   //#endregion
// }
