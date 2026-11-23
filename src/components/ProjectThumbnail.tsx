// src/components/ProjectThumbnail.tsx
import React from 'react';
import { 
  Activity, 
  Brain, 
  Sparkles, 
  ShieldCheck, 
  Search, 
  MapPin, 
  Star, 
  MessageSquare, 
  Bot, 
  Terminal, 
  Scan, 
  Maximize2,
  Cpu,
  Workflow
} from 'lucide-react';

interface Props {
  projectTitle: string;
}

export const ProjectThumbnail: React.FC<Props> = ({ projectTitle }) => {
  // 1. Lung Cancer Prediction System
  if (projectTitle.toLowerCase().includes('lung cancer')) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#0a0c10] select-none flex flex-col justify-between p-4">
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #bef264 1px, transparent 0)`,
            backgroundSize: '16px 16px'
          }} 
        />
        {/* Neon glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-lime-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top bar HUD */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
            </span>
            <span className="text-[10px] font-mono tracking-wider text-lime-400 uppercase font-semibold">
              DIAGNOSTIC AI MODEL v2.4
            </span>
          </div>
          <span className="text-[9px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
            ACCURACY: 94.8%
          </span>
        </div>

        {/* Center visualization: ECG wave + Biomarker metrics */}
        <div className="relative z-10 my-auto py-2">
          {/* Simulated waveform graphic */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <Activity size={14} className="text-lime-400 animate-pulse" />
              <span className="text-[11px] font-mono font-medium">Risk Metric Radar</span>
            </div>
            <span className="text-[10px] font-mono text-lime-400/90 font-bold">LOW RISK CLUSTER</span>
          </div>

          {/* Graphical stats & bars */}
          <div className="bg-black/50 border border-white/10 rounded-xl p-3 backdrop-blur-sm space-y-2">
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                <span>Random Forest Classifier</span>
                <span className="text-white font-bold">96.2%</span>
              </div>
              <div className="w-full bg-zinc-800/80 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-lime-500 to-emerald-400 h-full rounded-full w-[96.2%]" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                <span>Support Vector Machine (SVM)</span>
                <span className="text-white font-bold">92.4%</span>
              </div>
              <div className="w-full bg-zinc-800/80 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-lime-400/70 to-cyan-400 h-full rounded-full w-[92.4%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tags */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-400 border-t border-white/5 pt-2">
          <div className="flex items-center gap-1 text-zinc-300">
            <Brain size={12} className="text-lime-400" />
            <span>Neural Feature Weights</span>
          </div>
          <span className="text-lime-400/80">CONFIDENCE: HIGH</span>
        </div>
      </div>
    );
  }

  // 2. Service Connect
  if (projectTitle.toLowerCase().includes('service connect')) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#090b10] select-none flex flex-col justify-between p-4">
        {/* Glow & map line pattern */}
        <div className="absolute -top-12 -right-10 w-44 h-44 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-8 w-36 h-36 bg-lime-400/15 rounded-full blur-2xl pointer-events-none" />

        {/* Top marketplace navigation mockup */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-400" />
            <span className="text-[10px] font-mono tracking-wider text-blue-400 uppercase font-semibold">
              LOCAL MARKETPLACE PLATFORM
            </span>
          </div>
          <div className="flex items-center gap-1 text-[9px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
            <MapPin size={10} className="text-lime-400" />
            <span>Kochi, 3.2 km</span>
          </div>
        </div>

        {/* Center UI mockup: Provider Cards / Map Ping */}
        <div className="relative z-10 my-auto space-y-2 py-1">
          {/* Active provider card mockup */}
          <div className="bg-[#121620]/90 border border-white/10 rounded-xl p-2.5 backdrop-blur-md shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-xs shadow-md">
                SC
              </div>
              <div>
                <div className="text-[11px] font-bold text-white flex items-center gap-1">
                  Verified Technician <ShieldCheck size={12} className="text-lime-400" />
                </div>
                <div className="flex items-center gap-1 text-[9px] text-zinc-400">
                  <Star size={10} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-white font-semibold">4.9</span> (128 reviews) • On Demand
                </div>
              </div>
            </div>
            <span className="text-[9px] font-semibold text-lime-400 bg-lime-400/10 border border-lime-400/20 px-2 py-1 rounded-md">
              Available
            </span>
          </div>

          {/* Quick category search bar mockup */}
          <div className="bg-black/40 border border-white/5 rounded-lg px-2.5 py-1.5 flex items-center justify-between text-[10px] text-zinc-400">
            <div className="flex items-center gap-2">
              <Search size={11} className="text-zinc-500" />
              <span className="text-zinc-300">Electrical, Plumbing, Home Care...</span>
            </div>
            <span className="text-[9px] text-lime-400 font-mono">NEARBY (14)</span>
          </div>
        </div>

        {/* Bottom indicators */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-400 border-t border-white/5 pt-2">
          <span>Real-time Socket Sync</span>
          <span className="text-emerald-400">● 100% SECURE ESCROW</span>
        </div>
      </div>
    );
  }

  // 3. AI-Powered College Virtual Assistant
  if (projectTitle.toLowerCase().includes('assistant') || projectTitle.toLowerCase().includes('chatbot')) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#0c0d12] select-none flex flex-col justify-between p-4">
        {/* Glows */}
        <div className="absolute -top-10 -left-10 w-36 h-36 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-lime-400/15 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-2">
            <Bot size={13} className="text-lime-400" />
            <span className="text-[10px] font-mono tracking-wider text-lime-400 uppercase font-semibold">
              CAMPUS COGNITIVE BOT
            </span>
          </div>
          <span className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> ONLINE
          </span>
        </div>

        {/* Center: Interactive Chat simulation */}
        <div className="relative z-10 my-auto space-y-2 py-1">
          {/* User inquiry bubble */}
          <div className="flex justify-end">
            <div className="bg-white/10 border border-white/10 text-zinc-200 text-[10px] px-3 py-1.5 rounded-2xl rounded-tr-none max-w-[85%]">
              What are the eligibility criteria for the CS AI specialization?
            </div>
          </div>

          {/* Bot reply bubble */}
          <div className="flex justify-start items-start gap-1.5">
            <div className="w-5 h-5 rounded-full bg-lime-400/20 border border-lime-400/30 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles size={10} className="text-lime-400" />
            </div>
            <div className="bg-black/60 border border-lime-400/20 text-zinc-200 text-[10px] p-2.5 rounded-2xl rounded-tl-none shadow-md space-y-1">
              <p className="text-zinc-300">
                Minimum 60% in B.Tech / Higher Secondary with Math & Physics. Direct enrollment open till Nov 30.
              </p>
              <div className="flex items-center gap-2 pt-1 border-t border-white/5 text-[9px] text-lime-400 font-mono">
                <span>[ADMISSIONS PORTAL LINKED]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-400 border-t border-white/5 pt-2">
          <div className="flex items-center gap-1.5">
            <MessageSquare size={11} className="text-lime-400" />
            <span>FastAPI • NLP Engine</span>
          </div>
          <span className="text-zinc-500 font-mono">LATENCY: 42ms</span>
        </div>
      </div>
    );
  }

  // 4. Edge Detection System
  if (projectTitle.toLowerCase().includes('edge detection') || projectTitle.toLowerCase().includes('vision')) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#07090d] select-none flex flex-col justify-between p-4">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-2">
            <Scan size={13} className="text-lime-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-wider text-lime-400 uppercase font-semibold">
              OPENCV MATRIX PIPELINE
            </span>
          </div>
          <span className="text-[9px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
            SOBEL & CANNY FILTER
          </span>
        </div>

        {/* Center: Image comparison matrix split view */}
        <div className="relative z-10 my-auto py-1">
          <div className="grid grid-cols-2 gap-2 bg-black/60 border border-white/10 p-2 rounded-xl backdrop-blur-sm">
            {/* Original image representation */}
            <div className="relative h-20 rounded-lg bg-zinc-900 border border-white/5 overflow-hidden flex flex-col items-center justify-center p-2 text-center group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-500 opacity-60 mb-1" />
              <span className="text-[9px] font-mono text-zinc-400 uppercase">Input RGB</span>
              <span className="absolute top-1 left-1 text-[8px] font-mono text-zinc-500">RAW</span>
            </div>

            {/* Edge detected matrix output */}
            <div className="relative h-20 rounded-lg bg-[#05070a] border border-lime-400/30 overflow-hidden flex flex-col items-center justify-center p-2 text-center shadow-[inset_0_0_15px_rgba(190,242,100,0.1)]">
              {/* Neon edge contours */}
              <div className="w-10 h-10 rounded-full border-2 border-dashed border-lime-400/80 mb-1 animate-spin" style={{ animationDuration: '10s' }} />
              <span className="text-[9px] font-mono text-lime-400 font-bold uppercase">Edges Isolated</span>
              <span className="absolute top-1 right-1 text-[8px] font-mono text-lime-400 bg-lime-400/10 px-1 rounded">
                GRADIENT
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-400 border-t border-white/5 pt-2">
          <div className="flex items-center gap-1.5">
            <Cpu size={12} className="text-lime-400" />
            <span>Kernel: 3x3 Convolution</span>
          </div>
          <span className="text-lime-400/90 font-mono">FPS: 60</span>
        </div>
      </div>
    );
  }

  // Fallback default graphic
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-[#1b1f27] to-[#0c0d11] p-4 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="text-[10px] font-mono text-lime-400 uppercase font-semibold">PROJECT PREVIEW</span>
        <Workflow size={14} className="text-zinc-500" />
      </div>
      <div className="flex items-center justify-center my-auto">
        <span className="text-xs font-mono text-zinc-400">{projectTitle}</span>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
