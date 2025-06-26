import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1750963867281 implements MigrationInterface {
    name = 'Initial1750963867281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "urls" DROP COLUMN "ulrEncurtada"`);
        await queryRunner.query(`ALTER TABLE "urls" ADD "url_encurtada" character varying`);
        await queryRunner.query(`ALTER TABLE "urls" ALTER COLUMN "id_user" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "urls" ALTER COLUMN "clicks" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "urls" ALTER COLUMN "clicks" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "urls" ALTER COLUMN "id_user" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "urls" DROP COLUMN "url_encurtada"`);
        await queryRunner.query(`ALTER TABLE "urls" ADD "ulrEncurtada" character varying`);
    }

}
