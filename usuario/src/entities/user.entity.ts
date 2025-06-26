import * as bcrypt from 'bcrypt';
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name:string;

  @Column({unique:true})
  @IsEmail()
  email: string

  @Column()
  senha:string

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.senha) {
      this.senha = await bcrypt.hash(this.senha, 10);
    }
  }

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}