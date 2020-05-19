
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'convertToSpace'
})
export class ConvertToSpacePipe implements PipeTransform{
    transform(value: any, ...args: any[]):string {
        console.log('heelo',args[0]);
        return value.replace(args[0],' ');

    }

}