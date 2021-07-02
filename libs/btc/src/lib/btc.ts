import { Rate } from '@star/shared/types';

export function btc(): Rate {
  return Math.random() * 100000;
}

// import { timer } from "rxjs";
// import {map} from "rxjs/operators";
// const stonks$ = timer(1000, 1000).pipe(map(() => Math.random() * 100000)), map((n)=> `1 BTC = ${n} EUR`));
// stonks$.subscription(console.log);
