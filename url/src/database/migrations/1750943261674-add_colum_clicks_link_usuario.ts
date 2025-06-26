import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumClicksLinkUsuario1750943261674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("urls", new TableColumn({
            name:"clicks",
            type: "int",
            isNullable: true,
            default: 0
        }));

        await queryRunner.addColumn("urls", new TableColumn({
            name:"ulrEncurtada",
            type: "varchar",
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("urls", "clicks");
        await queryRunner.dropColumn("urls", "ulrEncurtada");
    }

}
