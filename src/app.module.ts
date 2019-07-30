import { Module } from '@nestjs/common';
import { LivetickerModule } from './liveticker/liveticker.module';

@Module({
  imports: [LivetickerModule],
})
export class ApplicationModule {}
