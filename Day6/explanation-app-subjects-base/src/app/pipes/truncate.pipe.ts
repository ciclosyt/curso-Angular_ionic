import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
@Injectable({
  providedIn: 'root'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 10): any {
    return value.substr(0, limit) + '...';
  }
}
