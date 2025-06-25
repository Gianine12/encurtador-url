import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1750811275969 implements MigrationInterface {
    name = 'Initial1750811275969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "urls" ("id" SERIAL NOT NULL, "link" character varying NOT NULL, "id_user" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_eaf7bec915960b26aa4988d73b0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "urls"`);
    }

}
