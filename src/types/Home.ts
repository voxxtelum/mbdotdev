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
