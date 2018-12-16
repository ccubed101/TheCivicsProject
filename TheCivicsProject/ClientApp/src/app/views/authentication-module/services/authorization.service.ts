import { Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface IAuthorizationService {
    AddAdministratorAuthorization(): Observable<{} | HttpResponse<any>>
}

// Service responsible for all things authorization.
export class AuthorizationService implements IAuthorizationService {

    // Construction.
    constructor(
        private httpClient: HttpClient
        , @Inject('BASE_URL') private baseUrl: string
    ) {
    }


    AddAdministratorAuthorization(): Observable<{} | HttpResponse<any>> {
        return this.httpClient.post(
            this.baseUrl + 'Authorization/AddAdministratorAuthorization',
            null,
            {
                observe: 'response'     // Want entire HTTP response returned.
            }
        ).pipe(
            catchError(this.onError),
            //map(httpResponse => (<HttpResponse<any>>httpResponse).body)
        );
    }


    // Private methods.

    private onError(error: HttpErrorResponse): Observable<never> {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    };
}
