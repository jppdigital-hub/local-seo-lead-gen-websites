import { useState } from 'react';
import { Copy, RefreshCw, Check, Edit2, Save } from 'lucide-react';
import { Post, CATEGORY_COLORS } from '../types';
import { getCharCountColor } from '../utils';

interface PostCardProps {
  post: Post;
  onUpdate: (text: string) => void;
  onRegenerate: () => void;
  isRegenerating: boolean;
}

export const PostCard = ({ post, onUpdate, onRegenerate, isRegenerating }: PostCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(post.text);
  const [copied, setCopied] = useState(false);

  const colorClass = CATEGORY_COLORS[post.category] || CATEGORY_COLORS['Other'];
  const charCount = isEditing ? editText.length : post.text.length;
  const charCountColor = getCharCountColor(charCount);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(post.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    onUpdate(editText);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setEditText(post.text);
    setIsEditing(true);
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
      <span className={`inline-block px-2 py-1 rounded text-xs font-medium border mb-3 ${colorClass}`}>
        {post.category}
      </span>

      {isEditing ? (
        <textarea
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="w-full p-3 border border-slate-300 rounded-lg text-slate-900 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
          rows={4}
        />
      ) : (
        <p className="text-slate-900 mb-3 whitespace-pre-wrap">
          {post.text}
        </p>
      )}

      <div className="flex items-center justify-between">
        <span className={`font-mono text-xs font-medium ${charCountColor}`}>
          {charCount}/280
        </span>

        <div className="flex gap-2">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors min-h-[44px] sm:min-h-0"
            >
              <Save size={14} />
              Save
            </button>
          ) : (
            <>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors min-h-[44px] sm:min-h-0"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>

              <button
                onClick={handleEdit}
                className="flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors min-h-[44px] sm:min-h-0"
              >
                <Edit2 size={14} />
                Edit
              </button>

              <button
                onClick={onRegenerate}
                disabled={isRegenerating}
                className="flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] sm:min-h-0"
              >
                <RefreshCw size={14} className={isRegenerating ? 'animate-spin' : ''} />
                Regenerate
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
