import {MigrationInterface, QueryRunner} from "typeorm";

export class addEmailToRestourant1679691703488 implements MigrationInterface {
    name = 'addEmailToRestourant1679691703488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restourant\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`restourant\` ADD \`phoneNumber\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restourant\` DROP COLUMN \`phoneNumber\``);
        await queryRunner.query(`ALTER TABLE \`restourant\` DROP COLUMN \`email\``);
    }

}
