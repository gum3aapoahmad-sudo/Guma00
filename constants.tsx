
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'audio',
    title: 'الإنتاج الصوتي الفاخر',
    description: 'أغاني بأسماء خاصة، مواويل عتابا، وهندسة صوتية احترافية تليق بمناسباتكم السعيدة.',
    price: '10$',
    icon: '🎙️',
  },
  {
    id: 'photo',
    title: 'تعديل الصور (فاشن)',
    description: 'تحويل الصور الشخصية إلى بوسترات سينمائية وتعديل الملامح والملابس بأسلوب الموديل العالمي.',
    price: '2$ / 5 صور',
    icon: '💎',
    badge: 'الأكثر طلباً',
  },
  {
    id: 'video',
    title: 'مونتاج فيديو (Motion)',
    description: 'صناعة فيديوهات تيك توك وريلز احترافية مع تأثيرات بصرية وانتقالات تجذب الملايين.',
    price: '4$',
    icon: '🎬',
  },
  {
    id: 'web',
    title: 'هوية بصرية ومواقع',
    description: 'بناء حضورك الرقمي من الصفر. شعارات، مواقع إلكترونية، وإدارة صفحات التواصل الاجتماعي.',
    price: 'اتفاق خاص',
    icon: '🌐',
    badge: 'جديد',
  },
];

export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    category: 'تعديل فاشن',
    title: 'جلسة تصوير شتوية - دمشق',
    image: 'https://images.unsplash.com/photo-1539109132314-34a936ee5586?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    category: 'مونتاج فيديو',
    title: 'برومو مطعم شرقي',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    category: 'هوية بصرية',
    title: 'براند أزياء "حلبي"',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 4,
    category: 'تصميم ويب',
    title: 'منصة بيع عقارات',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
  },
];

export interface ProjectUpdate {
  id: number;
  type: string;
  title: string;
  date: string;
  image: string;
}

export const RECENT_UPDATES: ProjectUpdate[] = [
  {
    id: 0,
    type: 'تحديث ذكي',
    title: 'إطلاق مختبر حلبي للذكاء الاصطناعي (AI Lab)',
    date: 'الآن',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4628c71d0?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 1,
    type: 'فيديو',
    title: 'فيديو ترويجي لشركة سياحة في اللاذقية',
    date: 'أمس',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    type: 'تصوير',
    title: 'تعديل 50 صورة لصالح متجر إلكتروني',
    date: 'منذ 3 أيام',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=400',
  },
];
