import IonIcon from '@reacticons/ionicons';

export type HomeSectionProps = {
  contentColor: string;
  contentBG: string;
  textColor: string;
  isSticky: boolean;
};

export type HomeContentProps = {
  bgColor?: string;
  accentColor?: string;
  textColor?: string;
  Content: React.ComponentType<HomeSectionProps>;
};

export type ContactLinkProps = {
  logo: React.ComponentProps<typeof IonIcon>['name'];
  url: string;
  title: string;
};
export type LinksArray = {
  linksArray: ContactLinkProps[];
};
