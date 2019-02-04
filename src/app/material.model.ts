import { Tag } from './tag.model';
import { Author } from './author.model';
import { Link } from './link.model';

export interface Material {
  id: string;
  title: string;
  body: string;
  tags: [Tag];
  authros: Map<string, Author>;
  links: [Link]
}
