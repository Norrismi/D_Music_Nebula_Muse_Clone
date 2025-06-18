
import { useState } from 'react';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  if (!user) return null;

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-cosmic-pink/20 rounded-full hover:bg-cosmic-pink/30 transition-colors duration-300"
      >
        <User className="w-4 h-4 text-cosmic-white" />
        <span className="text-cosmic-white text-sm font-montserrat">
          {user.user_metadata?.first_name || user.email?.split('@')[0]}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-cosmic-white rounded-lg shadow-lg border border-cosmic-pink/30 z-50">
          <div className="p-3 border-b border-cosmic-pink/20">
            <p className="text-sm font-montserrat text-cosmic-black">
              {user.user_metadata?.first_name} {user.user_metadata?.last_name}
            </p>
            <p className="text-xs text-cosmic-black/60">{user.email}</p>
          </div>
          
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-cosmic-black hover:bg-cosmic-pink/10 transition-colors duration-300"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
