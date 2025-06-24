import { Injectable } from "@nestjs/common";

@Injectable()
export class DatabaseService{
  findAllUrl(){
    return { id: 123, url: 'https://localhost:3001/a34ft6'}
  }
}