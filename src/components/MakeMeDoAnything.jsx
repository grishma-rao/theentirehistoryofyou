import React, { useState } from 'react';
import { fal } from "@fal-ai/client"; 

const MakeMeDoAnything = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    age: '',
    location: '',
    activity: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateImage = async () => {
  if (!formData.age || !formData.location || !formData.activity) {
    setError('Please fill in all fields');
    return;
  }

  setIsLoading(true);
  setError(null);
  setResult(null);

  try {
    // Construct the prompt
    const prompt = `${formData.age}-year old charlienothing is doing ${formData.activity} while living in ${formData.location}`;
    console.log('Generated prompt:', prompt);

    // Configure fal.ai client (using the imported fal)
    fal.config({
      credentials: import.meta.env.VITE_FAL_KEY || import.meta.env.REACT_APP_FAL_KEY
    });

    console.log('Calling fal.ai API...');

    // Call fal.ai API
    const result = await fal.subscribe("fal-ai/flux-lora", {
      input: {
        prompt: prompt,
        image_size: "landscape_4_3",
        num_inference_steps: 28,
        guidance_scale: 3.5,
        num_images: 1,
        enable_safety_checker: true,
        output_format: "jpeg",
        loras: [
      {
        path: "https://v3.fal.media/files/lion/2jR77d6QDnRBQpagLp_UG_pytorch_lora_weights.safetensors",
        scale: 1.0
      }
        ]
      },
      logs: true,
      onQueueUpdate: (update) => {
        console.log('Queue status:', update.status);
        if (update.status === "IN_PROGRESS") {
          update.logs?.forEach(log => console.log('Generation log:', log.message));
        }
      },
    });

    console.log('API call successful:', result);
    console.log('Result data:', result.data);
    
    setResult(result.data);
    setIsLoading(false);

  } catch (err) {
    console.error('Generation failed:', err);
    setError(`Failed to generate image: ${err.message}`);
    setIsLoading(false);
  }
};

  const goBack = () => {
    onNavigate('home');
  };

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col items-center overflow-auto" style={{backgroundColor: '#DCDCDC'}}>
  {/* Navigation */}
  <div className="w-full bg-gray-50 py-4" style={{backgroundColor: '#DCDCDC'}}>
    <div className="max-w-6xl mx-auto px-8">
      <nav className="flex justify-center space-x-8">
        <button 
          onClick={() => onNavigate('home')}
          className="text-black font-medium px-4 py-2 rounded-lg"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            transition: 'all 0.3s ease',
            boxShadow: 'none'
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = 'none';
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          Home
        </button>
        <button 
          className="text-black font-medium transition-colors duration-200 underline"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none'
          }}
        >
          Make Me Do Anything
        </button>
        <button 
          onClick={() => onNavigate('about')}
          className="text-black font-medium px-4 py-2 rounded-lg"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            transition: 'all 0.3s ease',
            boxShadow: 'none'
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = 'none';
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          About
        </button>
      </nav>
    </div>
  </div>

{/* Full Width Logo Header */}
<div className="w-full bg-gray-50" style={{
   paddingTop: '400px',
   paddingBottom: '32px',
   backgroundImage: 'url("/makemedoanything.png")',
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   backgroundRepeat: 'no-repeat'
}}>
</div>

      {/* Header Section */}
      <div className="w-full bg-gray-50 p-8 py-8" style={{backgroundColor: '#DCDCDC'}}>
        <div className="text-center">
          {/*<h1 className="text-4xl font-light mb-4 tracking-wide text-black">
            Make Me Do Anything
          </h1>*/}
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal">
            Generate Grishma in any kind of alternate reality. Fill in the details below and click generate.
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-2xl w-full bg-white shadow-lg mx-4 mb-8 rounded-lg">
        <div className="p-8">
          {/* Form */}
          <div className="space-y-6">
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                How old is Grishma?
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="e.g., 25"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Where is she located?
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., Tokyo, a forest cabin, Mars"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-2">
                What is she doing?
              </label>
              <input
                type="text"
                id="activity"
                name="activity"
                value={formData.activity}
                onChange={handleInputChange}
                placeholder="e.g., painting a masterpiece, climbing mountains, time traveling"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              onClick={generateImage}
              disabled={isLoading}
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
            >
              {isLoading ? 'Generating your reality...' : 'Generate Image'}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {(isLoading || result) && (
          <div className="border-t border-gray-200 p-8 bg-gray-50">
            {isLoading && (
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black mb-4"></div>
                <p className="text-gray-600">Creating your alternate reality...</p>
                <p className="text-sm text-gray-500 mt-2">This usually takes 30-60 seconds</p>
              </div>
            )}

            {result && (
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Your Generated Reality</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm min-h-[600px]">
             {result.images && result.images.length > 0 ? (
               <div className="w-full flex justify-center min-h-[500px]">
                <img 
  src={result.images[0].url} 
  alt="Generated image" 
className="max-w-full h-auto rounded-lg shadow-md"
style={{ minHeight: '500px', maxHeight: 'none' }}
onLoad={() => console.log('Image loaded successfully')}
  onError={(e) => {
console.error('Image failed to load:', e);
console.log('Image URL:', result.images[0].url);
}}
/>
            </div>
            ) : (
                    <div className="text-gray-500 p-8">
                      <p>No image generated. Please try again.</p>
                      <pre className="text-xs mt-2 bg-gray-100 p-2 rounded">
                        {JSON.stringify(result, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => {
                    setResult(null);
                    setFormData({ age: '', location: '', activity: '' });
                  }}
                  className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  Create Another
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MakeMeDoAnything;