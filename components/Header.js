export default function Header() {
    return (
      <header className="text-center py-10">
        {/* Profile Picture */}
        <img 
          src="/images/profile-pic.jpeg" 
          alt="Profile Picture" 
          className="w-32 h-32 rounded-full mx-auto mb-4" 
        />
        
        {/* Name and Info */}
        <h1 className="text-3xl font-bold mb-2">Amritesh Singh</h1>
        <p className="text-lg text-gray-600">B.Tech CSE | Full-Stack Developer | Software Testing</p>
      </header>
    );
  }
  