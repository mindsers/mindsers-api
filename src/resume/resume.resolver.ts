import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Resume } from './models/resume.model';

@Resolver((of) => Resume)
export class ResumeResolver {
  @Query((returns) => Resume)
  async resume(@Args('id') id: string): Promise<Resume> {
    const resume = { id: 'test', title: 'title' };
    if (!resume) {
      throw new NotFoundException(id);
    }

    return resume;
  }
}
