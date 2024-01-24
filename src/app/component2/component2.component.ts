import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { of, map, switchMap, interval, take, filter, catchError, BehaviorSubject, combineLatest, withLatestFrom, from, mergeMap, concatMap, distinctUntilChanged, Observable, Subject, multicast } from 'rxjs';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {
  constructor(private apiService: ApiService) { }
  data: string = '';

  ngOnInit(): void {
    // this.apiService.data$.subscribe(apiData => {
    //   this.data = apiData;
    // });

    // // Map
    // const mapSource = of(1, 2, 3);
    // const mapExample = mapSource.pipe(map(value => value * 2));
    // mapExample.subscribe(mappedValue => console.log(mappedValue)); // Output: 2, 4, 6

    // // SwitchMap
    // const switchMapSource = of(1, 2, 3);
    // const switchMapExample = switchMapSource.pipe(
    //   switchMap(value => interval(1000).pipe(take(value)))
    // );
    // switchMapExample.subscribe(switchedValue => console.log(switchedValue)); // Output: 0, 0, 1, 0, 1, 2

    // // Pipe
    // const pipeSource = of(1, 2, 3, 4, 5);
    // const pipeExample = pipeSource.pipe(
    //   filter(value => value % 2 === 0),
    //   map(filteredValue => filteredValue * 2)
    // );
    // pipeExample.subscribe(pipedValue => console.log(pipedValue)); // Output: 4, 8

    // // CatchError
    // const catchErrorSource = of(1, 2, 3, 'error', 4);
    // const catchErrorExample = catchErrorSource.pipe(
    //   map(value => {
    //     if (typeof value === 'string') {
    //       throw new Error('Encountered a string');
    //     }
    //     return value;
    //   }),
    //   catchError(error => of('Error handled'))
    // );
    // catchErrorExample.subscribe(handledValue => console.log(handledValue)); // Output: 1, 2, 3, 'Error

    // // BehaviorSubject
    // const behaviorSubject = new BehaviorSubject('Initial Value');
    // behaviorSubject.subscribe(initialValue => console.log(initialValue)); // Output: Initial Value

    // behaviorSubject.next('Updated Value');
    // // Output: Initial Value (due to BehaviorSubject emitting the initial value to new subscribers)
    // // Output: Updated Value

    // // Filter
    // const filterSource = of(1, 2, 3, 4, 5);
    // const filterExample = filterSource.pipe(filter(value => value > 2));
    // filterExample.subscribe(filteredValue => console.log(filteredValue)); // Output: 3, 4, 5

    // // CombineLatest
    // const obs1 = of('A', 'B', 'C');
    // const obs2 = of(1, 2, 3);

    // const combined = combineLatest(obs1, obs2);
    // combined.subscribe(([value1, value2]) => console.log(value1, value2));
    // // Output: C 1, C 2, C 3 (as each observable emits a new value)

    // // WithLatestFrom
    // const withLatestFromSource = of(1, 2, 3);
    // const trigger = of('Trigger');

    // const withLatestFromExample = withLatestFromSource.pipe(withLatestFrom(trigger));
    // withLatestFromExample.subscribe(([value, triggerValue]) => console.log(value, triggerValue));
    // // Output: 3 Trigger (as source emits its last value when trigger emits)

    // // From / Of:
    // const fromExample = from([1, 2, 3]);
    // fromExample.subscribe(fromValue => console.log(fromValue)); // Output: 1, 2, 3

    // // Of: Emit a sequence of values as an observable
    // const ofExample = of(4, 5, 6);
    // ofExample.subscribe(ofValue => console.log(ofValue)); // Output: 4, 5, 6

    // // MergeMap
    // const mergeMapSource = of('Hello', 'World');
    // const mergeMapExample = mergeMapSource.pipe(
    //   mergeMap(value => of(`${value} RxJS!`))
    // );
    // mergeMapExample.subscribe(mergedValue => console.log(mergedValue));
    // // Output: Hello RxJS!, World RxJS!

    // // ConcatMap
    // const concatMapSource = of('Hello', 'World');
    // const concatMapExample = concatMapSource.pipe(
    //   concatMap(value => of(`${value} RxJS!`))
    // );
    // concatMapExample.subscribe(concatenatedValue => console.log(concatenatedValue));
    // // Output: Hello RxJS!, World RxJS!

    // // DistinctUntilChanged
    // const distinctUntilChangedSource = of(1, 1, 2, 2, 3, 3, 3, 4);
    // const distinctUntilChangedExample = distinctUntilChangedSource.pipe(distinctUntilChanged());
    // distinctUntilChangedExample.subscribe(distinctValue => console.log(distinctValue));
    // // Output: 1, 2, 3, 4

    // // Creation
    // const customObservable = new Observable(observer => {
    //   observer.next('A');
    //   observer.next('B');
    //   observer.complete();
    // });

    // customObservable.subscribe(customValue => console.log(customValue)); // Output: A, B

    // Multicast
    // const multicastSource = interval(1000).pipe(take(3));
    // const multicastSubject = new Subject();

    // multicastSource.pipe(multicast(multicastSubject)).connect();

    // multicastSubject.subscribe(observer1Value => console.log('Observer 1: ' + observer1Value));
    // setTimeout(() => {
    //   multicastSubject.subscribe(observer2Value => console.log('Observer 2: ' + observer2Value));
    // }, 1500);
    // // Output: Observer 1: 0, Observer 1: 1, Observer 2: 1, Observer 1: 2, Observer 2: 2

    // Promise

    const myPromise = new Promise((resolve, reject) => {
      console.log('fetching data...');

      setTimeout(() => {
        const success = true;
        if (success) {
          resolve("Data successfully fetched!");
        } else {
          reject("Error: Unable to fetch data");
        }
      }, 2000);
    });
    myPromise.then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
    console.log('11 fetching data...');

  }
}


// from(this.dummyColorObject).pipe(
//   // map(data => data.color),
//   pluck('moreData', 'name'),
//   toArray()
// ).subscribe(
//   res => {
//     console.log(res);
//   }
// );

// const customObservable = new Observable(observer => {
//   observer.next('One');
//   observer.next('Two');
// });
// customObservable.subscribe(
//   {
//     next: (res) => {
//       console.log(res);
//     }
//   }
// );
// const takeOperatorSource = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// take operator

// from(takeOperatorSource).pipe(
//   take(5)
// ).subscribe(res => {
//   console.log(res);
// });

// takeLastOperator

// from(takeOperatorSource).pipe(
//   takeLast(5)
// ).subscribe(res => {
//   console.log(res);
// });

// const tapOperatorSource = of(1, 2, 3, 4, 5);

// tapOperatorSource.pipe(
//   tap(value => console.log(`Before mapping: ${value}`)),
//   map(value => value * 2),
//   tap(value => console.log(`After mapping: ${value}`))
// ).subscribe();

// const sourceObservable = of(1, 2, 3, 4, 5);

// const resultObservable = sourceObservable.pipe(
//   mergeMap(value => of(value * 2))
// );

// resultObservable.subscribe(
//   result => console.log('Next:', result),
//   error => console.error('Error:', error),
//   () => console.log('Complete')
// );

// const Zipobservable1 = of('A', 'B', 'C');
// const Zipobservable2 = of(1, 2, 3);

// const zippedObservable = zip(Zipobservable1, Zipobservable2);

// zippedObservable.subscribe(([valueFromObs1, valueFromObs2]) => {
//   console.log(`Obs1: ${valueFromObs1}, Obs2: ${valueFromObs2}`);
// });

// const ForkJoinobservable1 = of('A', 'B', 'C');
// const ForkJoinobservable2 = timer(1000).pipe(take(1));

// const forkJoinedObservable = forkJoin({
//   obs1: ForkJoinobservable1,
//   obs2: ForkJoinobservable2,
// });

// forkJoinedObservable.subscribe((result) => {
//   console.log(result);
// });

// const filterOperator = from(this.dummyColorObject);
// filterOperator.pipe(
//   filter(color => color.color == "black"),
//   toArray()).subscribe(res => {
//     console.log(res);
//   });

// const takeOperator = of(1, 2, 3, 4, 5);
// const ShowTakeOperator = takeOperator.pipe(take(3)).subscribe(res => {
//   console.log(res);
// });

// const ajexOperator = `https://api.github.com/users?per_page=2`;
// const showAjexOperator = ajax(ajexOperator);

// const subUsers = showAjexOperator.subscribe(
//   res => console.log(res),
//   err => console.error(err)
// );

// const combineNumber: Observable<number> = of(1, 2, 3);
// const combineString: Observable<string> = of('A', 'B', 'C');

// const combinedObservable = combineLatest([combineNumber, combineString]);
// combinedObservable.subscribe(([value1, value2]) => {
//   console.log(`Combined: ${value1}, ${value2}`);
// });

// const combinedObservable = combineNumber.pipe(
//   withLatestFrom(combineString)
// );

// combinedObservable.subscribe(([value1, value2]) => {
//   console.log(`Combined: ${value1}, ${value2}`);
// });
// this.apiService.fetchData().subscribe();
// const obs1 = of(1, 2, 3);
// obs1.subscribe(res => {
//   console.log(res);
// })
// const source = of(1, 2, 3);
// source.pipe(
//   map(value => value * 2)
// ).subscribe(result => console.log(result));

// source.pipe(
//   switchMap(value => interval(1000).pipe(take(value)))
// ).subscribe(result => console.log(result));

// const sourceError = throwError('This is an error');

// source.pipe(
//   catchError(sourceError => of('Caught an error'))
// ).subscribe(result => console.log(result));


// dummyColorObject = [
//   {
//     color: "red",
//     value: "#f00",
//     moreData: {
//       name: "red more"
//     }
//   },
//   {
//     color: "green",
//     value: "#0f0"
//   },
//   {
//     color: "blue",
//     value: "#00f"
//   },
//   {
//     color: "cyan",
//     value: "#0ff"
//   },
//   {
//     color: "magenta",
//     value: "#f0f"
//   },
//   {
//     color: "yellow",
//     value: "#ff0"
//   },
//   {
//     color: "black",
//     value: "#000"
//   }
// ];
