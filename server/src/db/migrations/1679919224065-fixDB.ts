import {MigrationInterface, QueryRunner} from "typeorm";

export class fixDB1679919224065 implements MigrationInterface {
    name = 'fixDB1679919224065'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_61e7a6753938c8387422c0560f9\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`visitsId\``);
        await queryRunner.query(`ALTER TABLE \`visit\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`visit\` ADD CONSTRAINT \`FK_27531e380326b478dacdd7b86d9\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`visit\` DROP FOREIGN KEY \`FK_27531e380326b478dacdd7b86d9\``);
        await queryRunner.query(`ALTER TABLE \`visit\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`visitsId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_61e7a6753938c8387422c0560f9\` FOREIGN KEY (\`visitsId\`) REFERENCES \`visit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
