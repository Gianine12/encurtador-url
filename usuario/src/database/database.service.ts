import { Injectable } from "@nestjs/common";

@Injectable()
export class DatabaseService{
  findUserById(id: number){
    return { id, name:'Gianine Rosa Barbosa Cirilo'}
  }
}