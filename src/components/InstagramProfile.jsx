import React, { useState, useEffect } from 'react';

const Navigation = ({ currentPage, onNavigate }) => {
  return (
    <div className="w-full py-4" style={{backgroundColor: '#DCDCDC'}}>
      <div className="max-w-6xl mx-auto px-8">
        <nav className="flex justify-center space-x-8">
     <button 
  onClick={() => onNavigate('home')}
  className={`font-medium transition-colors duration-200 ${
    currentPage === 'home' 
      ? 'text-black underline' 
      : 'text-black hover:text-gray-600'
  }`}
  style={{
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none'
  }}
>
  Home
</button>
          <button 
            onClick={() => onNavigate('make-me-do-anything')}
            className={`font-medium px-4 py-2 rounded-lg ${
              currentPage === 'make-me-do-anything' 
                ? 'text-black underline' 
                : 'text-black'
            }`}
            style={{
              backgroundColor: currentPage === 'make-me-do-anything' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
              border: 'none',
              outline: 'none',
              transition: 'all 0.3s ease',
              boxShadow: currentPage === 'make-me-do-anything' ? '0 0 15px rgba(255, 255, 255, 0.6)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 'make-me-do-anything') {
                e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 'make-me-do-anything') {
                e.target.style.boxShadow = 'none';
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            Make Me Do Anything
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className={`font-medium px-4 py-2 rounded-lg ${
              currentPage === 'about' 
                ? 'text-black underline' 
                : 'text-black'
            }`}
            style={{
              backgroundColor: currentPage === 'about' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
              border: 'none',
              outline: 'none',
              transition: 'all 0.3s ease',
              boxShadow: currentPage === 'about' ? '0 0 15px rgba(255, 255, 255, 0.6)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 'about') {
                e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 'about') {
                e.target.style.boxShadow = 'none';
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            About
          </button>
        </nav>
      </div>
    </div>
  );
};

const InstagramProfile = ({ onNavigate }) => {
  const [profile, setProfile] = useState({
    username: 'username',
    fullName: 'Your Name',
    bio: 'Your bio goes here. Add a short description about yourself.',
    postsCount: 0,
    followersCount: 0,
    followingCount: 0,
    profileImage: '/Users/grao@ideo.com/Documents/Entire History Final Files/instagram-app/public/charlienothings_circle.gif',
    posts: []
  });
  
  const [currentBucket, setCurrentBucket] = useState('entirehistoryofyou');
  const [allPosts, setAllPosts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const buckets = [
    { 
      id: 'entirehistoryofyou', 
      label: 'Pathway 1',
      bio: 'Grishma works as a designer in Europe, publishes her first novel, earns sailing certifications, and returns to the U.S. to continue in design. She later marries, raises two children, mentors others, and writes a second novel. In retirement, she focuses on writing, travel, and music, and dies at age 87 during a solo sailing expedition in the Pacific Ocean',
      description: 'The beginning of our digital journey'
    },
    { 
      id: 'entirehistoryofyou2', 
      label: 'Pathway 2',
      bio: 'Grishma moves to Mexico City, creates experimental art, and gains underground recognition for Neural Lovers. After her sister\'s sudden death, she produces a groundbreaking installation, then retreats to Kyoto. Later, she launches a mentorship program in India and publishes a controversial memoir. She disappears during an Arctic residency and is confirmed dead at 43, fueling speculation and global memorials.',
      description: 'Diving deeper into the narrative'
    },
    { 
      id: 'entirehistoryofyou3', 
      label: 'Pathway 3',
      bio: 'Grishma moves to Bangalore and starts a life of crime - she begins making fake documents to help marginalized people access services. She builds a quiet network, later shifting to teaching design. She marries an older man, and in retirement, she curates a magazine and lives in Mumbai. She dies in her sleep in her mid-50s.',
      description: 'Where past and present converge'
    },
    { 
      id: 'entirehistoryofyou4', 
      label: '📄 History 4',
      bio: 'The final chapter in our exploration of human experience through the lens of technology.',
      description: 'The completion of the circle'
    }
  ];

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setIsLoading(true);
        console.log('Loading initial bucket data...');
        await loadBucketData(currentBucket);
        setIsLoading(false);
      } catch (err) {
        setError(`Failed to load profile data: ${err.message}`);
        setIsLoading(false);
        console.error('Error fetching profile data:', err);
      }
    };
    fetchProfileData();
  }, []);

  const loadBucketData = async (bucketId) => {
    try {
      console.log(`Loading data for bucket: ${bucketId}`);
      
      if (allPosts[bucketId]) {
        console.log(`Data for ${bucketId} already loaded`);
        const currentBucketInfo = buckets.find(bucket => bucket.id === bucketId) || buckets[0];
        setProfile(prev => ({
  ...prev,
  bio: currentBucketInfo.bio,
  postsCount: allPosts[bucketId].length,
  profileImage: '/Users/grao@ideo.com/Documents/Entire History Final Files/instagram-app/public/charlienothings_circle.gif'
}));
        return;
      }
      
      const response = await fetch(`https://mbhlpgi12i.execute-api.us-east-2.amazonaws.com/prod/profile?bucket=${bucketId}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch ${bucketId}: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(`Data received for ${bucketId}:`, data.posts?.length, 'posts');
      
      setAllPosts(prev => ({
        ...prev,
        [bucketId]: data.posts || []
      }));
      
      if (data.posts && data.posts.length > 0) {
        console.log(`Sample URLs for ${bucketId}:`, data.posts.slice(0, 3).map(post => post.imageUrl));
      }
      
      const currentBucketInfo = buckets.find(bucket => bucket.id === bucketId) || buckets[0];
      
      setProfile({
  username: data.username,
  fullName: data.fullName,
  bio: currentBucketInfo.bio,
  followersCount: data.followersCount,
  followingCount: data.followingCount,
  profileImage: '/charlienothings_circle.gif',
  postsCount: data.posts?.length || 0
});
      
    } catch (err) {
      console.error(`Error loading bucket ${bucketId}:`, err);
      setAllPosts(prev => ({
        ...prev,
        [bucketId]: []
      }));
    }
  };

  const shuffleBucket = async () => {
    const availableBuckets = buckets.filter(bucket => 
      bucket.id === 'entirehistoryofyou' || 
      bucket.id === 'entirehistoryofyou2' ||
      bucket.id === 'entirehistoryofyou3'
    );
    
    const currentIndex = availableBuckets.findIndex(bucket => bucket.id === currentBucket);
    const nextIndex = (currentIndex + 1) % availableBuckets.length;
    const nextBucket = availableBuckets[nextIndex];
    
    console.log(`Shuffling from ${currentBucket} to ${nextBucket.id}`);
    
    setCurrentBucket(nextBucket.id);
    await loadBucketData(nextBucket.id);
  };

  const getCurrentPosts = () => {
    return allPosts[currentBucket] || [];
  };

  const getCurrentBucketInfo = () => {
    return buckets.find(bucket => bucket.id === currentBucket) || buckets[0];
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center" style={{backgroundColor: '#DCDCDC'}}>
        <Navigation currentPage="home" onNavigate={onNavigate} />
        <div className="flex justify-center items-center h-96">Loading profile...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 bg-gray-50 flex flex-col items-center overflow-auto" style={{backgroundColor: '#DCDCDC'}}>
        <Navigation currentPage="home" onNavigate={onNavigate} />
        <div className="text-red-500 text-center p-4">{error}</div>
      </div>
    );
  }

  return (
  <div className="fixed inset-0 bg-gray-50 flex flex-col items-center overflow-auto" style={{backgroundColor: '#DCDCDC'}}>
    <Navigation currentPage="home" onNavigate={onNavigate} />
      
      {/* Header Section */}
      <div className="w-full h-full bg-gray-50 p-8" style={{
         paddingTop: '400px',
  paddingBottom: '32px',
    backgroundImage: 'url("/entirehistory_logo.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
        
        <div className="text-center">
          {/* <h1 className="text-4xl font-light mb-4 tracking-wide text-black">
            The Entire History of You
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal">
            Alternate lives
          </p> */}
          <div className="mt-6">
            <button
              onClick={shuffleBucket}
              className="bg-black text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Shuffle lives
            </button>
          </div>
        </div>
      </div>

      {/* Profile Container */}
      <div className="max-w-2xl w-full bg-white shadow-lg mx-4 mb-8 rounded-lg">
        <div className="bg-gray-50 py-4 text-center border-b border-gray-200">
          <span className="font-medium text-gray-700">{getCurrentBucketInfo().label}</span>
          <span className="ml-2 text-gray-500">
            ({getCurrentPosts().length} photos)
          </span>
        </div>
        
        <div className="p-4 py-8 flex flex-col md:flex-row border-b border-gray-300">
          <div className="flex justify-center md:w-1/4 mb-4 md:mb-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-gray-300">
              <img 
                src={profile.profileImage} 
                alt={profile.username} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-3/4 md:pl-8">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <h1 className="text-xl font-semibold mr-4">{profile.username}</h1>
              {/*<button className="mt-2 md:mt-0 px-4 py-1 bg-blue-500 text-white font-semibold rounded text-sm">
                Follow
              </button>*/}
            </div>
            
            <div className="flex justify-center md:justify-start space-x-4 my-4">
              <div><span className="font-semibold">{profile.postsCount}</span> posts</div>
              <div><span className="font-semibold">{profile.followersCount}</span> followers</div>
              <div><span className="font-semibold">{profile.followingCount}</span> following</div>
            </div>
            
            <div className="text-sm">
              <div className="font-semibold">{profile.fullName}</div>
              <p className="whitespace-pre-line">{profile.bio}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 py-4">
          {getCurrentPosts().map(post => (
            <div 
              key={post.id} 
              className="aspect-square overflow-hidden relative group cursor-pointer" 
              onClick={() => {
                setSelectedPost(post);
                setShowModal(true);
              }}
            >
              <img 
                src={post.imageUrl} 
                alt={`Post ${post.id}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100">
                <div className="text-white flex space-x-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {post.likes}
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {post.comments}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {getCurrentPosts().length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <div className="text-4xl mb-4">📷</div>
            <p>No posts in this gallery yet</p>
          </div>
        )}
      </div>

      {showModal && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-full overflow-auto">
            <div className="flex justify-end p-2">
              <button 
                onClick={() => {
                  setShowModal(false);
                  setSelectedPost(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="md:flex">
              <div className="md:w-7/12 bg-black flex items-center justify-center">
                <img 
                  src={selectedPost.imageUrl} 
                  alt={`Post ${selectedPost.id}`} 
                  className="w-full h-auto max-h-96 md:max-h-screen object-contain"
                />
              </div>
              
              <div className="md:w-5/12 p-4 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src={profile.profileImage} 
                      alt={profile.username} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{profile.username}</div>
                    <div className="text-xs text-gray-500">File: {selectedPost.filename}</div>
                  </div>
                  <div className="ml-auto text-xs text-gray-500">
                    {new Date(selectedPost.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                
                <div className="mb-4 overflow-y-auto flex-grow">
                  <p className="text-sm">
                    <span className="font-semibold mr-2">{profile.username}</span>
                    {selectedPost.caption}
                  </p>
                </div>
                
                <div className="mt-auto border-t pt-3">
                  <div className="flex space-x-4 text-sm">
                    <div>
                      <span className="font-semibold">{selectedPost.likes}</span> likes
                    </div>
                    <div>
                      <span className="font-semibold">{selectedPost.comments}</span> comments
                    </div>
                    <div className="text-gray-400 text-xs flex items-center">
                      Posted on {new Date(selectedPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstagramProfile;