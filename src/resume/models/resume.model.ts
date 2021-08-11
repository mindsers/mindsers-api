import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Resume {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;
}
