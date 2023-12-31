import { Logger } from '@nestjs/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class PublicItems1704003056019 implements MigrationInterface {
  private readonly logger = new Logger(PublicItems1704003056019.name);

  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('UP');
    await queryRunner.query('UPDATE item SET public=1');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('DOWN');
  }
}
