import {MigrationInterface, QueryRunner} from "typeorm";

export class addRelations1671011533935 implements MigrationInterface {
    name = 'addRelations1671011533935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restourant\` ADD \`cityId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`city\` ADD \`region\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`equipment\` DROP COLUMN \`restourantId\``);
        await queryRunner.query(`ALTER TABLE \`equipment\` ADD \`restourantId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`equipment\` ADD CONSTRAINT \`FK_998dce2898da53581f901f1d039\` FOREIGN KEY (\`restourantId\`) REFERENCES \`restourant\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`restourant\` ADD CONSTRAINT \`FK_ec2ddeca14b8c43322fc820d2ba\` FOREIGN KEY (\`cityId\`) REFERENCES \`city\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restourant\` DROP FOREIGN KEY \`FK_ec2ddeca14b8c43322fc820d2ba\``);
        await queryRunner.query(`ALTER TABLE \`equipment\` DROP FOREIGN KEY \`FK_998dce2898da53581f901f1d039\``);
        await queryRunner.query(`ALTER TABLE \`equipment\` DROP COLUMN \`restourantId\``);
        await queryRunner.query(`ALTER TABLE \`equipment\` ADD \`restourantId\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`city\` DROP COLUMN \`region\``);
        await queryRunner.query(`ALTER TABLE \`restourant\` DROP COLUMN \`cityId\``);
    }

}
