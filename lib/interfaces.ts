import { IconName } from './icons';

export interface Skill {
  icon: IconName;
  color?: string;
  skill: string;
  rating: number;
}

export interface ExpertiseItem {
  title: string;
  badge?: string;
  icon: IconName;
  iconBg: string;
  iconColor: string;
  highlightColor: string;
  description: React.ReactNode;
}

export interface Social {
  name: string;
  url: string;
  viewBox: string;
  color?: string;
  icon: IconName;
}
