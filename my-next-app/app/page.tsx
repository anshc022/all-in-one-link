import { WarpBackground } from "@/components/ui/warp-background";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <WarpBackground 
        className="fixed inset-0 border-none bg-transparent p-0"
        beamsPerSide={6}
        beamSize={5}
        beamDelayMax={3}
        beamDelayMin={0.2}
        beamDuration={5}
        gridColor="rgba(255, 255, 255, 0.05)"
      >
        <div></div>
      </WarpBackground>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full backdrop-blur-lg bg-black/30 rounded-3xl p-8 border border-white/30 shadow-2xl">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden ring-4 ring-white/30 shadow-xl">
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQG9kYWAVAWV0Q/profile-displayphoto-scale_400_400/B56ZlMX9JKG4Ag-/0/1757922973966?e=1762992000&v=beta&t=AIfoMGTjx5xue4vcWP1jIpkDod54yqjh4DYXQtjGYUE"
                alt="Pranshu Chourasia Profile"
                width={96}
                height={96}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Pranshu Chourasia
            </h1>
            <p className="text-gray-400">
              Full Stack Developer & Entrepreneur
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/pranshu-chourasia-615428275/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/30 hover:bg-white/10"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">LinkedIn</h3>
                <p className="text-sm text-gray-400">Professional Profile</p>
              </div>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Portfolio Website */}
            <a
              href="https://www.pranshudev.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/30 hover:bg-white/10"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Portfolio</h3>
                <p className="text-sm text-gray-400">pranshudev.xyz</p>
              </div>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Startup Website */}
            <a
              href="https://www.apanaghr.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/30 hover:bg-white/10"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Apana Ghr</h3>
                <p className="text-sm text-gray-400">Startup Project</p>
              </div>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Fasal Seva App */}
            <a
              href="https://www.fasalseva.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/30 hover:bg-white/10"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Fasal Seva</h3>
                <p className="text-sm text-gray-400">Agricultural App</p>
              </div>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/anshc022" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/30 hover:bg-white/10"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">GitHub</h3>
                <p className="text-sm text-gray-400">Code Repository</p>
              </div>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-sm text-gray-400">
            Connect with me across all platforms ✨
          </div>
        </div>
      </div>
    </div>
  );
}
