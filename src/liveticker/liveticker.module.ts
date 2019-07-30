import { Module } from '@nestjs/common';
import { LivetickerGateway } from './liveticker.gateway';

@Module({
  providers: [LivetickerGateway],
})
export class LivetickerModule {}
