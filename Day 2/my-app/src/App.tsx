import { useEffect, useState } from "react";
import "./App.css";
import { delay, filter, from, map, mergeMap } from "rxjs";

{
  /*https://jsonplaceholder.typicode.com/posts*/
}

const numberObservable = from([1, 2, 3, 4, 5]);
const squareNumber = numberObservable.pipe(
  filter((val) => val > 2),
  mergeMap((val) => from([val]).pipe(delay(1000 * val))),
  map((val) => val * val)
);

const useObservable = (subscriber: any, setter:any) => {
  useEffect(() => {
    const subscription = subscriber.subscribe({
      next(result:any){
        setter(result)
        console.log(result)
      },
      complete(){
        console.log("Data Emittion Completed")
      },
      error(err: any){
        console.log("Error Occurs: ", err)
      }
    }
    );

    // Cleanup the subscription when the component is unmounted
    return () => subscription.unsubscribe();
  }, [subscriber, setter]);
}

function App() {
  const [currentNumber, setCurrentNumber] = useState(0);
  useObservable(squareNumber, setCurrentNumber)
  

  return <div>Current Number is: {currentNumber}</div>;
}

export default App;
