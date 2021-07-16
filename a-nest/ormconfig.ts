import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { ChannelChats } from './src/entities/ChannelChats';
import { ChannelMembers } from './src/entities/ChannelMembers';
import { Channels } from './src/entities/Channels';
import { DMs } from './src/entities/DMs';
import { Mentions } from './src/entities/Mentions';
import { Users } from './src/entities/Users';
import { WorkspaceMembers } from './src/entities/WorkspaceMembers';
import { Workspaces } from './src/entities/Workspaces';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [ChannelChats, ChannelMembers, Channels, DMs, Mentions, Users, WorkspaceMembers, Workspaces],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  charset: 'utf8mb4',
  synchronize: false, // 소스 상에서 만든 엔티티를 DB로 옮길때 사용, 처음 테이블 생성할때만 사용, 사용 후 꼭 false로 변경
  logging: process.env.NODE_ENV !== 'production', // 개발시에는 켜두는게 좋다
  keepConnectionAlive: true, // 서버재시작시 DB 연결 끊김방지(핫로딩을 위해)
};

export = config;
