import IonIcon from '@reacticons/ionicons';

export interface HomeSectionProps {
  contentColor: string;
  contentBG: string;
  textColor: string;
  isSticky: boolean;
}

export interface ITitle {
  title: string;
}

export interface HomeContentProps {
  bgColor?: string;
  accentColor?: string;
  textColor?: string;
  Content: React.ComponentType<HomeSectionProps>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
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
  internalLink: string | null;
  internalLinkText: string | null;
  internalLinkIcon: React.ComponentProps<typeof IonIcon>['name'] | null;
  description: string;
  tags: string[];
  links: ContactLinkProps[];
}
