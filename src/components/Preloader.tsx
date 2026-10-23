import React from "react";
import InlineScript from "./ui/InlineScript";

/**
 * Cinematic splash screen (first visit per browser session, ~2.4s):
 * a gold thread draws across a dark screen, the emblem glows in, the name
 * reveals letter by letter, then the screen splits open (top up, bottom down)
 * to reveal the page.
 *
 * Pure CSS (only opacity/transform, GPU-friendly), so it can't hang or wait on
 * JavaScript. It always removes itself, and is skipped for reduced motion.
 */
const NAME = "SOOTRADHARA";

const css = `
#sd-splash{position:fixed;inset:0;z-index:100;pointer-events:auto;
  animation:sdGone 0s linear 2.45s forwards}
#sd-splash .sd-half{position:absolute;left:0;right:0;height:50.5%;background:#14120F;will-change:transform}
#sd-splash .sd-top{top:0;animation:sdUp .85s cubic-bezier(.77,0,.18,1) 1.55s forwards}
#sd-splash .sd-bot{bottom:0;animation:sdDown .85s cubic-bezier(.77,0,.18,1) 1.55s forwards}
#sd-splash .sd-top::after,#sd-splash .sd-bot::before{content:"";position:absolute;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,#D4AF37 30%,#F7E7A6 50%,#D4AF37 70%,transparent);opacity:0;
  animation:sdFade .3s ease 1.45s forwards}
#sd-splash .sd-top::after{bottom:0}
#sd-splash .sd-bot::before{top:0}
#sd-splash .sd-vignette{position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(ellipse at center,rgba(212,175,55,.14) 0%,rgba(20,18,15,0) 55%);
  animation:sdOut .4s ease 1.45s forwards}
#sd-splash .sd-stage{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;
  animation:sdStageOut .5s cubic-bezier(.4,0,.2,1) 1.35s forwards}
#sd-splash .sd-thread{position:absolute;top:50%;left:0;right:0;height:1px;margin-top:-.5px;
  background:linear-gradient(90deg,transparent 0%,rgba(212,175,55,.15) 15%,#D4AF37 50%,rgba(212,175,55,.15) 85%,transparent 100%);
  transform:scaleX(0);animation:sdDraw 1s cubic-bezier(.65,0,.35,1) .05s forwards}
#sd-splash .sd-orb{position:relative;width:96px;height:96px;margin-bottom:-14px;z-index:1}
#sd-splash .sd-glow{position:absolute;inset:-40px;border-radius:50%;
  background:radial-gradient(circle,rgba(212,175,55,.45) 0%,rgba(212,175,55,0) 65%);
  opacity:0;transform:scale(.6);animation:sdGlow 1.2s cubic-bezier(.22,1,.36,1) .2s forwards}
#sd-splash .sd-ring{position:absolute;inset:-10px;border-radius:50%;border:1px solid rgba(212,175,55,.5);
  opacity:0;transform:scale(.7);animation:sdRing 1.2s cubic-bezier(.22,1,.36,1) .3s forwards}
#sd-splash img{position:relative;width:96px;height:96px;object-fit:contain;opacity:0;transform:scale(.85);
  animation:sdIn .8s cubic-bezier(.22,1,.36,1) .25s forwards}
#sd-splash .sd-name{position:relative;z-index:1;margin-top:40px;display:flex;
  font-family:var(--font-cormorant),Georgia,serif;font-size:clamp(22px,4.2vw,34px);letter-spacing:.38em;
  color:#F7E7A6;padding-left:.38em;text-shadow:0 0 24px rgba(212,175,55,.35)}
#sd-splash .sd-name span{display:inline-block;opacity:0;transform:translateY(60%);
  animation:sdLetter .7s cubic-bezier(.22,1,.36,1) forwards}
#sd-splash .sd-tag{margin-top:14px;font-size:10px;letter-spacing:.42em;text-transform:uppercase;color:rgba(255,255,255,.5);
  opacity:0;animation:sdFade .6s ease .95s forwards;text-align:center;padding:0 16px}
@keyframes sdDraw{to{transform:scaleX(1)}}
@keyframes sdIn{to{opacity:1;transform:none}}
@keyframes sdGlow{60%{opacity:1}to{opacity:.7;transform:scale(1)}}
@keyframes sdRing{to{opacity:1;transform:scale(1)}}
@keyframes sdLetter{to{opacity:1;transform:none}}
@keyframes sdFade{to{opacity:1}}
@keyframes sdOut{to{opacity:0}}
@keyframes sdStageOut{to{opacity:0;transform:scale(1.04)}}
@keyframes sdUp{to{transform:translateY(-101%)}}
@keyframes sdDown{to{transform:translateY(101%)}}
@keyframes sdGone{to{visibility:hidden;pointer-events:none}}
.pl-skip #sd-splash{display:none}
@media (prefers-reduced-motion:reduce){#sd-splash{display:none}}
`;

export default function Preloader() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <link rel="preload" as="image" href="/sootradhara-emblem-sm.png" />
      {/* Runs before first paint: skip the intro if it was already shown this session */}
      <InlineScript html="try{if(sessionStorage.getItem('sd-intro')){document.documentElement.classList.add('pl-skip')}else{sessionStorage.setItem('sd-intro','1')}}catch(e){}" />
      <div id="sd-splash" aria-hidden="true">
        <div className="sd-half sd-top" />
        <div className="sd-half sd-bot" />
        <div className="sd-vignette" />
        <div className="sd-stage">
          <span className="sd-thread" />
          <div className="sd-orb">
            <span className="sd-glow" />
            <span className="sd-ring" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sootradhara-emblem-sm.png" alt="" width={96} height={96} />
          </div>
          <p className="sd-name">
            {NAME.split("").map((ch, i) => (
              <span key={i} style={{ animationDelay: `${0.45 + i * 0.045}s` }}>
                {ch}
              </span>
            ))}
          </p>
          <p className="sd-tag">Holding every thread of your digital growth</p>
        </div>
      </div>
    </>
  );
}
