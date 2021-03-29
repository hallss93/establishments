
import { Injectable } from '@angular/core';
import { Observable, EMPTY} from 'rxjs';
import { Delivery } from '../components/delivery.model';
import { map, catchError } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeliveryServicesService {

  baseUrl = "https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    })
  }


  read(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }


  readByIddelivery(id: string): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(this.baseUrl).pipe(
      map((remuneracoes: Delivery[]) => remuneracoes.filter(r => r.id.indexOf(id)>=0)),
      catchError(e => this.errorHandler(e))
    )
  }


  errorHandler(e: any): Observable<any> {
    console.log(e)
    if (e.status == 0) {
      this.showMessage('Falta de conexão com a internet!', true)//podemos analisar todo os tipos de erros http
    } else if(e.status == 500){
      this.showMessage('Erro no servidor.', true) 
    } else if(e.status == 404){
       this.showMessage('Nenhum registro encontrado', true)
    }else {
      this.showMessage(e.message, true)
    }
    return EMPTY
  }

  
}
