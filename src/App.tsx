import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { AIPromptEngineer } from './components/AIPromptEngineer';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <TechStack />
      <AIPromptEngineer />
      <Contact />
    </div>
  );
}
