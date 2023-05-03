import {MigrationInterface, QueryRunner} from "typeorm";

export class addEquipmentTypes1683105794730 implements MigrationInterface {
    name = 'addEquipmentTypes1683105794730'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`equipment\` ADD \`equipmentType\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`equipment\` DROP COLUMN \`equipmentType\``);
    }

}
