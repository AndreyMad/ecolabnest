import {MigrationInterface, QueryRunner} from "typeorm";

export class fixDB1679909713257 implements MigrationInterface {
    name = 'fixDB1679909713257'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`visit\` DROP FOREIGN KEY \`FK_880b86f92b25dced6fc7af7a62e\``);
        await queryRunner.query(`ALTER TABLE \`visit\` CHANGE \`engineerComment\` \`engineerComment\` varchar(255) NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`restourant\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`restourant\` CHANGE \`phoneNumber\` \`phoneNumber\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_61e7a6753938c8387422c0560f9\` FOREIGN KEY (\`visitsId\`) REFERENCES \`visit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`visit\` ADD CONSTRAINT \`FK_880b86f92b25dced6fc7af7a62e\` FOREIGN KEY (\`restourantId\`) REFERENCES \`restourant\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`visit\` DROP FOREIGN KEY \`FK_880b86f92b25dced6fc7af7a62e\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_61e7a6753938c8387422c0560f9\``);
        await queryRunner.query(`ALTER TABLE \`restourant\` CHANGE \`phoneNumber\` \`phoneNumber\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`restourant\` CHANGE \`email\` \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`visit\` CHANGE \`engineerComment\` \`engineerComment\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`visit\` ADD CONSTRAINT \`FK_880b86f92b25dced6fc7af7a62e\` FOREIGN KEY (\`restourantId\`) REFERENCES \`restourant\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
