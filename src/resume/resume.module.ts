import { Module } from '@nestjs/common';
import { ResumeResolver } from './resume.resolver';

@Module({
  providers: [ResumeResolver],
})
export class ResumeModule {}
