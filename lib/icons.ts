import {
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiClaude,
} from 'react-icons/si';
import { DiPostgresql, DiMongodb } from 'react-icons/di';
import { TbPrompt } from 'react-icons/tb';
import { GiArtificialIntelligence } from 'react-icons/gi';
import {
  FaGithub,
  FaDocker,
  FaAws,
  FaDownload,
  FaCloud,
  FaServer,
  FaLinkedin,
  FaFacebookSquare,
} from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import { HiMiniCpuChip } from 'react-icons/hi2';
import { FcWorkflow } from 'react-icons/fc';
import { LuWorkflow } from 'react-icons/lu';
import { FaXTwitter } from 'react-icons/fa6';
import { IconType } from 'react-icons';

export const IconMap = {
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  DiPostgresql,
  DiMongodb,
  SiClaude,
  TbPrompt,
  GiArtificialIntelligence,
  FaGithub,
  FaDocker,
  FaAws,
  FaDownload,
  FaCloud,
  CiMenuFries,
  HiMiniCpuChip,
  FcWorkflow,
  FaServer,
  LuWorkflow,
  FaLinkedin,
  FaFacebookSquare,
  FaXTwitter,
} satisfies Record<string, IconType>;

export type IconName = keyof typeof IconMap;
