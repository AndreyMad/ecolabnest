import {MigrationInterface, QueryRunner} from "typeorm";

export class addImageToEquipment1683115869669 implements MigrationInterface {
    name = 'addImageToEquipment1683115869669'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`equipment\` ADD \`imgUrl\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`equipment\` DROP COLUMN \`imgUrl\``);
    }

}
