import IonIcon from '@reacticons/ionicons';

export interface HomeSectionProps {
  contentColor: string;
  contentBG: string;
  textColor: string;
  isSticky: boolean;
}

export interface HomeContentProps {
  bgColor?: string;
  accentColor?: string;
  textColor?: string;
  Content: React.ComponentType<HomeSectionProps>;
}

export interface ContactLinkProps {
  logo: React.ComponentProps<typeof IonIcon>['name'];
  url: string;
  title: string;
}

export interface LinksArray {
  linksArray: ContactLinkProps[];
}

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  links: ContactLinkProps[];
}
