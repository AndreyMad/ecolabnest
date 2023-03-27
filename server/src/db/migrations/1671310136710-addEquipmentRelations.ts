import {MigrationInterface, QueryRunner} from "typeorm";

export class addEquipmentRelations1671310136710 implements MigrationInterface {
    name = 'addEquipmentRelations1671310136710'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`visit_equipments_list_equipment\` (\`visitId\` int NOT NULL, \`equipmentId\` int NOT NULL, INDEX \`IDX_e54fc67ed73e5fd87f89702698\` (\`visitId\`), INDEX \`IDX_07ae06b7b738307bcb7cb806df\` (\`equipmentId\`), PRIMARY KEY (\`visitId\`, \`equipmentId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`visit\` ADD \`visitType\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`visit\` ADD \`engineerComment\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`visit\` ADD \`managerComment\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`visit\` ADD \`restourantId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`visit\` ADD CONSTRAINT \`FK_880b86f92b25dced6fc7af7a62e\` FOREIGN KEY (\`restourantId\`) REFERENCES \`restourant\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`visit_equipments_list_equipment\` ADD CONSTRAINT \`FK_e54fc67ed73e5fd87f897026980\` FOREIGN KEY (\`visitId\`) REFERENCES \`visit\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`visit_equipments_list_equipment\` ADD CONSTRAINT \`FK_07ae06b7b738307bcb7cb806df6\` FOREIGN KEY (\`equipmentId\`) REFERENCES \`equipment\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`visit_equipments_list_equipment\` DROP FOREIGN KEY \`FK_07ae06b7b738307bcb7cb806df6\``);
        await queryRunner.query(`ALTER TABLE \`visit_equipments_list_equipment\` DROP FOREIGN KEY \`FK_e54fc67ed73e5fd87f897026980\``);
        await queryRunner.query(`ALTER TABLE \`visit\` DROP FOREIGN KEY \`FK_880b86f92b25dced6fc7af7a62e\``);
        await queryRunner.query(`ALTER TABLE \`visit\` DROP COLUMN \`restourantId\``);
        await queryRunner.query(`ALTER TABLE \`visit\` DROP COLUMN \`managerComment\``);
        await queryRunner.query(`ALTER TABLE \`visit\` DROP COLUMN \`engineerComment\``);
        await queryRunner.query(`ALTER TABLE \`visit\` DROP COLUMN \`visitType\``);
        await queryRunner.query(`DROP INDEX \`IDX_07ae06b7b738307bcb7cb806df\` ON \`visit_equipments_list_equipment\``);
        await queryRunner.query(`DROP INDEX \`IDX_e54fc67ed73e5fd87f89702698\` ON \`visit_equipments_list_equipment\``);
        await queryRunner.query(`DROP TABLE \`visit_equipments_list_equipment\``);
    }

}
