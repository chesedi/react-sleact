import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelChats } from '../entities/ChannelChats';
import { ChannelMembers } from '../entities/ChannelMembers';
import { Channels } from '../entities/Channels';
import { Users } from '../entities/Users';
import { Workspaces } from '../entities/Workspaces';
import { ChannelsService } from './channels.service';
import { ChannelsController } from './channels.controller';
import { EventsGateway } from 'src/events/events.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Channels, ChannelChats, Users, Workspaces, ChannelMembers])],
  providers: [ChannelsService, EventsGateway],
  controllers: [ChannelsController],
})
export class ChannelsModule {}
