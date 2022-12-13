import {MigrationInterface, QueryRunner} from "typeorm";

export class addEquipment1670959485746 implements MigrationInterface {
    name = 'addEquipment1670959485746'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`equipment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`article\` varchar(255) NULL, \`restourantId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`equipment\``);
    }

}
