import { Injectable } from "@nestjs/common";

@Injectable()
export class DatabaseService{
  findCompanyById(id: number){
    return { id, name:'BH-Tech'}
  }
}