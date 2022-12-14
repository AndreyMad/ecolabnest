import {MigrationInterface, QueryRunner} from "typeorm";

export class addVisitedFieldToRestaurant1671035264145 implements MigrationInterface {
    name = 'addVisitedFieldToRestaurant1671035264145'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restourant\` ADD \`isVisited\` tinyint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restourant\` DROP COLUMN \`isVisited\``);
    }

}
