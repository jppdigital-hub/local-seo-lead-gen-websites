export interface Insight {
  insight: string;
  category: string;
  reason: string;
  selected?: boolean;
}

export interface Post {
  text: string;
  category: string;
  insightText: string;
  isEditing?: boolean;
}

export interface SessionData {
  insights: Insight[];
  posts: Post[];
}

export const CATEGORY_COLORS: Record<string, string> = {
  'Branding': 'bg-blue-100 text-blue-800 border-blue-200',
  'Parenting': 'bg-green-100 text-green-800 border-green-200',
  'Life': 'bg-purple-100 text-purple-800 border-purple-200',
  'Career': 'bg-orange-100 text-orange-800 border-orange-200',
  'Relationships': 'bg-pink-100 text-pink-800 border-pink-200',
  'Nursing': 'bg-teal-100 text-teal-800 border-teal-200',
  'Business': 'bg-indigo-100 text-indigo-800 border-indigo-200',
  'Other': 'bg-gray-100 text-gray-800 border-gray-200'
};
