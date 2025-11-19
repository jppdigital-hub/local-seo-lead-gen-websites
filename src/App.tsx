import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { Insight, Post } from './types';
import { loadApiKey, saveApiKey, loadSession, saveSession } from './utils';
import { extractInsights, generatePost, regeneratePost } from './api';
import { InsightCard } from './components/InsightCard';
import { PostCard } from './components/PostCard';

function App() {
  const [apiKey, setApiKey] = useState('');
  const [transcript, setTranscript] = useState('');
  const [insights, setInsights] = useState<Insight[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [regeneratingIndex, setRegeneratingIndex] = useState<number | null>(null);

  useEffect(() => {
    const storedKey = loadApiKey();
    setApiKey(storedKey);

    const session = loadSession();
    setInsights(session.insights);
    setPosts(session.posts);
  }, []);

  useEffect(() => {
    if (apiKey) {
      saveApiKey(apiKey);
    }
  }, [apiKey]);

  useEffect(() => {
    saveSession({ insights, posts });
  }, [insights, posts]);

  const handleAnalyze = async () => {
    console.log('handleAnalyze called!', { apiKey: apiKey ? 'present' : 'missing', transcript: transcript.slice(0, 50) });

    if (!apiKey) {
      console.log('No API key');
      alert('Please add your OpenAI API key first');
      return;
    }

    if (!transcript.trim()) {
      console.log('No transcript');
      alert('Please paste a transcript first');
      return;
    }

    console.log('Starting analysis...');
    setIsAnalyzing(true);
    try {
      const extractedInsights = await extractInsights(apiKey, transcript);
      console.log('Extracted insights:', extractedInsights);
      setInsights(extractedInsights);
      setPosts([]);
    } catch (error) {
      console.error('Analysis error:', error);
      alert(`Error analyzing transcript: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleToggleInsight = (index: number) => {
    setInsights(prev => prev.map((insight, i) =>
      i === index ? { ...insight, selected: !insight.selected } : insight
    ));
  };

  const handleGeneratePosts = async () => {
    const selectedInsights = insights.filter(i => i.selected);

    if (selectedInsights.length === 0) {
      alert('Please select at least one insight to generate posts');
      return;
    }

    setIsGenerating(true);
    const newPosts: Post[] = [];

    try {
      for (const insight of selectedInsights) {
        const postText = await generatePost(apiKey, insight.insight, insight.category);
        newPosts.push({
          text: postText,
          category: insight.category,
          insightText: insight.insight
        });
      }
      setPosts(newPosts);
    } catch (error) {
      alert(`Error generating posts: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleUpdatePost = (index: number, text: string) => {
    setPosts(prev => prev.map((post, i) =>
      i === index ? { ...post, text } : post
    ));
  };

  const handleRegeneratePost = async (index: number) => {
    const post = posts[index];
    setRegeneratingIndex(index);

    try {
      const newText = await regeneratePost(apiKey, post.insightText, post.category);
      handleUpdatePost(index, newText);
    } catch (error) {
      alert(`Error regenerating post: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setRegeneratingIndex(null);
    }
  };

  const selectedCount = insights.filter(i => i.selected).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <div className="sticky top-0 bg-gradient-to-br from-slate-50 to-slate-100 pb-6 z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            Velaxis Insight Engine
          </h1>
          <p className="text-slate-600">
            Turn Limitless transcripts into X-worthy content
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <label className="block text-sm font-medium text-slate-900 mb-2">
              OpenAI API Key
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-slate-500 mt-2">
              Your API key stays in your browser, never sent anywhere except OpenAI
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <label className="block text-sm font-medium text-slate-900 mb-2">
              Transcript
            </label>
            <textarea
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder="Paste your Limitless pendant transcript here..."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              style={{ minHeight: '250px' }}
            />
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="mt-4 w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Analyze Transcript'
              )}
            </button>
          </div>

          {insights.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Insights
              </h2>
              <div className="space-y-3 mb-4">
                {insights.map((insight, index) => (
                  <InsightCard
                    key={index}
                    insight={insight}
                    onToggle={() => handleToggleInsight(index)}
                  />
                ))}
              </div>
              <button
                onClick={handleGeneratePosts}
                disabled={isGenerating || selectedCount === 0}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
              >
                {isGenerating ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Generating...
                  </>
                ) : (
                  `Generate Posts ${selectedCount > 0 ? `(${selectedCount} selected)` : ''}`
                )}
              </button>
            </div>
          )}

          {posts.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Generated Posts
              </h2>
              <div className="space-y-4">
                {posts.map((post, index) => (
                  <PostCard
                    key={index}
                    post={post}
                    onUpdate={(text) => handleUpdatePost(index, text)}
                    onRegenerate={() => handleRegeneratePost(index)}
                    isRegenerating={regeneratingIndex === index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
