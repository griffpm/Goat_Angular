import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Goat } from './goat';

@Injectable({
    providedIn: 'root'
})
export class GoatsService {
    getSingleStudent(goat_id: any) {
      throw new Error('Method not implemented.');
    }
    constructor( private http: HttpClient){}
    baseUrl: string = 'http://localhost/php/angular/super-goat/db/';

    getGoats(){
        return this.http.get<Goat[]>(this.baseUrl+'view.php');
    }

    getSingleGoat(id:any){
        return this.http.get<Goat[]>(this.baseUrl+'view.php.id'+id);
    }

    deleteGoat(id:any){
        console.log(id);
        return this.http.delete(this.baseUrl+'delete.php?id='+ id);
    }

    createGoat(goat:any){
        return this.http.post(this.baseUrl+'insert.php', goat);
    }

    editGoat(goat:any){
        return this.http.put(this.baseUrl+'update.php', goat);
    }
}
