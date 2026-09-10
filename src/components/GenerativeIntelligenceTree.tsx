"use client";

import { useEffect, useRef } from "react";

interface Branch {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  depth: number;
  maxDepth: number;
  isUp: boolean;
  children: Branch[];
}

interface Leaf {
  x: number;
  y: number;
  size: number;
  alpha: number;
  phase: number;
  speed: number;
}

interface Traveler {
  currentBranch: Branch;
  progress: number;
  speed: number;
  reset: (rootBranches: Branch[]) => void;
  update: (ctx: CanvasRenderingContext2D, rootBranches: Branch[], getOffset: (x: number, y: number, d: number) => {x: number, y: number}) => void;
}

export function GenerativeIntelligenceTree() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set high-res canvas
    const dpr = window.devicePixelRatio || 1;
    const width = 600;
    const height = 600;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const cx = width / 2;
    const cy = height / 2;

    const branches: Branch[] = [];
    const rootBranches: Branch[] = [];
    const leaves: Leaf[] = [];

    // Generative Tree Builder
    function buildTree(
      x: number, 
      y: number, 
      angle: number, 
      length: number, 
      depth: number, 
      maxDepth: number, 
      isUp: boolean,
      parentArray: Branch[]
    ) {
      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;
      
      const branch: Branch = { x1: x, y1: y, x2: endX, y2: endY, depth, maxDepth, isUp, children: [] };
      parentArray.push(branch);
      branches.push(branch);
      
      if (depth < maxDepth) {
        // Randomly 2 or 3 splits
        const numChildren = Math.random() > 0.4 ? 2 : 3;
        
        for (let i = 0; i < numChildren; i++) {
          // Wider spread at lower depths, tighter spread at higher depths
          const spread = (Math.PI / 2.2) * (1 - depth * 0.15);
          const angleOffset = (Math.random() - 0.5) * spread;
          const newLength = length * (0.65 + Math.random() * 0.2);
          
          buildTree(endX, endY, angle + angleOffset, newLength, depth + 1, maxDepth, isUp, branch.children);
        }
      } else {
        // Create leaf particles at the ends
        const numLeaves = Math.floor(Math.random() * 4) + 2;
        for(let i=0; i<numLeaves; i++) {
          leaves.push({
            x: endX + (Math.random()-0.5) * 15, 
            y: endY + (Math.random()-0.5) * 15,
            size: Math.random() * 1.2 + 0.3,
            alpha: Math.random() * 0.5 + 0.1,
            phase: Math.random() * Math.PI * 2,
            speed: 0.02 + Math.random() * 0.03
          });
        }
      }
    }

    // Initialize Tree Structure
    // UPWARD canopy
    const numUpRoots = 4;
    for(let i=0; i<numUpRoots; i++) {
      const angle = -Math.PI/2 + (Math.random() - 0.5) * 1.5;
      buildTree(cx, cy, angle, 60 + Math.random() * 20, 0, 5, true, rootBranches);
    }
    
    // DOWNWARD roots
    const numDownRoots = 4;
    for(let i=0; i<numDownRoots; i++) {
      const angle = Math.PI/2 + (Math.random() - 0.5) * 1.5;
      buildTree(cx, cy, angle, 60 + Math.random() * 20, 0, 5, false, rootBranches);
    }

    // Information Travelers (particles moving along branches)
    const travelers: Traveler[] = [];
    const numTravelers = 30;

    class InfoTraveler implements Traveler {
      currentBranch!: Branch;
      progress!: number;
      speed!: number;
      
      constructor() {
        this.reset(rootBranches);
        this.progress = Math.random(); // start randomly along the path initially
      }
      
      reset(roots: Branch[]) {
        this.currentBranch = roots[Math.floor(Math.random() * roots.length)];
        this.progress = 0;
        this.speed = 0.005 + Math.random() * 0.015;
      }
      
      update(ctx: CanvasRenderingContext2D, roots: Branch[], getOffset: (x: number, y: number, d: number) => {x: number, y: number}) {
        this.progress += this.speed;
        
        if (this.progress >= 1) {
          if (this.currentBranch.children.length > 0) {
            this.currentBranch = this.currentBranch.children[Math.floor(Math.random() * this.currentBranch.children.length)];
            this.progress = 0;
          } else {
            this.reset(roots);
          }
        }
        
        const o1 = getOffset(this.currentBranch.x1, this.currentBranch.y1, this.currentBranch.depth);
        const o2 = getOffset(this.currentBranch.x2, this.currentBranch.y2, this.currentBranch.depth + 1);
        
        const startX = this.currentBranch.x1 + o1.x;
        const startY = this.currentBranch.y1 + o1.y;
        const endX = this.currentBranch.x2 + o2.x;
        const endY = this.currentBranch.y2 + o2.y;
        
        const x = startX + (endX - startX) * this.progress;
        const y = startY + (endY - startY) * this.progress;
        
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = '#34d399';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#2dd4bf';
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    for(let i=0; i<numTravelers; i++) {
      travelers.push(new InfoTraveler());
    }

    // Animation Loop
    let animationFrameId: number;

    function render() {
      if (!ctx) return;
      
      const time = Date.now();

      // Fade canvas to transparent for trailing effect without painting a solid color block
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; // Alpha controls trail length
      ctx.fillRect(0, 0, width, height);
      
      // Reset to lighter blending for glowing particles and lines
      ctx.globalCompositeOperation = 'lighter';

      // Organic movement offset function
      function getOffset(x: number, y: number, depth: number) {
        if (depth === 0) return { x: 0, y: 0 };
        const amplitude = depth * 1.5; // Outer nodes move more
        const freqX = x * 0.02;
        const freqY = y * 0.02;
        return {
          x: Math.sin(time * 0.0005 + freqX) * amplitude,
          y: Math.cos(time * 0.0006 + freqY) * amplitude,
        };
      }

      // Draw all static branches (now dynamic!)
      ctx.lineWidth = 0.5;
      for (const b of branches) {
        const o1 = getOffset(b.x1, b.y1, b.depth);
        const o2 = getOffset(b.x2, b.y2, b.depth + 1);
        
        const currentX1 = b.x1 + o1.x;
        const currentY1 = b.y1 + o1.y;
        const currentX2 = b.x2 + o2.x;
        const currentY2 = b.y2 + o2.y;

        ctx.beginPath();
        ctx.moveTo(currentX1, currentY1);
        ctx.lineTo(currentX2, currentY2);
        // fade branches as they go deeper
        const opacity = 0.4 - (b.depth * 0.06);
        ctx.strokeStyle = `rgba(45, 212, 191, ${Math.max(0.05, opacity)})`;
        ctx.stroke();
        
        // Draw small nodes at branch intersections
        if (b.depth < b.maxDepth) {
           ctx.beginPath();
           ctx.arc(currentX2, currentY2, 0.8, 0, Math.PI * 2);
           ctx.fillStyle = `rgba(16, 185, 129, ${opacity + 0.2})`;
           ctx.fill();
        }
      }

      // Draw leaves (particle cloud at edges)
      for (const leaf of leaves) {
        leaf.phase += leaf.speed;
        const currentAlpha = leaf.alpha + Math.sin(leaf.phase) * 0.2;
        
        const offset = getOffset(leaf.x, leaf.y, 6); // Max depth + 1
        
        ctx.beginPath();
        ctx.arc(leaf.x + offset.x, leaf.y + offset.y, leaf.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45, 212, 191, ${Math.max(0, currentAlpha)})`;
        ctx.fill();
      }

      // Draw central core node
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#eefdf7';
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#2dd4bf';
      ctx.fill();
      ctx.shadowBlur = 0;
      
      // Central core pulse
      const pulseTime = Date.now() * 0.002;
      ctx.beginPath();
      ctx.arc(cx, cy, 8 + Math.sin(pulseTime) * 3, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.4)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Update and draw travelers
      for (const t of travelers) {
        t.update(ctx, rootBranches, getOffset);
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center pointer-events-none">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* The Generative Canvas */}
      <canvas ref={canvasRef} className="relative z-10 opacity-90" />
    </div>
  );
}
