import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './product';
import { Observable, throwError } from 'rxjs';
import { tap , catchError } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class ProductService{

    baseUrl:string="api/products/products.json"
    constructor(private http:HttpClient){
        console.log("i have injected");
    }
    getProducts(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.baseUrl).pipe(
            tap(data=>console.log(`original data${JSON.stringify(data)}`)),
            catchError(this.catchErrorHandler)
            );           

    }

   private catchErrorHandler(err:HttpErrorResponse){
        // in the real world app we may send to the server some real infr

        let errorMessage='';
        if(err.error instanceof ErrorEvent){
            // A client-side or network error occured. Handle it accordingly
            errorMessage=`An error occurred :${err.error.message}`;
        }
        else{
            // the backend returned an unsuccessful response code.
            // the response body may contain clues as to what went wrong

            errorMessage=`Server returned code:${err.status} error message is ${err.message}`
        }
        console.error(err);
        return throwError(err); 
    }
}