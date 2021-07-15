import { MigrationInterface, QueryRunner } from 'typeorm';

export class categoryToType1626329843342 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // 변경할 내역
    await queryRunner.query('ALTER TABLE `mentions` RENAME COLUMN `category` TO `type`');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `mentions` RENAME COLUMN `type` TO `category`');
  }
}
