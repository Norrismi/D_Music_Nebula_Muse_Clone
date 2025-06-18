
import { useState } from 'react';
import { CircleX, Mail, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [step, setStep] = useState<'social' | 'email' | 'signup'>('social');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signInWithGoogle, signInWithTwitter, signInWithFacebook, signInWithEmail, signUp } = useAuth();

  if (!isOpen) return null;

  const handleSocialLogin = async (provider: 'google' | 'twitter' | 'facebook') => {
    setLoading(true);
    setError('');
    try {
      if (provider === 'google') await signInWithGoogle();
      if (provider === 'twitter') await signInWithTwitter();
      if (provider === 'facebook') await signInWithFacebook();
    } catch (err: any) {
      setError(err.message || 'Login failed');
    }
    setLoading(false);
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const { error } = await signInWithEmail(email, password);
    if (error) {
      setError(error.message);
    } else {
      onClose();
    }
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const { error } = await signUp(email, password, {
      first_name: firstName,
      last_name: lastName
    });
    
    if (error) {
      setError(error.message);
    } else {
      setStep('social');
      setError('');
      alert('Please check your email to confirm your account');
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cosmic-black bg-opacity-95 backdrop-blur-sm">
      <div className="relative z-10 bg-cosmic-white rounded-2xl p-8 max-w-md w-full mx-4 border border-cosmic-pink/30 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-cosmic-black hover:text-cosmic-red transition-colors duration-300"
        >
          <CircleX className="w-6 h-6" />
        </button>

        {step === 'social' && (
          <div className="text-center">
            <h2 className="font-great-vibes text-3xl text-cosmic-black mb-6">Welcome to Her Melodic Cosmos</h2>
            
            <div className="space-y-4 mb-6">
              <Button
                onClick={() => handleSocialLogin('google')}
                disabled={loading}
                className="w-full bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>

              <Button
                onClick={() => handleSocialLogin('facebook')}
                disabled={loading}
                className="w-full bg-[#1877F2] text-white hover:bg-[#166FE5] flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Continue with Facebook
              </Button>

              <Button
                onClick={() => handleSocialLogin('twitter')}
                disabled={loading}
                className="w-full bg-[#1DA1F2] text-white hover:bg-[#1a8cd8] flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Continue with Twitter
              </Button>
            </div>

            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-cosmic-black/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-cosmic-white text-cosmic-black/60">or</span>
              </div>
            </div>

            <Button
              onClick={() => setStep('email')}
              variant="outline"
              className="w-full border-cosmic-pink text-cosmic-black hover:bg-cosmic-pink/10 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Continue with Email
            </Button>

            <p className="text-sm text-cosmic-black/60 mt-4">
              Don't have an account?{' '}
              <button
                onClick={() => setStep('signup')}
                className="text-cosmic-pink hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        )}

        {step === 'email' && (
          <div>
            <button
              onClick={() => setStep('social')}
              className="text-sm text-cosmic-black/60 hover:text-cosmic-black mb-4"
            >
              ← Back
            </button>
            
            <h2 className="font-great-vibes text-3xl text-cosmic-black mb-6 text-center">Sign In</h2>
            
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
              
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cosmic-black/60"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cosmic-pink to-cosmic-red text-white"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <p className="text-sm text-cosmic-black/60 mt-4 text-center">
              Don't have an account?{' '}
              <button
                onClick={() => setStep('signup')}
                className="text-cosmic-pink hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        )}

        {step === 'signup' && (
          <div>
            <button
              onClick={() => setStep('social')}
              className="text-sm text-cosmic-black/60 hover:text-cosmic-black mb-4"
            >
              ← Back
            </button>
            
            <h2 className="font-great-vibes text-3xl text-cosmic-black mb-6 text-center">Create Account</h2>
            
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cosmic-black/60"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cosmic-pink to-cosmic-red text-white"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>

            <p className="text-sm text-cosmic-black/60 mt-4 text-center">
              Already have an account?{' '}
              <button
                onClick={() => setStep('email')}
                className="text-cosmic-pink hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
