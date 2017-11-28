



import { environment } from '../../../environments/environment';
import { JwtService } from './jwt.service';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class ApiService {
  constructor(private http: Http,
  private jwtService: JwtService
) {}
 private setHeaders(): Headers {

   let headers = new Headers();
   headers.append('Content-Type','application/json');
    headers.append('Accept', 'application/json');
    
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (this.jwtService.getToken()) {
      /*headersConfig['Authorization'] = `Bearer ${this.jwtService.getToken()}`;*/
      headers.append('Authorization', 'Bearer ' + this.jwtService.getToken());
    }
return headers;
  /*  debugger;*/
    /*return new Headers(headers);*/
  }

  private formatErrors(error: any) {
    debugger;
     return Observable.throw(error.json());
  }

 get(path: string,params: URLSearchParams = new URLSearchParams()): Observable<any> {
    debugger;
    const head= this.setHeaders();
    console.log(head);
    return this.http.get(`${environment.api_url}${path}`, { headers: head})
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    console.log( JSON.stringify(body));
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }
  postFormData(path:string,body:Object={}):Observable<any>{
    let headers= new Headers();
     if (this.jwtService.getToken()) {
      /*headersConfig['Authorization'] = `Bearer ${this.jwtService.getToken()}`;*/
      headers.append('Authorization', 'Bearer ' + this.jwtService.getToken());
    }
    
    debugger;
    return this.http.post( `${environment.api_url}${path}`,body,{headers:headers})
                .catch(this.formatErrors).map((res:Response)=>res.json());
  }

}


