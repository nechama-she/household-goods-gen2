import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safePipe'
})
export class SafePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
