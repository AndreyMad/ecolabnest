import {MigrationInterface, QueryRunner} from "typeorm";

export class addCityRestourantItem1670356151331 implements MigrationInterface {
    name = 'addCityRestourantItem1670356151331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`city\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`item\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`restourant\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NULL, \`adress\` varchar(255) NOT NULL, \`latitude\` varchar(255) NULL, \`longtitude\` varchar(255) NULL, \`type\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`restourant\``);
        await queryRunner.query(`DROP TABLE \`item\``);
        await queryRunner.query(`DROP TABLE \`city\``);
    }

}
