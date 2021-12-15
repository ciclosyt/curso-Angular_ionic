import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
@Injectable({
  providedIn: 'root'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, n: number): string {

    return n === 0 || value.length < n ? value : value.substring(0, n) + '...';
  }
}
