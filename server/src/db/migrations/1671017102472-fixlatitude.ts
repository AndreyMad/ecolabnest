import {MigrationInterface, QueryRunner} from "typeorm";

export class fix1671017102472 implements MigrationInterface {
    name = 'fix1671017102472'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restourant\` CHANGE \`latitude\` \`latitude\` varchar(255) NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`restourant\` CHANGE \`longtitude\` \`longtitude\` varchar(255) NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`restourant\` CHANGE \`adress\` \`address\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`restourant\` DROP COLUMN \`address\``);
        await queryRunner.query(`ALTER TABLE \`restourant\` ADD \`address\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restourant\` CHANGE \`longtitude\` \`longtitude\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`restourant\` CHANGE \`latitude\` \`latitude\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`restourant\` DROP COLUMN \`address\``);
        await queryRunner.query(`ALTER TABLE \`restourant\` ADD \`address\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`restourant\` CHANGE \`address\` \`adress\` varchar(255) NOT NULL`);
    }

}
