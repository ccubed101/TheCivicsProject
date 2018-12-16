import { Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface IAuthenticationService {
    Login(userName: string, password: string): Observable<{} | HttpResponse<any>>;
    Logout(): Observable<{} | HttpResponse<any>>;
    Register(userName: string, password: string, isAdmin: boolean): Observable<{} | HttpResponse<any>>;
    IsLoggedIn(): boolean;
    Test(): Observable<{} | HttpResponse<any>>;
}

// Service responsible for all things authentication.
export class AuthenticationService implements IAuthenticationService {

    // Construction.
    constructor(
        private httpClient: HttpClient
        , @Inject('BASE_URL') private baseUrl: string
    ) {
    }


    Login(userName: string, password: string): Observable<{} | HttpResponse<any>> {
        return this.httpClient.post(
            this.baseUrl + 'Authentication/Login',
            JSON.stringify({ UserName: userName, Password: password }),
            {
                observe: 'response'     // Want entire HTTP response returned.
            }
        ).pipe(
            catchError(this.onError),
            //map(httpResponse => (<HttpResponse<any>>httpResponse).body)
        );
    }

    Logout(): Observable<{} | HttpResponse<any>> {
        return this.httpClient.post(
            this.baseUrl + 'Authentication/Logout',
            "",
            {
                observe: 'response'     // Want entire HTTP response returned.
            }
        ).pipe(
            catchError(this.onError),
        );
    }

    Register(userName: string, password: string, isAdmin: boolean): Observable<{} | HttpResponse<any>> {
        return this.httpClient.post(
            this.baseUrl + 'Authentication/Register',
            JSON.stringify({ UserName: userName, Password: password, IsAdmin: isAdmin }),
            {
                observe: 'response'     // Want entire HTTP response returned.
            }
        ).pipe(
            catchError(this.onError),
            //map(httpResponse => (<HttpResponse<any>>httpResponse).body)
        );
    }

    IsLoggedIn(): boolean {
        return true;
    }

    Test(): Observable<{} | HttpResponse<any>> {
        //return this.httpClient.get(
        //    this.baseUrl + 'Authentication/Test',
        //    {
        //        observe: 'response'     // Want entire HTTP response returned.
        //    }
        //).pipe(
        //    catchError(this.onError),
        //    //map(httpResponse => (<HttpResponse<any>>httpResponse).body)
        //);
        return this.httpClient.get(
            'http://authorization-service:3000/api/messages/2',
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
