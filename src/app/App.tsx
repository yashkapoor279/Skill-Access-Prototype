import { motion } from 'motion/react';
import { 
  Gamepad2, Globe, WifiOff, BarChart3, Headphones, 
  AlertCircle, Languages, Users, BookOpen,
  Download, RefreshCw, TrendingUp, Smartphone,
  Zap, Target, Building2, School, Heart,
  GraduationCap, Ear, UserCheck, HandHeart
} from 'lucide-react';
import { Button } from './components/Button';
import { FeatureCard } from './components/FeatureCard';
import { ProblemCard } from './components/ProblemCard';
import { StepCard } from './components/StepCard';
import { StatCounter } from './components/StatCounter';
import { UseCaseCard } from './components/UseCaseCard';
import { Footer } from './components/Footer';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white overflow-x-hidden">
      {/* Circuit Pattern Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h80M10 30h80M10 50h80M10 70h80M10 90h80M10 10v80M30 10v80M50 10v80M70 10v80M90 10v80" 
                    stroke="currentColor" strokeWidth="0.5" fill="none"/>
              <circle cx="10" cy="10" r="2" fill="currentColor"/>
              <circle cx="50" cy="30" r="2" fill="currentColor"/>
              <circle cx="70" cy="50" r="2" fill="currentColor"/>
              <circle cx="30" cy="70" r="2" fill="currentColor"/>
              <circle cx="90" cy="90" r="2" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-6"
              >
                🚀 Transforming Rural Education
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Gamified STEM Learning.
                </span>
                <br />
                <span className="text-white">Accessible Anywhere.</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Empowering rural students with offline-first, multilingual education.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Explore Platform</Button>
                <Button variant="secondary">Partner With Us</Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">250M+</div>
                  <div className="text-sm text-gray-400">Students in India</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">70%</div>
                  <div className="text-sm text-gray-400">Rural Population</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">100%</div>
                  <div className="text-sm text-gray-400">Offline Ready</div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/20 hover:shadow-[0_0_50px_rgba(6,182,212,0.3)] transition-all duration-500">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1623863568368-69e4cbe6cc0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwdGFibGV0fGVufDF8fHx8MTc3MDkwOTY5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students learning with tablets"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-cyan-500/90 to-blue-600/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-cyan-400/30"
              >
                <div className="flex items-center gap-3">
                  <Gamepad2 className="text-white" size={32} />
                  <div>
                    <div className="text-white font-bold">Gamified</div>
                    <div className="text-cyan-100 text-sm">Interactive Learning</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-indigo-600/90 to-purple-600/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-indigo-400/30"
              >
                <div className="flex items-center gap-3">
                  <WifiOff className="text-white" size={32} />
                  <div>
                    <div className="text-white font-bold">Offline First</div>
                    <div className="text-indigo-100 text-sm">Works Anywhere</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-20 px-6 bg-slate-950/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Problem</span> We're Solving
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Rural students face significant barriers to quality STEM education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-red-500/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/flagged/photo-1574098335395-18cf525e45d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGVkdWNhdGlvbiUyMGluZGlhJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MDkwOTY5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Rural classroom"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              </div>
            </motion.div>

            {/* Right - Problem Cards */}
            <div className="space-y-4">
              <ProblemCard 
                icon={<WifiOff size={32} />}
                title="Limited Internet Connectivity in rural areas"
                delay={0.1}
              />
              <ProblemCard 
                icon={<Languages size={32} />}
                title="Language Barriers - English-only content"
                delay={0.2}
              />
              <ProblemCard 
                icon={<Users size={32} />}
                title="Teacher Resource Constraints"
                delay={0.3}
              />
              <ProblemCard 
                icon={<AlertCircle size={32} />}
                title="Low Engagement in STEM subjects"
                delay={0.4}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Solution – <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SkillAccess</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive platform designed specifically for rural India's needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Gamepad2 size={32} />}
              title="Gamified Mini-Games & Quizzes"
              description="Board-aligned curriculum transformed into engaging interactive experiences"
              delay={0.1}
            />
            <FeatureCard
              icon={<Globe size={32} />}
              title="Multilingual Content"
              description="Available in Hindi, English, and regional languages for better accessibility"
              delay={0.2}
            />
            <FeatureCard
              icon={<WifiOff size={32} />}
              title="Offline-First Technology"
              description="Learn anytime, sync progress when internet is available"
              delay={0.3}
            />
            <FeatureCard
              icon={<BarChart3 size={32} />}
              title="Teacher Dashboard"
              description="Real-time analytics to track student progress and engagement"
              delay={0.4}
            />
            <FeatureCard
              icon={<Headphones size={32} />}
              title="Audio + Text Support"
              description="Accessible learning for students with different learning preferences"
              delay={0.5}
            />
            <FeatureCard
              icon={<BookOpen size={32} />}
              title="STEM-First Curriculum"
              description="Focus on Science, Technology, Engineering & Mathematics for grades 6-12"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 px-6 bg-slate-950/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-400">Simple, effective, and designed for everyone</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Lines */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-30"></div>
            
            <StepCard
              number={1}
              icon={<Download size={32} className="text-white" />}
              title="Download App"
              description="Install SkillAccess on any Android device"
              delay={0.1}
            />
            <StepCard
              number={2}
              icon={<BookOpen size={32} className="text-white" />}
              title="Learn Offline"
              description="Access gamified content without internet"
              delay={0.2}
            />
            <StepCard
              number={3}
              icon={<RefreshCw size={32} className="text-white" />}
              title="Sync Progress"
              description="Automatic sync when connected to internet"
              delay={0.3}
            />
            <StepCard
              number={4}
              icon={<TrendingUp size={32} className="text-white" />}
              title="Track & Improve"
              description="Monitor progress and celebrate achievements"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Feasibility Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Real India</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8"
            >
              <Smartphone className="text-green-400 mb-4" size={48} />
              <h3 className="text-2xl mb-4 text-white">Low-Cost Device Support</h3>
              <p className="text-gray-300 mb-4">Works seamlessly on affordable Android devices available in rural markets</p>
              <div className="flex items-center gap-2 text-green-400">
                <Zap size={20} />
                <span>Optimized for devices under ₹5,000</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-8"
            >
              <Zap className="text-blue-400 mb-4" size={48} />
              <h3 className="text-2xl mb-4 text-white">Lightweight & Fast</h3>
              <p className="text-gray-300 mb-4">Low graphics, high interactivity designed for low bandwidth environments</p>
              <div className="flex items-center gap-2 text-blue-400">
                <Target size={20} />
                <span>App size &lt; 50MB</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-2xl p-8"
            >
              <WifiOff className="text-purple-400 mb-4" size={48} />
              <h3 className="text-2xl mb-4 text-white">Offline-First Architecture</h3>
              <p className="text-gray-300 mb-4">All content cached locally, sync only when needed</p>
              <div className="flex items-center gap-2 text-purple-400">
                <RefreshCw size={20} />
                <span>Works 100% offline</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-2xl p-8"
            >
              <BarChart3 className="text-orange-400 mb-4" size={48} />
              <h3 className="text-2xl mb-4 text-white">Scalable STEM Platform</h3>
              <p className="text-gray-300 mb-4">Board-aligned content for grades 6-12, easily expandable</p>
              <div className="flex items-center gap-2 text-orange-400">
                <BookOpen size={20} />
                <span>1000+ interactive lessons</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="relative py-20 px-6 bg-slate-950/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sustainable & <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Scalable</span>
            </h2>
            <p className="text-xl text-gray-400">Multiple revenue streams for long-term impact</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-800/30 to-blue-900/30 border border-indigo-500/30 rounded-2xl p-6 text-center hover:border-indigo-500/60 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            >
              <Building2 className="text-indigo-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl mb-3 text-white">Government Partnerships</h3>
              <p className="text-gray-400 text-sm">NEP 2020, Digital India initiatives</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-800/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-6 text-center hover:border-purple-500/60 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            >
              <Heart className="text-purple-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl mb-3 text-white">CSR Funding</h3>
              <p className="text-gray-400 text-sm">Corporate social responsibility deployments</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-800/30 to-teal-900/30 border border-cyan-500/30 rounded-2xl p-6 text-center hover:border-cyan-500/60 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            >
              <School className="text-cyan-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl mb-3 text-white">Freemium Model</h3>
              <p className="text-gray-400 text-sm">Premium features for urban schools</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-800/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-6 text-center hover:border-green-500/60 transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
            >
              <HandHeart className="text-green-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl mb-3 text-white">NGO Collaborations</h3>
              <p className="text-gray-400 text-sm">Joint programs with education-focused NGOs</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who We <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-xl text-gray-400">Designed for diverse learning needs</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <UseCaseCard
              icon={<GraduationCap size={48} />}
              title="Students (Grades 6-12)"
              delay={0.1}
            />
            <UseCaseCard
              icon={<Ear size={48} />}
              title="Deaf / Hearing-Impaired Students"
              delay={0.2}
            />
            <UseCaseCard
              icon={<UserCheck size={48} />}
              title="Teachers"
              delay={0.3}
            />
            <UseCaseCard
              icon={<School size={48} />}
              title="Rural Schools"
              delay={0.4}
            />
            <UseCaseCard
              icon={<HandHeart size={48} />}
              title="NGOs & CSR Initiatives"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* PhET Simulation Section */}
      <section className="relative py-20 px-6 bg-slate-950/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powered by <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">PhET Simulations</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Interactive science and math simulations from University of Colorado Boulder
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-3xl p-8 max-w-5xl mx-auto"
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-cyan-500/30 mb-6">
              <iframe
                src="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html"
                width="100%"
                height="100%"
                className="w-full h-full"
                title="PhET Circuit Construction Kit"
                allowFullScreen
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-cyan-400 font-bold text-2xl mb-2">150+</div>
                <div className="text-gray-400">Interactive Simulations</div>
              </div>
              <div>
                <div className="text-cyan-400 font-bold text-2xl mb-2">Free</div>
                <div className="text-gray-400">Open Source & Accessible</div>
              </div>
              <div>
                <div className="text-cyan-400 font-bold text-2xl mb-2">Offline</div>
                <div className="text-gray-400">Works Without Internet</div>
              </div>
            </div>

            <p className="text-center text-gray-400 mt-6">
              PhET simulations are integrated into our platform for hands-on STEM learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Driving <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">Educational Equity</span>
            </h2>
            <p className="text-xl text-gray-400">Measurable impact at scale</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <StatCounter end={250} suffix="M+" label="School students in India" />
            <StatCounter end={70} suffix="%" label="Rural population" />
            <StatCounter end={100} suffix="K+" label="Target users in Year 1" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-3xl p-8 text-center"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDkwOTY5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Diverse students learning together"
              className="w-full max-w-4xl mx-auto rounded-2xl mb-8"
            />
            <h3 className="text-3xl mb-4 text-white">Every Student Deserves Quality STEM Education</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              SkillAccess bridges the urban-rural divide, making world-class STEM education 
              accessible to millions of students across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-y border-cyan-500/20">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Education</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us in empowering millions of rural students with gamified, offline-first STEM learning
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary">Get Started</Button>
              <Button variant="secondary">Schedule a Demo</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}