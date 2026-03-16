import React from 'react'

// Pure CSS ambient blobs — no JS animation overhead at all.
// Drifting is handled entirely by @keyframes in a <style> tag so
// the React/Framer Motion runtime is never touched after mount.
export default function AmbientLight() {
  return (
    <>
      <style>{`
        @keyframes drift1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(12px,20px)} }
        @keyframes drift2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-14px,-22px)} }
        @keyframes drift3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(10px,16px)} }
        @keyframes drift4 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(14px,-18px)} }
        @keyframes drift5 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-10px,14px)} }
        @keyframes drift6 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-16px,20px)} }
        .amb { position:absolute; border-radius:50%; pointer-events:none; will-change:transform; }
      `}</style>

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Large deep-purple — top left */}
        <div className="amb" style={{
          width:700, height:500, top:'-10%', left:'-15%',
          background:'radial-gradient(ellipse at center, rgba(76,29,149,0.5), transparent 70%)',
          filter:'blur(140px)', animation:'drift1 40s ease-in-out infinite',
        }} />
        {/* Violet — right */}
        <div className="amb" style={{
          width:550, height:550, top:'25%', left:'65%',
          background:'radial-gradient(ellipse at center, rgba(124,58,237,0.38), transparent 70%)',
          filter:'blur(120px)', animation:'drift2 50s ease-in-out infinite 8s',
        }} />
        {/* Gold hint — centre bottom */}
        <div className="amb" style={{
          width:400, height:300, top:'70%', left:'35%',
          background:'radial-gradient(ellipse at center, rgba(180,120,40,0.2), transparent 70%)',
          filter:'blur(110px)', animation:'drift3 45s ease-in-out infinite 15s',
        }} />
        {/* Indigo — bottom left */}
        <div className="amb" style={{
          width:480, height:480, top:'60%', left:'-8%',
          background:'radial-gradient(ellipse at center, rgba(79,70,229,0.28), transparent 70%)',
          filter:'blur(130px)', animation:'drift4 55s ease-in-out infinite 5s',
        }} />
        {/* Soft purple — top right */}
        <div className="amb" style={{
          width:320, height:320, top:'5%', left:'75%',
          background:'radial-gradient(ellipse at center, rgba(168,85,247,0.25), transparent 70%)',
          filter:'blur(100px)', animation:'drift5 38s ease-in-out infinite 20s',
        }} />
        {/* Deep violet — far right mid */}
        <div className="amb" style={{
          width:600, height:400, top:'40%', left:'80%',
          background:'radial-gradient(ellipse at center, rgba(109,40,217,0.25), transparent 70%)',
          filter:'blur(150px)', animation:'drift6 60s ease-in-out infinite 12s',
        }} />
      </div>
    </>
  )
}
